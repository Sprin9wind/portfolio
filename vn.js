/* ============================================================
   모의면접 — 비주얼 노벨 오버레이
   index.html 위에 전체 화면으로 뜬다. 내용은 data.js 의 window.PORTFOLIO_INTERVIEW
   (편집기의 「모의면접」 시트에서 고친다). 이 파일은 표현·진행만 담당한다.

   흐름: 타이틀 → 내 인사(intro) → 주제 선택 → 질문 선택 → 면접관 질문 → 내 답변(문단마다 클릭)
         → 꼬리질문 · 관련 문서 · 다른 질문 → … → 면접 마무리 → 엔딩(관심도 등급)
   조작: 클릭 / Space / Enter = 진행, 숫자키 = 선택지, Esc = 닫기
   저장: localStorage "pf-vn" 에 물어본 질문·관심도를 남겨 「이어하기」
   ============================================================ */
(function(){
"use strict";
const LS = "pf-vn";
const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c =>
  ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[c]));
const TYPE_MS = 16;            /* 글자 하나 찍는 간격 */

/* 데이터는 열 때마다 다시 읽는다 — 편집기(admin.html)가 작업본을 넣고 미리보기를 열 수 있게 */
let D, QS, TOPICS, byId, me, IV, ART, mainQs;
function bind(){
  D = window.PORTFOLIO_INTERVIEW;
  if (!D || !Array.isArray(D.questions)) return false;
  QS = D.questions; TOPICS = D.topics || [];
  byId = Object.fromEntries(QS.map(q => [q.id, q]));
  me = (D.me && D.me.name) || "나"; IV = D.interviewer || "면접관";
  ART = (D.me && D.me.art) || "banner.png";
  mainQs = QS.filter(q => !q.sub);
  return true;
}
if (!bind()) return;

/* ---------- 상태 ---------- */
let st = { asked: [], gauge: 0, topic: null, started: false };
function load(){ try { const r = localStorage.getItem(LS); if (r) st = Object.assign(st, JSON.parse(r)); } catch(_) {} }
function persist(){ try { localStorage.setItem(LS, JSON.stringify(st)); } catch(_) {} }
function reset(){ st = { asked: [], gauge: 0, topic: null, started: false }; persist(); }
const asked = id => st.asked.includes(id);

/* ---------- 스타일 ---------- */
const CSS = `
#vn{position:fixed;inset:0;z-index:100;font-family:var(--font,system-ui,sans-serif);color:#f4ece0;
  background:#141210;overflow:hidden;-webkit-font-smoothing:antialiased}
#vn[hidden]{display:none}
#vn *{box-sizing:border-box}
#vn .vn-bg{position:absolute;inset:0;
  background:radial-gradient(1200px 700px at 20% 110%,rgba(210,46,46,.22),transparent 60%),
             radial-gradient(900px 600px at 90% -10%,rgba(201,138,46,.18),transparent 60%),
             linear-gradient(180deg,#1b1815,#141210 60%,#0f0d0b)}
#vn .vn-bg::after{content:"";position:absolute;inset:0;opacity:.35;
  background-image:linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),
                   linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px);
  background-size:28px 28px;mask-image:radial-gradient(60% 60% at 50% 40%,#000,transparent)}
#vn .vn-top{position:absolute;left:0;right:0;top:0;height:58px;display:flex;align-items:center;gap:18px;
  padding:0 22px;background:rgba(0,0,0,.35);backdrop-filter:blur(8px);border-bottom:1px solid rgba(255,255,255,.08)}
#vn .vn-title{font-weight:900;font-size:16px;letter-spacing:-.02em;white-space:nowrap}
#vn .vn-title small{font-weight:600;font-size:12px;color:#b5aca1;margin-left:8px}
#vn .vn-gauge{display:flex;align-items:center;gap:10px;margin-left:auto;font-size:12.5px;font-weight:700;color:#b5aca1}
#vn .vn-gbar{width:160px;height:10px;border-radius:999px;background:rgba(255,255,255,.12);overflow:hidden}
#vn .vn-gbar i{display:block;height:100%;width:0;border-radius:999px;
  background:linear-gradient(90deg,#f2554d,#ffb347);transition:width .6s cubic-bezier(.16,1,.3,1)}
#vn .vn-gnum{color:#fff;min-width:28px;text-align:right}
#vn .vn-gnum.up{animation:vnPop .6s}
@keyframes vnPop{0%{transform:scale(1)}30%{transform:scale(1.35);color:#ffb347}100%{transform:scale(1)}}
#vn .vn-prog{font-size:12.5px;font-weight:700;color:#b5aca1;white-space:nowrap}
#vn .vn-prog b{color:#fff}
#vn .vn-x{width:36px;height:36px;border-radius:10px;border:1px solid rgba(255,255,255,.14);background:transparent;
  color:#f4ece0;font-size:16px;cursor:pointer}
#vn .vn-x:hover{background:rgba(255,255,255,.1)}
#vn .vn-stage{position:absolute;left:0;right:0;top:58px;bottom:0}
#vn .vn-char{position:absolute;left:4%;bottom:236px;width:min(36%,440px);
  transition:filter .35s,transform .35s,opacity .35s;filter:brightness(.55) saturate(.7);transform:translateY(6px)}
#vn .vn-char.on{filter:none;transform:translateY(0)}
#vn .vn-char img{display:block;width:100%;aspect-ratio:4/3;object-fit:cover;border-radius:18px;
  border:1px solid rgba(255,255,255,.12);box-shadow:0 30px 60px rgba(0,0,0,.5)}
#vn .vn-char .vn-tag{position:absolute;left:14px;top:-14px;padding:5px 12px;border-radius:8px;
  background:#d22e2e;color:#fffaea;font-weight:800;font-size:12.5px;letter-spacing:-.01em;
  box-shadow:0 6px 18px rgba(0,0,0,.4)}
#vn .vn-choices{position:absolute;right:4%;top:22px;bottom:236px;width:min(54%,620px);overflow:auto;
  display:flex;flex-direction:column;justify-content:flex-start;justify-content:safe center;gap:8px;padding:6px 4px;scrollbar-width:thin}
#vn .vn-choices:empty{display:none}
#vn .vn-c{display:flex;align-items:center;gap:12px;text-align:left;width:100%;padding:11px 15px;border-radius:12px;flex:0 0 auto;
  border:1px solid rgba(255,255,255,.14);background:rgba(255,255,255,.06);color:#f4ece0;cursor:pointer;
  font:600 14.5px/1.45 var(--font,system-ui,sans-serif);letter-spacing:-.01em;
  transition:background .15s,border-color .15s,transform .15s;animation:vnIn .35s both}
#vn .vn-c:nth-child(2){animation-delay:.04s}#vn .vn-c:nth-child(3){animation-delay:.08s}
#vn .vn-c:nth-child(4){animation-delay:.12s}#vn .vn-c:nth-child(5){animation-delay:.16s}
#vn .vn-c:nth-child(6){animation-delay:.2s}#vn .vn-c:nth-child(n+7){animation-delay:.24s}
@keyframes vnIn{from{opacity:0;transform:translateX(14px)}to{opacity:1;transform:none}}
#vn .vn-c:hover,#vn .vn-c:focus-visible{background:rgba(242,85,77,.18);border-color:#f2554d;transform:translateX(-3px);outline:none}
#vn .vn-c .k{flex:0 0 26px;height:26px;border-radius:7px;background:rgba(255,255,255,.1);
  display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;color:#b5aca1}
#vn .vn-c .ic{flex:0 0 auto;font-size:18px}
#vn .vn-c .t{flex:1 1 auto}
#vn .vn-c .t small{display:block;font-size:12px;font-weight:600;color:#b5aca1;margin-top:2px}
#vn .vn-c .n{flex:0 0 auto;font-size:11.5px;font-weight:700;color:#b5aca1}
#vn .vn-c.done{opacity:.55}
#vn .vn-c.done:hover{opacity:.85}
#vn .vn-c.sub{border-style:dashed}
#vn .vn-c.link{border-color:rgba(201,138,46,.6);background:rgba(201,138,46,.12)}
#vn .vn-c.key{background:#d22e2e;border-color:#d22e2e;color:#fffaea}
#vn .vn-c.key .k{background:rgba(0,0,0,.2);color:#fffaea}
#vn .vn-c.ghost{background:transparent;border-color:rgba(255,255,255,.1);color:#b5aca1}
#vn .vn-box{position:absolute;left:4%;right:4%;bottom:26px;min-height:190px;padding:26px 30px 32px;
  background:rgba(255,250,234,.97);color:#2e2c2b;border-radius:18px;
  box-shadow:0 30px 80px rgba(0,0,0,.55);cursor:pointer;animation:vnBox .4s both}
@keyframes vnBox{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}
#vn .vn-box.iv{background:rgba(46,44,43,.96);color:#f4ece0}
#vn .vn-name{position:absolute;left:22px;top:-15px;padding:6px 14px;border-radius:9px;background:#d22e2e;color:#fffaea;
  font-weight:900;font-size:13px;letter-spacing:-.01em;box-shadow:0 8px 20px rgba(0,0,0,.3)}
#vn .vn-box.iv .vn-name{background:#c98a2e;color:#1a0d0c}
#vn .vn-box.sys .vn-name{background:#5f5b56;color:#fffaea}
#vn .vn-text{font-size:17px;line-height:1.75;letter-spacing:-.01em;word-break:keep-all;min-height:3.5em}
#vn .vn-text b{font-weight:800}
#vn .vn-text .cur{display:inline-block;width:2px;height:1em;background:currentColor;vertical-align:-2px;
  margin-left:2px;animation:vnBlink .8s steps(2) infinite}
@keyframes vnBlink{to{opacity:0}}
#vn .vn-next{position:absolute;right:22px;bottom:12px;font-size:12px;font-weight:700;color:#948b80;
  animation:vnBob 1.2s ease-in-out infinite}
#vn .vn-next[hidden]{display:none}
@keyframes vnBob{50%{transform:translateY(3px)}}
#vn .vn-grade{display:inline-flex;align-items:center;gap:10px;margin:0 0 10px;padding:6px 14px;border-radius:10px;
  background:rgba(210,46,46,.12);color:#a92020;font-weight:900;font-size:14px}
#vn .vn-grade b{font-size:24px;line-height:1}
#vn .vn-info{flex:0 0 auto;padding:16px 18px;border-radius:12px;background:rgba(255,250,234,.07);border:1px solid rgba(255,255,255,.14);
  color:#f4ece0;font-size:13.5px;line-height:1.6;animation:vnIn .35s both}
#vn .vn-info .vn-grade{background:rgba(242,85,77,.22);color:#ffb3a7}
#vn .vn-hint{position:absolute;left:4%;bottom:6px;font-size:11.5px;color:#6f6a62}
@media(max-width:760px){
  #vn .vn-top{padding:0 12px;gap:10px}
  #vn .vn-title small,#vn .vn-gauge .vn-glabel{display:none}
  #vn .vn-gbar{width:90px}
  #vn .vn-char{left:12px;top:12px;bottom:auto;width:34vw;max-width:180px}
  #vn .vn-char img{aspect-ratio:1/1}
  #vn .vn-choices{left:calc(34vw + 28px);right:12px;top:12px;bottom:calc(46% + 12px);width:auto;justify-content:flex-start}
  #vn .vn-c{padding:10px 12px;font-size:13.5px}
  #vn .vn-box{left:12px;right:12px;bottom:12px;min-height:44%;padding:22px 18px 30px}
  #vn .vn-text{font-size:15px}
  #vn .vn-hint{display:none}
}`;

/* ---------- DOM ---------- */
const root = document.createElement("div");
root.id = "vn"; root.hidden = true;
root.setAttribute("role", "dialog"); root.setAttribute("aria-label", "모의면접");
root.innerHTML = `
  <div class="vn-bg"></div>
  <div class="vn-top">
    <div class="vn-title">🎙 모의면접<small class="vn-sub"></small></div>
    <div class="vn-gauge" title="면접관 관심도 — 질문할수록 오릅니다"><span class="vn-glabel">관심도</span>
      <div class="vn-gbar"><i></i></div><b class="vn-gnum">0</b></div>
    <div class="vn-prog">질문 <b>0</b>/<span class="vn-total"></span></div>
    <button class="vn-x" type="button" aria-label="닫기 (Esc)">✕</button>
  </div>
  <div class="vn-stage">
    <div class="vn-char"><img src="" alt=""><span class="vn-tag"></span></div>
    <div class="vn-choices" role="menu"></div>
    <div class="vn-box"><div class="vn-name"></div><div class="vn-text"></div><div class="vn-next">▼ 클릭 · Space</div></div>
    <div class="vn-hint">클릭 / Space / Enter 진행 · 숫자키로 선택 · Esc 닫기</div>
  </div>`;
const style = document.createElement("style"); style.textContent = CSS;
document.head.appendChild(style);
document.body.appendChild(root);
const $ = s => root.querySelector(s);
const charEl = $(".vn-char"), chEl = $(".vn-choices"), boxEl = $(".vn-box"),
      nameEl = $(".vn-name"), textEl = $(".vn-text"), nextEl = $(".vn-next"),
      gbar = $(".vn-gbar i"), gnum = $(".vn-gnum"), progEl = $(".vn-prog b");

/* ---------- 말하기 (타자 효과) ---------- */
let queue = [], after = null, typing = null;

function speak(lines, done){ queue = lines.slice(); after = done || null; setChoices([]); next(); }
function next(){
  if (typing){ finishType(); return; }
  if (!queue.length){ if (after){ const f = after; after = null; f(); } return; }
  const l = queue.shift();
  showLine(l.who, l.text, queue.length > 0);
}
function showLine(who, text, more){
  boxEl.classList.toggle("iv", who === "iv");
  boxEl.classList.toggle("sys", who === "sys");
  nameEl.textContent = who === "me" ? me : who === "iv" ? IV : "안내";
  charEl.classList.toggle("on", who === "me");
  nextEl.hidden = true;
  /* 서식(<b>)을 살리면서 글자 단위로 드러낸다: 완성본을 만들어 두고 앞에서부터 잘라 보여 준다 */
  const full = fmt(text);
  textEl.innerHTML = full;
  const total = textEl.textContent.length;
  let i = 0;
  typing = { timer: 0, full, more };
  const step = () => {
    i += 1;
    textEl.innerHTML = cut(full, i) + '<span class="cur"></span>';
    if (i >= total){ finishType(); return; }
    typing.timer = setTimeout(step, TYPE_MS);
  };
  typing.timer = setTimeout(step, TYPE_MS);
}
function finishType(){
  if (!typing) return;
  clearTimeout(typing.timer);
  textEl.innerHTML = typing.full;
  const more = typing.more;
  typing = null;
  nextEl.hidden = !more;
  /* 마지막 문단이 끝나면 클릭을 더 기다리지 않고 바로 다음(선택지 등)으로 */
  if (!more && after){ const f = after; after = null; f(); }
}
/* HTML 문자열을 앞에서 n글자만 남기고 자른다 (태그는 세지 않는다) */
function cut(html, n){
  let out = "", cnt = 0, i = 0;
  while (i < html.length && cnt < n){
    const c = html[i];
    if (c === "<"){ const j = html.indexOf(">", i); out += html.slice(i, j + 1); i = j + 1; continue; }
    if (c === "&"){ const j = html.indexOf(";", i); const ent = j > 0 && j - i < 8 ? html.slice(i, j + 1) : c; out += ent; i += ent.length; cnt++; continue; }
    out += c; i++; cnt++;
  }
  /* 열린 태그 닫기 */
  const open = []; const re = /<(\/?)(\w+)[^>]*>/g; let m;
  while ((m = re.exec(out))){ if (m[1]) open.pop(); else if (m[2] !== "br") open.push(m[2]); }
  while (open.length) out += `</${open.pop()}>`;
  return out;
}
/* **굵게** 만 지원 */
function fmt(t){ return esc(t).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/\n/g, "<br>"); }

/* ---------- 선택지 ---------- */
function setChoices(opts){
  chEl.innerHTML = "";
  let n = 0;
  opts.forEach(o => {
    if (o.html){ const d = document.createElement("div"); d.className = "vn-info"; d.innerHTML = o.html; chEl.appendChild(d); return; }
    const i = n++;
    const b = document.createElement("button");
    b.type = "button"; b.className = "vn-c" + (o.cls ? " " + o.cls : ""); b.setAttribute("role", "menuitem");
    b.innerHTML = `<span class="k">${i + 1}</span>${o.icon ? `<span class="ic">${o.icon}</span>` : ""}` +
      `<span class="t">${esc(o.label)}${o.sub ? `<small>${esc(o.sub)}</small>` : ""}</span>` +
      (o.badge ? `<span class="n">${esc(o.badge)}</span>` : "");
    b.onclick = e => { e.stopPropagation(); o.fn(); };
    chEl.appendChild(b);
  });
  const first = chEl.querySelector(".vn-c"); if (first) first.focus({ preventScroll: true });
}
/* 말이 끝난 뒤 선택지를 보여 주고 싶을 때 */
function sayThen(lines, opts){ speak(lines, () => setChoices(opts)); }

/* ---------- 게이지 ---------- */
function paintGauge(){
  gbar.style.width = Math.min(100, st.gauge) + "%";
  gnum.textContent = Math.min(100, st.gauge);
  progEl.textContent = st.asked.length;
}
function bump(pts){
  st.gauge = Math.min(100, st.gauge + (pts || 0));
  paintGauge();
  gnum.classList.remove("up"); void gnum.offsetWidth; gnum.classList.add("up");
}

/* ---------- 화면들 ---------- */
function title(){
  st.started = false;
  charEl.classList.remove("on");
  const cont = st.asked.length > 0;
  sayThen([{ who: "sys", text:
    `**모의면접**에 오신 것을 환영합니다. 지금부터 당신이 면접관입니다.\n선택지로 질문하면 ${me}이(가) 답합니다. 질문할수록 위쪽 **관심도**가 오르고, 마무리할 때 결과가 나옵니다.` }],
    [
      ...(cont ? [{ label: "이어서 면접하기", sub: `지금까지 질문 ${st.asked.length}개 · 관심도 ${st.gauge}`, icon: "▶", cls: "key", fn: () => { st.started = true; persist(); topicMenu(); } }] : []),
      { label: cont ? "처음부터 다시" : "면접 시작", icon: cont ? "↺" : "▶", cls: cont ? "" : "key", fn: () => { reset(); st.started = true; persist(); paintGauge(); intro(); } },
      { label: "닫기", icon: "✕", cls: "ghost", fn: close },
    ]);
}
function intro(){
  const lines = (D.intro && D.intro.length ? D.intro : ["안녕하세요. 편하게 물어봐 주세요."]).map(t => ({ who: "me", text: t }));
  speak(lines, topicMenu);
}
function topicMenu(){
  st.topic = null; persist();
  const opts = TOPICS.map(t => {
    const list = mainQs.filter(q => q.topic === t.id);
    const done = list.filter(q => asked(q.id)).length;
    return { label: t.name, sub: t.hint, icon: t.icon, badge: `${done}/${list.length}`, cls: done && done === list.length ? "done" : "",
      fn: () => qList(t.id) };
  });
  if (st.asked.length) opts.push({ label: "면접 마무리하기", sub: "지금까지의 관심도로 결과를 봅니다", icon: "🏁", cls: "ghost", fn: ending });
  sayThen([{ who: "sys", text: st.asked.length ? "다음은 어떤 주제를 물어볼까요?" : "어떤 주제부터 물어볼까요? 주제를 고르면 질문 목록이 나옵니다." }], opts);
}
function qList(tid){
  st.topic = tid; persist();
  const t = TOPICS.find(x => x.id === tid) || { name: "", hint: "" };
  const list = mainQs.filter(q => q.topic === tid);
  const opts = list.map(q => ({ label: q.q, icon: asked(q.id) ? "✓" : "❔", cls: asked(q.id) ? "done" : "", fn: () => ask(q) }));
  opts.push({ label: "다른 주제 보기", icon: "←", cls: "ghost", fn: topicMenu });
  sayThen([{ who: "sys", text: `**${t.icon || ""} ${t.name}** — ${t.hint || "질문을 골라 주세요."}` }], opts);
}
function ask(q){
  const fresh = !asked(q.id);
  if (fresh){ st.asked.push(q.id); persist(); }
  const lines = [{ who: "iv", text: q.q }, ...(q.a || []).map(t => ({ who: "me", text: t }))];
  speak(lines, () => afterAnswer(q, fresh));
  if (fresh) setTimeout(() => bump(q.pts || 5), 400);
}
function docTitle(link){
  try {
    const [u, m, d] = String(link).split("-").map(Number);
    const L = window.PORTFOLIO_UNITS[u].mids[m].lessons[d];
    return L ? `${window.PORTFOLIO_UNITS[u].mids[m].title} · ${L.title}` : "";
  } catch(_) { return ""; }
}
function afterAnswer(q){
  const opts = [];
  (q.follow || []).map(id => byId[id]).filter(Boolean).forEach(f => {
    opts.push({ label: f.q, sub: "꼬리질문", icon: asked(f.id) ? "✓" : "↳", cls: "sub" + (asked(f.id) ? " done" : ""), fn: () => ask(f) });
  });
  if (q.link){
    const t = docTitle(q.link);
    if (t) opts.push({ label: "관련 문서 보기", sub: t, icon: "📄", cls: "link", fn: () => goDoc(q.link) });
  }
  const back = q.sub ? (st.topic || q.topic) : q.topic;
  opts.push({ label: "다른 질문 하기", icon: "❔", fn: () => qList(back) });
  opts.push({ label: "주제 바꾸기", icon: "☰", cls: "ghost", fn: topicMenu });
  opts.push({ label: "면접 마무리하기", icon: "🏁", cls: "ghost", fn: ending });
  /* 마지막 답변 문단은 그대로 두고 선택지만 띄운다 */
  setChoices(opts);
}
function ending(){
  const g = Math.min(100, st.gauge);
  const ends = (D.endings || []).slice().sort((a, b) => (b.min || 0) - (a.min || 0));
  const e = ends.find(x => g >= (x.min || 0)) || ends[ends.length - 1] || { grade: "-", title: "면접 종료", lines: ["감사합니다."] };
  const topicsDone = TOPICS.filter(t => QS.some(q => q.topic === t.id && asked(q.id))).map(t => t.name).join(" · ");
  const summary = `<span class="vn-grade"><b>${esc(e.grade)}</b>${esc(e.title)}</span><br>` +
    `질문 <b>${st.asked.length}</b>개 · 관심도 <b>${g}</b> · 다룬 주제: ${esc(topicsDone || "없음")}`;
  const lines = [{ who: "sys", text: "__SUMMARY__" }, ...(e.lines || []).map(t => ({ who: "me", text: t }))];
  /* 요약 줄은 타자 효과 없이 바로 보여 준다 */
  queue = lines.slice(1); after = () => setChoices([
    { html: summary },
    { label: "포트폴리오 보기", sub: "면접 창을 닫습니다", icon: "📂", cls: "key", fn: close },
    { label: "질문 더 하기", icon: "↩", fn: topicMenu },
    { label: "처음부터 다시", icon: "↺", cls: "ghost", fn: () => { reset(); st.started = true; persist(); paintGauge(); intro(); } },
  ]);
  setChoices([]);
  boxEl.classList.remove("iv"); boxEl.classList.add("sys"); charEl.classList.remove("on");
  nameEl.textContent = "결과"; textEl.innerHTML = summary; nextEl.hidden = false; typing = null;
}
function goDoc(link){
  close();
  if (typeof route !== "function"){ window.open("index.html#" + link, "_blank"); return; }  /* 편집기 미리보기에서 */
  if (location.hash.slice(1) === link) route(); else location.hash = link;
}

/* ---------- 열기 / 닫기 / 입력 ---------- */
let prevFocus = null, prevOverflow = "";
function open(){
  if (!bind()) return;
  $(".vn-sub").textContent = `${me}에게 무엇이든 물어보세요`;
  $(".vn-total").textContent = QS.length;
  const im = $(".vn-char img"); im.src = ART; im.alt = me; $(".vn-tag").textContent = me;
  load();
  /* 물어본 목록에 지금 데이터에 없는 id 가 있으면(편집기에서 지운 질문) 걷어낸다 */
  st.asked = st.asked.filter(id => byId[id]);
  paintGauge();
  prevFocus = document.activeElement; prevOverflow = document.body.style.overflow;
  document.body.style.overflow = "hidden";
  root.hidden = false;
  title();
}
function close(){
  if (typing){ clearTimeout(typing.timer); typing = null; }
  queue = []; after = null;
  root.hidden = true;
  document.body.style.overflow = prevOverflow;
  if (prevFocus && prevFocus.focus) try { prevFocus.focus(); } catch(_) {}
}
$(".vn-x").onclick = close;
boxEl.onclick = () => next();
root.querySelector(".vn-stage").addEventListener("click", e => {
  if (e.target.closest(".vn-choices") || e.target.closest(".vn-box")) return;
  next();
});
document.addEventListener("keydown", e => {
  if (root.hidden) return;
  if (e.key === "Escape"){ e.preventDefault(); close(); return; }
  if (e.key === " " || e.key === "Enter"){
    if (e.target.closest && e.target.closest(".vn-c") && e.key === "Enter") return; /* 버튼 자체의 Enter */
    e.preventDefault(); next(); return;
  }
  if (/^[1-9]$/.test(e.key)){
    const b = chEl.querySelectorAll(".vn-c")[+e.key - 1];
    if (b){ e.preventDefault(); b.click(); }
  }
});
/* 히어로의 버튼 등 data-vn 속성이 있는 요소가 연다 */
document.addEventListener("click", e => {
  const t = e.target.closest && e.target.closest("[data-vn]");
  if (t){ e.preventDefault(); open(); }
});
window.PortfolioVN = { open, close, reset };
})();
