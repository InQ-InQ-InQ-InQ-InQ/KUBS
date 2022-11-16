# 구성

## Components

순수 렌더링을 담당하는 컴포넌트들의 폴더입니다.

### findComponent

아이디/비밀번호 찾기 페이지를 렌더링합니다.

### LoginComponent

로그인 페이지를 렌더링합니다.

### DepartmentComponent

회원가입시 학과를 검색하기 위한 modal을 렌더링합니다.

### Registercomponent

회원가입 페이지를 렌더링합니다.

## Containers

component들이 순수 렌더링만 담당하도록 하기위해 상태 변화를 위한 함수들을 담아놓은 파일들을 관리하는 폴더입니다.

### LoginContainer

리덕스와 직접적으로 연결되어 있는 컨테이너입니다.
LoginComponent를 렌더링합니다.

#### username

로그인 요청을 하기위해 입력한 아이디를 담고있습니다

#### password

로그인 요청을 하기위해 입력한 비밀번호를 담고있습니다

useDispatch를 사용하여 `thunk/login.js` 액션을 디스패치합니다.

### RegisterContainer

리덕스와 직접적으로 연결되어 있는 컨테이너입니다.
회원가입 페이지를 위한 RegisterComponent, 학과 검색 modal 렌더링을 위한 DepartmentComponent를 렌더링합니다.

#### username

회원가입 요청을 하기위해 입력한 아이디를 담고있습니다

#### password

회원가입 요청을 하기위해 입력한 비밀번호를 담고있습니다

#### passwordConfirm

회원가입 요청을 하기위해 입력한 비밀번호 확인을 담고있습니다. passwordConfirm과 password가 일치하지 않으면 로그인 요청은 전송되지 않습니다.

#### department

회원가입 요청을 하기위해 선택한 학과의 정보를 담고있습니다.

#### email

회원가입 요청을 하기위해 입력한 이메일을 담고있습니다

#### visible

이메일 인증 요청 여부를 바탕으로 인증코드 입력창 렌더링 여부를 결정하는 상태입니다.

#### validate

이메일 인증을 위해 입력한 인증 코드의 정보를 담고있습니다.

#### show

modal창 출력 여부를 결정하는 상태입니다.

useDispatch를 사용하여 `thunk/register.js` 액션을 디스패치합니다.

## modules

리덕스 스토어와 액션을 관리하는 폴더입니다.

### store

리덕스 메인 스토어를 관리하는 파일입니다

### userSlice

로그인, 회원가입 액션을 담당하는 파일입니다.

## pages

container를 호출하는 파일들을 관리하는 폴더입니다
순수 컨테이너 호출 이외에는 역할이 없기때문에 추가적인 기능 생성 시 설명 추가하도록 하겠습니다.

## styles

component들의 스타일을 정의해놓은 css 파일들을 관리하는 폴더입니다.

## thunk

비동기 액션들을 관리하는 폴더입니다. axios를 통해 백엔드와 통신합니다.

# 송신되는 데이터 정리

## 로그인 시

username,
password,

## 회원가입 시

username,
password,
department,
email,

## 아이디/비밀번호 찾기 시

### 아이디 찾기의 경우

idFindEmail,

### 비밀번호 찾기의 경우

pwFindId,
pwFindEmail,
