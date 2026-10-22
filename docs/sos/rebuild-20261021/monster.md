# 몬스터_데이터 구조와 등급 운용

<ul class="intro">
<li>몬스터는 처치 대상이자 플레이어의 수명을 위협하는 존재다.</li>
<li>모든 몬스터는 고유한 약점 커맨드를 가지며, 등급에 따라 커맨드를 운용하는 방식이 달라진다.</li>
</ul>



## ● 테이블 4종의 연결

<figure aria-label="몬스터 데이터 연결"><div class="tb-map">
<div class="root"><b>MonsterTB</b>몬스터 1개체의 기본 정보<span class="aside">ID, 이름, 레벨, 등급, 죄악 계열, HP, ATK, DEF, 수명, ATB 속도, 약점 조합 3개, 공격 패턴 3개, 드롭 ID</span></div>
<i>→</i>
<div class="leaf">
<div><b>MonAtkPatternTB</b>Pattern1~3Effect로 참조: 피해 배율, 방어 무시, 흡수 비율
<div class="status-ref">↓ Debuff_ID로 참조<br/><b>MonToPlayerSeTB</b>대상 스탯, 수치, 지속 턴, 피격 해제, 중첩</div></div>
<div><b>DropTB</b>DropTableID로 참조: 드롭 방식, 장비별 확률, 7대죄 조각</div>
</div></div><figcaption>데이터 시트의 테이블 이름이다. 전투 기획서에서는 MonsterTable, AttackPatternTable, StatusEffectTable, DropTable로 표기했다.</figcaption></figure>




## ● 몬스터 ID 발번

<div class="cols">
<div><div class="idcode"><span>0</span><span class="k">0</span><span>000</span></div>
<ul><li>등장 지역 1자리, 등급 1자리, 고유 번호 3자리</li><li>등급 자리: 0 Normal, 1 Elite, 2 Boss</li></ul></div>
<table class="sm" style="margin:0">
<colgroup><col style="width:22%"/><col style="width:38%"/><col style="width:40%"/></colgroup>
<thead><tr><th>ID</th><th>몬스터</th><th>읽는 법</th></tr></thead>
<tbody>
<tr><td>10001</td><td>목패 포졸</td><td>지역 1, Normal, 001</td></tr>
<tr><td>41008</td><td>붉은 처형인</td><td>지역 4, Elite, 008</td></tr>
<tr><td>82015</td><td>죄목 기록관</td><td>지역 8, Boss, 015</td></tr>
</tbody>
</table>
</div>




## ● 등급별 약점 커맨드 운용

<p>약점 커맨드는 공략에 필요한 공격 번호의 순서다. 모든 몬스터는 약점 조합(ComboRecipe) 3개를 가진다. 전투 시작 시 등급에 따라 활성화하는 개수와 전환 방식이 달라진다.</p>
<table>
<colgroup><col style="width:16%"/><col style="width:34%"/><col style="width:50%"/></colgroup>
<thead><tr><th>등급</th><th>활성 커맨드</th><th>전환 조건</th></tr></thead>
<tbody>
<tr><td>Normal</td><td>3개 중 무작위 1개</td><td>전환 없음, 전투 내내 고정</td></tr>
<tr><td>Elite</td><td>3개 중 무작위 2개, 순차 활성</td><td>첫 번째 공략 성공 시 두 번째로 전환, 다시 탐색</td></tr>
<tr><td>Boss</td><td>3개 모두 순차 활성</td><td>1번 → 2번 → 3번, 3번이 최종 커맨드</td></tr>
</tbody>
</table>
<p><strong>예시</strong>: 붉은 처형인(Elite)의 조합은 3222, 311, 3113이다. 이 중 2개를 무작위로 골라 순서대로 공략한다.</p>




## ● 공격 패턴 운용

<ul>
<li>모든 몬스터는 공격 패턴 후보 3개를 가지며, 게이지가 100%가 될 때마다 1개를 무작위로 실행한다.</li>
<li><strong>Pattern1은 NormalAtk으로 고정</strong>하여 모든 몬스터가 기본 공격을 갖게 한다.</li>
</ul>
<table class="sm">
<colgroup><col style="width:22%"/><col style="width:26%"/><col style="width:26%"/><col style="width:26%"/></colgroup>
<thead><tr><th>목패 포졸</th><th>Pattern1</th><th>Pattern2</th><th>Pattern3</th></tr></thead>
<tbody><tr><td>공격 이름</td><td>곤봉 휘두르기</td><td>목패 찍기</td><td>관복 밀치기</td></tr>
<tr><td>효과</td><td>NormalAtk</td><td>PowerAtk</td><td>Weak</td></tr></tbody>
</table>

# 몬스터_공격 효과, 상태이상, 보상

<ul class="intro">
<li>몬스터는 다양한 공격 패턴과 상태이상으로 플레이어를 압박한다.</li>
<li>아래 값은 데이터 시트(MonsterTB_1.2)의 입력값이다.</li>
</ul>



## ● 공격 효과 (MonAtkPatternTB)

<table class="sm">
<colgroup><col style="width:18%"/><col style="width:18%"/><col style="width:16%"/><col style="width:16%"/><col style="width:32%"/></colgroup>
<thead><tr><th>PatternID</th><th>이름</th><th class="num">피해 배율</th><th class="c">방어 무시</th><th>상태이상</th></tr></thead>
<tbody>
<tr><td>NormalAtk</td><td>기본공격</td><td class="num">1.0</td><td class="c">-</td><td>-</td></tr>
<tr><td>PowerAtk</td><td>강타</td><td class="num">1.3</td><td class="c">O</td><td>-</td></tr>
<tr><td>Absorb</td><td>흡수</td><td class="num">1.15</td><td class="c">-</td><td>피해 일부를 몬스터 HP로 회복</td></tr>
<tr><td>Poison</td><td>맹독 공격</td><td class="num">0.5</td><td class="c">-</td><td>SE_Poison</td></tr>
<tr><td>Bleed</td><td>출혈</td><td class="num">0.8</td><td class="c">-</td><td>SE_Bleed</td></tr>
<tr><td>Weak, Slow</td><td>약화, 둔화</td><td class="num">0.8</td><td class="c">-</td><td>SE_Weak, SE_Slow</td></tr>
<tr><td>Confuse</td><td>혼란</td><td class="num">1.0</td><td class="c">-</td><td>SE_Confuse</td></tr>
<tr><td>Sleep</td><td>수면 공격</td><td class="num">0.3</td><td class="c">-</td><td>SE_Sleep</td></tr>
<tr><td>Mini</td><td>축소</td><td class="num">0.8</td><td class="c">-</td><td>SE_Mini</td></tr>
</tbody>
</table>




## ● 상태이상 (MonToPlayerSeTB)

<table class="sm">
<colgroup><col style="width:17%"/><col style="width:15%"/><col style="width:15%"/><col style="width:11%"/><col style="width:12%"/><col style="width:15%"/><col style="width:15%"/></colgroup>
<thead><tr><th>ID</th><th>효과 종류</th><th>대상 스탯</th><th class="num">수치</th><th class="num">지속 턴</th><th class="c">피격 해제</th><th class="c">중첩</th></tr></thead>
<tbody>
<tr><td>SE_Poison</td><td>DOT</td><td>HP</td><td class="num">0.02</td><td class="num">3</td><td class="c">-</td><td class="c">O</td></tr>
<tr><td>SE_Bleed</td><td>DOT</td><td>HP</td><td class="num">10.0</td><td class="num">3</td><td class="c">-</td><td class="c">-</td></tr>
<tr><td>SE_Weak</td><td>Debuff</td><td>Atk</td><td class="num">0.2</td><td class="num">2</td><td class="c">-</td><td class="c">-</td></tr>
<tr><td>SE_Slow</td><td>Debuff</td><td>AtbSpeed</td><td class="num">0.1</td><td class="num">2</td><td class="c">-</td><td class="c">-</td></tr>
<tr><td>SE_Confuse</td><td>Confusion</td><td>-</td><td class="num">-</td><td class="num">2</td><td class="c">-</td><td class="c">-</td></tr>
<tr><td>SE_Sleep</td><td>Sleep</td><td>-</td><td class="num">-</td><td class="num">2</td><td class="c">O</td><td class="c">-</td></tr>
<tr><td>SE_Mini</td><td>Debuff</td><td>AtkDef</td><td class="num">0.3</td><td class="num">2</td><td class="c">-</td><td class="c">-</td></tr>
</tbody>
</table>
<ul>
<li><strong>플레이어의 행동 게이지 슬롯이 찰 때마다 1턴</strong>이 지난다. 수면은 피격 즉시, 나머지는 지속 턴이 끝나면 해제한다.</li>
<li>같은 상태이상은 더 긴 지속 턴으로 갱신하고, 서로 다른 상태이상은 동시에 적용한다.</li>
<li>혼란은 공격 1, 2, 3을 무작위로 바꾸며 방어, 회피는 정상 발동한다.</li>
</ul>




## ● 처치 보상 (DropTB)

<table class="sm">
<colgroup><col style="width:16%"/><col style="width:16%"/><col style="width:68%"/></colgroup>
<thead><tr><th>드롭 방식</th><th>대상 등급</th><th>규칙</th></tr></thead>
<tbody>
<tr><td>Fixed</td><td>Elite, Boss</td><td>무기 1~4, 갑옷, 장화, 반지의 기초 드롭 확률을 개별 판정한다. 2개 이상 성공하면 균등 확률로 1개만 드롭하고, 성공이 없으면 장비를 드롭하지 않는다.</td></tr>
<tr><td>Random</td><td>Normal</td><td>전체 일반 아이템 풀에서 무작위로 1개를 드롭한다.</td></tr>
</tbody>
</table>
<p>몬스터마다 1종으로 고정된 7대죄 조각은 장비와 별개로 판정한다. 드롭 확률에는 캐릭터의 LUK 가중치를 적용한다.</p>
