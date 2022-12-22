<div align="center">
<img src="https://user-images.githubusercontent.com/112257466/209065559-f5e0904f-c978-4a25-92d6-0ab171e8a3eb.png" width="400px"/>
<br/>

[![GitHub Stars](https://img.shields.io/github/stars/InQ-InQ-InQ-InQ-InQ/KUBS?style=for-the-badge)](https://github.com/InQ-InQ-InQ-InQ-InQ/KUBS/stargazers) [![Current Version](https://img.shields.io/badge/version-Beta-black?style=for-the-badge)](https://google.co.kr)

</div>
<br/>

## 💬&nbsp;&nbsp;&nbsp;Index

- [🔥 &nbsp;What is KURS?](#-What-is-KURS?)
- [🛠 &nbsp;Tech Stack](#-기술-스택)
- [🧑‍💻 &nbsp;Developers](#-프로젝트-멤버)

<br/>
<br/>

## 🔥 What is KURS?

### 웹사이트

- https://cabi.42seoul.io/

### 프로젝트 목표
- 캐비닛 대여 서비스: 42서울의 캐비닛 400여 개를 편리하게 대여 및 반납할 수 있는 서비스
- 효율적이고 원활한 서비스: 제한된 자원으로 많은 사용자가 원활하게 사용할 수 있는 서비스
- 관리자 플랫폼: 캐비닛 대여 현황 및 상태를 도식화하여 관리자의 작업이 수월한 플랫폼

### 프로젝트 내용
- 클러스터 별 캐비닛 배치도를 바탕으로 실제 위치에 따른 캐비닛 대여 현황을 확인할 수 있습니다.
- 클러스터에 방문할 필요 없이 간편하게 캐비닛 대여 및 반납이 가능합니다.
- 캐비닛마다 `READ` / `UPDATE` 가능한 메모장을 제공합니다.
  - 공유 캐비닛의 경우, 캐비닛 사용자들끼리만 공유 가능한 메모장을 제공합니다.

### 기술적 도전

- 지속할 수 있고, 확장할 수 있는 서비스를 지향하고, 한정된 자원으로 **증가하는 사용자**들에게 양질의 서비스를 제공하기 위해 **42Cabi 팀**은 다음과 같이 노력했습니다:

#### [Common](https://github.com/innovationacademy-kr/42cabi/)
- 유지/보수와 기능 추가가 용이하도록 코딩 컨벤션을 정하고, 문서화 작업 및 이슈 관리를 체계화했습니다.
- Notion, Slack 등의 협업 툴들을 이용하여 팀원 간 정보 시차와 격차를 줄였습니다.
- 주기적이지만 유동적인 회의를 통해 목표와 분업을 명확히 하여 효과적인 협업을 진행했습니다.
- 시설관리팀과 실사용자들과 끊임없이 소통하면서 사용자 친화적인 서비스를 제공했습니다.

#### [FrontEnd](https://github.com/innovationacademy-kr/42cabi/tree/dev/frontend_v3)

- 웹, 모바일 환경에서도 이용에 불편함이 없도록 반응형 웹 디자인을 적용했습니다.
- 사용자가 쉽게 캐비닛을 찾을 수 있도록 실제 사용 공간에 따른 맵을 표시했습니다.
- 원활한 사용자 경험을 위해 페이지를 포함한 캐러셀을 구현했습니다.
- 사용자가 서비스 상태를 명확하게 인지할 수 있도록 로딩과 에러 코드에 따른 렌더링을 구현했습니다. 
- 정책이나 UI/UX 등 빠르게 변화하는 환경을 원활히 반영할 수 있도록 하드코딩을 피하고 props와 환경변수를 이용해 유지보수성을 높였습니다.

#### [BackEnd](https://github.com/innovationacademy-kr/42cabi/tree/dev/backend)

- 사용자가 층별로 캐비닛 정보를 조회할 때 빠른 응답속도를 위해 쿼리 최적화로 성능을 향상했습니다.
- 공유 캐비닛 서비스를 구현하며 캐비닛 대여/반납 시 발생할 수 있는 여러 경우를 원활하게 제어하기 위해 캐비닛 상태에 따라 처리하게끔 DFA 알고리즘을 적용했습니다.
- 동시에 들어오는 요청에 대해 특정 요청이 실패할 경우, 무결성을 위해 대여/반납의 과정을 트랜잭션으로 관리하였으며 격리 수준 구별로 데드락을 방지했습니다.
- 블랙홀에 빠진 사용자(퇴학 처리된 사용자)를 적절하게 처리하도록 42API를 사용하였고 블랙홀 스케줄링을 고안, 적용했습니다.
- 기존 버전에서 Express.js로 작성된 코드를 IoC, DI, AOP를 이용, 유지보수에 유리한 Nest.js로 포팅했습니다.
- 불필요한 정보를 저장하는 컬럼을 제거, 트랜잭션의 로직을 재구성하는 등 DB 구조를 개선했습니다.

<br/>

## 🛠 기술 스택




  <!-- Frontend Stack -->
<table border=""4>
  <th align="center" colspan="3">🛠 Tech Stack 🛠</th>
  <tr>
    <td rowspan="7" align="center">FE</td>
    <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" width="15px" alt="_icon"/>&nbsp;&nbsp;React</td>
    <td>프론트엔드 메인 프레임워크</td>
  </tr>
  <tr>
    <td><img src="https://user-images.githubusercontent.com/112257466/209071362-a99be5b3-c9f9-46f2-a12d-d078f59099dd.svg" width="15px" alt="_icon" />&nbsp;&nbsp;React Bootstrap</td>
    <td>RBS 설명</td>
  </tr>
  <tr>
    <td><img src="https://img.icons8.com/color/480/redux.png" width="15px" alt="_icon" />&nbsp;&nbsp;Redux</td>
    <td>Redux 설명</td>
  </tr>
  <tr>
    <td><img src="https://img.icons8.com/color/480/redux.png" width="15px" alt="_icon" />&nbsp;&nbsp;Redux Toolkit</td>
    <td>Redux Toolkit 설명</td>
  </tr>
    <tr>
      <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/ESLint_logo.svg/1200px-ESLint_logo.svg.png" width="15px" alt="_icon" />&nbsp;&nbsp;ESLint</td>
    <td>Convention 위반 및 Anti-Pattern</td>
  </tr>
  <tr>
    <td><img src="https://user-images.githubusercontent.com/112257466/209071958-ca6f5a8f-a61a-4b27-88f4-f6ac84808430.png" width="15px" alt="_icon" />&nbsp;&nbsp;Axios</td>
    <td>Axios 설명</td>
  </tr>
	    <tr>
    <td><img src="https://user-images.githubusercontent.com/112257466/209077244-27be08d0-85f9-4bdc-9efc-c2bf7b6e1229.png" width="14px" alt="_icon" />&nbsp;&nbsp;Moment.js</td>
    <td>JS 설명</td>
	</tr>



  <!-- Backend Stack -->
  <tr>
    <td rowspan="6" align="center">BE</td>
	<tr>
    <td><img src="https://user-images.githubusercontent.com/112257466/209078356-d9120e3d-9498-4ee4-a38d-139a263910f4.png" width="14px" alt="_icon" />&nbsp;&nbsp;MySQL</td>
    <td>백엔드 메인 DB</td>
  </tr>
    <td><img src="https://user-images.githubusercontent.com/112257466/209075018-0a1f7f14-a910-4d16-a4e4-51929b99e1ae.png" width="15px" alt="_icon" />&nbsp;&nbsp;Spring</td>
    <td>백엔드 메인 프레임워크</td>
  </tr>
  <tr>
    <td><img src="https://user-images.githubusercontent.com/112257466/209075280-78be8487-7d6a-485c-92a8-d6677f0caab9.png" width="15px" alt="_icon" />&nbsp;&nbsp;Spring Boot</td>
    <td>Spring Boot 설명</td>
    <tr>
    <td><img src="https://user-images.githubusercontent.com/112257466/209077939-bb9dadca-0e8b-421d-b5df-c44bd3c38a1a.png" width="14px" alt="_icon" />&nbsp;&nbsp;Swagger</td>
    <td>Swagger 설명</td>
  </tr>
    </tr>
    <tr>
    <td><img src="https://user-images.githubusercontent.com/112257466/209076523-777fe02a-455f-48a0-a4b1-aeb9fff17b10.png" width="14px" alt="_icon" />&nbsp;&nbsp;JPA & Data JPA</td>
    <td>JPA 설명</td>
  </tr>
</table>
</div>
<br/>

</div>
<table border=""4 width="100%">
  <th align="center" colspan="4" width=>🧑‍💻 Developers 🧑‍💻</th>
  </tr>
  <tr>
   <td align="center"><a href="https://github.com/h-beeen"><img src="https://avatars.githubusercontent.com/u/112257466?v=4" width="150px; style="vertical-align:top" alt=""/>
   
   <td align="center"><a href="https://github.com/eunchannam"><img src="https://avatars.githubusercontent.com/u/75837025?v=4" width="150px;" style="vertical-align:top" alt=""/>

   <td align="center"><a href="https://github.com/SWARVY"><img src="https://avatars.githubusercontent.com/u/53262430?v=4" width="150px;" style="vertical-align:top" alt=""/>

   <td align="center"><a href="https://github.com/rheefine"><img src="https://avatars.githubusercontent.com/u/109448186?v=4" width="150px;" style="vertical-align:top" alt=""/>
  </tr>

  <tr>
  <td align="center"><a href="https://github.com/h-beeen"><b>[Backend]<br/>🐧 변해빈 🐧</b></a></td>
  <td align="center"><a href="https://github.com/eunchannam"><b>[Backend]</br>🐤 남은찬 🐤</b></a></td>
  <td align="center"><a href="https://github.com/eofrkam"><b>[Frontend]<br/>🐦 신현호 🐦</b></br></a></td>
  <td align="center"><a href="https://github.com/juhyulee"><b>[Frontend]<br/>🐺 이동현 🐺</b><br/></a></td>
  </tr>
</table>
</div>
<br/>
