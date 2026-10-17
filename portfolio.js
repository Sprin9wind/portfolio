/* Blue portfolio: navigation and introduction presentation. */
const study = document.body.dataset.design;
const originalPane = renderPane;
const originalFoot = renderFoot;
const numberLabel = i => String(i + 1).padStart(2, '0');
let questObserver;
function renderBlueLauncher() {
  if (study !== 'blue') return;
  let dock = document.getElementById('blue-launcher');
  if (!dock) {
    dock = document.createElement('nav');
    dock.id = 'blue-launcher'; dock.setAttribute('aria-label', '프로젝트 바로가기');
    const shortNames = ['Who’s Tail', '메이플 아레나', '외계인 노동자', '극락가신당', '포수 시뮬레이터', 'SOS'];
    dock.innerHTML = `<a class="launcher-home" href="#${projIx}" aria-label="프로젝트 전체 목록"><span aria-hidden="true">▦</span><span>프로젝트</span></a><div class="launcher-apps">${UNITS[projIx].mids.map((m,i)=>`<a class="launcher-app" href="#${projIx}-${i}" data-project="${i}" aria-label="${esc(shortNames[i]||m.title)}${shortNames[i]&&shortNames[i]!==m.title?' — '+esc(m.title):''}" title="${esc(m.title)}"><span class="launcher-icon"><img src="${esc(m.cover)}" alt="" width="52" height="52"><span class="launcher-active" aria-hidden="true"></span></span><span class="launcher-name">${esc(shortNames[i]||m.title)}</span></a>`).join('')}</div>`;
    document.querySelector('.nav').insertAdjacentElement('afterend',dock);
    dock.addEventListener('click',e=>{
      const a=e.target.closest('a[href]');
      if(a&&e.button===0&&!e.ctrlKey&&!e.metaKey&&!e.shiftKey&&!e.altKey&&a.getAttribute('href')===location.hash){e.preventDefault();route();}
    });
  }
  const detail = curU === projIx && location.hash.split('-').length > 1;
  dock.querySelectorAll('[data-project]').forEach(a=>{
    const active=detail && +a.dataset.project===curM;
    a.classList.toggle('selected',active);
    if(active)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');
  });
  dock.querySelector('.launcher-home').classList.toggle('selected',curU===projIx&&!detail);
  if(questObserver)questObserver.disconnect();
  view.querySelector('.project-mini')?.remove();
  const tools=view.querySelector('.project-tools'),jump=tools?.querySelector('.jump');
  if(jump){
    tools.insertAdjacentHTML('afterbegin',`<div class="quest-heading"><span><i aria-hidden="true">◇</i> 프로젝트 목차</span><span class="quest-position"></span></div><div class="quest-track" aria-hidden="true">${[...jump.querySelectorAll('button')].map(()=>'<span></span>').join('')}</div>`);
    jump.querySelectorAll('button').forEach((button,i)=>{
      const match=button.textContent.match(/^(\d+)\.\s*/);
      const title=button.textContent.replace(/^\d+\.\s*/, '');
      const number=i===0?'◇':String(match?match[1]:i).padStart(2,'0');
      button.innerHTML=`<span class="quest-index" aria-hidden="true">${number}</span><span>${esc(title)}</span>`;
    });
    const sync=()=>{
      const buttons=[...jump.querySelectorAll('button')];const i=Math.max(0,buttons.findIndex(b=>b.classList.contains('on')));
      tools.querySelector('.quest-position').textContent=i===0?'프로젝트 소개':`현재 항목 ${String(i).padStart(2,'0')} / ${String(buttons.length-1).padStart(2,'0')}`;
      tools.querySelectorAll('.quest-track span').forEach((segment,n)=>segment.classList.toggle('is-current',n===i));
      buttons.forEach((b,n)=>{if(n===i)b.setAttribute('aria-current','location');else b.removeAttribute('aria-current');});
    };
    questObserver=new MutationObserver(sync);questObserver.observe(jump,{subtree:true,attributes:true,attributeFilter:['class']});sync();
  }
}
heroHTML = function () {
  return `<div class="study-hero-wrap"><section class="study-hero">
    <div class="study-hero-copy"><p class="study-eyebrow">GAME DESIGNER PORTFOLIO</p>
    <h1>플레이의 재미를<br><span>규칙으로 설계합니다.</span></h1>
    <p class="study-intro"><strong>${esc(PROFILE.name)}</strong> / 시스템, 콘텐츠 기획<br>${esc(PROFILE.tagline)}</p>
    <div class="study-actions"><button type="button" class="study-primary" data-u="1">프로젝트 보기 <span aria-hidden="true">↗</span></button><a href="mailto:${esc(MAIL)}">연락하기 ↗</a></div></div>
    ${study === 'blue' ? `<div class="blue-profile-stage"><span class="blue-year" aria-hidden="true">2026</span><figure class="blue-photo"><img src="profile.jpg" alt="이정훈 프로필 사진" width="577" height="741"><figcaption>이정훈 <span>GAME DESIGNER</span></figcaption></figure><img class="blue-miner-sticker" src="images/identity/miner-sticker-v1.png" alt="" aria-hidden="true" width="1254" height="1254"><span class="blue-cursor-label" aria-hidden="true"><svg viewBox="0 0 36 40"><path d="M3 3L32 20L19 23L12 36Z"/></svg>기획을 플레이로 <b>✦</b></span><span class="blue-spark" aria-hidden="true">✦</span></div>` : `<div class="study-portrait"><span class="shape shape-one" aria-hidden="true"></span><span class="shape shape-two" aria-hidden="true"></span><span class="shape shape-three" aria-hidden="true"></span><div class="portrait-frame"><div class="portrait-bar"><i></i><i></i><i></i><span>GAME PLANNER</span></div><img src="profile.jpg" alt="이정훈 프로필 사진"><div class="portrait-label">이정훈 <span>기획 → 구현 → 검증</span></div></div></div>`}
    <div class="study-hero-bottom"><span>기획 의도에서 플레이 경험까지</span><a href="#0-0-0">ABOUT ME ↓</a></div>
  </section></div>`;
};
mountHeroArt = function () {};
function wrapSubsections(doc, className) {
  const fragment = document.createDocumentFragment();
  let group;
  [...doc.childNodes].forEach(node => {
    if (node.nodeType === 1 && node.tagName === 'H3') {
      group = document.createElement('div'); group.className = className;
      fragment.append(group);
    }
    (group || fragment).append(node);
  });
  doc.replaceChildren(fragment);
}
renderPane = function () {
  document.body.dataset.section = curU === 0 ? 'about' : curU === projIx ? 'projects' : 'activities';
  originalPane();
  if (curU === 0) {
    view.querySelectorAll('.doc-sec').forEach((sec,i)=>sec.querySelector('.doc-head').insertAdjacentHTML('afterbegin', `<span class="study-section-no">${numberLabel(i)}</span>`));
    wrapSubsections(view.querySelector('#d1 .doc'),'study-tool-group');
    wrapSubsections(view.querySelector('#d2 .doc'),'study-work-step');
    wrapSubsections(view.querySelector('#d3 .doc'),'study-ai-block');
  } else if (curU !== projIx) {
    view.querySelector('.phead').insertAdjacentHTML('beforeend','<p class="study-activity-intro">함께 만들고, 배우고, 나눈 경험입니다.</p>');
    view.querySelectorAll('.doc-sec').forEach((sec,i)=>{
      sec.querySelector('.doc-head').insertAdjacentHTML('afterbegin',`<span class="study-section-no">${numberLabel(i)}</span>`);
      const row=[...sec.querySelectorAll('tr')].find(r=>r.querySelector('th')?.textContent==='기간');
      if(row) {sec.querySelector('.doc-head').insertAdjacentHTML('beforeend',`<span class="study-period">${esc(row.querySelector('td').textContent)}</span>`);row.remove();}
    });
  }
  const switcher=document.getElementById('study-switcher');
  if(switcher) switcher.querySelectorAll('[data-version]').forEach(a=>a.href=`design-${a.dataset.version}.html${location.hash||'#0-0'}`);
  renderBlueLauncher();
  measureNavigation();
};
// Theme selection in a design study stays separate from the main portfolio preference.
// Start with the reference's light palette; retain explicit choices when storage is available.
let savedStudyTheme = 'light';
try { savedStudyTheme = localStorage.getItem('pf-theme')||'light'; } catch (_) {}
setTheme = function (t) {
  document.documentElement.dataset.theme=t;
  const b=document.getElementById('themeToggle');b.textContent=t==='dark'?'밝게':'어둡게';b.setAttribute('aria-label',t==='dark'?'밝은 화면으로 바꾸기':'어두운 화면으로 바꾸기');
  try { localStorage.setItem('pf-theme',t); } catch (_) {}
};
setTheme(savedStudyTheme);
route();
