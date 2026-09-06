/* ============================================================
   포트폴리오 내용 데이터
   원본: 노션 「2026 메커톤 Portfolio」 (https://app.notion.com/p/2026-Portfolio-0009d4ab6bba82c5b160816e3f7c494a)
   노션 원문의 사실을 바탕으로 오탈자를 고치고 기획서 구조(개요 표 → 담당 업무 → 성과 → 회고)로 재정리했다.
   admin.html(편집기)에서 고치고 내보내면 이 파일이 다시 만들어진다.
   ============================================================ */
window.PORTFOLIO_PROFILE = {
  "name": "이정훈",
  "title": "Game Designer Portfolio",
  "tagline": "창의적인 아이디어를 게임 디자인으로 풀어내는 기획자",
  "cards": [
    {
      "label": "직무",
      "value": "시스템 · 콘텐츠 기획"
    },
    {
      "label": "소속",
      "value": "DEVELROCKET"
    },
    {
      "label": "연락처",
      "value": "<a href=\"mailto:harry5493@gmail.com\">harry5493@gmail.com</a>"
    }
  ]
};

window.PORTFOLIO_UNITS = [
  {
    title: "About Me",
    layout: "inline",
    mids: [
      {
        title: "프로필",
        lessons: [
          {
            title: "About Me",
            tag: "소개",
            html: `<div class="callout insight"><div class="callout-ico">💡</div><div class="callout-body"><p><strong>창의적인 아이디어를 게임 디자인으로 풀어내는 기획자, 이정훈입니다.</strong><br>게임은 단순한 재미를 넘어 유저에게 새로운 경험과 의미를 전달하는 매체라고 믿습니다.</p></div></div><h2>이렇게 일합니다</h2><ul><li><strong>아이디어를 실제 기획과 구현으로 잇습니다</strong> — 다양한 경험을 바탕으로 기존의 틀에 얽매이지 않고 새로운 아이디어를 발굴하고, 이를 기획 문서와 실제 구현으로 발전시켜 왔습니다.</li><li><strong>핵심 재미를 지키면서 확장합니다</strong> — 게임이 가진 핵심적인 재미와 가치를 유지하면서도 유저에게 새로운 경험을 제공하는 방향을 고민합니다.</li><li><strong>직군에 맞게 전달합니다</strong> — 아트·프로그래밍 등 각 직군이 필요로 하는 정보를 선별해 문서화합니다. 협업 비용을 줄이는 것이 기획자의 역할이라고 생각합니다.</li><li><strong>계속 배우고 성장합니다</strong> — 새로운 도전을 두려워하지 않고, 프로젝트마다 부족했던 점을 기록하며 다음 프로젝트에 반영합니다.</li></ul><h2>핵심 역량</h2><table><tr><th>역량</th><th>내용</th><th>근거 프로젝트</th></tr><tr><td>시스템 기획</td><td>스킬·스테이터스·대화 시스템의 구조와 데이터 테이블 설계</td><td>외(계인)노(동)자 · 극락가신당</td></tr><tr><td>콘텐츠 · 레벨 기획</td><td>미니게임 플레이 루프, 스테이지 배치, 몬스터·맵·기믹 설계</td><td>외(계인)노(동)자 · 극락가신당</td></tr><tr><td>밸런스 · 데이터 분석</td><td>플레이테스트 데이터 수집, 스코어 편차 분석, 난이도 곡선·재화 조정</td><td>외(계인)노(동)자</td></tr><tr><td>프로젝트 매니징</td><td>팀장으로 주간 회의·일정·역할 조율, GitHub–Discord 협업 환경 구축</td><td>극락가신당</td></tr><tr><td>프로토타이핑</td><td>Python · MediaPipe · OpenCV(KNN) 제스처 인식, UDP → Unity 연동</td><td>모션인식 포수 시뮬레이터</td></tr><tr><td>시스템 분석 · 제안</td><td>라이브 게임 시스템 분석서, 개편안, 아이디어 제안서 작성</td><td>메이플스토리 기획 문서</td></tr></table><h2>연락처</h2><table><tr><th>지역</th><td>Seoul, South Korea</td></tr><tr><th>전화</th><td>010-4199-5723</td></tr><tr><th>이메일</th><td><a href="mailto:harry5493@gmail.com">harry5493@gmail.com</a></td></tr></table>`
          },
          {
            title: "교육 · 자격증",
            tag: "이력",
            html: `<h2>교육</h2><ul class="timeline"><li><b>DEVELROCKET Unity 기반 스타트업 게임개발자 양성 과정</b><span class="when">2026.04 ~ 재학 중</span></li><li><b>건국대학교 전기전자공학부</b><span class="when">2019.03 ~ 2025.08 졸업</span></li></ul><h2>자격증</h2><ul><li>MOS 365 Excel Expert</li><li>MOS 365 Excel Associate</li></ul>`
          },
          {
            title: "Tools",
            tag: "도구",
            html: `<p>기획 문서 작성, 데이터 테이블 설계, 프로토타이핑에 사용하는 도구입니다.</p><div class="skill-grid"><div class="skill"><div class="skill-head"><img class="skill-ico" src="images/02-250px-Python-logo-notext.svg.webp" alt=""><span class="skill-name">Python</span></div><span class="skill-level">숙련</span></div><div class="skill"><div class="skill-head"><img class="skill-ico" src="images/03-250px-Microsoft_Office_PowerPoint__2025_present_.svg.webp" alt=""><span class="skill-name">PowerPoint</span></div><span class="skill-level">숙련</span></div><div class="skill"><div class="skill-head"><img class="skill-ico" src="images/04-250px-Microsoft_Office_Excel__2025_present_.svg.webp" alt=""><span class="skill-name">Excel</span></div><span class="skill-level l2">능숙</span></div><div class="skill"><div class="skill-head"><img class="skill-ico" src="images/05-330px-Microsoft_Office_Word__2019_2025_.svg.webp" alt=""><span class="skill-name">Word</span></div><span class="skill-level l2">능숙</span></div><div class="skill"><div class="skill-head"><img class="skill-ico" src="images/06-330px-Figma-logo.svg.webp" alt=""><span class="skill-name">Figma</span></div><span class="skill-level l2">능숙</span></div><div class="skill"><div class="skill-head"><img class="skill-ico" src="images/07-250px-Unity_Black_icon.svg.webp" alt=""><span class="skill-name">Unity</span></div><span class="skill-level l1">기본</span></div></div>`
          }
        ]
      }
    ]
  },
  {
    title: "개발 프로젝트",
    layout: "gallery",
    mids: [
      {
        title: "외(계인)노(동)자",
        meta: "2025.03 ~ · 시스템 & 콘텐츠 기획 · Bridge",
        cover: "images/alien-01.png",
        lessons: [
          {
            title: "프로젝트 소개",
            tag: "개요",
            links: [{"label": "▶ 플레이 영상", "url": "https://youtu.be/EsUM0g3A2K0"}],
            html: `<img src="images/alien-01.png" alt=""><div class="callout"><div class="callout-ico">📦</div><div class="callout-body"><p>대학생 연합 게임제작 동아리 <strong>Bridge</strong>의 정규 프로젝트로 개발 중인 작품입니다. 외계인 택배회사를 컨셉으로 한 아케이드 게임으로, 현재 Google Play 출시를 앞두고 내부 테스트 심사를 진행 중입니다.</p></div></div><table><tr><th>장르</th><td>아케이드 + 타이쿤</td></tr><tr><th>플랫폼</th><td>모바일 (Google Play 출시 예정)</td></tr><tr><th>기간</th><td>2025.03 ~ 2025.11 / 2026.03 ~ (총 9개월+)</td></tr><tr><th>역할</th><td>시스템 · 콘텐츠 기획</td></tr><tr><th>담당</th><td>미니게임 콘텐츠 · 대화 시스템 · 스킬 시스템 · 스테이지 디자인 · 난이도/재화 밸런스 · 기타 시스템</td></tr></table><h2>게임 구조</h2><ul><li><strong>미니게임</strong> — 각기 다른 특성을 가진 상자를 판별하고 지정된 배송 구역으로 이송하는 핵심 플레이</li><li><strong>스테이지 · 스토리</strong> — 챕터 기반 스테이지 구조와 스토리가 연계되어 진행</li><li><strong>성장 시스템</strong> — 택배 운반을 지원하는 스킬 시스템과 캐릭터 성장을 위한 일과 시스템으로 아케이드 플레이에 타이쿤 요소를 결합</li></ul><h2>플레이 영상</h2><div style="position:relative;padding-top:56.25%;margin:0 0 18px"><iframe src="https://www.youtube.com/embed/EsUM0g3A2K0" title="YouTube video" style="position:absolute;inset:0;width:100%;height:100%;border:0;border-radius:12px" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>`
          },
          {
            title: "1. 미니게임 콘텐츠 기획",
            tag: "담당 업무",
            html: `<h2>게임 플레이 루프 설계</h2><ul><li>운반 성공 · 실패 조건과 게임 종료 조건을 정의해 한 판의 플레이 루프를 설계했습니다.</li></ul><h2>상자 기믹 설계</h2><ul><li>일반 / 파손주의 / 냉장보관 등 상자 유형별 규칙과 처리 방식을 기획했습니다.</li></ul><h2>UI/UX 기획</h2><ul><li>미니게임 내 UI의 동작 구조와 화면 흐름을 <strong>플로우차트와 와이어프레임</strong>으로 설계해 아트·프로그래밍팀에 전달했습니다.</li></ul><div class="img-row"><img src="images/alien-02.png" alt=""><img src="images/alien-03.png" alt=""></div><div class="img-row"><img src="images/alien-04.png" alt=""><img src="images/alien-05.png" alt=""></div><p style="text-align:center;font-size:12px;color:var(--ink-3)">미니게임 기획서 · UI 플로우 · 와이어프레임</p>`
          },
          {
            title: "2. 대화 시스템 및 시나리오 기획",
            tag: "담당 업무",
            html: `<h2>대화 시스템 구조 설계</h2><ul><li>스토리 전개를 담당하는 캐릭터 간 대화 시스템의 플로우와 구조를 기획했습니다.</li><li>분기형 진행을 고려해 <strong>대화 데이터 구조(대사 ID, 캐릭터 정보, 분기 조건)</strong>를 정의하고, 이를 바탕으로 대사 테이블을 설계했습니다.</li></ul><img src="images/alien-06.png" alt=""><p style="text-align:center;font-size:12px;color:var(--ink-3)">대화 시스템 플로우 및 데이터 구조</p><h2>시나리오 · 대사 작성</h2><ul><li>설계한 데이터 구조에 맞춰 시나리오와 대사를 직접 입력하고 관리했습니다.</li></ul><img src="images/alien-07.png" alt=""><p style="text-align:center;font-size:12px;color:var(--ink-3)">대사 테이블</p>`
          },
          {
            title: "3. 스킬 시스템 기획",
            tag: "담당 업무",
            html: `<ul><li><strong>효과 · 동작 구조 정의</strong> — 스킬의 효과와 동작 구조를 정의하고, 레벨별 성능 변화와 업그레이드 비용을 설계했습니다.</li><li><strong>연출 설계</strong> — 스킬 발동 시의 시각적 변화(캐릭터 이동, 이펙트, 상자 처리 애니메이션)를 동작 단위로 정의하고, 개발팀과 아트팀이 의도를 바로 이해할 수 있도록 <strong>동작 애니메이션 시안</strong>을 함께 제공했습니다.</li></ul><img src="images/alien-08.png" alt=""><p style="text-align:center;font-size:12px;color:var(--ink-3)">스킬 동작 구조 및 연출 기획</p><img src="images/alien-09.png" alt=""><p style="text-align:center;font-size:12px;color:var(--ink-3)">스킬 관리창 UI 기획 및 구간별 수치 설정</p>`
          },
          {
            title: "4. 스테이지 디자인",
            tag: "담당 업무",
            html: `<ul><li>엔진 안에서 스테이지별 오브젝트 배치, 상자 스폰 빈도, 게임 시간, 캐릭터 이동 속도, 오브젝트 동작 주기를 직접 조정하며 스테이지별 흐름과 난이도를 설계했습니다.</li><li>반복적인 플레이테스트로 수치를 보정하며 난이도 곡선을 다듬었습니다.</li></ul><img src="images/alien-10.png" alt=""><p style="text-align:center;font-size:12px;color:var(--ink-3)">스테이지 편집 화면</p>`
          },
          {
            title: "5. 기타 시스템 및 콘텐츠 기획",
            tag: "담당 업무",
            html: `<p>미니게임 플레이에 직접 영향을 주는 <strong>캐릭터 스테이터스 시스템</strong>, 게임 내 자원 순환을 담당하는 <strong>골드 소모처인 일과 콘텐츠</strong>를 비롯해 게임 전반의 시스템과 부가 콘텐츠를 기획했습니다.</p><img src="images/alien-11.png" alt=""><p style="text-align:center;font-size:12px;color:var(--ink-3)">스테이터스 시스템 기획</p><img src="images/alien-12.png" alt=""><p style="text-align:center;font-size:12px;color:var(--ink-3)">일과 콘텐츠 기획</p>`
          },
          {
            title: "6. 스테이지 난이도 & 재화 밸런스 설계",
            tag: "담당 업무",
            html: `<h2>방법</h2><ul><li>반복 플레이테스트로 스테이지별 기준 수치를 설정하고, 테스터의 실제 플레이 데이터를 수집해 세부 조정을 진행했습니다.</li><li>스코어 기록 일지를 직접 작성해 회차별 점수 편차와 특이사항을 분석하고, 이를 바탕으로 상자 스폰 확률·이동속도 보정치 등을 조정했습니다.</li></ul><h2>결과</h2><div class="callout insight"><div class="callout-ico">📈</div><div class="callout-body"><p><strong>CH3 병목 구간 발견 → 난이도 곡선 보완</strong><br>데이터 분석 과정에서 CH3 구간의 클리어율이 급격히 낮아지는 병목을 식별했습니다. CH1·CH2의 기본 지급 골드량과 CH3의 클리어 기준 점수를 재설정해 난이도 곡선을 보완했습니다.</p></div></div><img src="images/alien-13.png" alt=""><p style="text-align:center;font-size:12px;color:var(--ink-3)">스코어 기록 일지</p><div class="img-row"><img src="images/alien-14.png" alt=""><img src="images/alien-15.png" alt=""></div><p style="text-align:center;font-size:12px;color:var(--ink-3)">스테이지별 기준 수치 · 재화 밸런스 표</p>`
          },
          {
            title: "7. 회고 — 기획 의도의 전달 방식",
            tag: "회고",
            html: `<div class="callout insight"><div class="callout-ico">💡</div><div class="callout-body"><p>9개월간 프로젝트를 진행하며 가장 크게 배운 것은 <strong>기획 의도를 직군에 맞는 방식으로 전달하는 것</strong>이 협업의 핵심이라는 점입니다.</p></div></div><h2>문제</h2><p>초반 UI 기획 때는 아트팀과 프로그래밍팀 모두에게 와이어프레임, UX 플로우, 수치 계산 방식, 디자인 레퍼런스를 한 문서에 담아 전달했습니다. 정보가 빠지는 것보다 다 주는 편이 낫다고 생각했기 때문입니다.</p><div class="callout problem"><div class="callout-ico">⚠</div><div class="callout-body"><p>아트팀은 불필요한 수치 정보 사이에서 연출 포인트를 찾는 데 시간이 오래 걸렸고, 프로그래밍팀은 구현 로직이 설명 속에 묻혀 해석에 어려움을 겪었습니다. 스코어보드 UI의 숫자 카운팅 애니메이션처럼 프로그래머의 영역임에도 아트팀이 자신들의 작업인지 헷갈리는 일이 생겼고, 질문과 소통 비용이 늘었습니다.</p></div></div><img src="images/alien-16.png" alt=""><p style="text-align:center;font-size:12px;color:var(--ink-3)">초기 스코어보드 UI 문서 일부 — 모든 정보를 한 문서에 담았던 시기</p><h2>개선</h2><p>직군별로 필요한 정보만 선별해 제공하는 방식으로 바꿨습니다.</p><ul><li><strong>아트팀</strong> — 화면 레이아웃, 색상, 레퍼런스 이미지 중심</li><li><strong>프로그래밍팀</strong> — 버튼 동작 조건, 입력 로직, 수치 값만 간결하게</li></ul><div class="img-row"><img src="images/alien-17.png" alt=""><img src="images/alien-18.png" alt=""></div><p style="text-align:center;font-size:12px;color:var(--ink-3)">같은 스테이터스 기획을 프로그래밍팀용(왼쪽)과 아트팀용(오른쪽)으로 나눠 작성</p><h2>결과 · 배운 점</h2><ul><li>각 팀원이 자신의 역할과 관점에 맞게 기획 의도를 빠르게 이해했고, 구현 과정의 수정 빈도가 눈에 띄게 줄었습니다.</li><li>문서를 쓸 때마다 <strong>"이 정보가 누구에게 필요한가?"</strong>를 먼저 묻는 습관이 생겼습니다. 이 기준 하나로 소통 효율이 올라가고 팀원의 피로도도 줄었습니다.</li></ul>`
          }
        ]
      },
      {
        title: "극락가신당",
        meta: "2024.03 ~ 2024.08 · 팀장 · 시스템 기획 & 프로젝트 매니징 · Bridge",
        cover: "images/shrine-01.png",
        lessons: [
          {
            title: "프로젝트 소개",
            tag: "개요",
            html: `<img src="images/shrine-01.png" alt=""><div class="img-row"><img src="images/shrine-02.png" alt=""><img src="images/shrine-03.png" alt=""></div><div class="callout"><div class="callout-ico">🏮</div><div class="callout-body"><p>대학생 연합 게임제작 동아리 <strong>Bridge</strong>에서 개발한 저승 배경의 어드벤처 게임입니다. Dave the Diver처럼 타이쿤과 어드벤처가 결합된 멀티 포맷으로, 저승에서 신당을 운영하며 망자들을 상담하고 성장해 플랫포머 형식의 던전을 클리어합니다.</p></div></div><table><tr><th>장르</th><td>경영 시뮬레이션 + 플랫포머 어드벤처 (멀티 포맷)</td></tr><tr><th>소속</th><td>Bridge 정규 프로젝트</td></tr><tr><th>기간</th><td>2024.03 ~ 2024.08 (약 5개월)</td></tr><tr><th>역할</th><td>팀장 · 프로젝트 매니징 · 어드벤처 파트 총괄 기획</td></tr><tr><th>상태</th><td>취업·군 복무 등으로 팀원 3명이 이탈하며 잠정 중단</td></tr></table>`
          },
          {
            title: "1. 프로젝트 매니징",
            tag: "담당 업무",
            html: `<ul><li><strong>주간 화상회의</strong> — 매주 직군별 작업 현황을 공유하고 피드백을 진행했습니다.</li><li><strong>회의록 · 일정 관리</strong> — 회의 내용을 회의록으로 정리해 팀 전체가 진행 상황을 파악하게 했고, 진행 상황에 따라 차주 일정을 유동적으로 조정하며 팀원별 업무를 할당했습니다.</li><li><strong>문서 최신화</strong> — 구글 드라이브 공유 문서로 기획안 수정과 작업 요청 사항을 발생 즉시 반영해 팀 내 정보 공유를 유지했습니다.</li></ul><div class="img-row"><img src="images/shrine-04.png" alt=""><img src="images/shrine-05.png" alt=""></div><p style="text-align:center;font-size:12px;color:var(--ink-3)">주간 회의록 · 일정표</p><ul><li><strong>GitHub – Discord 연동</strong> — 모든 직군이 작업 내역을 커밋하고 모바일에서도 프로젝트 로그를 확인할 수 있는 환경을 구성했습니다.</li></ul><div class="img-row"><img src="images/shrine-06.png" alt=""><img src="images/shrine-07.png" alt=""></div><p style="text-align:center;font-size:12px;color:var(--ink-3)">GitHub 커밋 로그의 Discord 연동</p>`
          },
          {
            title: "2. 어드벤처 총괄 기획",
            tag: "담당 업무",
            html: `<p>캐릭터 스킬, 몬스터 AI 등 전투 시스템 설계와 맵·몬스터 컨셉 디자인 기획을 담당했습니다.</p><h2>2.1 몬스터 기획</h2><ul><li><strong>공통 행동 프로세스</strong> — 시야 거리 기반 캐릭터 인식, 공격 타입에 따른 선공 여부, 추적·공격 프로세스, 투사체 발사 몬스터의 동작 방식을 정의하고 <strong>변수와 데이터 테이블</strong>로 구조화해 개발팀이 바로 구현할 수 있게 전달했습니다.</li><li><strong>디자인 컨셉</strong> — 챕터별 몬스터의 외형 특징, 색상 계열, 레퍼런스 이미지를 함께 제공해 아트팀이 디자인 방향을 명확히 잡도록 했습니다.</li></ul><img src="images/shrine-08.png" alt=""><p style="text-align:center;font-size:12px;color:var(--ink-3)">몬스터 공통 프로세스 기획안</p><img src="images/shrine-09.png" alt=""><p style="text-align:center;font-size:12px;color:var(--ink-3)">몬스터 디자인 컨셉 기획안</p><h2>2.2 마을 & 탐험 맵 기획</h2><ul><li><strong>마을 맵</strong> — 상점, 흥신소, 저승 재판소, 퀘스트 알림판, 저승 문 등 5개 구역으로 구성하고 각 오브젝트의 리소스명, 배치 크기, 레이어 순서를 정의했습니다. 구역별로 저승 세계관에 맞는 아트 컨셉을 제시했습니다.</li><li><strong>탐험 맵</strong> — 챕터별 던전 구조를 아웃라인으로 설계하고 구역별 몬스터 배치, 발판 동작 방식, 기믹 구조를 정의했습니다. 통과 가능한 발판, 상하 이동 발판, 레버 연동 장치 등 구역마다 다른 기믹으로 탐험 흐름에 변화를 주었습니다.</li></ul><img src="images/shrine-10.png" alt=""><p style="text-align:center;font-size:12px;color:var(--ink-3)">마을맵 구성 및 디자인 컨셉 기획안</p><img src="images/shrine-11.png" alt=""><p style="text-align:center;font-size:12px;color:var(--ink-3)">탐험맵(던전) 구성 기획안</p><h2>2.3 캐릭터 애니메이션 & 이펙트 기획</h2><ul><li>더블 점프, 기본 공격, 패링, 슬라이딩 등 주요 동작별로 애니메이션·이펙트·사운드를 정의했습니다.</li><li>각 동작을 준비 · 액션 · 마무리 단계로 나누고 <strong>리소스명, 루프 타입, 재생 시간(ms)</strong>을 명시해 아트팀의 제작 기준을 분명히 했습니다. 레퍼런스 이미지와 영상을 함께 제공했습니다.</li></ul><img src="images/shrine-12.png" alt=""><p style="text-align:center;font-size:12px;color:var(--ink-3)">애니메이션 및 이펙트 기획안</p><img src="images/shrine-13.gif" alt=""><p style="text-align:center;font-size:12px;color:var(--ink-3)">기획안을 바탕으로 완성된 애니메이션 초안</p>`
          },
          {
            title: "3. 회고 — 결단력과 타 직군 이해",
            tag: "회고",
            html: `<div class="callout insight"><div class="callout-ico">💡</div><div class="callout-body"><p>완결되지 못한 아쉬움은 있지만, 기획 조율, 시스템 구현의 현실적 한계, 지속적인 프로젝트 관리의 중요성을 배운 프로젝트입니다. 부족했던 두 가지를 정리했습니다.</p></div></div><h2>① 결단력의 부재</h2><div class="quote">기획자는 항해사와 같다.<span>명확한 기준과 목표를 세우고 방향을 제시하는 사람. 항해사가 갈피를 잡지 못하면 선원들은 저마다의 방향으로 노를 젓는다.</span></div><h3>상황</h3><p>팀 빌딩 당시에는 RGB 컬러코드를 조합해 스킬을 습득하고 던전을 클리어하는 로그라이크 「팔레토」를 기획했습니다. 그러나 첫 회의에서 시나리오 담당 팀원이 <em>저승 컨셉</em>의 동양풍 어드벤처를 제안했고, 영화 「파묘」·게임 「산나비」의 흥행과 맞물려 많은 팀원이 관심을 보였습니다.</p><img src="images/shrine-14.png" alt=""><p style="text-align:center;font-size:12px;color:var(--ink-3)">초기 아이디어 컨셉안 일부</p><h3>문제</h3><div class="callout problem"><div class="callout-ico">⚠</div><div class="callout-body"><p>투표 결과는 4 대 4. 기획 직군이 스토리와 컨셉을 보완해 재투표하기로 했고, 약 2주 뒤 재투표를 거쳐 저승에서 신당을 운영하며 몬스터를 처치하는 멀티 포맷으로 컨셉이 바뀌었습니다. 결국 다른 팀보다 <strong>3주 가까이 늦게</strong> 프로젝트에 착수했습니다.</p></div></div><div class="img-row"><img src="images/shrine-15.png" alt=""><img src="images/shrine-16.png" alt=""></div><p style="text-align:center;font-size:12px;color:var(--ink-3)">변경된 컨셉 기획안 일부</p><h3>배운 점</h3><ul><li>새로운 아이디어를 빠르게 수용하든, 기존 기획안을 강하게 밀고 나가든 — 어느 쪽이었어도 3주를 허비하지는 않았을 것입니다.</li><li>이후에는 새 의견이나 피드백이 나오면 <strong>수용할 부분과 아닌 부분을 빠르게 판단해 명확히 구분</strong>하도록 노력했습니다.</li></ul><div class="quote">모두를 만족시키는 기획은 존재하지 않는다.<span>수많은 의견과 상황 속에서 빠른 판단으로 최선의 선택과 결과를 이끌어 내는 것이 기획자의 역량이다.</span></div><h2>② 타 직군 이해의 부재</h2><h3>상황</h3><p>기획자의 가장 중요한 역량은 설득력과 전달력이라고 생각합니다. 마을 맵을 구상하고 아트 리소스를 처음 요청할 때, 레퍼런스 이미지·러프 스케치·인게임 규격이면 충분하다고 생각했습니다. 그런데 아트 팀원에게서 <strong>"해상도는 얼마로 작업하면 될까요?"</strong>라는 질문이 왔습니다.</p><h3>문제</h3><div class="callout problem"><div class="callout-ico">⚠</div><div class="callout-body"><p>처음엔 "그런 것까지 정해줘야 하나?"라고 생각했지만, 실제로는 전달하지 않은 것이 아니라 <strong>몰라서 전달하지 못한 것</strong>이었습니다. 아트 팀원은 어드벤처 게임 개발이 처음이었고, 팀장이자 기획자인 제가 세세한 가이드를 제시해야 하는 상황이었습니다.</p></div></div><h3>대응</h3><p>레딧과 구글에서 우리 게임과 비슷한 오픈 스프라이트 시트를 모두 내려받아 분석했습니다. 다른 게임의 해상도와 인게임 배치 규격을 비교해 우리 게임의 기준을 정리하고, 리소스마다 규격과 해상도를 함께 전달했습니다.</p><div class="img-row"><img src="images/shrine-17.png" alt=""><img src="images/shrine-18.png" alt=""></div><p style="text-align:center;font-size:12px;color:var(--ink-3)">할로우 나이트의 기둥 리소스와 실제 인게임(1920×1080) 규격 비교</p><h3>배운 점</h3><ul><li>기획을 효과적으로 전달하고 설득하려면 상대방의 입장이 되어 보는 것이 먼저입니다. 전달받는 사람의 업무 방식과 필요한 정보를 알아야 합니다.</li><li>그전까지는 기획안을 일방적으로 전달하고 구현을 맡기는 방식이었습니다. 이후 작업 요청 시 <strong>추가로 필요한 정보가 있는지, 문서만으로 이해되지 않는 부분은 없는지</strong>를 먼저 확인하는 습관을 들였습니다.</li></ul><div class="quote">설득의 바탕은 이해이다.<span>상대를 이해시키려면 내가 먼저 상대를 이해해야 한다.</span></div>`
          }
        ]
      },
      {
        title: "모션인식 포수 시뮬레이터",
        meta: "졸업 작품 · 기획 & 개발 · 2인",
        cover: "images/catcher-01.png",
        lessons: [
          {
            title: "프로젝트 소개",
            tag: "개요",
            links: [{"label": "▶ 플레이 영상", "url": "https://youtu.be/WGqZWfMl304"}],
            html: `<img src="images/catcher-01.png" alt=""><div class="callout"><div class="callout-ico">⚾</div><div class="callout-body"><p>전공(영상신호처리)의 졸업 작품으로 기획과 개발에 참여한 프로젝트입니다. 유저가 웹캠 앞에서 직접 구종과 위치 사인을 내면 투수가 이를 인식해 공을 던지는 <strong>포수 체험 시뮬레이션</strong>입니다. 랜덤으로 등장하는 타자의 특성과 약점에 맞춰 사인을 내고, 한 이닝을 무사히 막아내면 승리합니다.</p></div></div><table><tr><th>구분</th><td>졸업 작품 (영상신호처리)</td></tr><tr><th>인원 · 기간</th><td>2인 · 약 2개월</td></tr><tr><th>기술</th><td>Python · MediaPipe · OpenCV(KNN) · UDP 소켓 · Unity</td></tr><tr><th>역할</th><td>주제·모델 선정 / 제스처 인식 프로그램 및 Unity 데이터 전송 구현 / 게임 총괄 기획</td></tr></table><h2>플레이 영상</h2><div style="position:relative;padding-top:56.25%;margin:0 0 18px"><iframe src="https://www.youtube.com/embed/WGqZWfMl304" title="YouTube video" style="position:absolute;inset:0;width:100%;height:100%;border:0;border-radius:12px" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>`
          },
          {
            title: "개발 과정",
            tag: "과정",
            html: `<h2>1. 주제 · 모델 선정</h2><p>4학년 1학기 졸업 작품에서 영상신호처리 분야 안에서 자유롭게 주제를 정할 수 있었습니다. 게임 기획자를 목표로 하고 있었기에 전공 지식을 게임에 활용할 방법을 찾던 중 Google의 손동작 인식 모델 <strong>MediaPipe</strong>를 알게 되었습니다.</p><ul><li>MediaPipe는 이미지에서 손을 감지하는 Palm Detection Model과 3D 핸드 키포인트를 반환하는 Hand Landmark Model로 구성됩니다.</li><li>랜드마크 포인트에 각도 연산(arcCos 기반 내적·정규화)을 적용해 각도 데이터를 추출하고, 특정 제스처를 학습시키면 실시간 손동작 인식이 가능합니다.</li><li>마우스·키보드 없이 몸을 움직여 조작하는 방식이 기존 게임과 다른 물리적 몰입감을 줄 것이라 판단해, 처음에는 <strong>모션 인식 3D 플랫포머</strong>를 주제로 선정했습니다.</li></ul><img src="images/catcher-02.png" alt=""><p style="text-align:center;font-size:12px;color:var(--ink-3)">MediaPipe 모델</p><h2>2. 프로토타입 제작</h2><p>제스처 인식 파이썬 프로그램을 구현하고, 인식한 제스처를 <strong>UDP 소켓</strong>으로 Unity 서버에 텍스트 데이터로 전송하는 방식을 적용했습니다. 앞·뒤·좌·우·점프·정지 6가지 이동을 제스처로 조작하는 프로토타입을 만들었습니다.</p><div class="callout"><div class="callout-ico">🎬</div><div class="callout-body"><p>초기 프로토타입 영상은 <a href="https://app.notion.com/p/35d9d4ab6bba803dab0addb85f5450a1" target="_blank" rel="noopener">노션 원문에서 보기 ↗</a></p></div></div><h2>3. 주제 전환</h2><p>교수님께서 아이디어는 좋지만 주제의 핵심이 더 부각되면 좋겠다는 피드백을 주셨습니다. 6가지 이동을 모션으로 구현하는 것만으로는 "모션 인식을 활용한 유저와 캐릭터의 상호작용"이라는 핵심이 퇴색된다는 평가였습니다.</p><div class="callout insight"><div class="callout-ico">💡</div><div class="callout-body"><p>실제 야구에서 포수가 핸드 사인으로 구종을 전달하는 방식에 착안해, 유저가 웹캠으로 사인을 내면 투수가 이를 인식해 공을 던지는 <strong>야구 시뮬레이션</strong>으로 주제를 전환했습니다. 모션 인식과 게임의 상호작용이 훨씬 직관적으로 드러나는 방향입니다.</p></div></div><h2>4. 제스처 인식 및 데이터 전송</h2><img src="images/catcher-03.png" alt=""><ul><li>FastBall, Slider, Curve, ChangeUp, Two-seam Fastball, Sinker 6가지 구종과 스트라이크존 9개 구역에 대응하는 제스처의 각도 데이터를 수집·라벨링해 CSV로 저장했습니다.</li><li>OpenCV의 <strong>KNN 모델</strong>로 학습시키고, 웹캠 입력 제스처의 각도 데이터와 비교해 가장 일치하는 데이터를 반환하는 방식으로 인식 프로그램을 구현했습니다.</li><li>웹캠 영상을 인코딩해 인식된 제스처 텍스트와 함께 UDP 소켓으로 Unity 서버에 전송하는 부분까지 구현했습니다.</li></ul><div class="callout"><div class="callout-ico">🎬</div><div class="callout-body"><p>제스처 인식 테스트 영상은 <a href="https://app.notion.com/p/35d9d4ab6bba803dab0addb85f5450a1" target="_blank" rel="noopener">노션 원문에서 보기 ↗</a></p></div></div><img src="images/catcher-04.png" alt=""><p style="text-align:center;font-size:12px;color:var(--ink-3)">제스처 인식 및 데이터 전송 구조</p><h2>5. 기초 기획안 작성</h2><img src="images/catcher-05.png" alt=""><p style="text-align:center;font-size:12px;color:var(--ink-3)">게임 진행 플로우 · 타자 정보 · 구종별 궤적 · 씬별 UI</p><p>인식·전송 구현을 마친 뒤 게임 진행 플로우, 타자 정보, 구종별 궤적, 씬별 UI 등 게임 전반의 기초 기획안을 작성했습니다. 게임 스타일에 맞는 야구장·선수 모델링 에셋과 함께 Unity 개발 팀원에게 전달하며 역할을 마무리했습니다.</p>`
          },
          {
            title: "회고",
            tag: "회고",
            html: `<ul><li><strong>한계</strong> — 재미보다 기능 검증에 집중한 프로젝트였습니다. 심사 기간을 빼면 2개월이 채 안 되는 일정과 2인이라는 인원 때문에 게임 볼륨을 크게 잡을 수 없었습니다.</li><li><strong>아쉬운 점</strong> — 타격 결과가 안타·홈런·스트라이크·볼·플라이아웃 5가지뿐입니다. 번트·파울을 추가해 변수를 만들거나 타자뿐 아니라 투수도 함께 변화하게 구성했다면 랜덤성에서 오는 재미를 더할 수 있었을 것입니다.</li><li><strong>배운 점</strong> — 짧은 기간과 제한된 인원에도 전공 지식을 실제 게임으로 구현한 것 자체가 이 프로젝트의 의미입니다. 기획자로서 <strong>기술적 구현 가능성을 이해하고 설계하는 것</strong>이 얼마나 중요한지 배웠습니다.</li></ul>`
          }
        ]
      }
    ]
  },
  {
    title: "메이플스토리 기획 문서",
    layout: "cards",
    mids: [
      {
        title: "메이플 프론티어 — 아이디어 제안서",
        meta: "메커톤 아이디어 제안서 · 2D 횡스크롤 탐험 디펜스",
        cover: "images/frontier-01.png",
        lessons: [
          {
            title: "1. 게임 개요",
            tag: "제안서",
            html: `<img src="images/frontier-01.png" alt=""><img src="images/frontier-02.png" alt=""><p><strong>메이플 프론티어</strong>는 메이플스토리 세계관을 배경으로, 탐험을 통해 몬스터를 수집하고 유닛으로 활용해 거점을 방어하는 <strong>2D 횡스크롤 탐험 디펜스 게임</strong>입니다. 헤네시스를 시작으로 챕터마다 새로운 지역이 열리고, 탐험 페이즈에서 사냥한 몬스터는 도감에 등록되어 전투에서 유닛으로 활용됩니다.</p><table><tr><th>장르</th><td>2D 횡스크롤 탐험 디펜스</td></tr><tr><th>플랫폼</th><td>메이플스토리 월드</td></tr><tr><th>배경</th><td>빅토리아 아일랜드 — 헤네시스를 시작으로 챕터별 새로운 지역 개방</td></tr><tr><th>핵심 키워드</th><td>탐험 · 수집 · 전투 · 성장</td></tr><tr><th>플레이타임</th><td>챕터당 1시간 ~ 1시간 30분</td></tr></table>`
          },
          {
            title: "2. 핵심 재미 요소",
            tag: "제안서",
            html: `<div class="quote">탐험 → 수집 → 전투 → 성장<span>끊기지 않고 순환하는 루프가 메이플 프론티어의 핵심 재미입니다.</span></div><ul><li><strong>선택이 전략이 된다</strong> — 탐험에서 어떤 몬스터를 얼마나 수집했느냐가 전투 전략을 결정하고, 전투 결과가 다시 성장과 새 지역 해금으로 이어져 더 넓은 탐험의 이유가 됩니다. 어떤 몬스터를 사냥하고, 어떤 장비와 시설을 만들고, 언제 전투에 돌입할지 모든 선택이 결과에 영향을 미칩니다.</li><li><strong>메이플 IP의 색다른 확장</strong> — 항상 적으로만 마주쳤던 몬스터가 유저와 한 편이 되어 싸우고, 사냥을 거듭할수록 유닛의 전력도 강해집니다.</li></ul>`
          },
          {
            title: "3. 게임 시퀀스",
            tag: "제안서",
            html: `<img src="images/frontier-03.png" alt=""><p style="text-align:center;font-size:12px;color:var(--ink-3)">전체 게임 시퀀스</p><h2>3.1 탐험 페이즈</h2><ul><li>기존 메이플스토리와 같은 방식으로 횡스크롤 맵을 자유롭게 이동하며 몬스터 사냥, 채집, 채광으로 재화를 획득합니다.</li><li>사냥한 몬스터는 도감에 등록되며, 같은 몬스터를 많이 사냥할수록 유닛 이해도가 올라 능력치가 강화됩니다. 획득한 재화로 장비를 강화하거나 방어시설을 건설해 전투를 준비합니다.</li><li>탐험 시간은 최대 1시간이며, 준비가 끝나면 유저 선택으로 즉시 전투에 돌입할 수 있습니다.</li></ul><img src="images/frontier-04.png" alt=""><div class="img-row"><img src="images/frontier-05.png" alt=""><img src="images/frontier-06.png" alt=""></div><h2>3.2 전투 페이즈</h2><ul><li>거점으로 몰려드는 웨이브를 <strong>플레이어 직접 전투 + 몬스터 유닛 소환</strong>의 이중 구조로 방어합니다. 유닛은 전투 중 적을 처치해 얻는 재화를 소모해 하단 슬롯에서 소환하며, 공격 방식·스테이터스·이동 속도가 유닛마다 다릅니다.</li><li>일정 시간 웨이브를 막아내면 스테이지 클리어. 플레이어 사망 또는 거점 체력 0이면 경험치·재화 손실 페널티와 함께 탐험 페이즈로 복귀해 재정비 후 재도전합니다.</li></ul><img src="images/frontier-07.png" alt=""><h2>3.3 챕터 종료</h2><ul><li>챕터 내 전투 스테이지를 모두 클리어하면 챕터가 끝나고, 다음 챕터에서 새로운 맵·몬스터·상위 장비·방어시설이 해금됩니다. 챕터 1은 헤네시스, 이후 챕터는 빅토리아 아일랜드의 새 지역으로 확장됩니다.</li></ul>`
          },
          {
            title: "4. 개발 전략",
            tag: "제안서",
            html: `<ul><li><strong>개발 방식</strong> — 제한된 제작 기간 안에 완성도를 확보하기 위해 탐험 페이즈와 전투 페이즈를 분리해 병렬 개발합니다. 두 파트를 독립적으로 구현한 뒤 통합해 효율을 높입니다.</li><li><strong>리소스 활용</strong> — 캐릭터·몬스터 스프라이트, 전투 이펙트 등 애니메이션이 필요한 요소는 MSW의 기존 리소스를 최대한 활용하고, 아트팀은 UI·배경·일러스트 제작에 집중합니다.</li><li><strong>콘텐츠 확장</strong> — 출품 목표는 3챕터 내외의 완성본이며, 이후 챕터를 확장해 콘텐츠 볼륨을 지속적으로 키웁니다.</li></ul>`
          }
        ]
      },
      {
        title: "유니온 시스템 분석",
        meta: "메이플스토리 시스템 분석서",
        cover: "images/union-01.png",
        lessons: [
          {
            title: "유니온 시스템 분석",
            tag: "시스템 분석",
            links: [{"label": "📎 분석서 PDF · 엑셀 (Notion)", "url": "https://app.notion.com/p/35d9d4ab6bba80108f11d5aee3df3032"}],
            html: `<p>메이플스토리의 핵심 계정 성장 시스템인 <strong>유니온</strong>을 분석한 문서입니다. 상세 UI와 테이블을 재구성하고, 적용 구조와 기획 의도를 분석했습니다.</p><img src="images/union-01.png" alt=""><p style="text-align:center;font-size:12px;color:var(--ink-3)">분석서 일부</p><h2>산출물</h2><ul><li>메이플스토리_유니온시스템_분석서 (이정훈).pdf — 시스템 분석서</li><li>공격대_효과_테이블 (이정훈).xlsx — 분석서에 포함된 테이블의 원본 엑셀</li></ul><div class="callout"><div class="callout-ico">📎</div><div class="callout-body"><p>첨부 파일(PDF·xlsx)은 <a href="https://app.notion.com/p/35d9d4ab6bba80108f11d5aee3df3032" target="_blank" rel="noopener">노션 원문에서 보기 ↗</a></p></div></div>`
          }
        ]
      },
      {
        title: "길드 콘텐츠 · 길드 스킬 개선",
        meta: "메이플스토리 시스템 개편안",
        cover: "images/guild-01.png",
        lessons: [
          {
            title: "길드 콘텐츠 및 길드 스킬 시스템 개선",
            tag: "개선안",
            links: [{"label": "📎 개편서 PDF (Notion)", "url": "https://app.notion.com/p/35d9d4ab6bba800680a2e2973814ffd8"}],
            html: `<p>메이플스토리의 길드 콘텐츠와 길드 스킬 시스템을 분석하고, 구조적 문제점을 개선하기 위한 구체적인 개편안을 제시한 문서입니다.</p><table><tr><th>문제점</th><th>개선 방향</th></tr><tr><td>주간 반복 구조로 인한 콘텐츠 피로도</td><td>시즌 단위 초기화로 전환</td></tr><tr><td>길드 랭킹 의존적인 보상 체계 → 길드 선택의 강제성</td><td>개인 보상 구조 강화</td></tr><tr><td>길드 성장 동기 부족</td><td>주간 보스 미션 도입</td></tr></table><p>개선안을 통해 유저가 보다 유연하고 공정한 방식으로 보상을 획득하고, 길드 단위 협력과 커뮤니티 가치를 한층 강화할 수 있도록 했습니다.</p><img src="images/guild-01.png" alt=""><p style="text-align:center;font-size:12px;color:var(--ink-3)">개편서 일부</p><h2>산출물</h2><ul><li>메이플스토리_길드콘텐츠및_길드스킬_시스템개편서 (이정훈).pdf — 전문</li></ul><div class="callout"><div class="callout-ico">📎</div><div class="callout-body"><p>첨부 파일(PDF)은 <a href="https://app.notion.com/p/35d9d4ab6bba800680a2e2973814ffd8" target="_blank" rel="noopener">노션 원문에서 보기 ↗</a></p></div></div>`
          }
        ]
      }
    ]
  },
  {
    title: "대외 활동",
    layout: "list",
    mids: [
      {
        title: "동아리 · 캠프",
        lessons: [
          {
            title: "외(계인)노(동)자",
            tag: "시스템 & 콘텐츠 기획",
            html: `<table><tr><th>역할</th><td>시스템 & 콘텐츠 기획</td></tr><tr><th>소속</th><td>대학생 연합 게임제작 동아리 Bridge — 정규 프로젝트</td></tr><tr><th>기간</th><td>2025.03 ~ 2025.11 / 2026.03 ~</td></tr></table><ul><li>외계인 택배회사를 컨셉으로 한 아케이드 게임을 제작했고, 현재 Google Play 출시를 앞두고 내부 테스트 심사를 진행 중입니다.</li><li>미니게임 콘텐츠 기획, 스테이지 디자인, 성장 및 기타 시스템 기획을 담당하며 기획 의도를 명확히 구조화하고 전달하는 방식을 배웠습니다.</li></ul>`
          },
          {
            title: "메이플 대학생 커리어 캠프 1기",
            tag: "실무과제 우수상",
            html: `<table><tr><th>역할</th><td>수료 · 실무과제 우수상 수상</td></tr><tr><th>소속</th><td>메이플 대학생 커리어 캠프 1기</td></tr><tr><th>기간</th><td>2024.08</td></tr></table><ul><li>10대·20대 트렌드를 타깃한 마케팅 방안을 주제로, 메이플스토리의 핵심 콘텐츠인 보스 레이드의 기믹과 패턴을 모바일에서 미리 체험할 수 있는 <strong>플레이어블 광고</strong>를 기획해 우수상을 수상했습니다.</li></ul>`
          },
          {
            title: "극락가신당",
            tag: "시스템 기획 & 프로젝트 매니징",
            html: `<table><tr><th>역할</th><td>팀장 · 시스템 기획 & 프로젝트 매니징</td></tr><tr><th>소속</th><td>대학생 연합 게임제작 동아리 Bridge — 정규 프로젝트</td></tr><tr><th>기간</th><td>2024.03 ~ 2024.08.31</td></tr></table><ul><li>경영 시뮬레이션과 플랫포머가 결합된 저승 배경 어드벤처 게임 「극락가신당」을 제작했습니다.</li><li>어드벤처 포맷의 전반적인 시스템 기획과 프로젝트 매니징을 맡아 팀의 방향을 정하고 일정과 역할을 조율했으며, 타 직군의 업무를 이해하고 각자의 관점에서 소통하며 팀 전체의 흐름을 이끌었습니다.</li></ul>`
          },
          {
            title: "건국대학교 교내 게임개발 스터디 운영",
            tag: "스터디",
            html: `<table><tr><th>역할</th><td>게임 기획 스터디 소모임 운영</td></tr><tr><th>소속</th><td>건국대학교 공과대학 학술동아리 BOOT4DIM</td></tr><tr><th>기간</th><td>2023.09 ~ 2024.03</td></tr></table><ul><li>격주로 게임 관련 서적과 칼럼을 정독하고 온라인 강의를 수강했으며, 창작 게임 아이디어 제안서를 작성해 상호 피드백을 진행했습니다.</li><li>게임 디자인의 이론과 개발 과정의 기초를 익혔습니다.</li></ul>`
          }
        ]
      }
    ]
  }
];
