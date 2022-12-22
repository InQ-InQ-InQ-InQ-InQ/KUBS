<div align="center">
<img src="https://user-images.githubusercontent.com/112257466/209065559-f5e0904f-c978-4a25-92d6-0ab171e8a3eb.png" width="400px"/>
<br/>

[![GitHub Stars](https://img.shields.io/github/stars/InQ-InQ-InQ-InQ-InQ/KUBS?style=for-the-badge)](https://github.com/InQ-InQ-InQ-InQ-InQ/KUBS/stargazers) [![Current Version](https://img.shields.io/badge/version-Beta-black?style=for-the-badge)](https://google.co.kr)

</div>
<br/>

---

# 💬&nbsp;&nbsp;&nbsp;Index

- [💬   Index](#index)
- [🔥   What is KURS](#what-is-kurs)
	- [Goal](#goal)
- [Subjects](#subjects)
	- [FrontEnd](#frontend)
	- [BackEnd](#backend)
- [🛠   Tech Stack](#tech-stack)
- [🧑‍💻   Developers](#developers)

<br/>
<br/>

# 🔥&nbsp;&nbsp;&nbsp;What is KURS

## Goal
- 인재개발처, 창의적팩토리 등 교내 다양한 공간을 `한 웹사이트에서 통합으로 예약`하는 서비스를 구축
- 교내 구성원만 가입할 수 있는 `학교 이메일 인증을 통한 회원가입` 서비스 구현.
- 날짜별, 시간별 예약 데이터를 DB를 `MySQL과 연동`하여 저장.

<br/><br/>

# Subjects
- 1~9 강의동, 

<br/>

## FrontEnd

- 웹, 모바일 환경에서도 이용에 불편함이 없도록 반응형 웹 디자인을 적용했습니다.
- 사용자가 쉽게 캐비닛을 찾을 수 있도록 실제 사용 공간에 따른 맵을 표시했습니다.
- 원활한 사용자 경험을 위해 페이지를 포함한 캐러셀을 구현했습니다.
- 사용자가 서비스 상태를 명확하게 인지할 수 있도록 로딩과 에러 코드에 따른 렌더링을 구현했습니다. 
- 정책이나 UI/UX 등 빠르게 변화하는 환경을 원활히 반영할 수 있도록 하드코딩을 피하고 props와 환경변수를 이용해 유지보수성을 높였습니다.

## BackEnd

- 사용자가 층별로 캐비닛 정보를 조회할 때 빠른 응답속도를 위해 쿼리 최적화로 성능을 향상했습니다.
- 공유 캐비닛 서비스를 구현하며 캐비닛 대여/반납 시 발생할 수 있는 여러 경우를 원활하게 제어하기 위해 캐비닛 상태에 따라 처리하게끔 DFA 알고리즘을 적용했습니다.
- 동시에 들어오는 요청에 대해 특정 요청이 실패할 경우, 무결성을 위해 대여/반납의 과정을 트랜잭션으로 관리하였으며 격리 수준 구별로 데드락을 방지했습니다.
- 블랙홀에 빠진 사용자(퇴학 처리된 사용자)를 적절하게 처리하도록 42API를 사용하였고 블랙홀 스케줄링을 고안, 적용했습니다.
- 기존 버전에서 Express.js로 작성된 코드를 IoC, DI, AOP를 이용, 유지보수에 유리한 Nest.js로 포팅했습니다.
- 불필요한 정보를 저장하는 컬럼을 제거, 트랜잭션의 로직을 재구성하는 등 DB 구조를 개선했습니다.

<br/>

# 🛠&nbsp;&nbsp;&nbsp;Tech Stack




  <!-- Frontend Stack -->
<table border=""4>
  <th align="center">Role</th>
    <th align="center" colspan="2">Framework</th>
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


# 🧑‍💻&nbsp;&nbsp;&nbsp;Developers

</div>
<table border=""4 width="100%">
  <th align="center" colspan="2">Backend</th>
    <th align="center">Framework</th>
  <tr>
   <td align="center"><a href="https://github.com/h-beeen"><img src="https://avatars.githubusercontent.com/u/112257466?v=4" width="150px; style="vertical-align:top" alt=""/>
   
   <td align="center"><a href="https://github.com/eunchannam"><img src="https://avatars.githubusercontent.com/u/75837025?v=4" width="150px;" style="vertical-align:top" alt=""/>

   <td align="center"><a href="https://github.com/SWARVY"><img src="https://avatars.githubusercontent.com/u/53262430?v=4" width="150px;" style="vertical-align:top" alt=""/>

   <td align="center"><a href="https://github.com/rheefine"><img src="https://avatars.githubusercontent.com/u/109448186?v=4" width="150px;" style="vertical-align:top" alt=""/>
  </tr>

  <tr>
  <td align="center"><a href="https://github.com/h-beeen"><b>🐧 변해빈 🐧</b></a></td>
  <td align="center"><a href="https://github.com/eunchannam"><b>🐤 남은찬 🐤</b></a></td>
  <td align="center"><a href="https://github.com/eofrkam"><b>🐦 신현호 🐦</b></br></a></td>
  <td align="center"><a href="https://github.com/rheefine"><b>🐺 이동현 🐺</b><br/></a></td>
  </tr>
</table>
</div>
<br/>
