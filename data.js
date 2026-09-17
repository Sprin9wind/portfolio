/* ============================================================
   포트폴리오 내용 데이터
   원본: 노션 「2026 메커톤 Portfolio」 + DEVELROCKET 부트캠프 산출물(Google Drive · Figma)
   사실은 원문 문서 기준, 문장은 기획서 구조(개요 표 → 담당 업무 → 성과 → 회고)로 재정리했다.
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
            html: `<div class="callout insight"><div class="callout-ico">💡</div><div class="callout-body"><p><strong>창의적인 아이디어를 게임 디자인으로 풀어내는 기획자, 이정훈입니다.</strong><br>게임은 단순한 재미를 넘어 유저에게 새로운 경험과 의미를 전달하는 매체라고 믿습니다.</p></div></div><h2>이렇게 일합니다</h2><ul><li><strong>아이디어를 실제 기획과 구현으로 잇습니다</strong> — 다양한 경험을 바탕으로 기존의 틀에 얽매이지 않고 새로운 아이디어를 발굴하고, 이를 기획 문서와 실제 구현으로 발전시켜 왔습니다.</li><li><strong>핵심 재미를 지키면서 확장합니다</strong> — 게임이 가진 핵심적인 재미와 가치를 유지하면서도 유저에게 새로운 경험을 제공하는 방향을 고민합니다.</li><li><strong>직군에 맞게 전달합니다</strong> — 아트·프로그래밍 등 각 직군이 필요로 하는 정보를 선별해 문서화합니다. 협업 비용을 줄이는 것이 기획자의 역할이라고 생각합니다.</li><li><strong>계속 배우고 성장합니다</strong> — 새로운 도전을 두려워하지 않고, 프로젝트마다 부족했던 점을 기록하며 다음 프로젝트에 반영합니다.</li></ul><h2>핵심 역량</h2><table><tr><th>역량</th><th>내용</th><th>근거 프로젝트</th></tr><tr><td>시스템 기획</td><td>스킬·스테이터스·대화 시스템의 구조와 데이터 테이블 설계</td><td>외(계인)노(동)자 · 극락가신당</td></tr><tr><td>콘텐츠 · 레벨 기획</td><td>미니게임 플레이 루프, 스테이지 배치, 몬스터·맵·기믹 설계</td><td>외(계인)노(동)자 · 극락가신당</td></tr><tr><td>밸런스 · 데이터 분석</td><td>플레이테스트 데이터 수집, 스코어 편차 분석, 난이도 곡선·재화 조정</td><td>외(계인)노(동)자</td></tr><tr><td>프로젝트 매니징</td><td>팀장으로 주간 회의·일정·역할 조율, GitHub–Discord 협업 환경 구축</td><td>극락가신당</td></tr><tr><td>프로토타이핑</td><td>Python · MediaPipe · OpenCV(KNN) 제스처 인식, UDP → Unity 연동</td><td>모션인식 포수 시뮬레이터</td></tr><tr><td>시스템 분석 · 제안</td><td>라이브 게임 시스템 분석서, 개편안, 아이디어 제안서 작성</td><td>메이플스토리 유니온 분석 · 길드 개편안</td></tr></table><h2>연락처</h2><table><tr><th>지역</th><td>Seoul, South Korea</td></tr><tr><th>전화</th><td>010-4199-5723</td></tr><tr><th>이메일</th><td><a href="mailto:harry5493@gmail.com">harry5493@gmail.com</a></td></tr></table>`
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
            html: `<img src="images/alien-01.png" alt=""><div class="callout"><div class="callout-ico">📦</div><div class="callout-body"><p>대학생 연합 게임제작 동아리 <strong>Bridge</strong>의 정규 프로젝트로 개발 중인 작품입니다. 외계인 택배회사를 컨셉으로 한 아케이드 게임으로, 현재 Google Play 출시를 앞두고 내부 테스트 심사를 진행 중입니다.</p></div></div><table><tr><th>장르</th><td>아케이드 + 타이쿤</td></tr><tr><th>플랫폼</th><td>모바일 (Google Play 출시 예정)</td></tr><tr><th>기간</th><td>2025.03 ~ 2025.11 / 2026.03 ~ (총 9개월+)</td></tr><tr><th>역할</th><td>시스템 · 콘텐츠 기획</td></tr><tr><th>담당</th><td>미니게임 콘텐츠 · 대화 시스템 · 스킬 시스템 · 스테이지 디자인 · 난이도/재화 밸런스 · 기타 시스템</td></tr></table><h2>게임 구조</h2><ul><li><strong>미니게임</strong> — 각기 다른 특성을 가진 상자를 판별하고 지정된 배송 구역으로 이송하는 핵심 플레이</li><li><strong>스테이지 · 스토리</strong> — 챕터 기반 스테이지 구조와 스토리가 연계되어 진행</li><li><strong>성장 시스템</strong> — 택배 운반을 지원하는 스킬 시스템과 캐릭터 성장을 위한 일과 시스템으로 아케이드 플레이에 타이쿤 요소를 결합</li></ul><h2>플레이 영상</h2><a class="vid" href="https://youtu.be/EsUM0g3A2K0" target="_blank" rel="noopener"><img src="https://img.youtube.com/vi/EsUM0g3A2K0/maxresdefault.jpg" alt="플레이 영상 썸네일"><span class="vid-play"></span><span class="vid-cap">플레이 영상</span></a>`
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
            html: `<img src="images/catcher-01.png" alt=""><div class="callout"><div class="callout-ico">⚾</div><div class="callout-body"><p>전공(영상신호처리)의 졸업 작품으로 기획과 개발에 참여한 프로젝트입니다. 유저가 웹캠 앞에서 직접 구종과 위치 사인을 내면 투수가 이를 인식해 공을 던지는 <strong>포수 체험 시뮬레이션</strong>입니다. 랜덤으로 등장하는 타자의 특성과 약점에 맞춰 사인을 내고, 한 이닝을 무사히 막아내면 승리합니다.</p></div></div><table><tr><th>구분</th><td>졸업 작품 (영상신호처리)</td></tr><tr><th>인원 · 기간</th><td>2인 · 약 2개월</td></tr><tr><th>기술</th><td>Python · MediaPipe · OpenCV(KNN) · UDP 소켓 · Unity</td></tr><tr><th>역할</th><td>주제·모델 선정 / 제스처 인식 프로그램 및 Unity 데이터 전송 구현 / 게임 총괄 기획</td></tr></table><h2>플레이 영상</h2><a class="vid" href="https://youtu.be/WGqZWfMl304" target="_blank" rel="noopener"><img src="https://img.youtube.com/vi/WGqZWfMl304/maxresdefault.jpg" alt="플레이 영상 썸네일"><span class="vid-play"></span><span class="vid-cap">플레이 영상</span></a>`
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
    title: "기획 프로젝트",
    layout: "gallery",
    mids: [
      {
        title: "The Glitch — 방탈출 추리 비주얼 노벨",
        meta: "2026.04 · 5일 · 5인 · 개발 및 빌드 · 2번째 방 기획 · DEVELROCKET 비주얼 노벨 프로젝트",
        cover: "images/glitch-04.jpg",
        lessons: [
          {
            title: "프로젝트 소개",
            tag: "개요",
            links: [{"label": "▶ 웹 빌드 플레이 (Figma)", "url": "https://www.figma.com/proto/Pw41D43VaQMEDEYAYr8HaL/%EB%B9%84%EC%A3%BC%EC%96%BC%EB%85%B8%EB%B2%A8?node-id=0-1&t=iGKfucL0obqJpWIO-1"}, {"label": "📁 프로젝트 자료 (Drive)", "url": "https://drive.google.com/drive/folders/1E5LWCc8_aR438TmyUh3J_UHlHcDE46v-"}],
            html: `<img src="images/glitch-01.jpg" alt=""><div class="callout"><div class="callout-ico">🔒</div><div class="callout-body"><p>의문의 공간에 갇힌 다섯 사람. 목에는 규칙을 어기면 터지는 폭탄 목걸이. 함정과 규칙이 있는 방들을 단서를 모아 하나씩 탈출하는 <strong>방탈출 추리 비주얼 노벨</strong>입니다. 게임 엔진 없이 <strong>Figma 프로토타입</strong>만으로 5일 만에 플레이 가능한 웹 빌드를 완성했습니다.</p></div></div><table><tr><th>장르</th><td>비주얼 노벨 / 방탈출 추리</td></tr><tr><th>플랫폼</th><td>PC · 웹 브라우저 (Figma 프로토타입)</td></tr><tr><th>기간</th><td>2026.04.20 ~ 04.24 (5일) · 04.25 제출</td></tr><tr><th>팀</th><td>DEVELROCKET 기획 38기 3팀 · 5인</td></tr><tr><th>역할</th><td>개발 및 빌드 · 프롤로그/에필로그 · 2번째 방 기획 및 구현 · 연출 · 플러그인 적용</td></tr><tr><th>규모</th><td>1920×1080 씬 프레임 2,407개 · 방 5개 · 엔딩 3종</td></tr></table><h2>플레이 방법</h2><ul><li>위의 <strong>▶ 웹 빌드 플레이</strong> 버튼을 누르면 브라우저에서 바로 플레이할 수 있습니다. 설치가 필요 없습니다.</li><li>마우스로만 진행합니다. 화면을 클릭해 대사를 넘기고, 방 안의 물건을 눌러 단서를 찾습니다.</li><li>컴퓨터 성능에 따라 씬 전환·사운드 재생에 약간의 딜레이가 있을 수 있습니다. 연타는 피해 주세요.</li></ul><h2>시놉시스</h2><p>주인공은 낯선 공간에서 눈을 뜨고 네 명의 사람을 만납니다. 다섯 명 모두 각자의 사정이 있고, 반드시 이곳을 탈출해야 합니다. 시설에는 여러 개의 방이 있고, 방마다 규칙에 따라 게임을 진행하거나 나갈 단서를 찾아야 합니다. 규칙을 어긴 사람이 정말로 죽어 버리면서 '규칙을 어기면 죽는다'는 사실이 밝혀지고, 방을 클리어해도 출구 대신 다음 방이 나타납니다. 마지막 방에 도착한 순간, 그동안의 선택에 따라 결말이 달라집니다.</p><h2>코어 루프</h2><div class="quote">지역 진입 → 규칙 설명 → 단서 수집 → 탈출 → 다음 지역<span>방마다 다른 테마와 기믹. 플레이어의 선택이 쌓여 3개의 엔딩 중 하나로 이어진다.</span></div><h2>팀 구성 (R&R)</h2><table><tr><th>이름</th><th>역할</th></tr><tr><td>서민규</td><td>팀장 · 메인 시나리오 기획 · 대화 스크립트 정리</td></tr><tr><td>김진용</td><td>방 1개 기획 · 시스템 및 레벨 디자인</td></tr><tr><td>박원균</td><td>방 1개 기획 · 캐릭터 기획</td></tr><tr><td>김남욱</td><td>방 1개 기획 · 리소스 관리</td></tr><tr><td><strong>이정훈</strong></td><td><strong>방 1개 기획 · 개발 및 빌드 · 프롤로그/에필로그 · 연출</strong></td></tr></table><div class="img-row"><img src="images/glitch-02.jpg" alt=""><img src="images/glitch-03.jpg" alt=""></div><p style="text-align:center;font-size:12px;color:var(--ink-3)">프롤로그 — 다섯 인물이 처음 마주치는 장면</p>`
          },
          {
            title: "기획 과정 — 장르와 툴의 선택",
            tag: "기획",
            html: `<p>5일이라는 기간과 '기획자 5명, 아트·프로그래머 없음'이라는 팀 구성이 모든 결정의 전제였습니다. 무엇을 만들지보다 <strong>무엇을 만들 수 있는지</strong>를 먼저 좁혔습니다.</p><h2>아이디어 선정</h2><table><tr><th>후보</th><th>판단</th></tr><tr><td>연애 시뮬레이션</td><td>캐릭터 일러스트 품질이 몰입도에 직결되는 장르. AI 생성 이미지만으로 리소스를 충당해야 하는 환경에서는 기대 효과가 낮다고 판단</td></tr><tr><td>아포칼립스 생존물 (60 Seconds 류)</td><td>맵·아이템·생존 수치 등 구현해야 할 시스템이 방대해 기간 내 완성도 확보가 어려움</td></tr><tr><td>추리·퍼즐 (단간론파 류)</td><td>장르 클리셰가 많아 차별화된 아이디어 도출이 어려움</td></tr><tr><td><strong>방탈출 비주얼 노벨 (채택)</strong></td><td><strong>구조가 단순하면서도 플레이어의 능동적인 참여를 끌어냄. 방 단위로 나눠 병렬 제작 가능</strong></td></tr></table><h2>작업 툴 선정</h2><table><tr><th>후보</th><th>판단</th></tr><tr><td>Unity</td><td>익숙한 팀원이 소수, 학습 비용이 높아 제외</td></tr><tr><td>Ren'Py</td><td>비주얼 노벨 전용 엔진. 스토리 분기에는 강하지만 자유로운 인터랙션 구현에는 제약</td></tr><tr><td><strong>Figma (채택)</strong></td><td><strong>인터랙션 구현이 직관적이고, 팀원 각자가 독립적으로 기획과 구현을 병행할 수 있는 환경</strong></td></tr></table><h2>제작 구조 — 1인 1방의 액자식 구성</h2><ul><li>방탈출이라는 장르에 맞춰 팀원 각자가 컨셉이 다른 방 하나를 기획부터 구현까지 맡고, 마지막에 하나로 잇는 구조를 택했습니다.</li><li>분업 시 선행 작업이 끝나지 않으면 후속 인원의 시간이 낭비되는 것을 피하려는 선택이었습니다. 5일 안에 병렬로 진행할 수 있다는 것이 가장 큰 장점이었습니다.</li><li>대신 방마다 분위기·완성도 편차가 생길 위험을 안고 시작했고, 이는 회고에서 다룹니다.</li></ul>`
          },
          {
            title: "담당 업무 ① 개발 및 빌드",
            tag: "담당 업무",
            html: `<ul><li><strong>Figma 프로토타이핑 구조 설계</strong> — 모든 장면을 1920×1080 프레임으로 만들고 프로토타입 연결로 잇는 방식을 정의해 팀에 공유했습니다. 기본 UI(대사창·이름표·선택지)와 시스템 프로토타입을 첫날에 잡아 팀원들이 같은 틀 위에서 각자의 방을 만들 수 있게 했습니다.</li><li><strong>개발 환경의 한계 정리</strong> — Figma에서는 변수·조건 분기·사운드 트리거가 제한됩니다. 4/22에 구현 가능한 연출과 로직의 범위를 정리해 전달했고, 이후 기획이 이 범위 안에서 조정되도록 가이드했습니다.</li><li><strong>빌드 통합</strong> — 팀원들이 만든 방 2~5를 하나의 흐름으로 잇고, 4/24에 PC 고정 빌드로 전체 씬 연결을 마쳤습니다. 최종 파일 기준 1920×1080 씬 프레임 2,407개입니다.</li><li><strong>연출 · 플러그인</strong> — 장면 전환, 표정 교체, 힌트 카드, 키패드 입력 같은 공통 연출을 맡았고 필요한 플러그인을 적용했습니다.</li><li><strong>공정 전환 대응</strong> — 시나리오가 늦어지자 4/23에 '선 개발 후 시나리오' 방식으로 바꿔, 이미 만든 맵 위에 대사와 지문을 입히는 순서로 진행했습니다.</li></ul><table><tr><th>날짜</th><th>개발 파트 진행</th></tr><tr><td>04/21 (화)</td><td>Figma 기본 UI · 시스템 프로토타입 설계 완료. 인원 변동(6→5인)으로 방 개수 5개로 조정</td></tr><tr><td>04/22 (수)</td><td>Figma 개발 환경의 한계와 연출·로직 구성 개요를 팀에 공유</td></tr><tr><td>04/23 (목)</td><td>방 1(프롤로그) 개발 시작. 완성된 방 2~5로 플레이 가능한 통합 빌드 착수</td></tr><tr><td>04/24 (금)</td><td>PC 버전으로 빌드 고정. 방을 하나로 이은 최종 빌드 · 엔딩 3종 연결 · QA</td></tr></table><div class="img-row"><img src="images/glitch-10.jpg" alt=""><img src="images/glitch-11.jpg" alt=""></div><p style="text-align:center;font-size:12px;color:var(--ink-3)">팀원들이 만든 방들을 하나의 빌드로 통합 — 4번째 방(왼쪽), 5번째 방(오른쪽)</p>`
          },
          {
            title: "담당 업무 ② 2번째 방 「책임의 방」",
            tag: "담당 업무",
            html: `<img src="images/glitch-04.jpg" alt=""><p style="text-align:center;font-size:12px;color:var(--ink-3)">방의 첫 모습 — 밧줄에 매달린 돌 세 개, 버튼이 놓인 책상 세 개, 벽에 붙은 규칙 문서</p><h2>규칙</h2><div class="quote">오른쪽은 틀리면 옆 사람이 다치고, 왼쪽은 틀리면 본인이 다친다.<span>각자의 자리에 손을 올린다. 오른쪽 버튼은 3개 중 2개가 문을 여는 열쇠(66%), 잘못 고르면 오른쪽 사람이 대가를 치른다. 왼쪽 버튼은 3개 중 1개(33%~50%)가 열쇠이고, 잘못 고르면 본인이 대가를 치른다.</span></div><h2>설계 의도</h2><ul><li><strong>확률과 책임의 트레이드오프</strong> — '성공 확률이 높은 선택'과 '실패해도 남에게 피해를 주지 않는 선택'을 한 번의 클릭으로 맞세웠습니다. 정답이 정해진 퍼즐이 아니라 플레이어의 가치관을 묻는 방입니다.</li><li><strong>규칙을 대사로 설명</strong> — 급한 성격의 김민주가 확률을 계산해 오른쪽을 고르고, 조이서가 망설이는 대화 속에서 플레이어가 규칙을 자연스럽게 이해하도록 했습니다. 별도의 튜토리얼 텍스트 없이 캐릭터가 규칙을 보여 줍니다.</li><li><strong>즉각적인 결과 연출</strong> — 선택 직후 돌이 떨어지는 연출로 결과가 바로 돌아옵니다. 기획 단계에서 정한 '규칙을 어기면 정말로 다친다'는 세계관 규칙을 이 방에서 처음 체감하게 했습니다.</li><li><strong>엔딩까지 이어지는 분기</strong> — 이 방의 결과(김민주 생존/부상)가 이후 5번째 방과 엔딩으로 전달됩니다. Figma에서는 변수를 쓸 수 없어 이후 챕터를 두 갈래로 복제해 연결하는 방식으로 분기를 구현했습니다.</li></ul><h2>씬 흐름</h2><table><tr><th>단계</th><th>내용</th></tr><tr><td>1. 진입 · 탐색</td><td>방을 둘러보며 매달린 돌, 버튼, 벽의 규칙 문서를 발견한다</td></tr><tr><td>2. 규칙 파악</td><td>"각자의 자리에 손을 올려라…" 문서를 읽고 세 사람이 규칙을 해석한다</td></tr><tr><td>3. 자리 배치</td><td>김민주 → 조이서 → 나(이수호) 순으로 앉는다</td></tr><tr><td>4. 김민주의 선택</td><td>확률이 높은 오른쪽을 망설임 없이 누른다 — 실패 시 대가는 옆 사람 몫</td></tr><tr><td>5. 결과 연출</td><td>돌이 떨어진다. 성공/실패에 따라 대화와 관계가 달라진다</td></tr><tr><td>6. 플레이어의 선택</td><td>"뭐 해요? 언제까지 망설일 거예요?" — 오른쪽인가, 왼쪽인가</td></tr><tr><td>7. 문 개방</td><td>세 자물쇠가 풀리고 안개 낀 통로가 열린다. 다음 방으로</td></tr></table><div class="img-row"><img src="images/glitch-05.jpg" alt=""><img src="images/glitch-06.jpg" alt=""></div><p style="text-align:center;font-size:12px;color:var(--ink-3)">자리 배치와 선택 장면 / 실패의 대가</p><div class="img-row"><img src="images/glitch-09.jpg" alt=""><img src="images/glitch-08.jpg" alt=""></div><p style="text-align:center;font-size:12px;color:var(--ink-3)">결과 연출 / 세 자물쇠가 풀린 문</p><h2>구현</h2><ul><li>분기와 반복 장면을 포함해 이 방에만 1920×1080 프레임 196개를 사용했습니다.</li><li>규칙 문서·힌트 카드·키패드 등 상호작용 오브젝트는 클릭 영역과 오버레이 프레임으로 구성했습니다.</li><li>팀의 레벨 검토에서 방별 난이도를 비교하고, 어렵다고 판단된 방에는 더 구체적이고 다양한 힌트를 제공하는 방향으로 조정했습니다.</li></ul>`
          },
          {
            title: "담당 업무 ③ 프롤로그 · 에필로그",
            tag: "담당 업무",
            html: `<h2>프롤로그</h2><ul><li>LOCK 표시가 켜진 엘리베이터 방에서 눈을 뜨는 도입부. 다섯 인물(이수호·조이서·박주형·김이한·김민주)과 폭탄 목걸이 규칙을 소개합니다.</li><li>방 1은 퍼즐 대신 스토리 진행과 튜토리얼을 맡는 방으로 컨셉을 바꿨습니다(4/22 결정). 플레이어가 조작과 규칙을 익힌 뒤 2번째 방의 딜레마로 들어가도록 순서를 짰습니다.</li></ul><div class="img-row"><img src="images/glitch-01.jpg" alt=""><img src="images/glitch-02.jpg" alt=""></div><h2>에필로그 — 엔딩 3종</h2><table><tr><th>구분</th><th>분기 조건</th></tr><tr><td>엔딩 A</td><td>김민주 생존</td></tr><tr><td>엔딩 B</td><td>김민주 사망 · 김이한 GOOD</td></tr><tr><td>엔딩 C</td><td>김민주 사망 · 김이한 BAD</td></tr></table><ul><li>2번째 방의 결과와 이후 방에서의 선택이 조합되어 엔딩이 정해집니다. 일정상 엔딩을 4개에서 3개로 줄였습니다(4/24).</li><li>엔딩 씬은 프롤로그와 같은 엘리베이터 방으로 돌아와 "새로운 방……?"으로 끝나며, 다회차 플레이의 여지를 남깁니다.</li></ul><div class="img-row"><img src="images/glitch-12.jpg" alt=""><img src="images/glitch-13.jpg" alt=""></div><p style="text-align:center;font-size:12px;color:var(--ink-3)">엔딩 장면</p>`
          },
          {
            title: "팀 프로세스와 일정",
            tag: "프로세스",
            html: `<table><tr><th>날짜</th><th>진행</th></tr><tr><td>04/20 (월)</td><td>아이디어 회의 → '방탈출 어드벤처' 확정. 제작 플랫폼 Figma 선정, 1인 1방 원칙</td></tr><tr><td>04/21 (화)</td><td>R&R 확정. 인원 변동(6→5인)으로 방 5개로 조정. 캐릭터 5인 SCG·배경 제작, 기본 UI·시스템 프로토타입</td></tr><tr><td>04/22 (수)</td><td>방별 테마·퍼즐 기획 완료(방 1은 튜토리얼로). 5개 챕터 구성, 챕터 1 시나리오 착수. Figma 한계에 따른 연출 가이드</td></tr><tr><td>04/23 (목)</td><td>방 2~5 제작 완료, 플레이 가능한 빌드 구현. '선 개발 후 시나리오'로 공정 전환</td></tr><tr><td>04/24 (금)</td><td>챕터 시나리오 5개, 엔딩 3종 집필·구현. PC 고정 빌드, 전체 씬 연결, 표정 리소스 보강, QA</td></tr></table><h2>이슈와 대응</h2><table><tr><th>이슈</th><th>대응</th></tr><tr><td>팀원 1명 전출 (6→5인)</td><td>방 6개 → 5개로 재조정, 전체 볼륨 조정 회의</td></tr><tr><td>Figma 사운드 제약 — 효과음은 유료, 챕터별 BGM 불가</td><td>효과음만 유지하고 BGM은 외부 링크 재생. 사운드 연출은 개발 완료 후 점검으로 분리</td></tr><tr><td>시나리오 지연</td><td>새로 쓰는 대신 완성된 맵에 맞춰 대사·지문을 입히는 '선 개발 후 시나리오'</td></tr><tr><td>일정 부족</td><td>엔딩 4종 → 3종, 복합 선택지 축소</td></tr></table>`
          },
          {
            title: "회고",
            tag: "회고",
            html: `<div class="callout insight"><div class="callout-ico">💡</div><div class="callout-body"><p>기획과 구현이 한 사람에게 귀속되는 구조가 <strong>책임감과 병렬 속도</strong>를 만들었고, 같은 이유로 <strong>통일성</strong>을 잃었습니다. 다음에는 이 둘을 동시에 잡는 공정을 설계하는 것이 과제입니다.</p></div></div><h2>잘된 점</h2><ul><li>팀원 각자가 방 하나를 기획부터 구현까지 맡아 높은 책임감으로 임했고, 한 방 안에서는 방향성이 일관되게 유지되었습니다.</li><li>방 작업이 독립적이라 팀원 간 작업이 병렬로 진행되었고, 특정 파트에 발목 잡히지 않고 전체가 동시에 진척되었습니다. 5일이라는 기간을 쓰는 데 가장 큰 강점이었습니다.</li><li>Figma의 로직 한계를 수수께끼와 숨겨진 기믹으로 우회해, 유저에게 탐구할 거리를 주는 방식으로 최종 빌드를 완성했습니다.</li></ul><h2>개선할 점</h2><ul><li><strong>전체 통일성의 부재</strong> — 방마다 분위기와 완성도에 편차가 생겼습니다. 시나리오에 '가상의 공간'이라는 설정을 넣어 게임적 허용 범위 안에서 납득되게 했지만, 완성도 측면의 아쉬움은 남았습니다.</li><li><strong>Figma의 연출 한계</strong> — BGM은 외부 링크로 재생할 수밖에 없었고 SFX는 재생 딜레이가 있어 특정 상황에 정확히 맞춰 트리거하기 어려웠습니다. 의도한 연출을 온전히 구현하지 못한 장면이 생겼습니다.</li><li><strong>소통과 진행 공유</strong> — 각자 담당 방에 집중하다 보니 다른 팀원 작업에 피드백을 주고받기 애매했고, 진행 상황 공유도 충분하지 못했습니다.</li></ul><h2>다음 프로젝트에 가져갈 것</h2><ul><li>툴의 제약(사운드·분기·변수)은 기획 단계에서 먼저 검토하고, 환경에 맞는 연출안을 선제적으로 준비한다.</li><li>1인 1방 같은 병렬 구조를 쓰더라도 톤·난이도·규칙 표기의 공통 가이드를 먼저 만들고 시작한다.</li><li>피드백과 수정 사항은 코멘트·멘션으로 이력을 남기고 담당자에게 바로 전달되는 구조를 둔다.</li></ul>`
          },
          {
            title: "✍️ 추천 추가 사항 (직접 편집)",
            tag: "편집 필요",
            html: `<div class="callout problem"><div class="callout-ico">✍️</div><div class="callout-body"><p><strong>아래 항목은 직접 채우거나 지우세요.</strong> 채운 뒤에는 이 문서의 제목을 바꾸거나 문서 자체를 삭제하면 됩니다.</p><ul><li><strong>플레이 GIF 또는 짧은 영상</strong> — 2번째 방의 선택 장면을 화면 녹화해 넣으면 글보다 빠르게 전달됩니다.</li><li><strong>2번째 방 분기 플로우차트</strong> — 선택 → 결과 → 5번째 방 → 엔딩으로 이어지는 흐름을 그림 한 장으로.</li><li><strong>사용한 Figma 플러그인 목록과 용도</strong> — 어떤 문제를 어떤 플러그인으로 풀었는지.</li><li><strong>QA에서 잡은 버그와 수정 사례 2~3개</strong> — 연결 누락, 표정 불일치, 씬 전환 딜레이 등.</li><li><strong>플레이한 동기·강사의 반응</strong> — 인용 한두 줄이면 충분합니다.</li><li><strong>본인이 만든 규칙 문서·힌트 카드 원본 이미지</strong> — Figma에서 내보내 추가.</li><li>다른 팀원이 만든 방은 이름과 한 줄 소개 정도로만 두고, 상세는 링크로 대체하는 것을 권합니다.</li></ul></div></div>`
          }
        ]
      },
      {
        title: "SOS — Sands of Sin (로그라이트 RPG 기획서)",
        meta: "2026.05 ~ 06 · 2주 · 6인 · 전투 시스템 · 몬스터 시스템 · 밸런스 시뮬레이터 · DEVELROCKET 팀 기획서",
        cover: "images/sos-ui-battle.jpg",
        lessons: [
          {
            title: "프로젝트 소개",
            tag: "개요",
            links: [{"label": "🎮 전투 밸런스 시뮬레이터", "url": "sim/atb-battle-simulator.html"}, {"label": "📁 기획서 폴더 (Drive)", "url": "https://drive.google.com/drive/folders/1pDBVcxXzOy3Tahiv9hypRUPyqnQORHUk"}],
            html: `<img src="images/sos-ui-battle.jpg" alt=""><p style="text-align:center;font-size:12px;color:var(--ink-3)">전투 화면 — UI 이미지: 서희진(팀) · 전투 UI 와이어프레임: 이정훈</p><div class="callout"><div class="callout-ico">⏳</div><div class="callout-body"><p><strong>적들의 시간을 빼앗아 살아남는 로그라이트 RPG.</strong> 사후세계에서 살아남기 위해 적의 '수명'을 빼앗아 자신의 존재 시간을 연장합니다. 시간 = 행동력 = 수명 = 화폐. 자원이 하나로 수렴하기 때문에 모든 판단에 긴장이 생깁니다.</p></div></div><table><tr><th>장르</th><td>로그라이트 RPG (ATB 게이지 기반 턴제 전투)</td></tr><tr><th>플랫폼</th><td>PC (Steam)</td></tr><tr><th>기간</th><td>2026.05.26 ~ 06.05 (2주)</td></tr><tr><th>팀</th><td>DEVELROCKET 기획 38기 1팀 · 기획자 6인</td></tr><tr><th>담당</th><td>전투 시스템 기획 · 몬스터 시스템 기획 · 전투 UI 와이어프레임 · 전투 밸런스 시뮬레이터</td></tr><tr><th>산출물</th><td>전투 시스템 기획서 · 몬스터 시스템 기획서 · MonsterTB 데이터 테이블(4종) · ATB Battle Simulator(HTML)</td></tr></table><h2>핵심 차별점</h2><table><tr><th>차별점</th><th>내용</th></tr><tr><td>HP가 아닌 시간을 빼앗는 전투</td><td>적을 처치하면 경험치·골드 대신 '수명'을 얻는다. 전투 중에도 수명이 계속 줄어 느리게 싸울수록 손해</td></tr><tr><td>약점 커맨드</td><td>모든 적은 고유한 공격 순서 조합(약점 커맨드)을 가진다. 정답은 알려주지 않고, 피해량·이펙트 색으로 힌트를 준다</td></tr><tr><td>ATB 기반 로그라이트</td><td>행동 게이지가 차는 동안 수명이 실시간으로 준다. 오래 고민할수록, 비효율적인 입력일수록 손해</td></tr></table><h2>세계관 · 구조</h2><ul><li><strong>7대 죄악</strong> — 몬스터·장비·재화가 7대 죄악 테마로 일체화. 죄악 조각을 모아 장비를 제작하고 메타 스탯을 강화</li><li><strong>5챕터 스토리</strong> — 부정 → 분노 → 타협 → 우울 → 수용. 거점 캐러셀 → 중간 구역 마우솔레움(중간보스 죄목 기록관) → 최종 구역 랙(최종보스 모래시계 심판자)</li><li><strong>자원 순환</strong> — 런 시작 → 탐험(이동마다 소모) → 전투 승리 → 수명 흡수 → 상점 거래(수명 지불) → … 수명 0 = 게임 오버</li></ul><img src="images/sos-worldmap.jpg" alt=""><p style="text-align:center;font-size:12px;color:var(--ink-3)">월드맵 컨셉 — 박원균(팀)</p><h2>팀 구성 (R&R)</h2><table><tr><th>이름</th><th>역할</th></tr><tr><td>이재민</td><td>컨셉 · 세계관 · 퀘스트 리워드 · 최종 기획서 취합</td></tr><tr><td><strong>이정훈</strong></td><td><strong>전투 시스템 · 몬스터 시스템 · 전투 UI 와이어프레임 · 밸런스 시뮬레이터</strong></td></tr><tr><td>최지환</td><td>캐릭터 · 성장 · 장비 기획 · 서기</td></tr><tr><td>서희진</td><td>메타 성장 · 인벤토리 · 재화 · NPC/거점 · UI 구현</td></tr><tr><td>박원균</td><td>시나리오 · 레벨 디자인</td></tr><tr><td>최희재</td><td>몬스터 기획서 · 몬스터 아트 · 수명 시스템 · 전투 메카닉 보완</td></tr></table><div class="img-row"><img src="images/sos-ui-carousel.jpg" alt=""><img src="images/sos-ui-shop.jpg" alt=""></div><p style="text-align:center;font-size:12px;color:var(--ink-3)">거점 캐러셀 · 상점 UI — 서희진(팀)</p>`
          },
          {
            title: "출발점 — 「수명」 단일 자원 세계관 제안",
            tag: "아이디어",
            html: `<p>팀 편성 전인 5/22, 개인 아이디어 정리로 '모든 생명체에 고유한 수명이 부여된 세계'를 제안했습니다. 5/26 컨셉 회의에서 이 구조가 논의되어 최종 기획서의 <strong>시간 = 수명 = 화폐 단일 자원</strong> 구조로 발전했습니다.</p><table><tr><th>아이디어 정리 (5/22)</th><th>내용</th><th>최종 기획서 반영</th></tr><tr><td>세계관</td><td>수명을 거래하거나 살생으로 흡수하는 것이 일상인 세계. 수명의 많고 적음이 계급을 결정하고, 구역마다 시간의 흐름이 다르다</td><td>사후세계 · 7대 죄악 테마로 재구성</td></tr><tr><td>이터 (장치)</td><td>남은 수명 표시 · 개인 간 수명 거래 · 살생 시 수명 흡수의 세 기능</td><td>수명(LF) HUD · 상점 거래 · 처치 시 흡수로 계승</td></tr><tr><td>마을 페이즈</td><td>시간이 가장 느리게 흐르는 안전지대. 장비 구매/판매·성장 투자를 수명으로 거래</td><td>거점 캐러셀 (상점 · 제작 · 메타 강화 · 퀘스트)</td></tr><tr><td>탐험 페이즈</td><td>타일 이동마다 수명 소모, 구역별 소모량 차이, 개척 타일 재방문 시 감소, 조우 시 전투/우회/도주</td><td>타일맵 탐험 · 이동 소모 · 우회와 전투의 시간 효율 판단</td></tr><tr><td>전투 페이즈</td><td>턴제. 모든 행동에 수명 소모</td><td>ATB 게이지 + 실시간 수명 감소</td></tr><tr><td>귀환 · 런 종료</td><td>실시간 귀환 비용 표시, 수명 0 → 런 종료 후 정산과 성장 포인트</td><td>런 종료 시 레벨 초기화, 메타 성장 영구 유지</td></tr></table><div class="callout insight"><div class="callout-ico">💡</div><div class="callout-body"><p>회의에서는 '리얼타임은 몰입감이 있지만 불합리하게 느끼는 플레이어가 생길 수 있다'는 우려가 있었습니다. 전투 중에만 실시간으로 수명이 줄고 그 밖의 상황은 행동 단위로 소모하는 절충안이 채택되어, 제가 맡은 전투 시스템의 전제가 되었습니다.</p></div></div>`
          },
          {
            title: "전투 시스템 기획",
            tag: "담당 업무",
            links: [{"label": "▶ 전투 흐름 프로토타입 (Figma)", "url": "https://www.figma.com/proto/9kRQjUAuDLGzWRrPF1jQYi/Untitled?node-id=69-161&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=69%3A161"}],
            html: `<div class="callout"><div class="callout-ico">⚔</div><div class="callout-body"><p>전투의 목표는 적을 처치해 시간을 빼앗고, 그 시간으로 플레이어의 수명을 연장하는 것입니다. 플레이어와 적 모두 HP와 수명을 가지며, 전투 중에도 양쪽의 수명이 계속 줄기 때문에 <strong>빠르게 처치할수록 더 많은 수명을 얻습니다.</strong></p></div></div><h2>기본 구조 — ATB 게이지와 행동 예약</h2><ul><li>행동 게이지 기반 턴제 (Ref. 파이널 판타지 ATB). 양측 게이지가 자동으로 충전되고 100%에 도달하면 예약된 행동이 발동합니다. 행동은 동시에 실행되지 않고 한쪽이 끝난 뒤 다음이 진행됩니다.</li><li>플레이어는 <strong>행동 슬롯 4개</strong>에 행동을 미리 예약하고, 실행 전에는 예약을 바꿀 수 있습니다.</li><li>탐험 중 적이 있는 타일에 1칸 이내로 인접하면 자동으로 전투에 돌입합니다.</li></ul><h2>수식</h2><table><tr><th>항목</th><th>공식</th><th>설계 근거</th></tr><tr><td>수명 감소</td><td>수명 감소량 = 게이지 충전 시간(초) × 1</td><td>충전 중 1초당 수명 1 감소. 충전이 빠를수록 1사이클 소모가 준다</td></tr><tr><td>충전 시간</td><td>충전 시간(초) = 1000 / (100 + ATBSpeed / 5)</td><td>기본 10초. ATBSpeed 최대 500에서 5초로 수렴</td></tr><tr><td>기본 피해</td><td>공격 데미지 × 100 / (100 + 적 DEF)</td><td>최소 1, 소수점 버림. DEF가 높아질수록 경감 체감이 줄어드는 곡선, 피해 0 방지</td></tr><tr><td>약점 후보 행동</td><td>기본 피해 × 1.1</td><td>약점 커맨드에 포함된 공격에만. '이 공격이 후보일 수 있다'는 피드백 역할이라 소량</td></tr><tr><td>약점 커맨드 성공</td><td>기본 피해 × 5</td><td>공격 히스토리 안에 커맨드와 일치하는 부분 수열이 생기면 마지막 공격에 적용. ×1.1은 덮어씀</td></tr><tr><td>플레이어 피격</td><td>적 데미지 × 100 / (100 + DEF), 방어 시 DEF × 2, 회피 50%</td><td>PowerAtk는 방어 무시</td></tr></table><table><tr><th>ATBSpeed</th><th>충전 시간</th><th>1사이클당 수명 소모</th></tr><tr><td>0 (기본)</td><td>10.00초</td><td>10</td></tr><tr><td>100</td><td>8.33초</td><td>8</td></tr><tr><td>200</td><td>7.14초</td><td>7</td></tr><tr><td>300</td><td>6.25초</td><td>6</td></tr><tr><td>400</td><td>5.56초</td><td>6</td></tr></table><h2>설계 결정과 근거</h2><ul><li><strong>공격 1·2·3의 기본 피해는 동일</strong> — 특정 공격이 무조건 강한 선택지가 되는 것을 막습니다. 플레이어는 '가장 센 공격'이 아니라 '약점 커맨드에 포함되는 공격'을 찾는 데 집중하게 됩니다.</li><li><strong>피드백은 이펙트·색·숫자로</strong> — 일반 행동은 #FFD900, 약점 후보는 #FF6161, 커맨드 성공은 #FF0000에 폰트 65로 키워 구분합니다. 정답을 알려주지 않되 추론할 단서를 줍니다.</li><li><strong>행동 로그 UI</strong> — 공격 행동만 최대 13칸에 기록하고(방어·회피·긴급 행동 제외), 커맨드 성공 시 해당 칸 테두리가 빛납니다. 회의에서 '외형 힌트로 약점을 유추하는 건 당위성이 떨어진다'는 우려가 나와, 플레이어 자신의 행동 기록으로 추리하는 방식으로 정했습니다.</li><li><strong>적의 행동은 공격만</strong> — 방어·특수 행동을 주면 전투가 길어져 루즈해지고, '빠른 처치 → 수명 획득'이라는 핵심 구조가 무너지기 때문입니다.</li><li><strong>긴급 행동</strong> — 게이지와 무관하게 즉시 발동하되 수명을 소모합니다. 약점 파악(1회: 정답 개수 공개, 2회: 첫 슬롯에 정답 자동 예약, 회당 수명 가중) · 즉시 방어 · 회복(회복량에 비례해 수명 소모) · 후퇴(패배 판정).</li></ul><h2>전투 UI 와이어프레임</h2><ul><li>행동 버튼(장비 테이블에서 아이콘·공격명 참조, 방어·회피는 고정) · 긴급 행동 버튼(소모 수명 −N초 표시) · 행동 게이지(#C49665) · 행동 슬롯(활성 슬롯 테두리 #F3C695) · 행동 로그 13칸(좌→우 선입선출) · 적 정보 HUD(모래시계 아이콘, 잔여 수명, 레벨, 게이지) · 체력바 HUD(스프라이트 발끝 기준 50px 아래, 다음 공격 아이콘과 데미지 표시).</li><li>예외 처리: 방어·회피가 예약된 상태에서는 같은 행동을 중복 예약할 수 없고, 적의 공격 1회당 먼저 사용한 행동이 발동합니다.</li></ul><img src="images/sos-ui-battle.jpg" alt=""><p style="text-align:center;font-size:12px;color:var(--ink-3)">와이어프레임을 바탕으로 구현된 전투 UI — 이미지: 서희진(팀)</p><h2>변경 이력</h2><table><tr><th>항목</th><th>변경</th><th>이유</th></tr><tr><td>행동 슬롯</td><td>3개 → 4개</td><td>예약 여유를 늘려 커맨드 조합(최대 4자리) 입력이 가능하도록</td></tr><tr><td>약점 파악</td><td>최대 3회(개수 → 행동 → 순서) → 최대 2회(개수 → 첫 슬롯 자동 예약)</td><td>3회째까지 쓰면 사실상 정답을 알려주는 셈. 2회로 줄이고 두 번째 보상을 실질적으로</td></tr><tr><td>수명 감소 공식</td><td>'1초당 10% 충전' 예시 → 충전 시간·수명 감소 공식으로 명문화</td><td>시뮬레이터로 수치를 검증하기 위해 변수(BASE_ATB, LIFE_DECAY)로 분리</td></tr><tr><td>적 행동</td><td>공격·방어·특수 → 공격 패턴 3종 중 랜덤 1종</td><td>전투 길이와 핵심 루프 유지</td></tr></table>`
          },
          {
            title: "몬스터 시스템 기획",
            tag: "담당 업무",
            html: `<div class="callout"><div class="callout-ico">👹</div><div class="callout-body"><p>몬스터는 단순한 처치 대상이 아니라 플레이어의 수명을 직접 위협하는 존재입니다. 몬스터도 게이지가 찰수록 수명이 줄기 때문에 빨리 잡을수록 더 많이 흡수할 수 있고, 모든 몬스터는 고유한 약점 커맨드를 가집니다. <strong>약점을 찾아내는 과정 자체가 전투의 재미</strong>가 되도록 설계했습니다.</p></div></div><h2>테이블 구조</h2><table><tr><th>테이블</th><th>역할</th></tr><tr><td>MonsterTB</td><td>기본 스탯·약점 커맨드·공격 패턴·드롭 테이블 참조</td></tr><tr><td>MonAtkPatternTB</td><td>공격 패턴 9종의 효과 정의</td></tr><tr><td>StatusEffectTB</td><td>상태이상 종류와 수치</td></tr><tr><td>DropTB</td><td>몬스터별 드롭 (장비 · 죄악 조각 1종 고정 · 기타)</td></tr></table><ul><li><strong>ID 발번 규칙</strong> — 0(등장 지역) / 0(등급) / 000(고유 번호). 예: 10001 = 1지역 · Normal · 001, 82016 = 최종 보스</li><li><strong>인스턴스 레벨</strong> — 테이블의 스탯은 레벨 1 기준값이고, 맵 배치 시 개체마다 레벨을 따로 부여합니다. 실제 스탯 = 기본 스탯 × (1 + (레벨 − 1) × 0.1). 테이블은 설계도, 인스턴스는 실제 개체입니다.</li></ul><h2>등급별 약점 커맨드 운용</h2><table><tr><th>등급</th><th>활성 커맨드</th><th>전환 규칙</th></tr><tr><td>Normal</td><td>3개 중 1개 랜덤</td><td>전환 없음 — 전투 내내 고정</td></tr><tr><td>Elite</td><td>3개 중 2개 랜덤 · 순차</td><td>첫 커맨드 공략 성공 시 두 번째로 전환 (재탐색 필요)</td></tr><tr><td>Boss</td><td>3개 모두 순차</td><td>1 → 2 → 3 순차 전환, 매번 재탐색</td></tr></table><ul><li>약점 커맨드는 공격 1·2·3을 중복 허용해 2~4자리로 조합합니다. 경우의 수는 3² + 3³ + 3⁴ = <strong>117개</strong>이며 몬스터마다 기획자가 직접 부여합니다. Elite·Boss는 3~4자리.</li></ul><h2>공격 패턴 9종 · 상태이상</h2><table><tr><th>PatternID</th><th>효과</th></tr><tr><td>NormalAtk</td><td>기본 공격 (Pattern1 고정)</td></tr><tr><td>PowerAtk</td><td>배율 상승 + 방어 행동 무시</td></tr><tr><td>Poison</td><td>즉발 피해 + 중독 (중첩 가능, 피해 누적)</td></tr><tr><td>Bleed</td><td>즉발 피해 + 출혈 (고정 피해, 중첩 불가)</td></tr><tr><td>Weak</td><td>즉발 피해 + 약화</td></tr><tr><td>Slow</td><td>즉발 피해 + 둔화</td></tr><tr><td>Absorb</td><td>즉발 피해 + 피해량 일부 HP 회복</td></tr><tr><td>Confusion</td><td>공격 행동 1/2/3 랜덤 치환 (방어·회피는 정상)</td></tr><tr><td>Sleep</td><td>수면 — 피격 시 즉시 해제</td></tr><tr><td>Mini</td><td>축소 — 공격력·방어력 감소</td></tr></table><ul><li>게이지가 100%가 될 때마다 3개 패턴 중 1개를 무작위로 실행합니다.</li><li>상태이상은 플레이어 게이지 슬롯이 차는 시점을 1턴으로 계산합니다. 같은 상태이상은 더 긴 턴으로 갱신, 다른 상태이상은 동시 적용, 중첩은 맹독만.</li></ul><h2>보상</h2><div class="quote">최종 획득 수명 = 몬스터 초기 수명 − 전투 중 소모된 수명<span>몬스터도 게이지가 찰 때마다 수명이 준다. 빨리 처치할수록 더 많이 흡수한다. 처치 시 DropTB 기준으로 3종 아이템을 확률 드롭.</span></div><h2>MonsterTB 예시</h2><table><tr><th>ID</th><th>이름</th><th>등급 · 죄악</th><th>HP / ATK / DEF</th><th>수명</th><th>약점 커맨드 1·2·3</th></tr><tr><td>10001</td><td>목패 포졸</td><td>Normal · 오만</td><td>100 / 15 / 4</td><td>375</td><td>2123 · 3321 · 2312</td></tr><tr><td>21004</td><td>금고지기</td><td>Elite · 탐욕</td><td>260 / 30 / 14</td><td>998</td><td>113 · 1311 · 3332</td></tr><tr><td>41008</td><td>붉은 처형인</td><td>Elite · 분노</td><td>240 / 40 / 8</td><td>1065</td><td>3222 · 311 · 3113</td></tr><tr><td>82015</td><td>죄목 기록관</td><td>Boss (중간)</td><td>1310 / 140 / 74</td><td>3000</td><td>1133 · 1111 · 3123</td></tr><tr><td>82016</td><td>모래시계의 심판자</td><td>Boss (최종)</td><td>2140 / 230 / 122</td><td>∞</td><td>1121 · 331 · 122</td></tr></table><h2>7대 죄악 × 몬스터 성향</h2><table><tr><th>죄악</th><th>성향</th></tr><tr><td>오만</td><td>위압 · 정면 압박</td></tr><tr><td>색욕</td><td>유인 · 페이크</td></tr><tr><td>탐욕</td><td>사슬 · 빼앗기</td></tr><tr><td>질투</td><td>추적 · 모방</td></tr><tr><td>식탐</td><td>포식 · 회복</td></tr><tr><td>분노</td><td>강공 · 폭주</td></tr><tr><td>나태</td><td>느림 · 방어 지연</td></tr></table><div class="img-row"><img src="images/sos-mon-01-pride.jpg" alt=""><img src="images/sos-mon-02-greed.jpg" alt=""><img src="images/sos-mon-03-envy.jpg" alt=""><img src="images/sos-mon-04-wrath.jpg" alt=""></div><div class="img-row"><img src="images/sos-mon-05-lust.jpg" alt=""><img src="images/sos-mon-06-gluttony.jpg" alt=""><img src="images/sos-mon-07-sloth.jpg" alt=""><img src="images/sos-mon-09-judge.jpg" alt=""></div><p style="text-align:center;font-size:12px;color:var(--ink-3)">목패 포졸 · 금고지기 · 거울가면자 · 붉은 처형인 / 난파의 세이렌 · 잔치상 도살자 · 잠든 파수꾼 · 모래시계의 심판자 — 몬스터 아트: 최희재(팀)</p>`
          },
          {
            title: "전투 밸런스 시뮬레이터",
            tag: "도구",
            html: `<p>기획서의 수식이 실제로 어떤 체감을 만드는지 확인하기 위해 만든 <strong>ATB 전투 시뮬레이터</strong>입니다. MonsterTB.xlsx를 그대로 읽어 몬스터를 고르고, 공식 변수를 바꿔 가며 전투 시간과 수명 손익을 봅니다.</p><h2>무엇을 검증하나</h2><ul><li><strong>공식 변수</strong> — BASE_ATB · LIFE_DECAY · LV_SCALE · WEAK_BONUS(1.1) · COMBO_MULT(5) · DEF_MULT · EVADE_RATE · 긴급 행동 비용을 즉석에서 조정</li><li><strong>몬스터 · 인스턴스 레벨</strong> — 테이블의 기본 스탯에 레벨 가중치를 적용한 실제 스탯, 충전 시간, 약점 커맨드 3개를 확인</li><li><strong>전투 결과</strong> — 전투 시간 · 플레이어 수명 소모 · 몬스터 수명 소모 · 획득 수명 · 수명 손익. 등급별로 '빨리 잡을수록 이득'이 실제로 성립하는지 확인</li><li><strong>행동 로그 · 커맨드 판정</strong> — 13칸 로그와 부분 수열 판정이 기획서대로 동작하는지, 약점 후보 피드백이 충분한지 점검</li></ul><h2>사용법</h2><ul><li>몬스터 테이블은 자동으로 읽힙니다(GitHub Pages). 파일로 열었을 때는 위쪽 '업로드' 버튼으로 MonsterTB_1.2.xlsx를 올리세요.</li><li>몬스터와 인스턴스 레벨, 커맨드 번호를 고르고 <strong>전투 시작</strong>. 게이지가 차면 슬롯이 활성화되고, 공격 1·2·3 / 방어 / 회피를 예약합니다.</li><li>긴급 행동 '약점 파악'으로 힌트를 얻고, 행동 로그를 보며 커맨드를 추리합니다. 결과 패널에서 수명 손익을 확인합니다.</li></ul><div style="margin:0 0 18px;border:1px solid var(--line-soft);border-radius:12px;overflow:hidden;background:#fff"><iframe src="sim/atb-battle-simulator.html" title="ATB Battle Simulator" style="display:block;width:100%;height:1180px;border:0" loading="lazy"></iframe></div><p style="text-align:center;font-size:12px;color:var(--ink-3)">시뮬레이터가 보이지 않으면 <a href="sim/atb-battle-simulator.html" target="_blank" rel="noopener">새 창에서 열기 ↗</a></p>`
          },
          {
            title: "회고 [초안]",
            tag: "회고",
            html: `<div class="callout problem"><div class="callout-ico">✍️</div><div class="callout-body"><p><strong>[초안]</strong> 개인 회고록이 없어 일일보고서·회의록·기획서 변경 이력에서 확인되는 사실로만 정리했습니다. '느낀 점' 항목은 직접 채워 주세요.</p></div></div><h2>설계가 진행된 순서</h2><table><tr><th>날짜</th><th>진행</th></tr><tr><td>05/27</td><td>전투 메카닉 초안 · 레퍼런스(파이널 판타지 ATB) 분석</td></tr><tr><td>05/28</td><td>전투 메카닉 상세 설계 · 전투 화면 와이어프레임</td></tr><tr><td>05/29</td><td>전투 테이블 작성. 팀 회의에서 전투 메카닉 확정, 몬스터 디자인 파트 분배</td></tr><tr><td>05/30</td><td>몬스터 테이블 작성</td></tr><tr><td>05/31</td><td>세계관 롤백 합의 (7대 죄악 분류 확정)</td></tr><tr><td>06/01</td><td>전투 시스템 기획안 작성</td></tr><tr><td>06/02</td><td>테이블 완성 · 월드맵 디자인 보조</td></tr><tr><td>06/03</td><td>몬스터 기획서(최희재)에 맞춰 몬스터 테이블 세부 규칙 수정</td></tr><tr><td>06/04</td><td>전투 UI 와이어프레임 수정·전달 · 속도(ATBSpeed) 수식 기획</td></tr></table><h2>결정의 근거를 남긴 것</h2><ul><li>기획서의 모든 수식 옆에 '왜 이 형태인가'를 적었습니다. DEF를 분모에 두는 이유, 기본 피해를 동일하게 두는 이유, 약점 후보 보너스를 소량으로 두는 이유, 적 행동을 공격만으로 제한하는 이유처럼 <strong>수치보다 의도를 먼저</strong> 전달하려 했습니다.</li><li>회의에서 나온 우려('외형 힌트로 약점을 유추하는 건 당위성이 떨어진다')를 행동 로그 UI라는 구체적인 장치로 답했습니다.</li><li>수식을 변수로 분리하고 시뮬레이터를 만들어, 논의를 '감'이 아니라 숫자로 할 수 있게 했습니다.</li></ul><h2>아쉬운 점 (문서 기준)</h2><ul><li>시뮬레이터는 몬스터 테이블 삽입 이후 검증 결과를 기획서에 반영하는 단계까지 가지 못했습니다. 등급별 목표 전투 시간·수명 손익 표가 있었다면 밸런스 논의가 더 빨랐을 것입니다.</li><li>상태이상 수치(지속 턴·피해량)가 StatusEffectTB 정의 수준에 머물러 실제 값 검증이 남았습니다.</li></ul><h2>느낀 점</h2><div class="callout problem"><div class="callout-ico">✍️</div><div class="callout-body"><ul><li>[직접 작성] 2주 동안 가장 어려웠던 결정은 무엇이었나요?</li><li>[직접 작성] 팀원의 기획서(몬스터 기획서·수명 시스템)와 내 시스템을 맞추는 과정에서 무엇을 배웠나요?</li><li>[직접 작성] 다음 프로젝트에서 전투 기획을 다시 한다면 무엇을 먼저 하겠습니까?</li></ul></div></div>`
          },
          {
            title: "✍️ 추천 추가 사항 (직접 편집)",
            tag: "편집 필요",
            html: `<div class="callout problem"><div class="callout-ico">✍️</div><div class="callout-body"><p><strong>아래 항목은 직접 채우거나 지우세요.</strong> 채운 뒤에는 이 문서의 제목을 바꾸거나 문서 자체를 삭제하면 됩니다.</p><ul><li><strong>시뮬레이터 검증 결과 표</strong> — 등급별(Normal/Elite/Boss) 평균 전투 시간, 수명 손익, 커맨드 성공 유무에 따른 차이. 스크린샷 2~3장이면 충분합니다.</li><li><strong>전투 흐름 프로토타입 캡처</strong> — 위 '전투 흐름 프로토타입 (Figma)' 링크의 주요 화면.</li><li><strong>몬스터 기획 발표 자료</strong> — 5/31~6/1 회의에서 '기획 의도와 방향성 전부 동의'를 받은 발표 자료가 있다면.</li><li><strong>StatusEffectTB · DropTB 실제 수치</strong> — 표 캡처 또는 요약.</li><li><strong>회고 '느낀 점'</strong> — 위 회고 문서의 [직접 작성] 항목.</li><li><strong>최종 발표 피드백</strong> — 강사·동기의 코멘트 인용.</li><li>팀원 산출물(캐릭터·성장·장비·시나리오)은 이름과 한 줄 요약 + Drive 링크로만 두는 것을 권합니다.</li></ul></div></div>`
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
            title: "메커톤",
            tag: "기획자 · 시스템 기획",
            html: `<table><tr><th>역할</th><td>기획자 — 시스템 기획</td></tr><tr><th>소속</th><td>메커톤 · 팀 쌀쌀원정대</td></tr><tr><th>기간</th><td>2026.06</td></tr></table><ul><li>반사벽으로 투사체 경로를 설계하는 <strong>로그라이트 타워 디펜스</strong>를 제작해 글로벌 개발 콘테스트에 출시했습니다.</li><li>설치물(터렛 8종 · 반사벽 18종)과 업그레이드 · 몬스터 시스템을 기획하고, 상점 2단계 추첨과 리롤 비용 구조, 터렛 데미지 계산식을 설계했습니다.</li><li>인게임 HUD UI와 설치물 배치 · 이동 · 판매 플로우까지 기획서 7종으로 정리해 팀에 공유했습니다.</li></ul>`
          },
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

/* ============================================================
   모의면접 (비주얼 노벨) 데이터 — 편집기의 「모의면접」 시트에서 고칠 수 있다
   ============================================================ */
window.PORTFOLIO_INTERVIEW = {
  "me": {
    "name": "이정훈",
    "art": "banner.png"
  },
  "interviewer": "면접관",
  "intro": [
    "안녕하세요, 게임 기획자 이정훈입니다. 오늘은 제가 면접을 보는 입장이니, 편하게 무엇이든 물어봐 주세요.",
    "주제를 고르면 질문 목록이 나오고, 답변 끝에는 꼬리질문과 관련 문서 링크가 이어집니다. 궁금한 만큼만 보시고 언제든 마무리하셔도 됩니다."
  ],
  "endings": [
    {
      "min": 70,
      "grade": "S",
      "title": "합격 통보",
      "lines": [
        "여기까지 들어 주셔서 감사합니다. 이 정도면 제가 어떤 기획자인지 충분히 보여 드린 것 같습니다.",
        "궁금한 점이 더 있다면 언제든 연락 주세요. 함께 일하게 되기를 기대하겠습니다."
      ]
    },
    {
      "min": 35,
      "grade": "A",
      "title": "2차 면접 진출",
      "lines": [
        "핵심적인 질문을 골라 주셨네요. 짧은 시간이었지만 제 기획 방식은 전달됐기를 바랍니다.",
        "포트폴리오의 프로젝트 문서에 더 자세한 과정이 있으니, 이어서 살펴봐 주세요."
      ]
    },
    {
      "min": 0,
      "grade": "B",
      "title": "서류 통과",
      "lines": [
        "짧은 만남이었네요. 아직 못 보신 주제가 많으니 다음에 다시 찾아 주시면 더 많은 이야기를 드리겠습니다.",
        "포트폴리오 본문도 함께 둘러봐 주세요."
      ]
    }
  ],
  "topics": [
    {
      "id": "intro",
      "name": "자기소개 · 인적성",
      "icon": "🙋",
      "hint": "저라는 사람이 궁금하다면"
    },
    {
      "id": "project",
      "name": "프로젝트 깊이 파기",
      "icon": "🎮",
      "hint": "만든 것에 대해 파고들기"
    },
    {
      "id": "philo",
      "name": "기획 철학",
      "icon": "💡",
      "hint": "게임과 기획을 어떻게 생각하는지"
    },
    {
      "id": "skill",
      "name": "기술 · 툴",
      "icon": "🛠️",
      "hint": "손에 익은 도구와 그 수준"
    },
    {
      "id": "taste",
      "name": "게임 취향",
      "icon": "🕹️",
      "hint": "어떤 게임을 왜 좋아하는지"
    },
    {
      "id": "docs",
      "name": "포트폴리오 문서",
      "icon": "📄",
      "hint": "메이플 분석·개편안의 설계 의도"
    },
    {
      "id": "tmi",
      "name": "가벼운 질문",
      "icon": "☕",
      "hint": "긴장 풀기용"
    }
  ],
  "questions": [
    {
      "id": "i01",
      "topic": "intro",
      "q": "간단히 자기소개를 해 주세요.",
      "a": [
        "안녕하십니까. 게임 기획자 이정훈입니다.",
        "저는 현실에서의 익숙한 경험을 색다른 게임 디자인으로 확장하는 기획자입니다. 게임이 단순한 재미를 넘어 유저에게 새로운 경험과 감정을 전달하는 매체라고 믿고, 이를 위해 여러 실험적인 시도를 해 왔습니다.",
        "학부 졸업작품으로는 핸드 트래킹으로 포수 사인을 입력하는 「모션 인식 포수 시뮬레이터」를 만들어 최우수작으로 선정됐고, 학술 동아리 홍보회에서는 실제 바둑판 위의 돌을 카메라로 인식하는 「아두이노 오목 게임」으로 부스를 운영해 이틀 동안 신규 회원 43명을 모집했습니다.",
        "이후 게임 제작 동아리 Bridge에서 「극락가신당」과 「외(계인)노(동)자」 두 프로젝트에 기획자이자 팀장으로 참여하며 시스템·콘텐츠 기획과 프로젝트 매니징을 맡았습니다.",
        "아이디어를 실현 가능한 방식으로 구체화하고, 새로운 경험을 설계하는 과정에서 가장 큰 보람을 느낍니다."
      ],
      "follow": [
        "p08",
        "p10",
        "i02"
      ],
      "sub": false,
      "link": "0-0-0",
      "pts": 5
    },
    {
      "id": "i02",
      "topic": "intro",
      "q": "게임 기획자라는 진로는 어떻게 선택하게 됐나요?",
      "a": [
        "전기전자공학부에서 2학년까지는 반도체 회로 설계를 목표로 공부했습니다. 그런데 배우는 지식이 어떤 결과물로 이어지는지 눈으로 확인할 수 없다는 점이 늘 추상적으로 느껴졌습니다.",
        "그러던 중 학술 동아리에서 신입 회원 모집 부스를 만들게 됐습니다. 짧은 시간에 즐길 수 있어야 해서, 누구나 룰을 아는 오목에 돌마다 고유 능력을 붙인 오토체스식 1대1 대전 게임을 3주 만에 만들었습니다.",
        "홍보회에서 제가 만든 게임을 재미있게 즐기는 사람들을 보며 큰 보람을 느꼈습니다. 고민하고 노력한 것이 하나의 콘텐츠가 되어 즉각적인 반응으로 돌아오는 경험이었습니다.",
        "내가 경험하고 느낀 것을 어떤 콘텐츠로, 어떤 방식으로 재밌게 녹일 수 있을지 고민하는 과정 자체에 흥미를 느꼈고, 그때 게임 기획자라는 꿈을 갖게 됐습니다."
      ],
      "follow": [
        "p10",
        "i03"
      ],
      "sub": false,
      "link": "3-0-4",
      "pts": 5
    },
    {
      "id": "i03",
      "topic": "intro",
      "q": "기획자가 되기 위해 어떤 노력을 해 왔나요?",
      "a": [
        "크게 세 가지입니다. 첫째는 타 직군과의 협업 경험입니다. 대학생 연합 게임 제작 동아리 Bridge에서 약 2년간 활동하며 두 프로젝트에 기획자로 참여했고, 팀장으로서 정기 회의와 피드백으로 직군 간 업무를 조율했습니다.",
        "둘째는 새로운 기술을 게임 경험으로 확장하는 감각입니다. 모션 인식 포수 시뮬레이터, 인터랙티브 오목 게임처럼 입력 장치 자체를 새로 설계하는 프로젝트를 직접 만들었습니다.",
        "셋째는 시야를 넓히는 대외활동입니다. 메이플 대학생 커리어 캠프에서 보스 패턴이나 신규 콘텐츠 튜토리얼을 미리 체험하는 플레이어블 광고 형태의 마케팅 방안을 제안해 실무 과제 우수상을 받았습니다.",
        "이 경험들이 기획자로서의 사고 체계와 성장 방향을 다지는 과정이었다고 생각합니다."
      ],
      "follow": [
        "p05",
        "i04"
      ],
      "sub": false,
      "link": "3-0-2",
      "pts": 5
    },
    {
      "id": "i04",
      "topic": "intro",
      "q": "개발 과정에서 본인의 장점은 무엇인가요?",
      "a": [
        "새로운 아이디어를 빠르게 제시하고 돌발 상황에 유연하게 대응하는 것입니다.",
        "「외(계인)노(동)자」 중간 발표를 2주 앞두고 러너형 배송 미니게임의 과속방지턱 장애물에 문제가 생겼습니다. 3D 바닥 위에 2D 오브젝트를 놓는 구조라 바닥이 움직이면 눈에 보이는 이미지와 실제 충돌 범위가 어긋났습니다.",
        "이상적인 해결책은 3D 모델을 만드는 것이었지만 일정이 임박했고 아트 팀원에게 3D 경험이 없었습니다. 삭제 여부를 두고 회의가 길어지던 중, 저는 장애물의 특성은 유지한 채 외형만 바꾼 「맨홀」을 제안했습니다.",
        "특정 속도 이상으로 지나면 뚜껑이 날아오고, 맞으면 이동 속도가 줄어드는 장애물입니다. 원형 오브젝트라 충돌 범위 불일치 문제가 자연스럽게 해결됐습니다.",
        "이처럼 문제를 빠르게 판단하고 현실적인 대안을 실행으로 옮기는 능력이 예측 불가능한 이슈가 많은 실제 업무 환경에서도 강점이 될 거라고 생각합니다."
      ],
      "follow": [
        "i05",
        "p02"
      ],
      "sub": false,
      "link": "1-0-1",
      "pts": 5
    },
    {
      "id": "i05",
      "topic": "intro",
      "q": "그럼 단점은요?",
      "a": [
        "너무 많은 의견을 수용하려 했던 점입니다. 개발 초기에는 어떤 아이디어를 넣을지 가르는 기준이 명확하지 않아 개발 범위가 불필요하게 넓어지고 방향성이 흔들리는 문제가 있었습니다.",
        "이후에는 '제안된 요소가 핵심 재미를 강화하는가', '프로젝트 방향성과 일관되는가' 두 기준으로 판단해 우선순위를 세웠습니다.",
        "예를 들어 재화 소모처를 논의할 때 꾸미기, 수집 등 여러 의견이 나왔지만 '미니게임으로 스테이지를 클리어하고 스토리를 진행한다'가 코어라고 판단해, 미니게임에 도움이 되는 스탯을 키우는 일과 시스템을 소모처로 정했습니다.",
        "지금은 다양한 의견을 경청하되 프로젝트의 목표와 흐름을 지키며 선택과 집중을 실천하려고 합니다."
      ],
      "follow": [
        "i05b",
        "p03"
      ],
      "sub": false,
      "link": "1-0-6",
      "pts": 5
    },
    {
      "id": "i05b",
      "topic": "intro",
      "q": "지금도 팀에서 강하게 주장하지 못하고 타협해 버릴 가능성은 없나요?",
      "a": [
        "가능성을 부정하지는 않겠습니다. 다만 이제는 '듣는 것'과 '결정하는 것'을 분리해서 생각합니다.",
        "「극락가신당」에서 팀장을 맡았을 때 모든 의견을 반영하려다 볼륨이 커진 경험을 하고 나서, 의견은 끝까지 듣되 결정은 프로젝트의 핵심 재미와 일정이라는 기준으로 내리기로 했습니다.",
        "결정할 때는 '왜 이 기준인지'를 먼저 공유합니다. 기준에 합의가 되면 개별 의견이 빠지더라도 팀원이 납득하기 쉬웠습니다.",
        "타협 자체가 나쁜 건 아니라고 봅니다. 기준 없이 하는 타협이 문제이고, 그 기준을 세우는 게 기획자의 일이라고 생각합니다."
      ],
      "follow": [],
      "sub": true,
      "link": "1-1-3",
      "pts": 7
    },
    {
      "id": "i06",
      "topic": "intro",
      "q": "개발 과정에서 갈등을 겪은 경험이 있나요? 어떻게 풀었나요?",
      "a": [
        "인트로 컷씬의 연출 방향을 두고 아트팀과 의견이 갈린 적이 있습니다. 저는 대사 없는 짧은 애니메이션으로 게임의 캐주얼하고 유머러스한 분위기를 보여 주고 싶었고, 아트팀은 일러스트 컷과 텍스트를 병행하는 쪽이 전달도 명확하고 작업 효율도 좋다고 봤습니다.",
        "저는 이걸 '누가 옳은가'의 문제로 보지 않고, 각자의 판단 기준이 다른 상황으로 봤습니다. 제 기준은 첫인상인 인트로에서 전체 컨셉과 일관된 연출을 보여 주는 것, 아트팀의 기준은 작업 난이도와 명확한 스토리 전달이었습니다.",
        "논의 끝에 풀 애니메이션 대신 컷 단위의 만화 형태로 구성하되, 전단지가 날아가거나 행성이 반짝이는 강조 장면에는 부분 애니메이션을 남기고, 부족한 스토리 전달은 마지막 짧은 나레이션으로 보완하기로 했습니다.",
        "작업 효율과 컨셉에 맞는 연출을 모두 지킬 수 있었고, 팀 만족도도 높았습니다. 이후로도 의견이 갈리면 옳고 그름보다 각자의 기준을 먼저 정리하고 프로젝트 방향에 맞춰 조율하려고 합니다."
      ],
      "follow": [
        "p06",
        "h05"
      ],
      "sub": false,
      "link": "1-0-2",
      "pts": 5
    },
    {
      "id": "i07",
      "topic": "intro",
      "q": "실패한 경험과 그걸 극복한 이야기를 들려주세요.",
      "a": [
        "군 복무 시절 전투장비 지휘검열에서 실수를 한 적이 있습니다. 무선장비 운용과 함께 인사·병참 업무를 맡아 예비군 편제 장비 약 600여 항목을 혼자 관리했는데, 전임자가 작성한 관리카드를 기준으로 품목과 수량만 점검하다 방독면의 특정 부품이 빠진 것을 놓쳤습니다.",
        "중대는 감점을 받았고, 그건 제 부주의에서 비롯된 실패였습니다. 다른 항목에서 우수 점수를 받아 최종 통과는 했지만 조직에 부담을 줄 수 있었다는 점에서 책임을 크게 느꼈습니다.",
        "평가가 끝난 뒤 2주간 모든 장비의 전수조사를 혼자 진행했습니다. 관리카드와 전산 시스템을 대조해 불일치를 전부 정리하고 최신 상태로 갱신했습니다.",
        "그 뒤로는 문서화된 데이터를 그대로 믿지 않고 실물을 직접 확인하는 습관이 생겼습니다. 지금도 어떤 작업이든 사전 검증과 꼼꼼한 확인 과정을 가장 중요하게 여깁니다."
      ],
      "follow": [
        "i08"
      ],
      "sub": false,
      "link": null,
      "pts": 5
    },
    {
      "id": "i08",
      "topic": "intro",
      "q": "여러 업무를 동시에 하거나 업무가 자주 바뀌는 환경도 괜찮은가요?",
      "a": [
        "네. 실제로 갑작스러운 업무 변화에 빠르게 적응해 본 경험이 있습니다.",
        "군 복무 때 무선장비운용병으로 입대했는데, 자대 배치 몇 주 만에 보급관님이 퇴직하시면서 인사·병참 업무 담당이 공석이 됐습니다. 인수인계도 없었고 전산 툴이나 행정 절차도 전혀 몰랐지만, 신병이던 제가 그 일을 병행하게 됐습니다.",
        "'왜 내가 해야 하지'보다 '조직에 꼭 필요한 일이면 맡은 이상 해내자'는 마음으로 임했습니다. 비타500을 하나씩 사 들고 다른 중대 보급관님들을 찾아다니며 툴 사용법과 절차를 배우고, 익힌 내용을 정리해 체계적으로 수행했습니다.",
        "그 과정에서 새로운 일을 배우는 즐거움과 낯선 환경에서도 스스로 해결책을 찾을 수 있다는 자신감을 얻었습니다. 빠른 전환이 잦은 환경에서도 책임감을 갖고 유연하게 대응할 수 있다고 생각합니다."
      ],
      "follow": [
        "s06"
      ],
      "sub": false,
      "link": null,
      "pts": 5
    },
    {
      "id": "p01",
      "topic": "project",
      "q": "「외(계인)노(동)자」는 어떤 게임이고, 무엇을 맡았나요?",
      "a": [
        "외계인 택배회사를 운영하는 벨트스크롤 형식의 아케이드 게임입니다. 미니게임으로 배송 업무를 수행해 스테이지를 클리어하고 스토리를 진행하며, 번 재화로 캐릭터의 스탯을 키우는 타이쿤 요소를 결합했습니다.",
        "저는 시스템·콘텐츠 기획을 맡았습니다. 미니게임 콘텐츠, 대화 시스템과 시나리오, 스킬 시스템, 스테이지 디자인, 그리고 스테이지 난이도와 재화 밸런스 설계까지 담당했습니다.",
        "특히 이벤트 시퀀스·대사·일과 시스템의 데이터 테이블을 직접 설계하고 운용해, 스토리와 미니게임이 섞인 복합 구조를 프로그래머가 바로 구현할 수 있는 형태로 전달했습니다."
      ],
      "follow": [
        "p02",
        "p03",
        "s01",
        "p06"
      ],
      "sub": false,
      "link": "1-0-0",
      "pts": 5
    },
    {
      "id": "p02",
      "topic": "project",
      "q": "그 프로젝트에서 가장 기억에 남는 문제 해결은 무엇인가요?",
      "a": [
        "과속방지턱 장애물이 시각과 충돌 범위가 어긋나던 문제입니다. 3D 바닥 위에 2D 오브젝트를 놓는 구현 방식이라 일자로 긴 장애물은 바닥이 움직일 때 시야각이 틀어졌습니다.",
        "발표 2주 전이라 3D 모델을 새로 만들 여유가 없었습니다. 그래서 '속도를 조절하고 상호작용 키로 회피한다'는 장애물의 기능은 그대로 두고, 외형을 원형 「맨홀」로 바꿔 충돌 문제를 해결했습니다.",
        "기능적 목적과 표현 방식을 분리해서 생각하면 제약 안에서도 답이 나온다는 걸 배운 사례입니다."
      ],
      "follow": [],
      "sub": true,
      "link": "1-0-1",
      "pts": 7
    },
    {
      "id": "p03",
      "topic": "project",
      "q": "재화 소모처를 왜 '일과 시스템'으로 정했나요?",
      "a": [
        "재화 소모처 논의에서 꾸미기, 수집 요소 등 다양한 의견이 나왔습니다. 하지만 이 게임의 코어는 '미니게임 수행으로 스테이지를 클리어하고 스토리를 진행하는 것'이었습니다.",
        "그래서 코어 루프를 강화하는 소모처, 즉 미니게임 플레이에 도움이 되는 스테이터스를 올리는 일과 시스템을 선택했습니다. 골드 소모량, 스탯 상승치, 피로도 변화, 수행 가능 횟수를 테이블로 제어해 밸런스를 조정할 수 있게 했습니다.",
        "'제안된 요소가 핵심 재미를 강화하는가'라는 기준을 세우고 나서 내린 첫 결정이기도 합니다."
      ],
      "follow": [],
      "sub": true,
      "link": "1-0-6",
      "pts": 7
    },
    {
      "id": "p05",
      "topic": "project",
      "q": "「극락가신당」에서 팀장으로 구체적으로 무엇을 했나요?",
      "a": [
        "저승 세계를 테마로 한 플랫포머 게임이었고, 저는 어드벤처 총괄 기획과 함께 프로젝트 매니징을 맡았습니다.",
        "매주 화상회의로 직군별 작업 현황을 공유하고 피드백했으며, 회의록을 남겨 팀 전체가 진행 상황을 파악하게 했습니다. 진행에 따라 차주 일정을 유동적으로 조정하고 팀원별 업무를 할당했습니다.",
        "구글 드라이브 공유 문서로 기획안 수정과 작업 요청을 즉시 반영했고, GitHub 커밋 로그를 Discord에 연동해 모든 직군이 모바일에서도 프로젝트 로그를 확인할 수 있게 했습니다.",
        "기획 쪽으로는 몬스터 공통 행동 프로세스, 마을·탐험 맵, 캐릭터 애니메이션·이펙트 기획을 담당했습니다."
      ],
      "follow": [
        "p07",
        "s03",
        "p06"
      ],
      "sub": false,
      "link": "1-1-1",
      "pts": 5
    },
    {
      "id": "p06",
      "topic": "project",
      "q": "직군마다 다른 문서로 기획을 전달했다고 들었는데, 어떤 계기였나요?",
      "a": [
        "처음 UI 레이아웃 기획을 공유할 때는 아트팀과 프로그래밍팀 모두에게 와이어프레임, UX 플로우, 표시 텍스트와 계산 방식, 디자인 레퍼런스를 한 문서에 담아 줬습니다. '빠지는 것보다 다 주는 게 낫다'고 생각했습니다.",
        "그런데 아트팀은 수치와 계산식 때문에 연출 포인트를 찾는 데 시간이 걸렸고, 프로그래밍팀은 조건이 설명 속에 묻혀 로직을 정리하는 데 시간이 더 걸렸습니다. 스코어보드의 숫자 카운팅 애니메이션은 프로그래머 영역인데 아트팀이 자기 범위인지 헷갈리는 일도 있었습니다.",
        "그 뒤로 아트팀에는 화면 레이아웃·색상·레퍼런스 중심으로, 프로그래밍팀에는 버튼 동작 조건·입력 로직·필요한 수치만 간결하게 담아 문서를 따로 정리했습니다. 수정 빈도가 눈에 띄게 줄었습니다.",
        "이 경험 뒤로 문서를 쓸 때마다 '이 정보가 누구에게 필요한가'를 먼저 묻게 됐습니다."
      ],
      "follow": [
        "h05"
      ],
      "sub": true,
      "link": "1-0-7",
      "pts": 7
    },
    {
      "id": "p07",
      "topic": "project",
      "q": "팀장으로서 의견을 잘라내야 했을 때 어떻게 설득했나요?",
      "a": [
        "초기에는 모든 의견을 다 반영하려다 개발 볼륨이 불필요하게 커졌습니다. 그래서 '핵심 재미를 강화하는가'와 '방향성과 일관되는가'라는 기준을 먼저 팀과 합의했습니다.",
        "기준이 합의된 상태에서는 개별 의견을 뺄 때도 '이 의견이 나빠서'가 아니라 '지금 우선순위에서 밀린다'는 설명이 가능했습니다. 빠진 아이디어는 '나중에 넣을 목록'으로 남겨 두어 의견이 버려진 게 아니라는 걸 보여 줬습니다.",
        "결과적으로 팀 리소스를 코어에 집중시켜 더 완성도 높은 결과물을 낼 수 있었습니다."
      ],
      "follow": [],
      "sub": true,
      "link": "1-1-3",
      "pts": 7
    },
    {
      "id": "p08",
      "topic": "project",
      "q": "모션 인식 포수 시뮬레이터에 대해 자세히 설명해 주세요.",
      "a": [
        "핸드 트래킹 기술을 기반으로 한 게임입니다. 회차 전환과 시작·종료를 제외하면 오로지 카메라 입력만 사용합니다.",
        "게임이 시작되면 타석에 타자가 들어서고 '몸쪽 빠른 공에 강하다', '바깥쪽 변화구에 약하다' 같은 요약 정보가 UI로 표시됩니다. 유저는 아웃 확률이 높겠다 싶은 구종과 코스를 골라 매 투구마다 손동작 사인을 카메라로 입력하고, 정해진 확률에 따라 피칭과 타격 결과가 정해집니다.",
        "저는 제스처를 인식하는 파이썬 알고리즘을 구현했고, 등장 타자 정보와 투구 정확도·타구 결과 확률 설계 같은 기획 업무를 담당했습니다. 졸업 작품 최우수작으로 선정됐습니다."
      ],
      "follow": [
        "p09",
        "s02"
      ],
      "sub": false,
      "link": "1-2-0",
      "pts": 5
    },
    {
      "id": "p09",
      "topic": "project",
      "q": "제스처 인식 알고리즘은 어떻게 만들었나요?",
      "a": [
        "구글의 MediaPipe로 카메라 손 이미지에서 관절별 랜드마크 좌표를 받습니다.",
        "여러 제스처를 취했을 때 관절 간 벡터로 각도 데이터를 뽑고, 제스처 이름을 라벨링해 하나의 CSV로 만든 뒤 학습시켰습니다. 유저가 제스처를 입력하면 가장 일치율이 높은 제스처를 텍스트로 반환합니다.",
        "그 텍스트를 UDP 통신으로 Unity에 보내고, 입력에 따라 투수가 피칭을 진행하는 구조입니다."
      ],
      "follow": [],
      "sub": true,
      "link": "1-2-1",
      "pts": 7
    },
    {
      "id": "p10",
      "topic": "project",
      "q": "아두이노 오목 게임은 어떤 프로젝트였나요?",
      "a": [
        "실제 오목판에 돌을 두면 그 위치가 인게임 화면에 실시간으로 반영되는 인터랙티브 게임입니다. 저는 오목돌 능력 설계, UI 디자인, 좌표 인식 로직을 맡았습니다.",
        "각 플레이어는 매 턴 고유 능력이 있는 돌을 무작위로 받습니다. 주변 1칸을 1턴간 봉쇄하는 돌, 거리와 상관없이 한 칸을 지정해 상대가 못 두게 하는 차단형 돌, 상대 돌에 2면 이상 인접하면 제거하는 돌 등 전략 요소가 있는 5가지 능력을 기획했습니다.",
        "인식은 OpenCV로 웹캠 영상을 받아 RGB 밝기 범위로 흑돌·백돌 마스크를 만들고, 직전 프레임과 비교해 새로 놓인 돌의 픽셀 좌표를 15×15 격자 좌표로 변환한 뒤 Python에서 Unity로 전송하는 구조입니다.",
        "현실의 물리적 행위가 게임 속 인터랙션으로 이어지는 경험을 설계한 프로젝트였습니다."
      ],
      "follow": [
        "i02",
        "s02"
      ],
      "sub": false,
      "link": "3-0-4",
      "pts": 5
    },
    {
      "id": "p11",
      "topic": "project",
      "q": "「The Glitch」는 왜 Figma로 비주얼 노벨을 만들었나요?",
      "a": [
        "5일이라는 기간과 '기획자 5명, 아트·프로그래머 없음'이라는 팀 구성이 모든 결정의 전제였습니다. 무엇을 만들지보다 무엇을 만들 수 있는지를 먼저 좁혔습니다.",
        "Unity는 익숙한 팀원이 적어 학습 비용이 높았고, Ren'Py는 스토리 분기에는 강하지만 자유로운 인터랙션에는 제약이 있었습니다. Figma는 인터랙션 구현이 직관적이고 팀원 각자가 기획과 구현을 독립적으로 병행할 수 있었습니다.",
        "장르도 같은 기준으로 골랐습니다. 방탈출 비주얼 노벨은 구조가 단순하면서 플레이어의 능동적 참여를 끌어내고, 방 단위로 나눠 병렬 제작이 가능했습니다. 그래서 '1인 1방'의 액자식 구성으로 갔습니다."
      ],
      "follow": [
        "p12",
        "p13"
      ],
      "sub": false,
      "link": "2-0-1",
      "pts": 5
    },
    {
      "id": "p12",
      "topic": "project",
      "q": "담당한 「책임의 방」의 설계 의도는 무엇이었나요?",
      "a": [
        "밧줄에 매달린 돌 세 개와 버튼이 놓인 책상 세 개가 있는 방입니다. 오른쪽 버튼은 3개 중 2개가 문을 여는 열쇠지만 틀리면 옆 사람이 다치고, 왼쪽은 3개 중 1개만 열쇠지만 틀리면 본인이 다칩니다.",
        "'성공 확률이 높은 선택'과 '실패해도 남에게 피해를 주지 않는 선택'을 한 번의 클릭으로 맞세웠습니다. 정답이 있는 퍼즐이 아니라 플레이어의 가치관을 묻는 방입니다.",
        "규칙은 튜토리얼 텍스트 대신 캐릭터 대화로 보여 줬습니다. 급한 성격의 김민주가 확률을 계산해 오른쪽을 고르고, 조이서가 망설이는 대화 속에서 플레이어가 자연스럽게 규칙을 이해합니다. 선택 직후 돌이 떨어지는 연출로 결과가 바로 돌아옵니다.",
        "이 방의 결과는 5번째 방과 엔딩까지 이어집니다. Figma에는 변수가 없어서 이후 챕터를 두 갈래로 복제해 분기를 구현했고, 이 방에만 프레임 196개를 썼습니다."
      ],
      "follow": [],
      "sub": true,
      "link": "2-0-3",
      "pts": 7
    },
    {
      "id": "p13",
      "topic": "project",
      "q": "5일짜리 프로젝트에서 무엇을 배웠나요?",
      "a": [
        "기획과 구현이 한 사람에게 귀속되는 구조가 책임감과 병렬 속도를 만들었고, 같은 이유로 통일성을 잃었습니다. 방마다 분위기와 완성도에 편차가 생겼습니다.",
        "Figma의 연출 한계도 컸습니다. BGM은 외부 링크로만 재생됐고 SFX는 딜레이가 있어 의도한 타이밍에 맞추기 어려웠습니다.",
        "다음에는 툴의 제약을 기획 단계에서 먼저 검토하고, 병렬 구조를 쓰더라도 톤·난이도·규칙 표기의 공통 가이드를 먼저 만들고 시작하려 합니다. 피드백은 코멘트와 멘션으로 이력을 남겨 담당자에게 바로 전달되는 구조를 두고요."
      ],
      "follow": [],
      "sub": true,
      "link": "2-0-6",
      "pts": 7
    },
    {
      "id": "p14",
      "topic": "project",
      "q": "「SOS」에서 맡은 전투 시스템의 핵심은 무엇인가요?",
      "a": [
        "SOS는 시간이 곧 수명이자 화폐인 로그라이트 RPG입니다. 전투의 목표는 적을 처치해 시간을 빼앗고 그걸로 플레이어의 수명을 연장하는 것입니다.",
        "행동 게이지(ATB) 기반 턴제로, 플레이어와 적 모두 게이지가 차는 동안 수명이 줄어듭니다. 그래서 빠르게 처치할수록 더 많은 수명을 얻습니다. 플레이어는 슬롯 4개에 행동을 예약하고 실행 전까지 바꿀 수 있습니다.",
        "핵심 재미는 몬스터마다 다른 '약점 커맨드'를 찾는 것입니다. 공격 1·2·3의 기본 피해를 똑같이 두어 '가장 센 공격' 대신 '약점 커맨드에 포함되는 공격'을 찾게 만들었고, 커맨드 성공 시 ×5, 후보 공격에는 ×1.1의 작은 힌트 피해를 줍니다.",
        "적의 행동은 공격만 두었습니다. 방어나 특수 행동을 주면 전투가 길어져 '빠른 처치 → 수명 획득'이라는 핵심 구조가 무너지기 때문입니다."
      ],
      "follow": [
        "p15",
        "p16",
        "p17"
      ],
      "sub": false,
      "link": "2-1-2",
      "pts": 5
    },
    {
      "id": "p15",
      "topic": "project",
      "q": "약점 커맨드는 어떻게 설계했나요?",
      "a": [
        "공격 1·2·3을 중복 허용해 2~4자리로 조합합니다. 경우의 수는 3²+3³+3⁴로 117개이고, 몬스터마다 기획자가 직접 부여합니다.",
        "등급별로 운용이 다릅니다. Normal은 3개 중 1개가 랜덤으로 고정되고, Elite는 첫 커맨드를 공략하면 두 번째로 전환돼 재탐색이 필요하며, Boss는 1→2→3 순차 전환입니다.",
        "판정은 플레이어의 공격 히스토리 13칸 안에 커맨드와 일치하는 부분 수열이 생기면 성공입니다. '외형으로 약점을 유추하는 건 당위성이 떨어진다'는 회의 의견을 받아, 플레이어 자신의 행동 기록으로 추리하는 방식으로 정했습니다."
      ],
      "follow": [],
      "sub": true,
      "link": "2-1-3",
      "pts": 7
    },
    {
      "id": "p16",
      "topic": "project",
      "q": "전투 밸런스 시뮬레이터는 왜 만들었나요?",
      "a": [
        "기획서의 수식이 실제로 어떤 체감을 만드는지 숫자로 확인하고 싶었습니다. 문서 위의 공식은 그럴듯해 보여도 '빨리 잡을수록 이득'이 등급별로 정말 성립하는지는 돌려 봐야 알 수 있습니다.",
        "MonsterTB 엑셀을 그대로 읽어 몬스터와 인스턴스 레벨을 고르고, 충전 시간·수명 감소·약점 배율 같은 변수를 즉석에서 바꿔 가며 전투 시간과 수명 손익을 봅니다.",
        "행동 로그와 부분 수열 판정이 기획서대로 동작하는지, 약점 후보 피드백이 충분한지도 같이 점검했습니다. 포트폴리오 페이지 안에서 바로 돌려 볼 수 있습니다."
      ],
      "follow": [],
      "sub": true,
      "link": "2-1-4",
      "pts": 7
    },
    {
      "id": "p17",
      "topic": "project",
      "q": "'수명이 곧 화폐'라는 아이디어는 어떻게 나왔나요?",
      "a": [
        "팀 편성 전 개인 아이디어 정리에서 '모든 생명체에 고유한 수명이 부여된 세계'를 제안했습니다. 수명을 거래하거나 살생으로 흡수하는 것이 일상이고, 수명의 많고 적음이 계급을 결정하는 세계관입니다.",
        "컨셉 회의에서 이 구조가 채택되어 최종 기획서의 '시간 = 수명 = 화폐' 단일 자원 구조로 발전했습니다. 마을에서는 수명으로 거래하고, 탐험에서는 타일 이동마다 소모하고, 전투에서는 실시간으로 줄어듭니다.",
        "'리얼타임은 몰입감이 있지만 불합리하게 느끼는 플레이어가 생길 수 있다'는 우려가 있어, 전투 중에만 실시간으로 줄고 그 밖에는 행동 단위로 소모하는 절충안을 택했습니다. 그게 제가 맡은 전투 시스템의 전제가 됐습니다."
      ],
      "follow": [],
      "sub": true,
      "link": "2-1-1",
      "pts": 7
    },
    {
      "id": "h01",
      "topic": "philo",
      "q": "게임이란 무엇이라고 생각하나요?",
      "a": [
        "인위적으로 설계된 규칙 속에서 플레이어가 특정 행위, 즉 플레이를 통해 원하는 보상을 얻는 과정에서 즐거움을 느끼는 상호작용 시스템이라고 생각합니다. 필수 요소는 규칙, 행위, 보상입니다.",
        "다른 매체와의 가장 큰 차이는 상호작용성입니다. 영화나 드라마는 정해진 서사를 수동적으로 따라가지만, 게임은 플레이어가 스스로 행동을 선택하고 그 선택이 분기와 결말이라는 결과로 이어지는 주체적 경험을 줍니다."
      ],
      "follow": [
        "h02",
        "h03"
      ],
      "sub": false,
      "link": null,
      "pts": 5
    },
    {
      "id": "h02",
      "topic": "philo",
      "q": "그럼 '재밌는 게임'은 무엇인가요?",
      "a": [
        "장르의 특성과 유저의 기대를 깊이 이해하고, 게임이 의도한 목적과 플레이어의 경험이 일치할 때 만들어진다고 생각합니다.",
        "같은 축구 IP라도 유저가 원하는 재미는 다릅니다. 구단을 키우고 경쟁에서 이기고 싶으면 FC 온라인, 선수가 된 경험을 원하면 커리어 모드, 전술과 이적 같은 운영에 흥미가 있으면 FM을 고릅니다.",
        "유저가 기대한 경험이 실제 플레이에서 충족될 때 비로소 완성됩니다. RPG에서 성장의 재미를 무시한 채 스펙 이득 없는 수집만 준다면, 비주얼 노벨에 뜬금없이 경쟁 요소를 넣는다면 본질적인 재미를 느끼기 어렵겠죠."
      ],
      "follow": [
        "h07"
      ],
      "sub": false,
      "link": null,
      "pts": 5
    },
    {
      "id": "h07",
      "topic": "philo",
      "q": "RPG로 좁히면 어떤 게임이 재밌는 게임인가요?",
      "a": [
        "성장과 도전의 순환 구조가 잘 설계된 게임입니다. 장비 강화나 레벨업으로 강해졌다는 성취를 느끼고, 그 힘으로 강력한 보스나 어려운 퀘스트에 도전하고, 보상이 다시 성장의 발판이 되는 흐름입니다.",
        "결국 '성장–도전–보상' 루프가 얼마나 매끄럽게 이어지는가에 달려 있고, 여기에 완성도 높은 스토리와 여러 콘텐츠가 결합될 때 재미가 만들어진다고 생각합니다."
      ],
      "follow": [],
      "sub": true,
      "link": null,
      "pts": 7
    },
    {
      "id": "h03",
      "topic": "philo",
      "q": "본인이 생각하는 좋은 기획자는 어떤 사람인가요?",
      "a": [
        "단순히 아이디어를 내는 사람이 아니라, 유저의 경험을 깊이 이해하고 그 아이디어가 실제로 구현될 수 있도록 명확한 기준과 구체적인 설계 흐름을 제시하는 사람이라고 생각합니다.",
        "그래서 저는 기획서를 쓸 때 '왜'를 먼저 적고, 프로그래머가 바로 옮길 수 있는 조건·수치·테이블까지 내려가려고 합니다."
      ],
      "follow": [
        "h04",
        "h05"
      ],
      "sub": false,
      "link": null,
      "pts": 5
    },
    {
      "id": "h04",
      "topic": "philo",
      "q": "시스템 기획과 콘텐츠 기획의 차이를 어떻게 이해하고 있나요?",
      "a": [
        "시스템 기획은 게임의 핵심 규칙을 정의하고 데이터 구조와 관계를 설계하는 일, 콘텐츠 기획은 만들어진 시스템 안에서 콘텐츠를 양적으로 쌓아 올리는 일이라고 봅니다.",
        "장비로 예를 들면 장비의 역할, 작동 구조, 장착·강화·분해를 설계하는 게 시스템 기획이고, 장비들의 컨셉과 외형을 정하고 데이터를 입력하는 게 콘텐츠 기획입니다.",
        "다만 경계는 관점에 따라 달라집니다. 퀘스트는 멀리서 보면 놀거리 중 하나인 콘텐츠지만, 가까이서 보면 수락·달성 조건·보상 수령이라는 규칙의 모임인 시스템입니다. 새 플레이 모드도 콘텐츠처럼 보이지만 새 메커니즘이 필요하면 시스템 역량이 더 많이 필요하죠."
      ],
      "follow": [],
      "sub": true,
      "link": null,
      "pts": 7
    },
    {
      "id": "h05",
      "topic": "philo",
      "q": "기획 의도를 다른 직군에 전달할 때 가장 중요한 것은 무엇인가요?",
      "a": [
        "'이 정보가 누구에게 필요한가'를 먼저 묻는 것입니다. 정확성·우선순위·리스크·일정 모두 중요하지만, 받는 사람에게 필요 없는 정보는 아무리 정확해도 소음이 됩니다.",
        "아트팀에는 레이아웃·색상·레퍼런스처럼 연출 판단에 필요한 것을, 프로그래밍팀에는 조건·트리거·상태 변화·수치 테이블처럼 구현에 필요한 것을 따로 정리해 줍니다.",
        "한 문서에 다 담았다가 양쪽 모두 시간을 낭비하고 '이건 누구 담당인가요' 같은 질문이 쏟아졌던 경험에서 배운 기준입니다."
      ],
      "follow": [
        "p06",
        "h06"
      ],
      "sub": false,
      "link": "1-0-7",
      "pts": 5
    },
    {
      "id": "h06",
      "topic": "philo",
      "q": "유저 경험과 개발 비용이 충돌하면 어느 쪽을 우선하나요?",
      "a": [
        "'핵심 경험'은 지키고, 그걸 구현하는 '방식'에서 비용을 줄이는 쪽을 먼저 찾습니다.",
        "맨홀 장애물이 그 예였습니다. 과속방지턱이 주던 '속도를 조절하고 회피한다'는 경험은 그대로 두고 외형만 바꿔 3D 모델링 비용을 없앴습니다. 인트로 컷씬도 풀 애니메이션 대신 컷 만화에 부분 애니메이션을 남기는 절충으로 컨셉과 효율을 함께 잡았습니다.",
        "그래도 충돌이 남는다면, 그 경험이 코어 루프에 속하는지가 기준입니다. 코어라면 일정을 조정해서라도 지키고, 아니라면 '나중에 넣을 목록'으로 보냅니다."
      ],
      "follow": [],
      "sub": true,
      "link": "1-0-1",
      "pts": 7
    },
    {
      "id": "s01",
      "topic": "skill",
      "q": "Excel로 시스템 테이블을 설계·운용했다고 했는데, 구체적으로 어떤 테이블이었나요?",
      "a": [
        "이벤트 실행 순서를 제어하는 이벤트 시퀀스 테이블, 대사와 시나리오를 관리하는 DialogTable, 캐릭터 성장 요소인 일과 시스템 테이블입니다.",
        "이벤트 시퀀스 테이블은 EventType 컬럼으로 Dialog·MiniGame·CutScene을 구분하고, 연결 데이터를 참조하는 파라미터 컬럼과 배경·UI 표시를 제어하는 EventScene 컬럼을 뒀습니다. 이벤트가 끝나면 NextEventID를 참조해 자동으로 다음으로 넘어가서, 스토리와 미니게임이 섞인 구조에서도 흐름을 관리할 수 있었습니다.",
        "DialogTable은 DialogID·Script·NextDialogID로 대사를 잇고, SpeakerType과 SpeakerPos로 화자 이미지와 좌우 위치, 블러 처리나 표정 전환 같은 연출을 제어했습니다.",
        "일과 테이블은 TaskID·TaskType으로 일과를 구분하고 소비 골드, 스탯 상승치, 피로도 변화, 수행 가능 횟수를 수치 컬럼으로 뒀습니다. 기획 의도만 적은 문서가 아니라 개발에서 바로 읽는 형태였습니다."
      ],
      "follow": [
        "p03"
      ],
      "sub": false,
      "link": "1-0-2",
      "pts": 5
    },
    {
      "id": "s02",
      "topic": "skill",
      "q": "Python으로는 어떤 스크립트를 만들어 봤나요?",
      "a": [
        "주로 입력을 인식하고 처리하는 스크립트입니다.",
        "아두이노 오목 게임에서는 OpenCV로 웹캠 영상을 분석해 새로 놓인 돌의 좌표를 15×15 격자로 변환해 Unity로 보냈고, 포수 시뮬레이터에서는 MediaPipe로 손 관절 좌표를 뽑아 제스처별 각도 데이터를 학습시켜 손동작을 인식했습니다.",
        "최근에는 기획서 수식을 검증하려고 SOS 전투 시뮬레이터를 웹으로 만들기도 했습니다. 프로그래머 수준은 아니지만, 아이디어를 검증할 프로토타입은 스스로 만들 수 있습니다."
      ],
      "follow": [],
      "sub": false,
      "link": "1-2-1",
      "pts": 5
    },
    {
      "id": "s03",
      "topic": "skill",
      "q": "C#으로 몬스터 동작 로직을 구현했다고 했는데, 어떤 로직인가요?",
      "a": [
        "Unity에서 몬스터 상태를 대기(Idle)–추격(Chase)–공격(Attack)–복귀(Return) 네 단계로 나누고 상태 전환 조건을 코드로 관리했습니다.",
        "플레이어가 감지 범위에 들어오면 추격으로 전환해 이동하고, 공격 범위에 들어오면 공격 애니메이션과 데미지 처리를 하고, 추격 중 감지 범위를 벗어나면 스폰 위치로 돌아가 대기합니다. Update()에서 매 프레임 거리·방향·속도를 계산합니다.",
        "이동 속도, 감지 거리, 공격 거리는 Inspector에서 조정할 수 있게 변수화해서 코드 수정 없이 밸런싱이 가능하게 했습니다. 경로 탐색까지는 다루지 않았지만 '언제 추격하고 언제 공격하고 언제 복귀하는가'를 정하는 상태 구조는 설계하고 구현할 수 있는 수준입니다."
      ],
      "follow": [
        "s04"
      ],
      "sub": false,
      "link": "1-1-2",
      "pts": 5
    },
    {
      "id": "s04",
      "topic": "skill",
      "q": "그 로직을 짤 때 어려웠던 점은요?",
      "a": [
        "플레이어가 다른 층이나 발판 위에 있을 때의 감지 처리였습니다. 2D라서 Vector2.Distance로 거리만 재면 위쪽 발판처럼 접근할 수 없는 위치에 있어도 가깝다고 판단해 추격을 시작해 버렸습니다.",
        "그래서 몬스터와 플레이어의 Y좌표 차이가 일정 범위 이하일 때만, 즉 같은 층에 있을 때만 인식하도록 조건을 추가했습니다.",
        "벽이나 장애물이 있는 경우도 고려해 Physics2D.Linecast로 시야가 막혀 있으면 추격하지 않도록 보완했습니다."
      ],
      "follow": [],
      "sub": true,
      "link": "1-1-2",
      "pts": 7
    },
    {
      "id": "s05",
      "topic": "skill",
      "q": "Figma는 어느 수준으로 활용하나요?",
      "a": [
        "UI 기획에서는 실제 플레이 흐름 단위로 와이어프레임을 그리고 페이지 간 전환 플로우까지 연결해 프로토타입 형태로 만듭니다. 일과 시스템 UI에서는 일과 선택 → 수행 → 결과창 흐름을 버튼 클릭으로 테스트할 수 있게 했습니다.",
        "버튼 크기·여백·배치 기준·폰트를 담은 UI 구성 요소 가이드와 화면 전환 효과·색상 톤을 담은 연출 가이드를 별도로 만들기도 했습니다.",
        "「The Glitch」에서는 한 걸음 더 나가 Figma 프로토타입만으로 비주얼 노벨 빌드 자체를 만들었습니다. 씬 프레임 2,400여 개를 클릭 영역과 오버레이 프레임으로 잇고, 변수가 없는 환경에서 챕터 복제로 분기를 구현했습니다."
      ],
      "follow": [
        "p11"
      ],
      "sub": false,
      "link": "2-0-2",
      "pts": 5
    },
    {
      "id": "s06",
      "topic": "skill",
      "q": "도구 적응이 빠르다고 했는데, 증명할 사례가 있나요?",
      "a": [
        "전기전자공학부에서 Verilog HDL, Matlab, Python 등 서로 다른 언어와 툴을 학기마다 익혀 프로젝트에 바로 적용한 경험이 있습니다.",
        "「The Glitch」에서는 Figma 프로토타이핑을 5일 안에 팀 전체가 쓸 수 있는 제작 구조로 정리하고 빌드 통합과 플러그인 활용까지 맡았습니다.",
        "군 복무 때는 인수인계 없이 인사·병참 전산 툴을 다른 중대 보급관님들께 직접 배워 몇 주 만에 업무를 정상화했습니다. 새 도구 앞에서 '일단 만져 보고 정리하는' 습관이 있습니다."
      ],
      "follow": [],
      "sub": true,
      "link": "2-0-2",
      "pts": 7
    },
    {
      "id": "t01",
      "topic": "taste",
      "q": "본인의 인생 게임을 꼽는다면?",
      "a": [
        "하나만 꼽기는 어려워서 관점별로 말씀드리겠습니다. 가장 오래 꾸준히 즐긴 게임은 메이플스토리, 처음 플레이했을 때 임팩트는 데이브 더 다이버, 장르에 대한 인식을 바꿔 준 게임은 하데스, 모바일에서는 가디언 테일즈입니다.",
        "데이브 더 다이버는 해양 탐험이라는 컨셉에 경영과 RPG를 결합한 점이 인상적이었습니다. 탐험으로 재료를 얻고, 식당을 운영해 재화를 벌고, 장비를 강화해 더 깊이 들어가는 루프가 반복 플레이에도 동기를 줬습니다.",
        "하데스는 제가 선호하지 않던 로그라이크에 대한 인식을 바꿨습니다. 죽어서 로비로 돌아올 때마다 NPC의 새 대사가 나와 '처음으로 돌아왔다'가 아니라 '이야기 안에서 흘러가고 있다'고 느끼게 했고, 누적 성장 요소로 죽음이 스트레스가 아니게 만들었습니다.",
        "가디언 테일즈는 수집형 RPG에서 RPG의 본질적 재미를 잘 표현한 게임입니다. 챕터마다 완전히 다른 테마와 퍼즐로 새로운 경험을 설계했고, 한 맵 안에 히든 스테이지와 숨은 수집 요소를 배치해 '클리어를 강요받는 느낌'이 아니라 '스스로 탐험하는 재미'를 줬습니다."
      ],
      "follow": [
        "t02"
      ],
      "sub": false,
      "link": null,
      "pts": 5
    },
    {
      "id": "t02",
      "topic": "taste",
      "q": "그 게임의 재미 요소를 실제 게임에 적용한다면?",
      "a": [
        "하데스의 로그라이트 구조를 MMORPG의 이벤트 서버 같은 한정 콘텐츠에 적용하면 재밌을 것 같습니다.",
        "이벤트 서버는 캐릭터 컨셉은 매번 달라도 사냥 → 레벨업 → 재화 → 강화 → 보스로 이어지는 루프가 거의 같고, 모든 유저가 같은 사냥터에서 같은 성장 루트를 타서 단조로워지기 쉽습니다.",
        "직업군 하나를 골라 스테이지형 맵을 진행하고, 레벨업마다 랜덤으로 제시되는 스킬 중 하나를 골라 빌드를 만들고, 사망하면 장비와 레벨이 리셋되지만 한 번 얻은 장비는 도감에 등록되어 패시브 스탯을 올려 주는 구조입니다.",
        "유저마다 다른 조합과 전략으로 클리어하는 색다른 재미를 줄 수 있다고 생각합니다."
      ],
      "follow": [],
      "sub": true,
      "link": null,
      "pts": 7
    },
    {
      "id": "t03",
      "topic": "taste",
      "q": "좋아하는 게임 장르나 형태가 있나요?",
      "a": [
        "특정 장르보다 플레이 환경이 제 생활에 맞는 게임을 선호합니다. 이동 시간이 긴 편이라 대중교통이나 짧은 휴식에도 가볍게 할 수 있고, 원하면 PC에서 같은 경험을 이어서 할 수 있는 게임을 자주 했습니다.",
        "TFT, 하스스톤, 원신처럼 PC와 모바일을 오가는 크로스 플랫폼 게임입니다. 공통점은 플랫폼이 여럿이라는 게 아니라, 플랫폼이 달라져도 조작 난이도나 플레이 템포가 크게 변하지 않게 설계됐다는 점입니다.",
        "원신은 기본 공격·원소 스킬·원소 폭발이라는 단순한 3단 구조 안에서 캐릭터 조합과 원소 반응으로 전투 리듬이 완전히 달라져서, 복잡한 조작 없이도 모바일에서 다양한 전투 경험을 즐길 수 있었습니다.",
        "플랫폼이 달라져도 일관된 경험을 유지하는 설계가 요즘 유저의 라이프스타일에 가장 잘 맞는 방향이라고 느꼈습니다."
      ],
      "follow": [
        "t04"
      ],
      "sub": false,
      "link": null,
      "pts": 5
    },
    {
      "id": "t04",
      "topic": "taste",
      "q": "그 장점을 조작이 복잡한 PC 게임에 적용한다면?",
      "a": [
        "전체 플레이를 모바일로 옮기는 건 조작 복잡도와 네트워크 문제 때문에 현실적이지 않다고 봅니다.",
        "대신 동반 앱 중심으로 인게임과 연동되는 보조 시스템을 제공해 부분적으로 경험을 확장하는 방향이 낫다고 생각합니다. FC 온라인 앱이 선수 관리와 강화 기능을 지원하듯, 장비 강화나 잠재능력 재설정 같은 기능을 앱에서 열어 주는 식입니다.",
        "조작 난이도가 낮고 짧은 세션으로 즐길 수 있는 미니게임을 앱에서 상시 이용 가능하게 리뉴얼하면, PC 접속 외의 시간에도 그 게임의 경험이 이어집니다. IP 경험의 연속성을 강화하는 방향입니다."
      ],
      "follow": [],
      "sub": true,
      "link": null,
      "pts": 7
    },
    {
      "id": "t05",
      "topic": "taste",
      "q": "게임 말고 좋아하는 미디어나 취미가 있나요?",
      "a": [
        "웹툰을 자주 봅니다. 이동 중이나 잠깐의 쉬는 시간에도 가볍게 즐길 수 있어서요.",
        "작품마다 독특한 세계관이나 콘셉트가 잘 드러나 있어서, 보다 보면 자연스럽게 설정이나 연출 방식에서 영감을 얻는 경우가 많습니다."
      ],
      "follow": [
        "t06"
      ],
      "sub": false,
      "link": null,
      "pts": 5
    },
    {
      "id": "t06",
      "topic": "taste",
      "q": "그 콘텐츠에서 얻은 영감을 게임에 녹인다면?",
      "a": [
        "최근 재밌게 본 「종말에서 살아남기」는 포스트 아포칼립스에서 괴물을 피해 식량을 구하고 생존하며 비밀을 밝혀 가는 이야기입니다. 이 '긴장감 있는 생존의 재미'를 MMORPG의 아케이드 이벤트에 접목하면 흥미로울 것 같습니다.",
        "10개 내외의 맵으로 구성된 섬에서 자원을 채집·채광해 방어 시설을 짓고, 몬스터 사냥으로 식량과 장비를 얻고, 밤마다 몰려오는 웨이브를 막으며 생존 일수를 늘리는 구조입니다.",
        "생존 일차에 따라 보상을 차등 지급하고, 무한 웨이브 챌린지 모드의 랭킹으로 칭호나 훈장을 주면 경쟁 요소도 자연스럽게 들어갑니다. 수집 → 제작 → 방어 → 생존 루프는 기존 대전형 아케이드와는 다른 재미를 줄 수 있습니다."
      ],
      "follow": [],
      "sub": true,
      "link": null,
      "pts": 7
    },
    {
      "id": "d01",
      "topic": "docs",
      "q": "유니온 시스템 분석 문서에서 유니온이 무엇인지 간단히 설명해 주세요.",
      "a": [
        "유니온은 메이플스토리의 핵심 계정 성장 시스템입니다. 유저가 보유한 여러 캐릭터를 하나의 '공격대'로 편성해 각 캐릭터의 레벨과 직업에 따라 계정 단위로 공유되는 능력치를 얻습니다.",
        "밸런스, 보상, 능력치 구조가 복합적으로 얽혀 있어서 기획 전반의 설계 구조를 공부하기에 좋은 사례라고 판단해 분석했습니다."
      ],
      "follow": [
        "d02",
        "d03",
        "d06"
      ],
      "sub": false,
      "link": null,
      "pts": 5
    },
    {
      "id": "d02",
      "topic": "docs",
      "q": "유니온의 핵심 기획 의도는 무엇이라고 보나요?",
      "a": [
        "모든 캐릭터의 성장 경험을 계정 단위로 통합하는 것입니다. 한 캐릭터의 성장이 정체돼도 다른 캐릭터를 키워 계정 전체의 성장감을 계속 유지하게 합니다.",
        "세부적으로는 세 가지입니다. 고레벨 유저의 성장 정체 완화, 여러 캐릭터 육성을 권장해 장기 플레이 목표 제공, 그리고 기존 유저도 성장 가속 이벤트와 성장 아이템의 가치를 공평하게 누리게 하는 것입니다."
      ],
      "follow": [],
      "sub": true,
      "link": null,
      "pts": 7
    },
    {
      "id": "d03",
      "topic": "docs",
      "q": "캐릭터를 '블록'으로 배치하는 형태로 디자인한 이유는 무엇일까요?",
      "a": [
        "단순한 수치 상승이 아니라 공간을 채워 가며 성장하는 시각적 피드백을 주기 때문에, 계정 단위 성장을 직관적으로 체감하게 합니다.",
        "직업군별로 블록 모양을 다르게 한 건 다양한 직업 육성을 유도하기 위해서입니다. 점령 지역을 효율적으로 채우려면 다양한 모양이 필요하니 여러 직업군을 키워야 하는 동기가 자연스럽게 생깁니다. 등급이 오르면 블록이 커지도록 해 지속 육성도 유도합니다."
      ],
      "follow": [
        "d04",
        "d05"
      ],
      "sub": true,
      "link": null,
      "pts": 7
    },
    {
      "id": "d04",
      "topic": "docs",
      "q": "같은 직업의 효과를 하나만 적용하게 한 이유는요?",
      "a": [
        "특정 직업의 편중 육성을 막기 위해서입니다. 유니온 효과는 직업마다 효율이 달라서 제한이 없으면 효과가 좋은 직업만 반복해서 키우게 됩니다.",
        "동일 직업 중복 효과를 한 개만 적용해 다양한 직업군의 성장을 유도하는 장치라고 봅니다."
      ],
      "follow": [],
      "sub": true,
      "link": null,
      "pts": 7
    },
    {
      "id": "d05",
      "topic": "docs",
      "q": "내부 지역은 고정 수치, 외부 지역은 % 옵션으로 나눈 이유는요?",
      "a": [
        "내부 지역은 초보자나 저레벨 유저가 처음 배치하는 구간입니다. 빠른 성장 체감을 위해 저레벨에서 효율이 좋은 공격력·주스탯 같은 고정 수치 옵션을 뒀습니다.",
        "외부 지역은 유니온 등급이 높을수록 열리는 상위 영역이라, 보스전에서 효율이 좋은 보스 공격력·크리티컬 데미지·방어율 무시 같은 % 옵션으로 장기 성장 목표를 제공합니다.",
        "옵션 위치를 바꿀 수 있게 한 것도 직업마다 유효한 옵션이 달라 외부 지역 점령을 위해 쓸모없는 위치를 점령해야 하는 문제를 막기 위한 장치입니다."
      ],
      "follow": [],
      "sub": true,
      "link": null,
      "pts": 7
    },
    {
      "id": "d06",
      "topic": "docs",
      "q": "유니온 시스템의 문제점과 해결책은 무엇이라고 생각하나요?",
      "a": [
        "세 가지를 짚었습니다. 효율 좋은 직업군만 먼저 키워야 하는 강제 육성 문제, 주스탯별로 공격대원 수가 달라 생기는 스탯 불균형, 그리고 유니온 9000 이후 추가 투자 효용이 떨어지는 성장 동기 부족입니다.",
        "스탯 불균형은 직업 밸런싱 차원에서 관리 가능한 영역이라고 봤고, 강제 육성은 성장 완화 아이템의 등장으로 진입 장벽이 낮아져 우선 개편 사항은 아니라고 판단했습니다.",
        "성장 동기 부족은 유니온 등급이 오를 때마다 기존 점령 지역의 패시브 효과를 일부 강화해 주는 시스템으로 개선할 수 있다고 제안했습니다."
      ],
      "follow": [],
      "sub": true,
      "link": null,
      "pts": 7
    },
    {
      "id": "d07",
      "topic": "docs",
      "q": "길드 콘텐츠 개편안을 요약해 주세요.",
      "a": [
        "현재 길드 콘텐츠는 노블레스 스킬 포인트를 얻기 위해 매주 해야 하는 숙제로 굳어져 있고, 보상이 상위 길드에 집중돼 길드 선택의 자유가 제한되며, 협동 콘텐츠로서의 목표성도 잃었다고 봤습니다.",
        "그래서 세 가지를 제안했습니다. 주간 초기화를 4주 시즌제로 바꿔 피로도를 줄이고, 개인 시즌 점수에 따른 개인 단위 SP를 추가해 보상 공정성을 높이고, 별도 신규 콘텐츠 대신 기존 보스 레이드를 길드 단위로 확장한 '길드 보스 미션'으로 공동 목표를 제시하는 것입니다.",
        "목표는 피로도 완화, 보상 공정성, 길드 커뮤니티 활성화입니다."
      ],
      "follow": [
        "d08",
        "d09",
        "d10"
      ],
      "sub": false,
      "link": null,
      "pts": 5
    },
    {
      "id": "d08",
      "topic": "docs",
      "q": "피로도 완화를 왜 시즌제로 풀었나요?",
      "a": [
        "주간 초기화 구조는 '매주 반드시 참여해야 한다'는 압박을 줍니다. 유니온 챔피언처럼 부캐릭터 육성이 권장되는 환경에서 매주 여러 캐릭터로 길드 콘텐츠를 도는 건 피로도가 큽니다.",
        "점수 집계는 주간으로 유지하되 기록을 4주 시즌 단위로 초기화하면, 참여 시점을 유저 스스로 조절할 수 있습니다. 한 달에 한 번만 해도 되는 구조로 피로도를 줄이려 했습니다."
      ],
      "follow": [],
      "sub": true,
      "link": null,
      "pts": 7
    },
    {
      "id": "d09",
      "topic": "docs",
      "q": "개인 SP를 추가하면 상위 길드가 반발하지 않을까요?",
      "a": [
        "가능성은 있습니다. 하지만 개인 SP는 길드 SP를 보조하는 개념으로 설계했기 때문에 구조적으로 불이익보다 긍정적인 유도 효과가 더 큽니다.",
        "기존에는 개인이 아무리 높은 성과를 내도 소속 길드 랭킹이 낮으면 보상을 못 받는 한계가 있었습니다. 동일한 보상 규모를 유지하면서 지급 기준을 길드 점수에서 개인 시즌 점수로 확장한 것입니다.",
        "상위 길드 유저는 이미 참여율과 전투력이 높아서 개인 SP로 자기 기여도를 명확히 체감할 수 있는 동기가 됩니다. 랭킹 구간도 25SP 보장 구간은 유지하되 상위 구간 폭을 넓혀 더 많은 길드가 현실적인 목표를 세우게 조정했습니다."
      ],
      "follow": [],
      "sub": true,
      "link": null,
      "pts": 7
    },
    {
      "id": "d10",
      "topic": "docs",
      "q": "길드 보스 미션은 어떻게 설계했나요?",
      "a": [
        "길드 단위로 매주 랜덤 부여되는 미션 보스를 길드원 파티로 처치해 길드 보상과 개인 보상을 함께 얻는 협력형 PvE 콘텐츠입니다. 이지·노멀·하드 세 난이도 중 선택합니다.",
        "핵심은 길드 간 경쟁이 아니라 길드 내 협력 경험의 확대라서 최상위 길드만 가능한 엔드 콘텐츠급 보스는 제외했습니다. 이지는 접근성 우선, 노멀은 숙련 유저, 하드는 상위권을 대상으로 보스 체력 대비 파티 인원 기준으로 구간을 나눴습니다.",
        "보상은 개인 클리어 보상과 길드 누적 달성률 보상으로 분리해 참여도에 따라 성취감을 주고, 인게임 경제에 영향을 주지 않도록 재화보다 경험치와 버프 중심으로 구성했습니다. 길드 전용 공간을 꾸미는 가구 같은 커뮤니티 보상도 제안했습니다."
      ],
      "follow": [],
      "sub": true,
      "link": null,
      "pts": 7
    },
    {
      "id": "d11",
      "topic": "docs",
      "q": "메이플 프론티어 제안서의 핵심 아이디어는 무엇인가요?",
      "a": [
        "메이플스토리 세계관을 배경으로, 탐험에서 몬스터를 수집하고 그 몬스터를 유닛으로 활용해 거점을 방어하는 2D 횡스크롤 탐험 디펜스 게임입니다.",
        "핵심 재미는 탐험 → 수집 → 전투 → 성장이 끊기지 않고 순환하는 루프입니다. 어떤 몬스터를 얼마나 모았느냐가 전투 전략을 결정하고, 전투 결과가 성장과 새 지역 해금으로 이어져 더 넓은 탐험의 이유가 됩니다.",
        "항상 적으로만 마주쳤던 몬스터가 유저 편에서 싸운다는 점에서 IP의 색다른 확장이라고 봤습니다. 개발 전략으로는 탐험과 전투 페이즈를 분리해 병렬 개발하고, 애니메이션 리소스는 기존 자산을 활용해 아트팀이 UI·배경에 집중하도록 제안했습니다."
      ],
      "follow": [],
      "sub": false,
      "link": null,
      "pts": 5
    },
    {
      "id": "m01",
      "topic": "tmi",
      "q": "MBTI가 어떻게 되세요?",
      "a": [
        "ISTP입니다. 사람들과 대화하는 건 좋아하지만 쉴 때만큼은 집에 누워서 혼자 쉬는 걸 굉장히 좋아합니다.",
        "꼭 컴퓨터 앞에 앉지 않아도 누워서 할 수 있는 크로스 플랫폼 게임을 좋아하는 이유이기도 한 것 같습니다."
      ],
      "follow": [],
      "sub": false,
      "link": null,
      "pts": 3
    },
    {
      "id": "m02",
      "topic": "tmi",
      "q": "여행할 때는 어떤 스타일인가요?",
      "a": [
        "숙소에 오래 있는 스타일입니다. 유적지를 보러 다니기보다 그 지역 음식을 맛보고 사람들과 이야기하는 걸 좋아해서요.",
        "이곳저곳 많이 돌아다니기보다 맛있는 걸 먹으면서 숙소에서 편안하게 쉬는 여행을 좋아합니다."
      ],
      "follow": [],
      "sub": false,
      "link": null,
      "pts": 3
    },
    {
      "id": "m03",
      "topic": "tmi",
      "q": "자주 이용하는 커뮤니티가 있나요?",
      "a": [
        "취미나 관심사와 관련된 커뮤니티를 이용하는 편입니다. 게임잡이나 에브리타임에서 채용 정보를 얻고, 메이플스토리 인벤도 자주 갑니다.",
        "특히 직업 게시판에서 패치가 있을 때 딜사이클이나 분석 글을 올리곤 합니다. 본캐 직업의 밸런스 패치가 있었을 때는 테스트 서버에서 플레이해 보고 전투 분석 비교와 변경점 분석 글을 올렸습니다."
      ],
      "follow": [
        "m04"
      ],
      "sub": false,
      "link": null,
      "pts": 3
    },
    {
      "id": "m04",
      "topic": "tmi",
      "q": "그 분석 글은 어떤 내용이었나요?",
      "a": [
        "가장 큰 변화는 극딜 주력기 하나의 서버 렉이 사라지고 주력 평딜기의 딜레이가 4% 줄어든 것이었습니다. 지속시간이 줄어 너프처럼 보였는데 직접 허수아비를 쳐 보니 차이가 없어서 놀랐습니다.",
        "내부 데이터를 볼 수 없어 확신은 못 하지만, 기존 1.5초로 발동되던 내부 쿨이 평딜기 딜레이 때문에 매번 발동하지 못했는데 딜레이가 줄면서 발동 주기가 짧아져 지속시간이 줄어도 데미지가 유지되는 게 아닌가 추측했습니다.",
        "패치 노트의 숫자와 실제 체감이 왜 다른지 구조로 설명해 보려는 습관이 있습니다."
      ],
      "follow": [],
      "sub": true,
      "link": null,
      "pts": 4
    },
    {
      "id": "m05",
      "topic": "tmi",
      "q": "마지막으로 하고 싶은 말이 있나요?",
      "a": [
        "먼저 이렇게 시간을 내어 제 이야기를 들어 주셔서 감사합니다.",
        "저는 9살에 처음 게임을 시작해 20년 가까이 한 명의 유저로 살아왔습니다. 앞으로는 만드는 사람으로서 유저 경험을 더 좋게 만들고, 저와 같은 유저들을 많이 만들고 싶습니다.",
        "멋진 마무리 멘트를 준비하려 했는데 막상 잘 떠오르지 않아 솔직하게 말씀드리겠습니다. 정말 꼭 함께하고 싶습니다. 이정훈이었습니다. 감사합니다."
      ],
      "follow": [],
      "sub": false,
      "link": null,
      "pts": 3
    }
  ]
};
