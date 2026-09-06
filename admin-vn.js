/* ============================================================
   편집기 — 「모의면접」 시트
   admin.html 의 전역(data, save, toast, openModal, closeModal, deepCopy, esc)을 그대로 쓴다.
   data.interview 를 표(시트) 형태로 고치고, 바뀔 때마다 save() 로 작업본에 넣는다.
   내보내기는 admin.html 의 buildDataJs() 가 data.interview 를 함께 써 준다.
   미리보기: vn.js 에 작업본을 넣고 그 자리에서 연다 (저장 안 해도 됨).
   ============================================================ */
(function(){
"use strict";

const CSS = `
#ivPanel{position:fixed;inset:0;z-index:90;background:var(--bg-0);color:var(--text-1);display:flex;flex-direction:column;
  font-family:var(--font)}
#ivPanel[hidden]{display:none}
#ivPanel .iv-head{display:flex;align-items:center;gap:8px;padding:10px 16px;border-bottom:1px solid var(--border-1);
  background:var(--bg-1);flex-wrap:wrap}
#ivPanel .iv-head h2{margin:0 14px 0 0;font-size:15px;font-weight:700}
#ivPanel .iv-tabs{display:flex;gap:2px;background:var(--bg-2);border:1px solid var(--border-1);border-radius:var(--radius-1);padding:2px}
#ivPanel .iv-tabs button{border:0;background:transparent;color:var(--text-2);padding:5px 12px;border-radius:8px;cursor:pointer;
  font:600 12.5px var(--font)}
#ivPanel .iv-tabs button.on{background:var(--accent-dim);color:var(--accent)}
#ivPanel .iv-search{width:220px}
#ivPanel .iv-sp{flex:1 1 auto}
#ivPanel .iv-body{flex:1 1 auto;overflow:auto;padding:14px 16px 60px}
#ivPanel .iv-note{font-size:12px;color:var(--text-3);margin:0 0 10px;line-height:1.6}
#ivPanel table.iv{width:100%;border-collapse:separate;border-spacing:0;font-size:12.5px;min-width:1100px}
#ivPanel table.iv th{position:sticky;top:-14px;z-index:2;background:var(--bg-1);color:var(--text-3);font-weight:700;font-size:11px;
  letter-spacing:.04em;text-align:left;padding:8px 6px;border-bottom:1px solid var(--border-2);white-space:nowrap}
#ivPanel table.iv td{padding:6px 5px;border-bottom:1px solid var(--border-1);vertical-align:top}
#ivPanel table.iv tr:hover td{background:var(--bg-2)}
#ivPanel table.iv tr.bad td{background:rgba(224,120,92,.08)}
#ivPanel table.iv input[type=text],#ivPanel table.iv textarea,#ivPanel table.iv select{padding:5px 7px;font-size:12.5px;line-height:1.5}
#ivPanel table.iv textarea{resize:vertical;min-height:34px}
#ivPanel table.iv input[type=number]{width:52px;background:var(--bg-2);color:var(--text-1);border:1px solid var(--border-1);
  border-radius:var(--radius-1);padding:5px 6px;font:12.5px var(--font)}
#ivPanel .iv-idx{color:var(--text-3);font-weight:700;text-align:right;padding-right:8px!important;white-space:nowrap}
#ivPanel .iv-fl{font-size:11px;color:var(--text-3);margin-top:3px;line-height:1.5}
#ivPanel .iv-fl .miss{color:var(--danger);font-weight:700}
#ivPanel .iv-ops{white-space:nowrap}
#ivPanel .iv-ops button{width:24px;height:24px;border-radius:6px;border:1px solid var(--border-1);background:var(--bg-2);color:var(--text-2);
  cursor:pointer;font-size:12px;margin-right:2px}
#ivPanel .iv-ops button:hover{background:var(--bg-3);color:var(--text-1)}
#ivPanel .iv-ops button.del:hover{background:var(--danger);color:#fff;border-color:var(--danger)}
#ivPanel .iv-card{background:var(--bg-1);border:1px solid var(--border-1);border-radius:var(--radius-2);padding:14px 16px;margin-bottom:14px;max-width:900px}
#ivPanel .iv-card h3{margin:0 0 10px;font-size:13px;color:var(--text-2)}
#ivPanel .iv-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:10px}
#ivPanel .iv-badge{display:inline-block;padding:2px 7px;border-radius:6px;background:var(--accent-dim);color:var(--accent);font-size:11px;font-weight:700}
#ivPanel textarea.iv-tsv{width:100%;min-height:220px;font-family:ui-monospace,Consolas,monospace;font-size:12px;white-space:pre}
`;

/* ---------- 기본 데이터 ---------- */
function blank(){
  return { me:{ name:(data.profile && data.profile.name) || "", art:"banner.png" }, interviewer:"면접관",
    intro:["안녕하세요. 편하게 무엇이든 물어봐 주세요."],
    endings:[{ min:70, grade:"S", title:"합격 통보", lines:["감사합니다. 함께 일하게 되기를 기대하겠습니다."] },
             { min:35, grade:"A", title:"2차 면접 진출", lines:["짧은 시간이었지만 제 기획 방식은 전달됐기를 바랍니다."] },
             { min:0,  grade:"B", title:"서류 통과", lines:["다음에 다시 찾아 주시면 더 많은 이야기를 드리겠습니다."] }],
    topics:[{ id:"intro", name:"자기소개", icon:"🙋", hint:"저라는 사람이 궁금하다면" }],
    questions:[] };
}
function iv(){
  if (!data.interview || typeof data.interview !== "object") data.interview = blank();
  const d = data.interview;
  d.me = d.me || { name:"", art:"banner.png" }; d.intro = d.intro || []; d.endings = d.endings || [];
  d.topics = d.topics || []; d.questions = d.questions || [];
  return d;
}
let saveT = null;
function changed(){ clearTimeout(saveT); saveT = setTimeout(() => { save(); }, 250); }

/* 문서 목록 (관련 문서 선택용) — "섹션-그룹-문서" */
function docOptions(){
  const out = [];
  (data.units || []).forEach((u, ui) => (u.mids || []).forEach((m, mi) => (m.lessons || []).forEach((l, li) =>
    out.push({ v:`${ui}-${mi}-${li}`, t:`${u.title} / ${m.title} / ${l.title}` }))));
  return out;
}
const P_SEP = /\n\s*\n/;
const joinP = a => (a || []).join("\n\n");
const splitP = s => String(s || "").split(P_SEP).map(x => x.trim()).filter(Boolean);
const parseIds = s => String(s || "").split(/[,\s]+/).map(x => x.trim()).filter(Boolean);
function autosize(ta){ const n = String(ta.value || "").split("\n").length; ta.rows = Math.min(16, Math.max(2, n + 1)); }
function newId(topic){
  const d = iv(); const used = new Set(d.questions.map(q => q.id));
  const pre = (String(topic || "q").charAt(0) || "q").toLowerCase();
  for (let i = 1; i < 1000; i++){ const id = pre + String(i).padStart(2, "0"); if (!used.has(id)) return id; }
  return "q" + Date.now();
}

/* ---------- 패널 ---------- */
let panel = null, tab = "sheet", query = "";
function build(){
  if (panel) return panel;
  const st = document.createElement("style"); st.textContent = CSS; document.head.appendChild(st);
  panel = document.createElement("div"); panel.id = "ivPanel"; panel.hidden = true;
  panel.innerHTML = `
    <div class="iv-head">
      <h2>🎙 모의면접</h2>
      <div class="iv-tabs">
        <button type="button" data-tab="sheet">질문 시트</button>
        <button type="button" data-tab="topics">주제</button>
        <button type="button" data-tab="texts">인사 · 마무리</button>
      </div>
      <input type="text" class="iv-search" id="ivSearch" placeholder="질문·답변 검색">
      <span class="iv-sp"></span>
      <button class="btn sm" id="ivAdd">+ 질문</button>
      <button class="btn sm" id="ivCopy" title="엑셀에 붙여 넣을 수 있는 탭 구분 텍스트">TSV 복사</button>
      <button class="btn sm" id="ivPaste" title="엑셀에서 복사한 표를 붙여 넣어 갱신">TSV 붙여넣기</button>
      <button class="btn sm" id="ivPreview" title="지금 작업본으로 면접을 바로 열어 봅니다">▶ 미리보기</button>
      <button class="btn sm" id="ivClose">닫기</button>
    </div>
    <div class="iv-body" id="ivBody"></div>`;
  document.body.appendChild(panel);
  panel.querySelectorAll("[data-tab]").forEach(b => b.onclick = () => { tab = b.dataset.tab; render(); });
  panel.querySelector("#ivSearch").oninput = e => { query = e.target.value.trim().toLowerCase(); if (tab === "sheet") render(); };
  panel.querySelector("#ivAdd").onclick = addQuestion;
  panel.querySelector("#ivCopy").onclick = copyTSV;
  panel.querySelector("#ivPaste").onclick = pasteTSV;
  panel.querySelector("#ivPreview").onclick = preview;
  panel.querySelector("#ivClose").onclick = close;
  return panel;
}
function open(){ build(); iv(); panel.hidden = false; render(); }
function close(){ if (panel) panel.hidden = true; clearTimeout(saveT); save(); }

function render(){
  panel.querySelectorAll("[data-tab]").forEach(b => b.classList.toggle("on", b.dataset.tab === tab));
  const body = panel.querySelector("#ivBody");
  if (tab === "sheet") renderSheet(body);
  else if (tab === "topics") renderTopics(body);
  else renderTexts(body);
}

/* ---------- 질문 시트 ---------- */
function renderSheet(body){
  const d = iv(); const ids = new Set(d.questions.map(q => q.id));
  const docs = docOptions();
  const topicOpt = t => d.topics.map(x => `<option value="${esc(x.id)}"${x.id === t ? " selected" : ""}>${esc(x.icon || "")} ${esc(x.name)}</option>`).join("")
    + (d.topics.some(x => x.id === t) ? "" : `<option value="${esc(t)}" selected>${esc(t)} (없는 주제)</option>`);
  const docOpt = v => `<option value="">— 없음 —</option>` + docs.map(o => `<option value="${o.v}"${o.v === v ? " selected" : ""}>${esc(o.t)}</option>`).join("");
  const rows = d.questions.map((q, i) => ({ q, i })).filter(({ q }) => !query ||
    (q.id + " " + q.q + " " + (q.a || []).join(" ")).toLowerCase().includes(query));
  body.innerHTML = `
    <p class="iv-note">한 행이 질문 하나입니다. <b>답변</b>은 빈 줄로 문단을 나누면 면접 화면에서 문단마다 한 번씩 넘어갑니다.
      <b>꼬리질문</b>에는 다른 질문의 ID를 쉼표로 적습니다(그 답변이 끝난 뒤 선택지로 나옴). <b>꼬리전용</b>에 체크하면 주제 목록에는 안 보이고 꼬리질문으로만 나옵니다.
      <b>점수</b>는 물었을 때 오르는 관심도입니다. 고치면 바로 작업본에 저장됩니다 — 사이트에 올리려면 위쪽 <b>💾 저장</b>.
      <span class="iv-badge">${d.questions.length}문항 · 주제 목록 ${d.questions.filter(q => !q.sub).length} · 꼬리 ${d.questions.filter(q => q.sub).length}</span></p>
    <table class="iv"><thead><tr>
      <th>#</th><th>ID</th><th style="width:130px">주제</th><th style="width:22%">질문</th><th>답변 (빈 줄 = 문단)</th>
      <th style="width:120px">꼬리질문 ID</th><th style="width:170px">관련 문서</th><th>점수</th><th>꼬리전용</th><th></th>
    </tr></thead><tbody>${rows.map(({ q, i }) => {
      const miss = (q.follow || []).filter(f => !ids.has(f));
      const fl = (q.follow || []).map(f => ids.has(f) ? esc((d.questions.find(x => x.id === f) || {}).q || "").slice(0, 28) : `<span class="miss">${esc(f)}?</span>`).join(" · ");
      return `<tr data-i="${i}"${miss.length ? ' class="bad"' : ""}>
        <td class="iv-idx">${i + 1}</td>
        <td><input type="text" data-k="id" value="${esc(q.id)}" style="width:60px"></td>
        <td><select data-k="topic">${topicOpt(q.topic)}</select></td>
        <td><textarea data-k="q" rows="2">${esc(q.q)}</textarea></td>
        <td><textarea data-k="a" rows="${Math.min(16, Math.max(2, joinP(q.a).split("\n").length + 1))}">${esc(joinP(q.a))}</textarea></td>
        <td><input type="text" data-k="follow" value="${esc((q.follow || []).join(", "))}"><div class="iv-fl">${fl || "&nbsp;"}</div></td>
        <td><select data-k="link">${docOpt(q.link || "")}</select></td>
        <td><input type="number" data-k="pts" value="${+q.pts || 0}" min="0" max="100"></td>
        <td style="text-align:center"><input type="checkbox" data-k="sub"${q.sub ? " checked" : ""}></td>
        <td class="iv-ops"><button type="button" data-op="up" title="위로">↑</button><button type="button" data-op="down" title="아래로">↓</button><button type="button" data-op="dup" title="복제">⧉</button><button type="button" class="del" data-op="del" title="삭제">✕</button></td>
      </tr>`; }).join("")}</tbody></table>
    ${rows.length ? "" : `<p class="iv-note">표시할 질문이 없습니다.</p>`}`;
  body.querySelectorAll("tr[data-i]").forEach(tr => {
    const q = d.questions[+tr.dataset.i];
    tr.querySelectorAll("[data-k]").forEach(el => {
      const k = el.dataset.k;
      el.addEventListener("input", () => {
        if (k === "a") { q.a = splitP(el.value); autosize(el); }
        else if (k === "follow") q.follow = parseIds(el.value);
        else if (k === "pts") q.pts = Math.max(0, +el.value || 0);
        else if (k === "sub") q.sub = el.checked;
        else if (k === "id"){ const v = el.value.trim(); if (v && !d.questions.some(x => x !== q && x.id === v)){ renameId(q.id, v); q.id = v; } }
        else q[k] = el.value;
        changed();
      });
      if (k === "follow" || k === "id" || k === "sub") el.addEventListener("change", () => render());
    });
    tr.querySelectorAll("[data-op]").forEach(b => b.onclick = () => rowOp(+tr.dataset.i, b.dataset.op));
  });
}
function renameId(from, to){ iv().questions.forEach(x => { x.follow = (x.follow || []).map(f => f === from ? to : f); }); }
function rowOp(i, op){
  const d = iv(), list = d.questions, q = list[i];
  if (op === "del"){ if (!confirm(`「${q.q}」 질문을 지울까요?`)) return; list.splice(i, 1); }
  else if (op === "up" && i > 0){ [list[i - 1], list[i]] = [list[i], list[i - 1]]; }
  else if (op === "down" && i < list.length - 1){ [list[i + 1], list[i]] = [list[i], list[i + 1]]; }
  else if (op === "dup"){ const c = deepCopy(q); c.id = newId(q.topic); c.q = q.q + " (복사)"; list.splice(i + 1, 0, c); }
  changed(); render();
}
function addQuestion(){
  const d = iv(); const topic = (d.topics[0] || {}).id || "intro";
  d.questions.push({ id:newId(topic), topic, q:"새 질문", a:["답변을 적어 주세요."], follow:[], sub:false, link:"", pts:5 });
  changed(); tab = "sheet"; query = ""; panel.querySelector("#ivSearch").value = ""; render();
  const body = panel.querySelector("#ivBody"); body.scrollTop = body.scrollHeight;
  const last = body.querySelector("tr[data-i]:last-child textarea[data-k=q]"); if (last){ last.focus(); last.select(); }
  toast("질문을 추가했습니다");
}

/* ---------- 주제 ---------- */
function renderTopics(body){
  const d = iv();
  const cnt = id => d.questions.filter(q => q.topic === id && !q.sub).length;
  body.innerHTML = `
    <p class="iv-note">면접 첫 화면에 나오는 주제 목록입니다. <b>ID</b>는 질문 시트의 '주제' 값과 이어지므로 바꾸면 질문도 같이 옮겨집니다. 아이콘은 이모지 하나.</p>
    <table class="iv" style="min-width:700px;max-width:900px"><thead><tr><th>#</th><th>ID</th><th>아이콘</th><th>이름</th><th>한 줄 설명</th><th>질문 수</th><th></th></tr></thead>
    <tbody>${d.topics.map((t, i) => `<tr data-i="${i}">
      <td class="iv-idx">${i + 1}</td>
      <td><input type="text" data-k="id" value="${esc(t.id)}" style="width:90px"></td>
      <td><input type="text" data-k="icon" value="${esc(t.icon || "")}" style="width:50px"></td>
      <td><input type="text" data-k="name" value="${esc(t.name)}"></td>
      <td><input type="text" data-k="hint" value="${esc(t.hint || "")}"></td>
      <td class="iv-idx">${cnt(t.id)}</td>
      <td class="iv-ops"><button type="button" data-op="up">↑</button><button type="button" data-op="down">↓</button><button type="button" class="del" data-op="del">✕</button></td>
    </tr>`).join("")}</tbody></table>
    <p style="margin-top:12px"><button class="btn sm" id="ivTopicAdd">+ 주제</button></p>`;
  body.querySelectorAll("tr[data-i]").forEach(tr => {
    const t = d.topics[+tr.dataset.i];
    tr.querySelectorAll("[data-k]").forEach(el => el.addEventListener("input", () => {
      const k = el.dataset.k;
      if (k === "id"){ const v = el.value.trim(); if (!v || d.topics.some(x => x !== t && x.id === v)) return;
        d.questions.forEach(q => { if (q.topic === t.id) q.topic = v; }); t.id = v; }
      else t[k] = el.value;
      changed();
    }));
    tr.querySelectorAll("[data-op]").forEach(b => b.onclick = () => {
      const i = +tr.dataset.i, op = b.dataset.op, L = d.topics;
      if (op === "del"){ if (cnt(t.id) && !confirm(`이 주제에 질문 ${cnt(t.id)}개가 있습니다. 주제만 지우면 그 질문들은 목록에서 안 보입니다. 지울까요?`)) return; L.splice(i, 1); }
      else if (op === "up" && i > 0) [L[i - 1], L[i]] = [L[i], L[i - 1]];
      else if (op === "down" && i < L.length - 1) [L[i + 1], L[i]] = [L[i], L[i + 1]];
      changed(); render();
    });
  });
  body.querySelector("#ivTopicAdd").onclick = () => {
    let n = d.topics.length + 1, id = "t" + n; while (d.topics.some(x => x.id === id)) id = "t" + (++n);
    d.topics.push({ id, name:"새 주제", icon:"❔", hint:"" }); changed(); render();
  };
}

/* ---------- 인사 · 마무리 ---------- */
function renderTexts(body){
  const d = iv();
  body.innerHTML = `
    <div class="iv-card"><h3>화자</h3><div class="iv-grid">
      <div class="field"><label>내 이름</label><input type="text" data-p="me.name" value="${esc(d.me.name)}"></div>
      <div class="field"><label>내 그림 파일 <span class="hint">(포트폴리오 폴더 기준 경로)</span></label><input type="text" data-p="me.art" value="${esc(d.me.art || "")}"></div>
      <div class="field"><label>질문하는 쪽 이름표</label><input type="text" data-p="interviewer" value="${esc(d.interviewer || "")}"></div>
    </div></div>
    <div class="iv-card"><h3>시작 인사 <span class="hint" style="font-weight:400">(빈 줄 = 문단)</span></h3>
      <textarea data-p="intro" rows="${Math.max(3, joinP(d.intro).split("\n").length + 1)}">${esc(joinP(d.intro))}</textarea></div>
    <div class="iv-card"><h3>마무리 (관심도 구간별) <span class="hint" style="font-weight:400">— 관심도가 '최소' 이상인 것 중 가장 높은 구간이 뜹니다. 관심도는 0~100</span></h3>
      ${d.endings.map((e, i) => `<div style="display:grid;grid-template-columns:70px 70px 1fr;gap:8px;margin-bottom:6px" data-e="${i}">
        <input type="number" data-k="min" value="${+e.min || 0}" min="0" max="100" title="최소 관심도" style="background:var(--bg-2);color:var(--text-1);border:1px solid var(--border-1);border-radius:var(--radius-1);padding:6px;font:13px var(--font)">
        <input type="text" data-k="grade" value="${esc(e.grade || "")}" placeholder="등급">
        <input type="text" data-k="title" value="${esc(e.title || "")}" placeholder="결과 제목 (예: 합격 통보)">
        <textarea data-k="lines" rows="${Math.max(2, joinP(e.lines).split("\n").length + 1)}" style="grid-column:1/4" placeholder="마무리 인사 (빈 줄 = 문단)">${esc(joinP(e.lines))}</textarea>
      </div>`).join("")}
      <p style="margin:8px 0 0"><button class="btn sm" id="ivEndAdd">+ 구간</button> <button class="btn sm" id="ivEndDel">마지막 구간 삭제</button></p>
    </div>`;
  body.querySelectorAll("[data-p]").forEach(el => el.addEventListener("input", () => {
    const p = el.dataset.p;
    if (p === "intro") d.intro = splitP(el.value);
    else if (p === "me.name") d.me.name = el.value;
    else if (p === "me.art") d.me.art = el.value;
    else d[p] = el.value;
    changed();
  }));
  body.querySelectorAll("[data-e]").forEach(box => {
    const e = d.endings[+box.dataset.e];
    box.querySelectorAll("[data-k]").forEach(el => el.addEventListener("input", () => {
      const k = el.dataset.k;
      if (k === "min") e.min = Math.max(0, Math.min(100, +el.value || 0));
      else if (k === "lines") e.lines = splitP(el.value);
      else e[k] = el.value;
      changed();
    }));
  });
  body.querySelector("#ivEndAdd").onclick = () => { d.endings.push({ min:0, grade:"C", title:"", lines:[] }); changed(); render(); };
  body.querySelector("#ivEndDel").onclick = () => { if (d.endings.length > 1){ d.endings.pop(); changed(); render(); } };
}

/* ---------- TSV (엑셀 왕복) ----------
   열: id, 주제, 꼬리전용(1/0), 점수, 질문, 답변(문단은 " ¶ " 로), 꼬리질문(쉼표), 관련문서 */
const TSV_HEAD = ["id", "topic", "sub", "pts", "question", "answer", "follow", "link"];
const P_MARK = " ¶ ";
function toTSV(){
  const d = iv();
  const cell = s => String(s == null ? "" : s).replace(/\t/g, " ").replace(/\r?\n/g, " ");
  return [TSV_HEAD.join("\t"), ...d.questions.map(q => [q.id, q.topic, q.sub ? 1 : 0, +q.pts || 0, q.q,
    (q.a || []).join(P_MARK), (q.follow || []).join(","), q.link || ""].map(cell).join("\t"))].join("\n");
}
function copyTSV(){
  const t = toTSV();
  const done = () => toast("TSV를 복사했습니다 — 엑셀·시트에 붙여 넣으세요");
  if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(t).then(done, () => fallback());
  else fallback();
  function fallback(){
    openModal("TSV 복사", `<p class="iv-note">아래 내용을 전체 선택(Ctrl+A)해 복사하세요.</p><textarea class="iv-tsv">${esc(t)}</textarea>`,
      [{ cls:"btn primary", label:"닫기", fn:closeModal }]);
    const ta = document.querySelector("#modalBody .iv-tsv"); if (ta){ ta.focus(); ta.select(); }
  }
}
function pasteTSV(){
  openModal("TSV 붙여넣기", `<p class="iv-note">엑셀·시트에서 표를 복사해 붙여 넣으세요. 첫 줄이 열 이름(id, topic, sub, pts, question, answer, follow, link)이면 그 순서를 따르고,
    없으면 이 순서로 봅니다. 답변의 문단은 <b> ¶ </b> 로 나눕니다.<br>같은 id 는 덮어쓰고, 새 id 는 추가합니다. 표에 없는 질문은 그대로 둡니다.</p>
    <textarea class="iv-tsv" id="ivTsvIn" placeholder="id\ttopic\tsub\tpts\tquestion\tanswer\tfollow\tlink"></textarea>`,
    [{ cls:"btn", label:"취소", fn:closeModal }, { cls:"btn primary", label:"적용", fn:() => {
      const txt = document.getElementById("ivTsvIn").value; const r = fromTSV(txt);
      if (!r) return toast("읽을 수 있는 행이 없습니다", true);
      closeModal(); changed(); render();
      toast(`갱신 ${r.upd}개 · 추가 ${r.add}개${r.bad ? ` · 건너뜀 ${r.bad}개` : ""}`);
    }}]);
  setTimeout(() => { const ta = document.getElementById("ivTsvIn"); if (ta) ta.focus(); }, 50);
}
function fromTSV(txt){
  const lines = String(txt || "").replace(/\r/g, "").split("\n").filter(l => l.trim());
  if (!lines.length) return null;
  let cols = TSV_HEAD.slice();
  const first = lines[0].split("\t").map(s => s.trim().toLowerCase());
  if (first.includes("id") && (first.includes("question") || first.includes("질문"))){
    cols = first.map(h => ({ "질문":"question", "답변":"answer", "주제":"topic", "점수":"pts", "꼬리질문":"follow", "꼬리전용":"sub", "관련문서":"link" }[h] || h));
    lines.shift();
  }
  const d = iv(); let upd = 0, add = 0, bad = 0;
  lines.forEach(l => {
    const c = l.split("\t"); const o = {}; cols.forEach((k, i) => o[k] = (c[i] || "").trim());
    if (!o.id || !o.question){ bad++; return; }
    const q = { id:o.id, topic:o.topic || (d.topics[0] || {}).id || "", q:o.question,
      a:String(o.answer || "").split(/\s*¶\s*/).map(s => s.trim()).filter(Boolean),
      follow:parseIds(o.follow), sub:/^(1|true|y|예|o)$/i.test(o.sub || ""), link:o.link || "", pts:+o.pts || 5 };
    const i = d.questions.findIndex(x => x.id === q.id);
    if (i >= 0){ d.questions[i] = Object.assign(d.questions[i], q); upd++; } else { d.questions.push(q); add++; }
  });
  return { upd, add, bad };
}

/* ---------- 미리보기 ---------- */
function preview(){
  if (!window.PortfolioVN) return toast("vn.js 를 불러오지 못했습니다", true);
  clearTimeout(saveT); save();
  window.PORTFOLIO_INTERVIEW = deepCopy(iv());
  window.PORTFOLIO_UNITS = data.units;
  window.PortfolioVN.open();
}

/* ---------- 연결 ---------- */
document.addEventListener("keydown", e => {
  if (!panel || panel.hidden || e.key !== "Escape") return;
  const modal = document.getElementById("overlay"), vn = document.getElementById("vn");
  if ((modal && !modal.hidden) || (vn && !vn.hidden)) return;   /* 모달·미리보기가 먼저 닫힌다 */
  close();
});
window.InterviewEditor = { open, close };
const btn = document.getElementById("interviewBtn");
if (btn) btn.onclick = open;
})();
