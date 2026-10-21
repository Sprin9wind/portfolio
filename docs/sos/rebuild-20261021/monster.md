# 몬스터_데이터와 등급별 공략

## ● 기본값과 전투 규칙을 나누어 관리

<figure aria-label="몬스터 데이터 연결"><div class="tb-map">
<div class="root"><b>MonsterTB</b>개체의 스탯, 커맨드, 패턴, 드롭<br/><span class="aside">레벨 1 스탯, 수명, ATB 속도, 약점 커맨드 3개, 공격 패턴 3개, 드롭 ID</span></div>
<i>→</i>
<div class="leaf">
<div><b>MonAtkPatternTB, 공격 효과</b>피해 배율, 방어 무시, 흡수 비율, 상태이상 연결</div>
<div><b>MonToPlayerSeTB, 상태이상</b>대상 스탯, 효과량, 지속 턴, 피격 해제, 중첩 여부</div>
<div><b>DropTB, 보상 구성</b>장비와 재료 등 보상 구성과 드롭 확률</div>
</div></div></figure>

## ● 등급에 따라 공략을 이어 간다

<table>
<colgroup><col style="width:20%"/><col style="width:32%"/><col style="width:48%"/></colgroup>
<thead><tr><th>등급</th><th>활성 커맨드</th><th>전환 규칙</th></tr></thead>
<tbody>
<tr><td>Normal</td><td>3개 중 무작위 1개</td><td>전투 중 고정</td></tr>
<tr><td>Elite</td><td>3개 중 무작위 2개</td><td>첫 커맨드 공략 후 두 번째로 전환</td></tr>
<tr><td>Boss</td><td>3개 모두</td><td>1 → 2 → 3 순차 전환</td></tr>
</tbody>
</table>

## ● 개체 생성, 공격, 보상

<table>
<colgroup><col style="width:20%"/><col style="width:80%"/></colgroup>
<thead><tr><th>항목</th><th>규칙</th></tr></thead>
<tbody>
<tr><td>ID</td><td><strong>지역 1자리 + 등급 1자리 + 고유 번호 3자리</strong>다. 예: 10001.</td></tr>
<tr><td>레벨 스탯</td><td>스탯의 기본 계산은 기본값 × (1 + (레벨 − 1) × 0.1)이다. 기본 데이터와 배치할 개체 레벨을 분리해 같은 몬스터를 다른 난이도로 구성한다.</td></tr>
<tr><td>공격 패턴</td><td>ATB 100%에서 지정된 공격 패턴 3개 중 1개를 무작위 실행한다. Pattern1은 기본 공격이며, 다른 패턴에 강공, 중독, 출혈, 약화, 둔화, 흡수, 혼란, 수면, 축소를 연결한다. 적의 별도 방어 행동은 두지 않는다.</td></tr>
<tr><td>상태이상 턴</td><td>같은 상태이상은 더 긴 지속 턴으로 갱신하고, 다른 상태이상은 동시에 적용한다. <strong>플레이어의 행동 게이지 슬롯이 찰 때 1턴</strong>으로 센다. 중첩 여부는 상태별 정의를 따른다.</td></tr>
</tbody>
</table>

<div class="formula">처치 시 획득 수명 = 몬스터 초기 수명 − 전투 중 몬스터가 소모한 수명<small>늦게 처치할수록 남아 있는 보상이 줄어드는 구조다.</small></div>

## ● 효과의 해제와 드롭 연결

<ul>
<li>중독, 약화, 둔화, 혼란, 축소는 지속 턴 소진으로 해제하고, 수면은 피격 시 즉시 해제한다. 혼란은 공격 번호를 무작위로 바꾸되 방어, 회피는 정상 처리한다.</li>
<li>강공은 방어 행동을 무시하고, 흡수는 피해 일부를 몬스터 HP로 회복한다. 상세 배율과 지속 수치는 각 효과 테이블에서 관리한다.</li>
<li>DropTB에는 장비, 몬스터별 1종 죄악 조각, 기타 아이템의 ID와 기초 드롭 확률을 둔다. LUK 가중치의 세부 수식은 미정이다.</li>
</ul>
