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
