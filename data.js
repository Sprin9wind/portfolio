/* ============================================================
   포트폴리오 내용 데이터
   원본: 노션 「2026 메커톤 Portfolio」 (https://app.notion.com/p/2026-Portfolio-0009d4ab6bba82c5b160816e3f7c494a)
   본문 문장은 노션 원문 그대로이고, 구조만 사이트 블록으로 옮겼다.
   admin.html(편집기)에서 고치고 내보내면 이 파일이 다시 만들어진다.
   ============================================================ */
window.PORTFOLIO_PROFILE = {
  "name": "이정훈",
  "title": "Game Designer PortFolio",
  "tagline": "창의적인 아이디어를 게임 디자인으로 풀어내는 기획자",
  "cards": [
    {
      "label": "직무",
      "value": "시스템 · 컨텐츠 기획"
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
            html: `<p>안녕하십니까 저는 <span class="mark">창의적인 아이디어를 게임 디자인으로 풀어내는 기획자</span> 이정훈 입니다.<br>저는 게임이 단순한 재미를 넘어, 유저에게 새로운 경험과 의미를 전달할 수 있는 매체라고 믿습니다.</p><p>다양한 경험을 바탕으로 기존의 틀에 얽매이지 않고 새로운 아이디어를 발굴하며,<br>이를 실제 기획과 구현으로 발전시켜 왔습니다.</p><p>게임의 핵심적인 재미와 가치를 유지하면서도 새로운 경험을 제공할 수 있는 기획자가 되기 위하여 항상 새로운 도전을 하며,<br>배우고 성장해 나가고 있습니다.</p><h2>연락처</h2><table><tr><th>지역</th><td>Seoul, South Korea</td></tr><tr><th>Tel</th><td>010-4199-5723</td></tr><tr><th>E</th><td><a href="mailto:harry5493@gmail.com">harry5493@gmail.com</a></td></tr></table>`
          },
          {
            title: "교육 · 자격증",
            tag: "이력",
            html: `<h2>교육</h2><ul class="timeline"><li><b>DEVELROCKET Unity기반 스타트업 게임개발자 양성</b><span class="when">2026.04~</span></li><li><b>건국대학교 전기전자공학부</b><span class="when">2019.03~2025.08(졸업)</span></li></ul><h2>자격증</h2><ul><li>Mos 365 Excel Expert</li><li>Mos 365 Excel Associate</li></ul>`
          },
          {
            title: "Tools",
            tag: "도구",
            html: `<div class="skill-grid"><div class="skill"><div class="skill-head"><img class="skill-ico" src="images/05-330px-Microsoft_Office_Word__2019_2025_.svg.webp" alt=""><span class="skill-name">Word</span></div><span class="skill-level l2">능숙</span></div><div class="skill"><div class="skill-head"><img class="skill-ico" src="images/04-250px-Microsoft_Office_Excel__2025_present_.svg.webp" alt=""><span class="skill-name">Excel</span></div><span class="skill-level l2">능숙</span></div><div class="skill"><div class="skill-head"><img class="skill-ico" src="images/03-250px-Microsoft_Office_PowerPoint__2025_present_.svg.webp" alt=""><span class="skill-name">PowerPoint</span></div><span class="skill-level">숙련</span></div><div class="skill"><div class="skill-head"><img class="skill-ico" src="images/02-250px-Python-logo-notext.svg.webp" alt=""><span class="skill-name">Python</span></div><span class="skill-level">숙련</span></div><div class="skill"><div class="skill-head"><img class="skill-ico" src="images/06-330px-Figma-logo.svg.webp" alt=""><span class="skill-name">Figma</span></div><span class="skill-level l2">능숙</span></div><div class="skill"><div class="skill-head"><img class="skill-ico" src="images/07-250px-Unity_Black_icon.svg.webp" alt=""><span class="skill-name">Unity</span></div><span class="skill-level l1">기본</span></div></div>`
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
        meta: "2025.03 ~ 2025.11 / 2026.03 ~ · 시스템 & 컨텐츠 기획",
        cover: "images/alien-01.png",
        lessons: [
          {
            title: "프로젝트 소개",
            tag: "개요",
            links: [{"label": "▶ 플레이 영상", "url": "https://youtu.be/EsUM0g3A2K0"}],
            html: `<img src="images/alien-01.png" alt=""><div style="position:relative;padding-top:56.25%;margin:0 0 18px"><iframe src="https://www.youtube.com/embed/EsUM0g3A2K0" title="YouTube video" style="position:absolute;inset:0;width:100%;height:100%;border:0;border-radius:14px" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe></div><ul><li>대학생 연합 게임제작 동아리 Bridge의 정규프로젝트로 개발 중인 작품으로, <br>외계인 택배회사를 컨셉으로 한 아케이드 게임입니다.</li><li>각기 다른 특성을 가진 상자를 판별하고 지정된 배송 구역으로 이송하는 미니게임을 수행하며, 챕터 기반 스테이지 구조와 스토리가 연계되어 진행됩니다</li><li>또한, 택배 운반을 지원하는 스킬 시스템과 캐릭터 성장을 위한 일과 시스템을 포함하여, 아케이드 플레이에 타이쿤적 요소를 더한 것이 특징입니다.</li></ul>`
          },
          {
            title: "1. 미니게임 컨텐츠 기획",
            tag: "담당 기획 업무",
            html: `<h2>게임 플레이 루프 설계</h2><ul><li>운반 성공,실패 조건 및 게임 종료 조건등의 플레이루프를 설계</li></ul><h2>상자 기믹 설계</h2><ul><li>일반 / 파손주의 / 냉장보관 등 상자 유형별 규칙 및 처리 방식 기획</li></ul><h2>UI/UX 기획</h2><ul><li>미니 게임 내 UI의 동작 구조와 화면 흐름을 플로우차트 및 와이어프레임을 기반으로 설계</li></ul><div class="img-row"><img src="images/alien-02.png" alt=""><img src="images/alien-03.png" alt=""></div><div class="img-row"><img src="images/alien-04.png" alt=""><img src="images/alien-05.png" alt=""></div>`
          },
          {
            title: "2. 대화 시스템 및 시나리오 기획",
            tag: "담당 기획 업무",
            html: `<h2>대화 시스템 구조 설계</h2><ul><li>스토리 전개 방식을 담당하는 캐릭터 간 대화 시스템의 플로우와 구조를 기획하였습니다.</li><li>분기형 진행을 고려하여 대화 데이터 구조(대사 ID, 캐릭터 정보, 분기 조건 등)를 정의하고<br>이를 바탕으로 대사 테이블을 설계하였습니다.</li></ul><img src="images/alien-06.png" alt=""><h2>시나리오/대사 작성</h2><ul><li>설계한 대화 데이터 구조에 맞춰 시나리오 / 대사를 입력 및 관리</li></ul><img src="images/alien-07.png" alt="">`
          },
          {
            title: "3. 스킬 시스템 기획",
            tag: "담당 기획 업무",
            html: `<ul><li>스킬의 효과 및 동작 구조를 정의하고, 레벨별 성능 변화와 업그레이드 비용을 설계했습니다.</li><li>또한 스킬 동작 시 발생하는 시각적 변화 요소를 연출 설계로 구체화하여, 캐릭터 이동, 이펙트, 상자 처리 애니메이션 등 각 동작의 흐름을 기획 의도에 맞게 정의했습니다. 개발팀과 아트팀이 기획 의도를 직관적으로 이해할 수 있도록 동작 애니메이션 시안을 함께 제공했습니다.</li></ul><p><strong>[스킬 동작 구조 및 연출 기획]</strong></p><img src="images/alien-08.png" alt=""><p><strong>[스킬 관리창 UI 기획 및 구간별 수치 설정]</strong></p><img src="images/alien-09.png" alt="">`
          },
          {
            title: "4. 스테이지 디자인",
            tag: "담당 기획 업무",
            html: `<ul><li>엔진 내에서 스테이지별 오브젝트 배치, 상자 스폰 빈도, 게임 시간, 캐릭터 이동 속도, <br>오브젝트 동작 주기 등을 직접 조정하며 스테이지별 흐름과 난이도를 설계했습니다.</li><li>반복적인 플레이 테스트를 통해 수치를 보정하며, <br>적절한 난이도 곡선을 만들어가는 과정을 수행했습니다.</li></ul><img src="images/alien-10.png" alt="">`
          },
          {
            title: "5. 기타 시스템 및 컨텐츠 기획",
            tag: "담당 기획 업무",
            html: `<p>이외에도 미니게임 플레이에 직접적인 영향을 주는 <strong>캐릭터 스테이터스 시스템,</strong><br>게임 내 자원 순환을 담당하는 <strong>골드 소모처인 일과 콘텐츠</strong>를 비롯하여 게임 내 전반적인<br><strong>시스템 및 부가 콘텐츠 기획</strong>을 담당하였습니다.</p><img src="images/alien-11.png" alt=""><img src="images/alien-12.png" alt="">`
          },
          {
            title: "5. 스테이지 난이도 & 재화 밸런스 설계",
            tag: "담당 기획 업무",
            html: `<ul><li>반복적인 플레이테스트를 통해 스테이지별 기준 수치를 설정하고, <br>테스터 유저의 실제 플레이 데이터를 수집하여 세부 조정을 진행했습니다.</li><li>스코어 기록 일지를 직접 작성하며 회차별 점수 편차와 특이사항을 분석하였고, 이를 바탕으로 상자 스폰 확률, 이동속도 보정치 등의 수치를 조정했습니다.</li><li>데이터 분석 과정에서 CH3 구간의 클리어율이 급격히 낮아지는 병목 구간을 식별하였고,<br>CH1 과2의 기본 지급 골드량및 CH3의 클리어 기준 점수를 재설정하여 난이도 곡선을 보완했습니다.</li></ul><img src="images/alien-13.png" alt=""><div class="img-row"><img src="images/alien-14.png" alt=""><img src="images/alien-15.png" alt=""></div>`
          },
          {
            title: "6. 고찰",
            tag: "회고",
            html: `<div class="callout insight"><div class="callout-ico">💡</div><div class="callout-body"><p>외노자 프로젝트는 현재 플레이스토어 출시를 앞두고 내부 테스트 단계에 접어들었습니다. 9개월간 프로젝트를 진행하며 가장 중요하게 배우고 느낀 점들을 정리했습니다.</p></div></div><h2>기획의도의 전달 방식</h2><p>이번 프로젝트를 진행하며, <br>기획 의도를 <strong>직군에 맞는 방식</strong>으로 전달하는 것이 협업의 핵심임을 체감했다.<br>초반에는 UI 기획을 진행할 때, 아트팀과 프로그래밍팀 모두에게 공통의 기획문서로 <br>와이어프레임, UX 플로우, 수치 계산 방식, 디자인 레퍼런스를 하나의 문서에 담아 전달했다. <br>정보가 빠지는 것보다 다 주는 게 낫다는 생각에서였다.</p><p>그러나 실제로는 아트팀이 불필요한 수치 정보 사이에서 필요한 연출 포인트를 찾는 데 시간이 오래 걸렸고, 프로그래밍팀은 구현 로직이 설명 속에 묻혀 해석에 어려움을 겪었다.</p><p>예시로 스코어보드 UI의 숫자 카운팅 애니메이션처럼 프로그래머의 구현 영역임에도 아트팀이 자신들의 작업 범위인지 헷갈려 하는 일도 발생했고, 결국 불필요한 질문과 소통 비용이 늘어났다.</p><p><span class="mark"><strong>초기 작업 당시 스코어보드 UI 문서 일부 발췌</strong></span></p><img src="images/alien-16.png" alt=""><p>이 경험을 바탕으로 직군별로 필요한 정보를 선별하여 제공하는 방식으로 바꿨다. <br>아트팀에는 <strong>화면 레이아웃과 색상, 레퍼런스 이미지</strong> 중심으로 프로그래밍팀에는 버튼 동작 조건, 입력 로직, 수치 값만 간결히 담아 전달했고, 이후 협업 과정에서 질문과 소통 비용을 크게 줄일 수 있었다.</p><p><span class="mark"><strong>프로그래밍팀: 스테이터스</strong></span></p><img src="images/alien-17.png" alt=""><p><span class="mark"><strong>아트팀: 스테이터스</strong></span></p><img src="images/alien-18.png" alt=""><p>그 결과 각 팀원이 자신의 역할과 관점에 맞게 기획 의도를 빠르게 이해할 수 있었고,<br> 실제 구현 과정에서 수정 빈도도 눈에 띄게 줄어들었다.</p><p>이 경험은 문서 작성 습관까지 바꿔놓았다.</p><p>이전에는 빠지는 정보가 없도록 무작정 많은 내용을 담았다면, 이제는 문서를 작성할 때마다 <br><strong>"이 정보가 누구에게 필요한가?"</strong>라는 질문을 스스로에게 먼저 던진다. <br>이 단순한 기준 하나만으로도 소통 효율이 크게 올라갔고, 팀원들의 피로도도 줄일 수 있었다.</p>`
          }
        ]
      },
      {
        title: "극락가신당",
        meta: "2024.03 ~ 2024.08.31 · 시스템 기획 & 프로젝트 매니징",
        cover: "images/shrine-01.png",
        lessons: [
          {
            title: "프로젝트 소개",
            tag: "개요",
            html: `<img src="images/shrine-01.png" alt=""><img src="images/shrine-02.png" alt=""><img src="images/shrine-03.png" alt=""><ul><li>대학생 연합 게임제작 동아리 Bridge에서 개발한 저승 배경의 어드벤처 게임입니다. <br>Dave the Diver처럼 타이쿤과 어드벤처가 결합된 멀티 포맷 형태로, 저승에서 신당을 운영하며 망자들을 상담하고 성장하여 플랫포머 형식의 던전 맵을 클리어하는 방식으로 진행됩니다.</li><li>팀장으로서 프로젝트 매니징 업무와 어드벤쳐 포멧의 총괄 기획을 담당하였습니다.</li></ul>`
          },
          {
            title: "1.프로젝트 매니징",
            tag: "담당 업무",
            html: `<img src="images/shrine-04.png" alt=""><img src="images/shrine-05.png" alt=""><ul><li>매주 화상회의를 진행하여 직군별 작업 현황을 공유하고 피드백을 진행했습니다.</li><li>회의 내용은 회의록으로 정리하여 팀 전체가 진행 상황을 파악할 수 있도록 했으며, 작업 진행 상황에 따라 차주 일정을 유동적으로 조정하고 각 팀원에게 업무를 할당하며 프로젝트 전체 흐름을 관리했습니다.</li><li>구글 드라이브 공유 문서를 통해 기획안 수정 및 작업 요청 사항이 발생할 때마다 문서를 최신화하여 팀 내 정보 공유가 원활히 이루어질 수 있도록 관리했습니다.</li></ul><img src="images/shrine-06.png" alt=""><img src="images/shrine-07.png" alt=""><ul><li>또한 GitHub와 디스코드를 연동하여 모든 직군의 팀원들이 작업내역을 커밋하고 <br>모바일 환경에서도 간편히 프로젝트 로그를 확인할 수 있도록 환경을 구성하였습니다.</li></ul>`
          },
          {
            title: "2. 어드벤쳐 총괄 기획",
            tag: "담당 업무",
            html: `<ul><li>캐릭터 스킬, 몬스터 AI 등 전투 시스템 설계와 맵·몬스터 컨셉 디자인 기획을 담당했습니다.</li></ul><h2>2. 1 몬스터 기획</h2><ul><li>몬스터의 공통 행동 프로세스를 설계했습니다. 시야 거리 기반의 캐릭터 인식, 공격 타입에 따른 선공 여부 판단, 추적 및 공격 프로세스, 투사체 발사 몬스터의 동작 방식 등을 정의하고 이를 변수와 데이터 테이블로 구조화하여 개발팀이 구현하기 쉽도록 전달했습니다.</li><li>챕터별 몬스터의 디자인 컨셉을 기획했습니다. 각 몬스터의 외형 특징, 색상 계열, 레퍼런스 이미지를 함께 제공하여 아트팀이 캐릭터 디자인 방향을 명확히 이해할 수 있도록 했습니다.</li></ul><img src="images/shrine-08.png" alt=""><p style="text-align:center;font-size:12px;color:var(--ink-3)"><strong>[몬스터 공통 프로세스 기획안 예시]</strong></p><img src="images/shrine-09.png" alt=""><p style="text-align:center;font-size:12px;color:var(--ink-3)"><strong>[몬스터 디자인 컨셉 기획안 예시]</strong></p><h2>2. 2 마을 & 탐헙 맵 기획</h2><ul><li>마을 맵은 상점, 흥신소, 저승 재판소, 퀘스트 알림판, 저승 문 등 5개 구역으로 구성하고, <br>각 오브젝트의 리소스명, 배치 크기, 레이어 순서를 정의했습니다. 저승 세계관에 맞는 아트 컨셉을 각 구역별로 제시하여 아트팀이 디자인 방향을 명확히 이해할 수 있도록 했습니다.</li><li>탐험 맵은 챕터별 던전 구조를 아웃라인 형태로 설계하고, 구역별 몬스터 배치 위치, 발판 동작 방식, 기믹 구조 등을 세부적으로 정의했습니다.<br>통과 가능한 발판, 위아래로 움직이는 발판, 레버 연동 장치 등 각 구역마다 다른 기믹을 배치하여 탐험의 흐름에 변화를 주었습니다.</li></ul><img src="images/shrine-10.png" alt=""><p style="text-align:center;font-size:12px;color:var(--ink-3)"><strong>[마을맵 구성 및 디자인 컨셉 기획안 예시]</strong></p><img src="images/shrine-11.png" alt=""><p style="text-align:center;font-size:12px;color:var(--ink-3)"><strong>[탐헙맵(던전) 구성 기획안 예시]</strong></p><h2>2. 3 캐릭터(스킬) 애니메이션 & 이펙트 기획</h2><ul><li>더블 점프, 기본 공격, 패링, 슬라이딩 등 캐릭터의 주요 동작별로 애니메이션과 이펙트, 사운드를 정의했습니다.</li><li>각 동작을 준비 동작, 액션, 마무리 단계로 구분하고 리소스명, 루프 타입, 재생 시간(ms)을 명시하여 아트팀이 제작 기준을 명확히 파악할 수 있도록 했습니다. <br>또한 레퍼런스 이미지와 영상을 함께 제공하여 의도한 연출 방향을 직관적으로 전달했습니다.</li></ul><img src="images/shrine-12.png" alt=""><p style="text-align:center;font-size:12px;color:var(--ink-3)"><strong>[애니메이션 및 이펙트 기획안 예시]</strong></p><img src="images/shrine-13.gif" alt=""><p style="text-align:center;font-size:12px;color:var(--ink-3)"><strong>[기획안을 바탕으로 완성된 애니메이션 초안]</strong></p>`
          },
          {
            title: "고찰",
            tag: "회고",
            html: `<div class="callout insight"><div class="callout-ico">💡</div><div class="callout-body"><p>2024년 3월부터 시작하여 약 5개월간 진행된 극락가신당 프로젝트는 취업과 군 복무 등의 사유로 팀원 3명이 이탈하며 잠정 중단되었습니다. <br>완결되지 못한 아쉬움이 있지만, 기획 조율, 시스템 구현의 현실적 한계, 지속적인 프로젝트 관리의 중요성 등 많은 것을 배우고 느낄 수 있었습니다.</p></div></div><h2>1. 나는 무엇이 부족했는가?</h2><h3>“결단력의 부재”</h3><p><em><strong>기획자는 항해사와 같다.</strong></em><br>명확한 기준과 목표를 설정하고 이를 바탕으로 방향성을 제시하는 사람이다.</p><p>항해사가 방향을 정하면, 선원들은 노를 저어 함께 목표를 향해 나아가야 한다.<br>그러나 항해사가 방향을 명확히 잡지 못하고 갈피하기 시작하면<br>선원들은 저마다 생각하는 방향으로 노를 젓고 결국 원래 목표지에 도착 할 수 없다.</p><p>그런 의미에서 개발 초기 나는 <em><strong>결단력 없는 항해사</strong></em>였다.</p><p>“극락가신당”의 시작은 매끄럽게 흘러가지 않았다.<br>내가 게임의 컨셉 기획안을 제시하고 함께 하고자 하는 팀원과 함께<br>팀빌딩을 하였을 당시에는 RGB 컬러코드를 조합하여 스킬을 습득하고,<br>이를 바탕으로 던전을 클리어하는 “팔레토”라는 로그라이크 게임을 기획하였다.</p><img src="images/shrine-14.png" alt=""><p style="text-align:center;font-size:12px;color:var(--ink-3)"><strong>[초기 아이디어 컨셉안 일부]</strong></p><p>그러나 첫 팀 회의에서 게임의 컨셉을 구체화 하고, 작업 방향성을 설정하는 과정에서<br>다른 시나리오 기획을 담당하는 팀원이 <em>저승 컨셉</em>을 배경으로 한 동양풍 어드벤쳐 게임의<br>아이디어를 제시하였다.</p><p>사실 나는 오컬트 장르의 게임을 플레이 해본 경험도 전무하고<br>구성한 아트 직군의 팀원도 캐주얼한 그림체 위주의 팀원을 뽑았던 터라<br>좋은 아이디어이지만 지금 와서 처음부터 시작하는 것은 좋지 않다는 의견이었다.</p><p>그러나 당시 영화 “파묘”와 게임 “산나비”의 흥행이 있던 배경에서<br>동양풍의 오컬트 게임 컨셉에 흥미를 보인 팀원들이 많이 있었고,<br>결국 투표를 통해 게임의 컨셉을 확정 짓고자 하였다.</p><p>투표 결과 4대4로, 기존 컨셉 유지와 새로운 컨셉으로 변경하자는 의견이 정확히 반반으로 갈렸다.<br>결국 의견이 갈린 기획 직군에서 스토리와 컨셉을 보완하고 재투표를 진행하기로 결정하였다.</p><p>그렇게 약 2주간의 시간이 흐르고, 재 투표를 걸쳐 새로운 기획안에 나를 포함 대부분의 팀원들이 어느정도 만족하여, 저승에서 신당을 운영하며 재화를 얻어 몬스터를 처치하는 멀티 포맷의 게임으로 컨셉과 구조가 변경 되었다.</p><img src="images/shrine-15.png" alt=""><img src="images/shrine-16.png" alt=""><p style="text-align:center;font-size:12px;color:var(--ink-3)"><strong>[변경된 컨셉 기획안 일부]</strong></p><p>그렇게 다른 팀들과 달리 우리는 거의 3주가 지난 시점이 되서야<br>프로젝트 진행에 착수하게 되었다.</p><p>결과론적으로 보면 현재의 “극락가신당” 팀이 있을 수 있던 것 또한<br>기획안이 변경되었기 때문이지만,빠르게 새로운 아이디어를 수용하고, 컨셉을 바꾸었다면<br>혹은 기존의 기획안을 강력하게 밀고 나갔다면 <br>팀이 갈피를 못 잡고 3주에 가깝게 딜레이 되며 시간을 허비하는 일은 없었을 것이다.</p><p>이후 개발 과정에서는 새로운 의견이나 피드백이 나오면,<br>빠르게 판단하여 수용할 부분과 확실히 아니라고 말할 부분을 명확하게 구분 하도록 노력하였다.</p><p><em><strong>모두를 만족시키는 기획이란 존재하지 않는다.</strong></em><br>하지만 그 수많은 의견과 상황 속에서 빠른 판단을 바탕으로 최선의 선택과 결과를 <br>이끌어 내는 것이야 말로 기획자의 역량일 것이다.</p><h3>“타 직군 이해”의 부재</h3><p>개발 초기, 또 하나의 부족 했던 점은 <em><strong>타 직군의 업무에 대한 이해</strong></em>였다.</p><p>기획자의 가장 중요한 역량은 설득력과 전달력이라고 생각한다. <br>아무리 좋은 기획안을 구상하더라도 상대를 이해시키지 못한다면 의미가 없다. <br>그런 의미에서 개발 초기 내가 했던 방식은 많이 부족했다.</p><p>마을 맵을 구상하고 아트 리소스를 처음 요청할 때였다. <br>레퍼런스 이미지, 러프 스케치, 인게임 규격 정도면 충분히 전달될 것이라 생각했다. <br>그런데 아트 팀원에게 질문이 왔다. <strong>"이거 해상도는 얼마로 작업하면 될까요?”</strong></p><p>처음 든 생각은 "그런 것까지 내가 정해줘야 하나?"였다. <br>하지만 사실 전달하지 않은 것이 아니라 못한 것이었다. 어떻게 해야 하는지 나도 몰랐기 때문이다.</p><p>아트 팀원은 어드벤처 게임 개발이 처음이었고, <br>기획자이자 팀장인 내가 세세한 가이드를 제시해줘야 하는 상황이었다.</p><p>그 상황에서 내가 선택한 방법은 <strong>무작정 찾기</strong>였다. <br>레딧과 구글을 뒤지며 우리 게임과 비슷한 오픈 스프라이트 시트를 전부 다운 받아 열어보았다.</p><img src="images/shrine-17.png" alt=""><img src="images/shrine-18.png" alt=""><p style="text-align:center;font-size:12px;color:var(--ink-3)"><strong>[할로우 나이트의 기둥 리소스와 실제 인게임(1920 X 1080)에서 보여지는 규격]</strong></p><p>다른 게임의 스프라이트 시트를 분석하며 해상도와 인게임 배치 규격을 비교하고, 우리 게임에 적용할 기준을 정리하여 리소스마다 세세한 규격과 해상도를 함께 전달했다.</p><p>이 과정에서 느낀 것은 타 직군의 업무에 대한 이해가 얼마나 중요한지였다. <br>구성한 기획을 효과적으로 전달하고 설득하려면 또 그 이유를 설득하기 위해서는 <br>상대방의 입장이 되어보는 것이 먼저다.</p><p>내 머릿속에서 나온 기획은 나를 이해시킬 수 있지만, 전달받는 사람이 쉽게 이해하고 작업할 수 있으려면 그 사람의 업무 방식과 필요한 정보를 알아야 한다.</p><p>그때까지 나는 타 직군의 입장에서 생각하기보다 기획안을 일방적으로 전달하고 네가 알아서 구현해라 식의 잘못된 기획을 하고 있었다.</p><p>이후부터는 작업 요청 시 추가로 필요한 정보가 있는지,<br>문서만으로 이해가 안 되는 부분은 없는지를 먼저 확인하는 습관을 들이게 되었다.</p><p><em><strong>설득의 바탕은 이해이다.</strong></em><br>상대를 이해시키려면 내가 먼저 상대를 이해해야 한다. <br>좋은 기획과 좋은 결과물을 만들기 위해 다른 직군의 업무를 이해하려 끊임없이 질문하고 노력할 것이다.</p>`
          }
        ]
      },
      {
        title: "모션인식 포수 시뮬레이터",
        meta: "졸업 작품 · 기획 & 개발",
        cover: "images/catcher-01.png",
        lessons: [
          {
            title: "프로젝트 소개",
            tag: "개요",
            links: [{"label": "▶ 플레이 영상", "url": "https://youtu.be/WGqZWfMl304"}],
            html: `<img src="images/catcher-01.png" alt=""><ul><li>전공한 영상신호처리 분야의 졸업 작품으로 기획 및 개발에 참여한 프로젝트입니다.</li><li>랜덤으로 등장하는 타자의 특성과 약점에 따라 유저가 카메라를 통해 직접 구종과 위치 사인을 입력하면, 투수가 이를 인식하여 공을 던지는 방식으로 진행됩니다. 한 이닝을 무사히 막아내면 승리하는 포수 체험 시뮬레이션 게임입니다.</li></ul><h2>플레이 영상</h2><div style="position:relative;padding-top:56.25%;margin:0 0 18px"><iframe src="https://www.youtube.com/embed/WGqZWfMl304" title="YouTube video" style="position:absolute;inset:0;width:100%;height:100%;border:0;border-radius:14px" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe></div><h2>담당 업무</h2><ul><li>프로젝트 의 주제 및 모델 선정</li><li>제스처 인식 파이썬 프로그램 및 Unity 서버로의 데이터 전송 구현</li><li>게임 총괄 기획</li></ul>`
          },
          {
            title: "개발일지",
            tag: "과정",
            html: `<h2>1.프로젝트 주제 및 모델 선정</h2><p>4학년 1학기 졸업 작품 오리엔테이션에서 영상신호처리 분야 내에서 자유롭게 주제를 선택할 수 있었습니다.</p><p>게임 기획자를 목표로 하고 있었기에 전공 지식을 게임적으로 활용할 수 있는 방법을 찾던 중 구글에서 제작한 손동작 인식 모델 Mediapipe를 알게 되었습니다.</p><p>Mediapipe는 이미지에서 손을 감지하는 Palm Detection Model과 3D 핸드 키포인트를 반환하는 Hand Landmark Model로 구성됩니다.</p><p>반환된 랜드마크 포인트에 각도 연산(arcCos 기반 내적 및 정규화)을 적용하여 각도 데이터를 추출하고, 특정 제스처 데이터를 학습시키면 실시간 손동작 인식이 가능합니다.</p><p>이를 활용하면 마우스나 키보드 같은 입력 장치 없이 손동작만으로 캐릭터를 조작할 수 있겠다고 판단하였고, 고전적인 입력 장치 없이직접 몸을 움직여 조작하는 방식이 기존 게임과는 다른 물리적 몰입감을 제공할 것이라는 생각을 바탕으로 처음에는 졸업 작품 주제로 모션 인식 3D 플랫포머를 선정하였습니다.</p><img src="images/catcher-02.png" alt=""><p style="text-align:center;font-size:12px;color:var(--ink-3)"><strong>[Media Pipe 모델]</strong></p><h2>2.프로토타입 제작</h2><p>주제 선정 이후 제스처 인식 파이썬 프로그램을 구현하고, <br>UDP소켓을 통해 인식한 제스처를 텍스트 데이터 형태로 Unity 서버로 전송하는 방식을 적용했습니다.<br>이를 통해 앞, 뒤, 좌우, 점프, 정지의 6가지 이동을 제스처로 조작하는 프로토타입을 제작했습니다.</p><div class="callout"><div class="callout-ico">🎬</div><div class="callout-body"><p>[초기 프로토타입] 영상은 <a href="https://app.notion.com/p/35d9d4ab6bba803dab0addb85f5450a1" target="_blank" rel="noopener">노션 원문에서 보기 ↗</a></p></div></div><h2>3.주제 전환</h2><p>프로토타입에 대해 교수님께서 아이디어는 좋지만 주제의 핵심이 더 부각되면 좋겠다는 피드백을 주셨습니다. 단순히 6가지 이동을 모션 인식으로 구현하는 것은 <br>"모션 인식을 활용한 유저와 캐릭터의 상호작용"이라는 핵심 의미가 퇴색된다는 평가였습니다.</p><p>이를 바탕으로 실제 야구에서 포수가 핸드 사인으로 구종을 전달하는 방식에 착안하여, <br>유저가 웹캠을 통해 직접 사인을 입력하면 투수가 이를 인식하여 공을 던지는 야구 시뮬레이션 게임으로 주제를 전환했습니다. <br>모션 인식과 게임 간의 상호작용이 훨씬 직관적이고 명확하게 드러나는 방향이라고 판단했습니다.</p><h2>4.제스처 인식 및 데이터 전송</h2><img src="images/catcher-03.png" alt=""><p>FastBall, Slider, Curve, ChangeUp, Two-seam Fastball, Sinker 6가지 구종과 스트라이크존 9개 구역의 위치 정보에 대응하는 제스처의 각도 데이터를 수집·라벨링하여 CSV 파일로 저장했습니다.</p><p>OpenCV의 KNN 모델로 해당 데이터를 학습시키고, 웹캠으로 입력받은 제스처의 각도 데이터와 비교하여 가장 일치하는 데이터를 반환하는 방식으로 제스처 인식 프로그램을 구현했습니다.</p><div class="callout"><div class="callout-ico">🎬</div><div class="callout-body"><p>[제스처 인식 테스트] 영상은 <a href="https://app.notion.com/p/35d9d4ab6bba803dab0addb85f5450a1" target="_blank" rel="noopener">노션 원문에서 보기 ↗</a></p></div></div><img src="images/catcher-04.png" alt=""><p>이후 웹캠으로 입력받은 영상을 인코딩하여 인식된 제스처 텍스트와 함께 UDP 소켓을 통해 <br>Unity 서버로 전송하는 부분까지 구현을 완료했습니다.</p><h2>5.기초 기획안 작성</h2><img src="images/catcher-05.png" alt=""><p>제스처 인식 및 데이터 전송 구현 완료 후, 게임 진행 플로우, 타자 정보, 구종별 궤적, 씬별 UI 등 <br>게임 전반의 기초 기획안을 작성했습니다.</p><p>게임 스타일에 맞는 야구장 및 선수 모델링 에셋과 함께 Unity 개발 팀원에게 전달하며 담당 역할을 마무리하였습니다.</p>`
          },
          {
            title: "고찰",
            tag: "회고",
            html: `<p>이번 프로젝트는 재미보다 기능적인 요소에 집중한 프로젝트였다. <br>전공 지식을 게임적인 요소로 활용해보자는 목표에서 시작했고, 심사 기간을 제외하면 2개월이 채 안 되는 촉박한 일정과 2인이라는 소규모 인원으로 인해 게임의 볼륨을 크게 설정할 수 없었다.</p><p>아쉬운 점도 많았다. <br>현재는 안타, 홈런, 스트라이크, 볼, 플라이아웃 5가지 타격 결과만 존재하지만,<br>번트나 파울을 추가해 변수를 만들거나 타자뿐 아니라 투수도 함께 변화하도록 구성하면 <br>랜덤성에서 오는 재미 요소를 더할 수 있었을 것이다.</p><p>그러나 짧은 기간과 제한된 인원 속에서도 전공 지식을 실제 게임으로 구현해냈다는 것 자체가 이 프로젝트의 의미였다. 기획자로서 기술적 구현 가능성을 이해하고 설계하는 것이 얼마나 중요한지 배울 수 있었던 경험이었다.</p>`
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
        title: "메커톤 아이디어 제안서 _ 메이플 프론티어",
        meta: "아이디어 제안서",
        cover: "images/frontier-01.png",
        lessons: [
          {
            title: "1. 게임 개요",
            tag: "제안서",
            html: `<img src="images/frontier-01.png" alt=""><img src="images/frontier-02.png" alt=""><ul><li><strong>메이플 프론티어</strong>는 메이플스토리의 세계관을 배경으로, 탐험을 통해 몬스터를 수집하고 <br>유닛으로 활용하여 거점을 방어하는 <strong>2D 횡스크롤 탐험 디펜스 게임</strong>이다.</li><li>헤네시스를 시작으로 챕터마다 새로운 메이플스토리 내 지역을 배경으로 <br>플레이어는 탐험 페이즈에서 맵을 자유롭게 돌아다니며 몬스터를 사냥하고, <br>수집한 몬스터는 도감에 등록되어 전투에서 유닛으로 활용된다.</li></ul><table><tr><th>항목</th><th>내용</th></tr><tr><td>장르</td><td>2D 횡스크롤 탐험 디펜스</td></tr><tr><td>플랫폼</td><td>메이플스토리 월즈</td></tr><tr><td>배경</td><td>빅토리아 아일랜드내 지역<br>헤네시스를 시작으로 챕터별 새로운 지역이 개방</td></tr><tr><td>핵심 키워드</td><td>탐험 , 수집 , 전투, 성장</td></tr><tr><td>플레이타임</td><td>챕터당 1시간 ~ 1시간 30분</td></tr></table>`
          },
          {
            title: "2. 핵심 재미 요소",
            tag: "제안서",
            html: `<ul><li><strong>탐험 → 수집 → 전투 → 성장</strong>으로 이어지는 루프가 끊기지 않고 순환하는 것이 <br>메이플 프론티어의 핵심 재미 요소이다.</li><li>탐험에서 어떤 몬스터를 얼마나 수집했느냐가 전투의 전략을 결정하고, 전투의 결과가 다시 플레이어의 성장과 새로운 지역의 해금으로 이어져 더 넓은 탐험의 이유가 된다. <br>단순히 웨이브를 버티는 디펜스가 아니라, 탐험에서의 선택과 준비가 전투의 전략으로 직결되는 구조로 유저가 필드에서 어떤 몬스터를 사냥하고, 어떤 장비와 시설을 제작하고, 언제 전투에 돌입할지 모든 선택이 결과에 영향을 미친다.</li><li>인게임에서 항상 적으로만 마주쳤던 몬스터들이 메이플 프론티어 에서는 유저와 한 편이 되어 싸우며, 사냥을 거듭할수록 유저와 함께 몬스터 유닛의 전력도 강화되는 구조를 통해,<br>메이플 IP를 색다른 방식으로 확장하고자 하였다.</li></ul>`
          },
          {
            title: "3. 게임 시퀀스",
            tag: "제안서",
            html: `<img src="images/frontier-03.png" alt=""><h2>3.1 탐험 페이즈</h2><ul><li>기존 메이플스토리와 동일한 방식으로 횡스크롤 맵을 자유롭게 이동하며 <br>몬스터 사냥, 채집, 채광을 통해 재화를 획득한다.</li><li>사냥한 몬스터는 몬스터 도감에 등록되며, 같은 몬스터를 더 많이 사냥할수록 유닛의 이해도가 올라가고 능력치가 강화된다. <br>획득한 재화로 캐릭터 장비를 강화하거나 방어시설을 건설하는 등 전투 준비를 진행할 수 있다.</li><li>탐험 시간은 최대 1시간이며, 준비가 완료되면 유저 선택에 따라 즉시 전투에 돌입할 수 있다.</li></ul><img src="images/frontier-04.png" alt=""><img src="images/frontier-05.png" alt=""><img src="images/frontier-06.png" alt=""><h2>3.2 전투 페이즈</h2><ul><li>거점을 향해 몰려드는 웨이브를 플레이어 직접 전투, 몬스터 유닛 소환의 이중 구조로 방어한다. <br>유닛은 하단 슬롯에서 전투 페이즈에서 적을 처치 시 획득하는 재화를 소모하여 소환하며, <br>유닛마다 공격 방식, 스테이터스, 이동 속도 등 전투 특성이 모두 다르다.</li><li>일정 시간 동안 웨이브를 방어하는데 성공하면 전투 스테이지가 클리어된다. <br>플레이어 사망 혹은 거점 체력이 0이 될 경우 경험치 및 재화 손실의 패널티를 얻고 탐험 페이즈로 복귀하고, 재정비후 다시 전투 페이즈에 도전할 수 있다.</li></ul><img src="images/frontier-07.png" alt=""><h2>3.3챕터 종료</h2><ul><li>한 챕터내에 설정된 전투 스테이지를 모두 클리어하면 챕터가 종료된다. <br>다음 챕터로 이동 시 새로운 맵과 함께 새로운 몬스터, 상위 장비 및 방어시설이 해금된다. <br>챕터1은 헤네시스를 배경으로 하며, 이후 챕터는 빅토리아 아일랜드의 새로운 지역으로 확장된다.</li></ul>`
          },
          {
            title: "4. 개발 전략",
            tag: "제안서",
            html: `<h2>4.1 개발 방식</h2><ul><li>제한된 제작 기간 안에 완성도를 확보하기 위해 탐험 페이즈와 전투 페이즈를 분리하여 병렬 개발을 진행한다. 탐험 파트와 전투 파트를 독립적으로 구현한 뒤 통합하는 방식으로 개발 효율을 높인다.</li></ul><h2>4.2리소스 활용</h2><ul><li>리소스 측면에서는 캐릭터, 몬스터 스프라이트, 전투 이펙트 등 애니메이션 작업이 수반되는 요소는 MSW의 기존 리소스를 최대한 활용하여, 아트 팀의 역량은 UI, 배경, 일러스트 등의 요소 제작에 집중한다.</li></ul><h2>4.3컨텐츠 확장</h2><ul><li>출품 목표는 3챕터 내외의 완성본이며, <br>이후 챕터 확장을 통해 콘텐츠 볼륨을 지속적으로 키워 나가는 방향으로 설계한다.</li></ul>`
          }
        ]
      },
      {
        title: "메이플스토리 유니온 시스템 분석",
        meta: "시스템 분석",
        cover: "images/union-01.png",
        lessons: [
          {
            title: "1. 설명",
            tag: "분석",
            links: [{"label": "📎 분석서 PDF · 엑셀 (Notion)", "url": "https://app.notion.com/p/35d9d4ab6bba80108f11d5aee3df3032"}],
            html: `<p>메이플스토리의 핵심 계정 성장 시스템인 유니온 시스템에 대하여 분석한 문서입니다.<br>상세 UI와 테이블을 재구성 하고, 적용 구조 및 기획 의도를 분석해 보았습니다.</p><img src="images/union-01.png" alt=""><p><strong>시스템 분석서 및 포함된 Table의 원본 엑셀 파일을 다운 받으실 수 있습니다.</strong></p><p><span class="mark"><strong>[다운로드]</strong></span></p><ul><li>메이플스토리_유니온시스템_분석서 (이정훈).pdf</li><li>공격대_효과_테이블 (이정훈).xlsx</li></ul><div class="callout"><div class="callout-ico">📎</div><div class="callout-body"><p>첨부 파일(PDF·xlsx)은 <a href="https://app.notion.com/p/35d9d4ab6bba80108f11d5aee3df3032" target="_blank" rel="noopener">노션 원문에서 보기 ↗</a></p></div></div>`
          }
        ]
      },
      {
        title: "메이플스토리 길드컨텐츠 및 길드 스킬 시스템개선",
        meta: "시스템 개선안",
        cover: "images/guild-01.png",
        lessons: [
          {
            title: "1. 설명",
            tag: "개선안",
            links: [{"label": "📎 개편서 PDF (Notion)", "url": "https://app.notion.com/p/35d9d4ab6bba800680a2e2973814ffd8"}],
            html: `<p>본 문서는 메이플스토리의 길드 컨텐츠 및 길드 스킬 시스템을 분석하고, <br>구조적 문제점을 개선하기 위한 구체적인 개편안을 제시합니다.</p><p>기존 길드 컨텐츠의 주간 반복 구조와 길드 랭킹 의존적인 보상체계로 인해 발생하는 <br>주간 컨텐츠 피로도, 길드 선택지의 강제성, 길드 성장 동기 부족등의 문제점을 중점적으로 다루었으며,</p><p>이를 해결하기 위해 <br>시즌 단위 초기화 전환, 개인 보상 구조 강화, 주간 보스 미션 도입등의 개선방향을 제안하였습니다.</p><p>개선안을 통해 유저가 보다 유연하고 공정한 방식으로 보상을 획득하고,길드 단위 협력과 커뮤니티적 가치를한층 강화시킬 수 있도록 하였습니다.</p><img src="images/guild-01.png" alt=""><p><strong>PDF 문서를 다운 받으시면 전문을 확인하실 수 있습니다.</strong></p><p><span class="mark"><strong>[다운로드]</strong></span></p><ul><li>메이플스토리_길드컨텐츠및_길드스킬_시스템개편서 (이정훈).pdf</li></ul><div class="callout"><div class="callout-ico">📎</div><div class="callout-body"><p>첨부 파일(PDF)은 <a href="https://app.notion.com/p/35d9d4ab6bba800680a2e2973814ffd8" target="_blank" rel="noopener">노션 원문에서 보기 ↗</a></p></div></div>`
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
            tag: "시스템 & 컨텐츠 기획",
            html: `<div class="callout"><div class="callout-ico">⬡</div><div class="callout-body"><p><em><strong>시스템 & 컨텐츠 기획</strong></em><br><strong>외(계인)노(동)자</strong>_대학생 연합 게임 제작 동아리 Bridge<br><span style="color:var(--ink-3)">( 2025.03~2025.11 / 2026.03~ )</span></p><p>대학생 연합게임제작 동아리 “BRIGE”의 정규 프로젝트에서 기획 파트로 참여하여 <br>외계인 택배회사를 컨셉으로 한 아케이드 게임을 제작하였고,<br>현재 플레이스토어 출시를 앞두고 내부테스트 심사 과정을 진행중입니다.</p><p>프로젝트에서 미니게임 컨텐츠 기획, 스테이지 디자인 성장 및 기타 시스템 기획 업무를 담당하면서 <br>기획의도를 명확히 구조화하고 전달하는 방식을 배울 수 있었습니다.</p></div></div>`
          },
          {
            title: "메이플 대학생 커리어 캠프 1기 수료",
            tag: "실무과제 우수상",
            html: `<div class="callout"><div class="callout-ico">⬡</div><div class="callout-body"><p><em><strong>메이플 대학생 커리어 캠프 1기 수료</strong></em><br><strong>실무과제 우수상 수상</strong><br><span style="color:var(--ink-3)">(2024.08)</span></p><p>10대/20대의 트렌드를 타겟한 마케팅 방안을 주제로<br>메이플스토리의 핵심 컨텐츠인 보스 레이드에서의 간단한 기믹과 패턴을 유저들이 <br>모바일 환경에서 사전에 체험 해볼 수 있는 플레이어블 형태의 광고를 기획하여 우수상을 수상하였습니다.</p></div></div>`
          },
          {
            title: "극락가신당",
            tag: "시스템 기획 & 프로젝트 매니징",
            html: `<div class="callout"><div class="callout-ico">⬡</div><div class="callout-body"><p><em><strong>시스템 기획 & 프로젝트 매니징</strong></em><br><strong>극락가신당</strong>_대학생 연합 게임 제작 동아리 Bridge<br><span style="color:var(--ink-3)">(2024.03 ~ 2024.08.31)</span></p><p>대학생 연합게임제작 동아리 “BRIGE”의 정규 프로젝트에서 팀장및 시스템 기획 파트를 수행하며<br><strong>극락가신당</strong>이라는 경영 시뮬레이션과 플랫포머 장르가 합쳐진 저승 배경의 어드벤쳐 게임을 제작하였습니다..</p><p>어드벤쳐 포멧의 전반적인 시스템 기획과 프로젝트 매니징 업무를 담당하면서 <br>팀의 방향성을 설정하고 일정과 역할을 조율하는 과정에서, <br>타 직군의 업무를 이해하고 각자의 관점에서 소통함으로써 팀 전체의 흐름을 효과적으로 이끌 수 있었습니다.</p></div></div>`
          },
          {
            title: "건국대학교 교내 게임개발 스터디 운영",
            tag: "스터디",
            html: `<div class="callout"><div class="callout-ico">⬡</div><div class="callout-body"><p><em><strong>건국대학교 교내 게임개발 스터디 운영</strong></em><br><span style="color:var(--ink-3)">(2023.09~2024.03)</span></p><p>건국대학교 공과대학 학술동아리 “BOOT4DIM”에서게임 기획 스터디 소모임을 운영하였습니다.<br>격주 마다 게임관련 서적과 칼럼을 정독, 온라인 강의 수강등의 학습을 수행하였고,<br>창작게임의 아이디어 제안서를 작성하여 상호 피드백을 진행하였습니다.</p><p>이 과정에서 게임 디자인의 이론적인 부분과 개발 과정의 기초를 익힐 수 있었습니다.</p></div></div>`
          }
        ]
      }
    ]
  }
];
