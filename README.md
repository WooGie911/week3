# 항해 4주차 주특기 숙련 개인과제 : 리덕스를 사용한 My Todo List 만들기

## <a href = "https://week2final.vercel.app/"> 구현페이지</a>

<br>

## 구현 기능

- 생성 기능(Form 컴포넌트) : input으로 제목과 내용을 받은 뒤 onChangeHandlerInput 함수로 useState에 저장. Math.random() 함수로 난수 생성후 id에 0~1 랜덤숫자 배정 후 dispatch(inputText(insertID))로 Store에 객체 저장.
- 나열 기능(List 컴포넌트) : useSelector로 스토어에 있는 객체의 배열을 가져온뒤 .map() 내장함수로 원하는 내용 나열.
- 삭제 기능 (case DELETE_DATA ) : findIndex 내장함수로 payload로 받은 id값과 Store내의 id값이 같은 정보의 인덱스값을 찾아서 인덱스에 해당하는 객체를 splice 내장함수로 삭제하여 구현.
- 완료 취소 기능 (case USER_REVISE) : payload로 받은 id값과 Store내의 id값이 같은 정보의 isDone값을 !isDone으로 바꿔줌으로써 true면 "취소"를, false면 "완료" 텍스트를 띄우고 isDone 값에 따라 진행중과 완료로 나열.
- 상세페이지 기능 : useParams 로 받은 id값과 Store내의 id값이 같은 정보의 인덱스값을 찾아서 인덱스에 해당하는 객체의 원하는 값을 상세페이지 내에 나열.

<br><br><br><br>

## 간단한 리덕스의 흐름

-> 디스패치 -> 액션 -> 리듀서 -> 상태 저장 -> 스토어 -> 상태 변경 ->

<br><br><br>

## components

- Layout : 가장 바깥 레이아웃
- Header : 상단 제목
- Form : 상태를 입력받아서 스토어에 저장
- List : 스토어에서 값을 꺼내와 조건별로 나열

<br><br><br>

## pages

- TodoList : Home 페이지 위의 컴포넌트들이 작동하는 페이지 (/)
- DetailPage : 상세보기 버튼 클릭시 해당 id의 데이터를 보여주는 상세페이지 (detail/:id)
- Counter : 이번 과제에선 사용하지 않은 숫자 증감 페이지

<br><br><br>

## redux

- config/configStore : 스토어를 선언하고 리듀서들을 연결함
- modules/todolist : TodoList page에서 작동하는 액션을 받아 쓰는 reducer
- modules/counter : 이번 과제에선 사용하지 않은 Counter page에서 작동하는 액션을 받아 쓰는 reducer

<br><br><br>

## shared

- Router : TodoList와 DetailPage를 연결해주는 기능
