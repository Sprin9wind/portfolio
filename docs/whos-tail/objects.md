# 전화부스_이용 규칙과 상태 표현

## ● 기획 의도

- 추격자에 관한 정보를 얻는 대신, 통화 중에는 움직일 수 없도록 한다.<br>정보를 얻을 이점과 공격받을 위험을 함께 판단하게 한다.
- 활성화를 모두에게 알려 여러 플레이어가 같은 장소로 향하도록 한다.<br>전화부스 주변에서 추격과 기습, 서로를 경계하는 상황이 생기도록 의도했다.

## ● 이용 규칙

| 단계 | 규칙 | 플레이어에게 보이는 정보 |
| --- | --- | --- |
| 활성화 | 라운드 중 정해진 시점에 이용할 수 있게 된다. | 화면 알림과 벨소리로 활성화를 알린다. |
| 사용 조건 | 탈락, 유령, 대결, 넉백, 기절, 탑승 상태에서는 이용할 수 없다. | 이용 가능한 상태에서 통화를 시작한다. |
| 통화 | 이동과 시점 조작을 멈춘다. 취소하면 조작을 돌려준다. | 통화에 집중하는 동안 주변 위험에 노출된다. |
| 정보 선택 | 추격자 이름, 추격자 위치, 타깃 위치 중 하나를 고른다. | 위치를 선택하면 5초 동안 대상의 위치를 보여준다. |

## ● 상태별 표현

![전화부스의 사용 가능, 문 개방, 이용 중, 퇴장 후 상태](../../images/whos-tail/feedback-20261020/phone-states.svg)

| 요소 | 표현 방식 | 기획 의도 |
| --- | --- | --- |
| 표시등 | 초록은 이용 가능, 빨강은 이용 중을 나타낸다. | 멀리서도 누군가 사용하고 있는지 알아볼 수 있게 한다. |
| 문 | 내부 공간과 출입 동작이 보일 만큼 충분히 열린다. | 부스에 들어가는 행동이 주변 플레이어에게 드러나도록 한다. |
| 유리 벽 | 바깥에서도 안에 있는 사람을 볼 수 있다. | 정보를 얻는 동안에도 다른 플레이어를 경계하게 한다. |

## ● 구현한 동작

- 문을 열고 내부에서 사용하면 정보 선택 화면으로 이어지도록 연결했다.
- 문이 열리거나 닫히는 도중 반대 입력을 받으면 움직임의 방향을 바꾸도록 했다.
- 부스마다 문과 점유 상태를 따로 관리하고, 표시등으로 이용 상태를 보여주도록 했다.

기존 맵 리소스를 참고 자료로 첨부하고, 맵과 어우러지는 유사한 질감과 색감으로 제작하도록 지시했다.

---

# 꼬리_형태와 움직임 설계

## ● 기획 의도

- 꼬리는 뒤에서 접근해 잡아야 하는 대상이다.<br>캐릭터의 몸과 구분되고, 달리거나 방향을 바꿀 때도 위치를 알아볼 수 있어야 한다.
- 캐릭터가 움직인 뒤 꼬리가 자연스럽게 뒤따라 흔들리도록 한다.<br>고정된 장식보다 이동 방향과 속도 변화가 느껴지는 움직임을 원했다.

## ● 형태와 동작 기준

| 요소 | 표현과 동작 | 기획 의도 |
| --- | --- | --- |
| 형태 | 허리 뒤에서 한 가닥으로 이어지는 머플러 | 뒤에서 접근할 때 잡아야 할 대상을 분명하게 보여준다. |
| 색상 | 공통 형태에 플레이어별 색을 적용 | 타깃의 꼬리 색을 단서로 삼을 수 있게 한다. |
| 흔들림 | 달리기, 점프, 방향 전환에 맞춰 뒤따라 움직임 | 캐릭터의 행동에 자연스럽게 반응하면서 꼬리의 위치가 읽히도록 한다. |
| 잡기 | 잡기 모션 중 손이 보이는 꼬리에 닿으면 반응 | 눈으로 본 접촉과 실제 잡기 결과가 일치하도록 한다. |

<div class="tail-contact-diagram" style="margin:18px auto"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 375" role="img" aria-label="원래 꼬리 형태와 연결된 본, 허리 쪽 35퍼센트 제외 구간만 회색으로 표시" style="display:block;width:100%;height:310px;font-family:P,sans-serif">
<defs><clipPath id="tail-excluded"><rect x="490" y="130" width="173.4" height="90"/></clipPath></defs>
<svg x="0" y="0" width="480" height="375" viewBox="0 0 480 375" overflow="hidden"><image href="../../images/whos-tail/feedback-20261020/tail-structure.svg" x="0" y="0" width="960" height="375"/></svg>
<rect x="492" y="4" width="460" height="30" fill="#eeeeec" stroke="#aab2b7"/>
<g fill="#373b3e" font-size="18"><text x="504" y="26">02  꼬리 내부의 본 구조와 잡기 범위</text><text x="725" y="93" text-anchor="middle">꼬리 형태를 따라 연결한 본</text></g>
<path d="M534 174L625 176L716 180L807 161L900 177" fill="none" stroke="#dceaf3" stroke-width="27" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M534 174L625 176L663.4 177.7" fill="none" stroke="#d0d3d5" stroke-width="27" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M534 174L563.0101364207983 179.63879285367625L625 176L563.2298635792017 169.64120714632372Z" fill="#d9ebff" stroke="#2477cc" stroke-width="2"/><path d="M625 176L653.9004317954335 182.27517665388757L716 180L654.3395682045665 172.28482334611243Z" fill="#d9ebff" stroke="#2477cc" stroke-width="2"/><path d="M716 180L731.7414708277684 181.82254771638998L762 170.4L729.6985291722317 172.03345228361002Z" fill="#d9ebff" stroke="#2477cc" stroke-width="2"/><path d="M762 170.4L777.4223771072674 172.28635849223733L807 161L775.3776228927326 162.49764150776267Z" fill="#d9ebff" stroke="#2477cc" stroke-width="2"/><path d="M807 161L835.9122397974468 171.04760617734078L900 177L837.6077602025532 161.19239382265923Z" fill="#d9ebff" stroke="#2477cc" stroke-width="2"/><circle cx="534" cy="174" r="4" fill="white" stroke="#2477cc" stroke-width="2"/><circle cx="625" cy="176" r="4" fill="white" stroke="#2477cc" stroke-width="2"/><circle cx="716" cy="180" r="4" fill="white" stroke="#2477cc" stroke-width="2"/><circle cx="762" cy="170.4" r="4" fill="white" stroke="#2477cc" stroke-width="2"/><circle cx="807" cy="161" r="4" fill="white" stroke="#2477cc" stroke-width="2"/><circle cx="900" cy="177" r="4" fill="white" stroke="#2477cc" stroke-width="2"/><g clip-path="url(#tail-excluded)"><path d="M534 174L563.0101364207983 179.63879285367625L625 176L563.2298635792017 169.64120714632372Z" fill="#e0e2e4" stroke="#858b8e" stroke-width="2"/><path d="M625 176L653.9004317954335 182.27517665388757L716 180L654.3395682045665 172.28482334611243Z" fill="#e0e2e4" stroke="#858b8e" stroke-width="2"/><path d="M716 180L731.7414708277684 181.82254771638998L762 170.4L729.6985291722317 172.03345228361002Z" fill="#e0e2e4" stroke="#858b8e" stroke-width="2"/><path d="M762 170.4L777.4223771072674 172.28635849223733L807 161L775.3776228927326 162.49764150776267Z" fill="#e0e2e4" stroke="#858b8e" stroke-width="2"/><path d="M807 161L835.9122397974468 171.04760617734078L900 177L837.6077602025532 161.19239382265923Z" fill="#e0e2e4" stroke="#858b8e" stroke-width="2"/><circle cx="534" cy="174" r="4" fill="white" stroke="#858b8e" stroke-width="2"/><circle cx="625" cy="176" r="4" fill="white" stroke="#858b8e" stroke-width="2"/><circle cx="716" cy="180" r="4" fill="white" stroke="#858b8e" stroke-width="2"/><circle cx="762" cy="170.4" r="4" fill="white" stroke="#858b8e" stroke-width="2"/><circle cx="807" cy="161" r="4" fill="white" stroke="#858b8e" stroke-width="2"/><circle cx="900" cy="177" r="4" fill="white" stroke="#858b8e" stroke-width="2"/></g>
<g fill="#62676b" font-size="16" text-anchor="middle"><text x="596" y="235">회색: 허리 쪽 35% 제외</text><text x="725" y="282">꼬리가 굽어도 남은 구간을 따라 잡기 범위 갱신</text></g>
</svg></div>

## ● 구현 과정에서 개선한 내용

| 발견한 문제 | 수정 방향과 결과 |
| --- | --- |
| 고정된 동작을 반복하면 방향 전환에 자연스럽게 반응하지 못함 | 캐릭터의 움직임에 따라 꼬리가 뒤따라 흔들리도록 바꿨다. |
| 이동과 회전에서 꼬리가 과하게 팔랑거림 | 흔들리는 폭과 가라앉는 속도를 조정해 움직임을 정리했다. 순간 이동 후에는 이전 흔들림이 이어지지 않도록 했다. |

- 여러 형태의 꼬리 중, 한 가닥으로 된 머플러 느낌의 꼬리를 선택했다.
- 초기 형태 후보와 최종 적용 화면은 서로 다른 제작 단계의 결과다.

## ● 구현한 동작

- 꼬리가 굽거나 움직여도 그 형태를 따라 잡기 범위가 갱신되도록 구현했다.
