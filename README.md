# reMemo

## About
react-redux를 이용한 legal pad 스타일의 메모 앱입니다.

## Stack

Everything in this project is in JavaScript.

### Frontend

- react
- react-router
- redux
- redux-thunk
- Sass, css-loader, node-sass, sass-loader, classnames (sass 모듈)
- moment (Date Type data 파싱용 )
- react-dnd (drag-n-drop 라이브러리)
- axios (비동기 HTTP client 라이브러리)
- include-media (미디어쿼리 라이브러리)
### Running Backend Development Server
$ yarn start
### Running Frontend Webpack Development Server
$ yarn start

## 프로젝트 구조

- components : stateless component가 들어있습니다.
- containers : store, reducer와 연결되있고, lifecycle 관리를 하는 stateful component들이 있습니다.
- lib : 백엔드 api 함수와 react-dnd HOC가 들어있습니다.
- pages : 라우터로 사용할 페이지 컴포넌트
- static: svg 컴포넌트들이 들어있습니다. (google-icon)
- store: 리덕스 스토어와 리듀서 모듈이 들어있습니다.
- styles: 폰트, 스타일, 스타일링 라이브러리가 들어있습니다.

## 사용법

화면은 라벨 목록, 해당 라벨의 메모 목록, 메모 상세조회창 뷰로 이루어져있습니다.
페이지 reload 없이 데이터가 바뀌면 리렌더링됩니다.
- 라벨 목록 :
1. 사용자가 생성한 라벨의 목록들과 전체메모 조회가 가능한 All 라벨이 있습니다.
2. 라벨 항목에는 라벨명과 라벨에 속하는 메모의 수를 보여줍니다.
3. 현재 선택된 라벨이 어떤 것인지 색상으로 표시됩니다.
4. 추가 버튼을 누르면 새로운 라벨이 추가됩니다.
5. 라벨을 더블클릭하면 라벨 이름을 수정할 수 있습니다.
6. 라벨을 드래그하여 휴지통칸에 놓으면 라벨이 삭제됩니다.

- 메모목록 :
1. 선택한 라벨에 해당되는 메모들의 목록을 보여줍니다.
2. 메모의 제목, 최종 수정일, 내용의 일부가 표시됩니다.
3. 추가 버튼을 누르면 해당 라벨에 해당되는 새로운 메모를 작성할 수 있습니다.
4. 메모를 드래그하여 휴지통에 놓으면 메모가 삭제됩니다.

- 메모 상세조회 :
 1. 메모의 제목, 내용을 보여줍니다.
2. 제목과 내용이 기본설정으로는 read mode이지만 클릭하면 edit mode가 되고 내용을 수정할 수있습니다.
3. clear 버튼을 누르면 작성내용이 리셋됩니다.

## 구현 못한 것들
1. 메모 제목 검색 : 서치창을 타이핑하면 store에서 state.header.keyword 값이 바뀝니다. 이 값을 이용해서 state.db의 값들 중에서 탐색 로직을 만들면 될 것같습니다.
2. history api를 이용한 다이나믹 라우팅 : 데이터가 갱신될 때마다 react-router의 History API의 location state에 현재 상태 데이터를 저장하고 뒤로가기 앞으로가기로 접근 시 비동기 데이터 갱신 함수 대신 해당 location state를 가져오는 방식으로 직접 구현을 하려고 시도했습니다. 그런데 이전 상태의 state를 다시 원래 state로 덮어 씌우는 로직을 생각해내는게 생각보다 어려워서 라벨버튼을 누를시에 history.push('./${선택한라벨의id}) 를 하는 것 까지만 구현하였습니다. react-router-redux라는 라이브러리도 찾아봤지만 react-router 4버전에 해당되는 버전이 알파버전이여서 자료가 많이 부족하고 레퍼런스가 부족해서 적용을 시키기가 힘들었습니다. HTML5의 Navigation Timing API를 이용하는 방법도 좋을 것 같습니다.