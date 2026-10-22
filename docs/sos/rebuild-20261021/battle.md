# 전투_핵심 구조와 진행 흐름

<ul class="intro">
<li>적을 처치하면 적이 가진 수명을 흡수해 플레이어의 수명을 늘린다.</li>
<li>전투 중에도 양측 수명이 계속 줄어들어, <strong>빠르게 처치할수록 얻는 수명이 많다.</strong></li>
<li>행동 게이지(ATB)가 차면 예약한 행동이 실행되는 1:1 게이지 턴제로 진행한다.</li>
</ul>

## ● 수명 보상과 세 가지 수치

<div class="formula">획득 수명 = 몬스터 초기 수명 − 전투 중 몬스터가 소모한 수명<small>몬스터도 행동 게이지가 충전될 때마다 수명이 줄어든다.</small></div>
<div class="defs"><div><b>HP</b>0이 되면 전투에서 쓰러진다.</div><div><b>수명</b>생존 시간이자 처치 보상이다.</div><div><b>ATB</b>다음 행동까지의 충전량이다.</div></div>

## ● 진행 흐름

<figure aria-label="전투 진행 흐름"><div class="flow">
<div><b><span class="nb">1</span>진입</b><span>탐험 중 적 타일에 1칸 이내로 인접</span></div><i>→</i>
<div><b><span class="nb">2</span>충전</b><span>양측 ATB 증가<br/>양측 수명 감소</span></div><i>→</i>
<div><b><span class="nb">3</span>실행</b><span>100%가 된 쪽이 예약 행동 실행</span></div><i>→</i>
<div><b><span class="nb">4</span>확인</b><span>피해 숫자 색과 공격 로그로 단서 확인</span></div><i>→</i>
<div><b><span class="nb">5</span>판정</b><span>종료 조건 확인</span></div>
</div><div class="loop-back">종료 조건에 해당하지 않으면 2번 충전으로 돌아간다</div></figure>
<ul><li>한쪽이 행동을 실행하는 동안 다른 쪽은 대기하고, 먼저 시작한 행동이 끝나면 다음 행동을 진행한다.</li></ul>

## ● ATB 충전 속도

<div class="formula">충전 시간(초) = 1000 ÷ (100 + ATBSpeed ÷ 5)<small>게이지가 차는 동안 수명이 줄어든다. 속도가 빠를수록 한 번 행동하는 데 드는 수명이 적다.</small></div>
<table>
<colgroup><col style="width:25%"/><col style="width:12.5%"/><col style="width:12.5%"/><col style="width:12.5%"/><col style="width:12.5%"/><col style="width:12.5%"/><col style="width:12.5%"/></colgroup>
<thead><tr><th>ATBSpeed</th><th class="num">0 (기본)</th><th class="num">100</th><th class="num">200</th><th class="num">300</th><th class="num">400</th><th class="num">500 (최대)</th></tr></thead>
<tbody>
<tr><td>충전 시간</td><td class="num">10.00초</td><td class="num">8.33초</td><td class="num">7.14초</td><td class="num">6.25초</td><td class="num">5.56초</td><td class="num">5.00초</td></tr>
<tr><td>수명 소모 (원문 예시)</td><td class="num">10</td><td class="num">8</td><td class="num">7</td><td class="num">6</td><td class="num">6</td><td class="num">5</td></tr>
</tbody>
</table>

## ● 종료 조건

<table>
<colgroup><col style="width:34%"/><col style="width:66%"/></colgroup>
<thead><tr><th>조건</th><th>결과</th></tr></thead>
<tbody>
<tr><td>적 HP 0</td><td>승리, 남은 적 수명을 흡수</td></tr>
<tr><td>플레이어 HP 0</td><td>전투 패배</td></tr>
<tr><td>긴급 행동 후퇴</td><td>전투를 즉시 종료하고 패배로 판정</td></tr>
<tr><td>플레이어 수명 0</td><td>런 종료</td></tr>
</tbody>
</table>
<div class="exc"><b>예외와 미정</b><ul>
<li>표의 수명 소모는 원문 예시값이다. 단위, 초당 소모율과 반올림 규칙은 검증 문서의 미결 항목에서 정리한다.</li><li>패배했을 때의 손실 규칙은 정해지지 않았다.</li>
<li>적이 여럿이면 하나를 처치한 뒤 다음 적이 등장하는 방식은 보류한 안이다.</li>
</ul></div>

# 전투_화면 구성

<ul class="intro">
<li>왼쪽 아래에서 행동을 고르고, 오른쪽 아래에서 예약과 충전을 확인한다.</li>
<li>공격 로그와 피해 숫자 색을 보며 약점 커맨드를 추리하도록 배치했다.</li>
</ul>

<figure class="plain"><div class="anno"><img alt="SOS 팀 전투 UI 시안에 번호 1~8을 표시한 화면" src="../../../images/sos-specs/rebuild-20261021/battle-ui-team.jpg"/>
<span class="pin" style="left:5%;top:3.5%">1</span>
<span class="pin" style="left:75.6%;top:8%">2</span>
<span class="pin" style="left:17%;top:56.5%">3</span>
<span class="pin" style="left:2%;top:65%">4</span>
<span class="pin" style="left:2%;top:85.5%">5</span>
<span class="pin" style="left:55.4%;top:67%">6</span>
<span class="pin" style="left:55.4%;top:77%">7</span>
<span class="pin" style="left:55.4%;top:87%">8</span>
</div><p class="src">전투 UI 시안, 아트: 팀 제작. 구현 완료 화면이 아니다.</p></figure>

<table>
<colgroup><col style="width:7%"/><col style="width:17%"/><col style="width:30%"/><col style="width:46%"/></colgroup>
<thead><tr><th class="c">IDX</th><th>영역</th><th>표시 내용</th><th>기획 기준</th></tr></thead>
<tbody>
<tr><td class="c">1</td><td>보유 수명</td><td>플레이어의 남은 수명, 스탯</td><td>전투 중 줄어드는 수명을 계속 표시</td></tr>
<tr><td class="c">2</td><td>적 정보</td><td>레벨, 이름, 잔여 수명, 행동 게이지</td><td>모래시계 아이콘과 [Lv.레벨] 표기</td></tr>
<tr><td class="c">3</td><td>체력바</td><td>양측 HP</td><td>스프라이트 발끝에서 50px 아래. 왼쪽에 플레이어의 방어, 회피 준비 아이콘(10px, 적 공격 전까지), 적의 다음 공격 아이콘과 피해(50px, 20px)</td></tr>
<tr><td class="c">4</td><td>기본 행동</td><td>공격 1, 2, 3, 방어, 회피</td><td>공격 아이콘과 이름은 장비 데이터에서 가져오고 설명은 툴팁으로 표시</td></tr>
<tr><td class="c">5</td><td>긴급 행동</td><td>약점 파악, 즉시 방어, 체력 회복, 후퇴</td><td>소모 수명을 “- N초” 형식으로 표시</td></tr>
<tr><td class="c">6</td><td>공격 로그</td><td>실행한 공격 아이콘, 최대 13개</td><td>행동 모션이 시작될 때 기록. 방어, 회피, 긴급 행동은 기록하지 않음</td></tr>
<tr><td class="c">7</td><td>행동 게이지</td><td>플레이어 ATB 충전량</td><td>슬라이더 형태, 게이지 색 <span class="sw" style="background:#C49665"></span>#C49665</td></tr>
<tr><td class="c">8</td><td>행동 슬롯</td><td>예약한 행동 아이콘 4칸</td><td>활성 슬롯의 테두리 색 <span class="sw" style="background:#F3C695"></span>#F3C695</td></tr>
</tbody>
</table>
<div class="exc"><b>예외와 미정</b><ul>
<li>13개를 넘으면 가장 오래된 기록을 지운다. 새 기록은 전투 기획서에 맨 왼쪽, UI 와이어프레임에 좌→우 선입선출로 적혀 있어, 삽입 위치와 이동 방향을 명확히 정해야 한다.</li>
<li>팀 아트 시안은 적의 다음 행동을 2번 적 정보에 표시하여, 체력바 옆에 두는 와이어프레임 배치와 다르다.</li>
</ul></div>

# 전투_행동 예약과 긴급 행동

<ul class="intro">
<li>행동 슬롯 4개에 다음 행동을 미리 예약해, 충전을 기다리는 동안 다음 공격 순서를 구성한다.</li>
<li>긴급 행동은 게이지를 기다리는 대신 수명을 지불하고 즉시 사용한다.</li>
</ul>

## ● 슬롯의 상태 전환

<figure aria-label="행동 슬롯 상태 전환"><div class="state">
<div>충전 중<small>게이지 증가, 수명 감소</small></div><em>게이지 100%</em><div class="key">활성<small>행동 선택 대기</small></div><em>행동 선택</em><div>즉시 실행<small>가장 오래된 활성 슬롯</small></div>
<div>충전 중</div><em>행동 선택</em><div>사전 예약<small>충전 중인 슬롯에 등록</small></div><em>게이지 100%</em><div>즉시 실행<small>활성화되는 순간</small></div>
</div></figure>

## ● 예약 규칙

<table>
<colgroup><col style="width:16%"/><col style="width:36%"/><col style="width:48%"/></colgroup>
<thead><tr><th>규칙</th><th>조건</th><th>처리</th></tr></thead>
<tbody>
<tr><td>예약</td><td>행동 버튼 클릭</td><td>행동 슬롯 4개 중 하나에 예약</td></tr>
<tr><td>수정</td><td>실행 전, 예약한 슬롯 선택 후 행동 버튼 클릭</td><td>해당 슬롯의 행동을 교체</td></tr>
<tr><td>즉시 실행</td><td>활성 슬롯이 있을 때 행동 선택</td><td>가장 오래된 활성 슬롯에서 바로 실행</td></tr>
<tr><td>사전 예약</td><td>활성 슬롯이 없을 때 행동 선택</td><td>충전 중인 슬롯에 예약, 활성화되는 순간 실행</td></tr>
<tr><td><strong>입력 대기</strong></td><td><strong>4개 모두 활성, 행동 선택 없음</strong></td><td><strong>아무 행동도 실행하지 않고 플레이어 수명도 줄지 않음</strong></td></tr>
</tbody>
</table>
<div class="cmd slots"><b>예시</b><div class="cells"><span class="hit">1 활성</span><span class="hit">2 활성</span><span>3 충전 중</span><span>4 충전 중</span><em class="no">공격 2 선택 → 1번 슬롯에서 바로 실행</em></div></div>

## ● 방어와 회피의 대응 순서

<ul>
<li>적 공격 1회에는 먼저 사용한 방어 또는 회피 하나만 발동한다.</li>
<li>방어나 회피가 준비된 동안에는 같은 행동을 다시 실행하거나 예약하지 않는다.</li>
</ul>

## ● 긴급 행동

<p><strong>플레이어와 적이 각각 1번 행동한 뒤 활성화</strong>한다. 행동 게이지와 무관하게 즉시 시전하며 플레이어의 수명을 소모한다.</p>
<table>
<colgroup><col style="width:16%"/><col style="width:50%"/><col style="width:34%"/></colgroup>
<thead><tr><th>행동</th><th>효과</th><th>제한, 비용</th></tr></thead>
<tbody>
<tr><td>약점 파악</td><td>1회: 커맨드 길이 공개<br/>2회: 첫 슬롯에 정답 공격 자동 예약</td><td>전투당 최대 2회, 사용할수록 수명 비용 가중</td></tr>
<tr><td>즉시 방어</td><td>슬롯과 무관하게 적의 다음 공격 방어</td><td>수명 소모</td></tr>
<tr><td>체력 회복</td><td>이번 전투에서 잃은 HP의 일정 비율 회복</td><td>회복량에 비례해 수명 소모</td></tr>
<tr><td>후퇴</td><td>전투 즉시 종료</td><td>패배로 판정</td></tr>
</tbody>
</table>
<div class="exc"><b>예외와 미정</b><ul>
<li>긴급 행동별 기본 비용, 약점 파악의 비용 가중치, 회복 비율은 정해지지 않았다.</li>
</ul></div>

# 전투_기본 행동과 피해 규칙

<ul class="intro">
<li>공격 1, 2, 3의 기본 피해를 같게 두어, 가장 강한 공격 대신 <strong>약점에 포함된 공격</strong>을 찾게 한다.</li>
<li>약점 후보에는 작은 보너스, 순서를 완성한 공격에는 큰 보너스를 준다.</li>
</ul>

## ● 기본 행동

<table>
<colgroup><col style="width:16%"/><col style="width:54%"/><col style="width:30%"/></colgroup>
<thead><tr><th>행동</th><th>효과</th><th>장비에 따른 변화</th></tr></thead>
<tbody>
<tr><td>공격 1, 2, 3</td><td>플레이어 ATK에 따라 피해</td><td>공격 이름과 효과 이펙트</td></tr>
<tr><td>방어</td><td>플레이어 DEF에 따라 적 공격의 피해를 일정 수치 감소</td><td>이펙트만 변화</td></tr>
<tr><td>회피</td><td>50% 확률로 회피. 성공 시 피해 0, 실패 시 정상 피해</td><td>이펙트만 변화</td></tr>
</tbody>
</table>
<p>무기는 타격류, 날붙이류, 관통류, 투척류로 나누어 마스터리, 장비 묶음, 연출, 스탯과 특수 효과를 관리한다. 약점 판정은 무기와 관계없이 <strong>공격 번호</strong>로 처리한다.</p>

## ● 피해 계산

<table>
<colgroup><col style="width:18%"/><col style="width:32%"/><col style="width:30%"/><col style="width:20%"/></colgroup>
<thead><tr><th>판정</th><th>조건</th><th>계산식</th><th>ATK 30, DEF 20</th></tr></thead>
<tbody>
<tr><td>기본 피해 B</td><td>약점에 없는 공격</td><td>플레이어 ATK − 적 DEF</td><td class="num">10</td></tr>
<tr><td>약점 후보</td><td>커맨드에 포함된 공격</td><td>B × 1.1</td><td class="num">11</td></tr>
<tr><td>커맨드 성공</td><td>순서가 완성된 마지막 공격</td><td>B × 2.0, ×1.1을 대체</td><td class="num">20</td></tr>
<tr><td>받는 피해</td><td>적의 공격</td><td>적 ATK − 플레이어 DEF</td><td class="num">같은 차감식</td></tr>
</tbody>
</table>
<figure aria-label="ATK 30, DEF 20 예시의 판정별 피해"><div class="bars">
<span>기본 B</span><div><div class="bar" style="width:50%"></div></div><span class="v">10</span>
<span>후보 B × 1.1</span><div><div class="bar" style="width:55%"></div></div><span class="v">11</span>
<span>성공 B × 2.0</span><div><div class="bar key" style="width:100%"></div></div><span class="v">20</span>
</div><figcaption>계산 예시. 후보와 성공 배율은 중첩하지 않는다.</figcaption></figure>

## ● 적의 행동

<ul>
<li>적은 게이지가 100%가 되면 <strong>공격만</strong> 실행한다. 공격 패턴과 효과는 몬스터 문서에서 정의한다.</li>
<li>적에게 방어나 특수 행동을 주지 않는 이유는 전투가 길어지면 빠른 처치로 수명을 얻는 구조가 무너지기 때문이다.</li>
<li>강타(PowerAtk)는 플레이어의 방어 행동을 무시한다.</li>
</ul>
<div class="exc"><b>예외와 미정</b><ul>
<li>방어의 감소량, 피해 하한, 소수점 처리, ATK가 DEF 이하일 때의 피해는 정해지지 않았다.</li>
</ul></div>

# 전투_약점 커맨드와 단서

<ul class="intro">
<li>몬스터마다 약점 커맨드가 있으며, 이를 직접 찾아내는 과정이 전투의 핵심 재미다.</li>
<li>공격 1, 2, 3을 중복 허용해 <strong>2~4자리</strong>로 조합하며, 자릿수는 등급과 무관하게 몬스터마다 기획자가 지정한다.</li>
</ul>
<table>
<colgroup><col style="width:24%"/><col style="width:19%"/><col style="width:19%"/><col style="width:19%"/><col style="width:19%"/></colgroup>
<thead><tr><th>자릿수</th><th class="num">2자리</th><th class="num">3자리</th><th class="num">4자리</th><th class="num">합계</th></tr></thead>
<tbody><tr><td>조합 수</td><td class="num">3² = 9</td><td class="num">3³ = 27</td><td class="num">3⁴ = 81</td><td class="num"><strong>117</strong></td></tr></tbody>
</table>

## ● 판정: 순서만 맞으면 연속하지 않아도 된다

<p>공격 로그(최대 13개) 안에서 커맨드와 같은 순서의 <strong>부분 수열</strong>이 성립하면 성공이다. 성공을 만든 마지막 공격에 ×2.0 피해를 준다.</p>
<figure aria-label="커맨드 판정 예시"><div class="cmd">
<b>목표 커맨드</b><div class="cells"><span class="hit">2</span><span class="hit">1</span><span class="hit">3</span></div>
<b>성공 예시</b><div class="cells"><span class="hit">2</span><span class="skip">2</span><span class="hit">1</span><span class="skip">1</span><span class="hit">3</span><em>마지막 3에서 성공</em></div>
<b>실패 예시</b><div class="cells"><span>3</span><span>1</span><span>2</span><em class="no">2 → 1 → 3 순서를 만들 수 없음</em></div>
</div><figcaption>강조한 칸이 순서대로 선택된 공격이다. 사이에 있는 다른 공격은 건너뛴다.</figcaption></figure>
<p>로그에는 공격 1, 2, 3만 기록한다. 방어, 회피, 긴급 행동은 판정에 영향을 주지 않는다.</p>

## ● 정답 대신 주는 단서

<table>
<colgroup><col style="width:22%"/><col style="width:30%"/><col style="width:14%"/><col style="width:34%"/></colgroup>
<thead><tr><th>판정</th><th>조건</th><th>피해</th><th>피해 숫자</th></tr></thead>
<tbody>
<tr><td>일반</td><td>커맨드에 없는 공격</td><td>B</td><td><span class="sw" style="background:#FFD900"></span>#FFD900, 크기 50</td></tr>
<tr><td>약점 후보</td><td>커맨드에 포함된 공격</td><td>B × 1.1</td><td><span class="sw" style="background:#FF6161"></span>#FF6161, 크기 50</td></tr>
<tr><td>커맨드 성공</td><td>부분 수열 성립</td><td>B × 2.0</td><td><span class="sw" style="background:#FF0000"></span>#FF0000, 크기 65</td></tr>
</tbody>
</table>
<ul>
<li>공격 결과는 문구가 아니라 이펙트, 색, 피해 숫자로 구분한다. 후보 표시는 몇 번째 자리인지 알려 주지 않는다.</li>
<li>성공하면 공격 로그에서 정답 조합에 해당하는 칸의 테두리가 빛났다가 사라진다.</li>
</ul>

## ● 약점 파악으로 범위 좁히기

<figure aria-label="약점 파악 사용 횟수별 단서"><div class="steps"><div><b>1회 사용</b><span>커맨드 길이 공개, 슬롯이 반짝임</span><div class="cmd"><div class="cells"><span class="q">?</span><span class="q">?</span><span class="q">?</span><em class="no">3자리</em></div></div></div><i>→</i><div><b>2회 사용</b><span>첫 슬롯에 정답 공격 자동 예약</span><div class="cmd"><div class="cells"><span class="hit">2</span><span class="q">?</span><span class="q">?</span><em class="no">첫 슬롯에 공격 2</em></div></div></div></div><figcaption>목표 커맨드 2 → 1 → 3의 예시다.</figcaption></figure>
<div class="exc"><b>예외와 미정</b><ul>
<li>성공한 기록이 로그에 남아 있을 때 다음 공격에서 다시 성공으로 볼지, 커맨드 전환 시 로그를 어떻게 처리할지는 정해지지 않았다.</li>
</ul></div>
