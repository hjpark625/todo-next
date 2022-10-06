# Todo App with Next.js + TypeScript

## 💡 프로젝트 정보

> 1. 프로젝트 명: Todo App with Next.js and TypeScript
> 2. 프로젝트 기간: 2022. 8. 27. ~ 2022. 9. 1

---

## 🌈 프로젝트 실행 방법

    git clone https://github.com/hjpark625/todo-next.git
    cd todo-next
    yarn install
    yarn start

---

## ⭐ 배포 링크

> <https://hjpark625.github.io/todo-next/>

---

## 📚 활용 기술 스택

![next](https://img.shields.io/badge/Next.js-12.2.5-FFFFFF?logo=next.js)
![react](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)
![typescript](https://img.shields.io/badge/TypeScript-4.8.2-3178C6?logo=typescript)
![styledComponents](https://img.shields.io/badge/Styled--Components-5.3.5-DB7093?logo=styledcomponents)  
![redux](https://img.shields.io/badge/redux-4.2.0-pink?logo=redux)
![react-redux](https://img.shields.io/badge/react--redux-8.0.2-pink?logo=redux)

- **선정 이유**
  - _Next.js_
    - 서버사이드렌더링(SSR)을 활용하여 클라이언트사이드렌더링(CSR)보다 우수한 속도의 렌더링을 구현이 가능하다.
      - CSR은 텅 비어있는 HTML파일을 클라이언트가 다운로드받고 그 이후 스크립트를 로드해 HTML을 그려내는 방식인 반면 SSR은 서버자체에서 HTML에 모든 스크립트들을 그려서 클라이언트에 내보내는 방식으로 클라이언트에서 일을 두 번 할 것을 한 번으로 줄여주는 장점이 있다.
    - 위의 설명에 근거하여 검색엔진최적화(SEO)에도 최적의 성능을 구현할 수 있다.
  - _React_
    - React는 현존하는 자바스크립트 라이브러리 중 많이 활용중에 있다.
    - SPA라는 강점이 존재해 새로운 페이지를 요청 할 때 변경된 부분만 갱신함으로써 트래픽 감소와 렌더링에서 효율적이다.
      - 빠른 화면 이동이 가능하며 앱처럼 자연스러운 동작으로 최적의 UX를 제공할 수 있다.
  - _TypeScript_
    - 정적 타입 지원하므로 컴파일 단계에서 오류를 사전에 포착할 수 있으며 이를 통해 미리 디버깅이 가능하다.
      - 개발 간 개발자의 휴먼 에러를 미리 감지하여 추후 배포 시에 문제를 사전적으로 차단하는데 효과적이다.
  - _Redux_ / _React-Redux_
    - 전역상태 관리하는데 있어 표준적으로 사용되는 라이브러리이다.
    - FLUX패턴으로 데이터 흐름의 단방향성을 추구하여 추후 에러발생 시 에러의 원인을 파악하는데 쉽고 유지보수에 매우 탄력적이다.
  - _Styled-Components_
    - CSS-in-JS는 짧은 길이의 유니크한 클래스를 자동적으로 생성하기에 코드 경량화에 효과적이다.
    - 컴포넌트 기반 개발 방법에 적합하고 가장 많이 사용되는 CSS-in-JS 라이브러리
    - JS 상수와 함수를 쉽게 공유하여 props를 활용한 조건부 렌더링에 용이하다.
    - 컴포넌트화하여 스타일을 재활용하는데 용이하다.

---

## 📁 폴더 구조

    root
    |-- tsconfig.json
    |-- README.md
    |-- next.config.js
    |-- package.json
    |-- yarn.lock
    |-- .gitignore
    |-- .babelrc
    |-- .github
    |-- compoenents
    |   |-- /Todos
    |       |-- TodoInsert.tsx
    |       |-- TodoList.tsx
    |       |-- TodoListItem.tsx
    |       |-- TodoTemplate.tsx
    |-- pages
    |   |-- /api
    |   |   |-- hello.ts
    |   |-- _app.tsx
    |   |-- index.tsx
    |   |-- todo.tsx
    |-- styles
    |   |-- GlobalStyle.tsx
    |   |-- palette.ts
    |-- store
    |-- types

---

## 📝 구현 기능

- **Todo 리스트 작성(Create)**

  - todo.tsx에서 TODO_DATA라는 초기값 역할을 하는 상수 데이터를 제작
  - TodoInsert.tsx에서 사용자가 input에 입력한 값을 state에 저장

    ```ts
    /* TodoInsert.tsx */
    const [todoValue, setTodoValue] = useState('');

    const saveInputValue = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodoValue(e.target.value); // input에 작성되는 string을 state에 저장
      },
      [],
    );
    ```

  - **위의 코드를 `Redux`로 변경한다면...**

    ```ts
    /* TodoInsert.tsx */
    const saveInputValue = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeField(e.target.value));
      },
      [],
    );

    /* todos.ts */
    export const changeField = (value: string) => ({
      type: CHANGE_FIELD,
      value,
    });
    ```

    - 기존에 setState를 활용해 value를 저장했다면 `dispatch`함수를 활용해 `todos.ts`에 있는 액션생성함수인 `changeField`를 `e.target.value`를 payload에 담아 실행시킨다.

  - 저장된 value를 추가 버튼을 눌렀을 때 todo.tsx에서 props로 내려주는 `onInsert`함수에 포함시켜 submit

    ```ts
    /* todo.tsx */
    const [todos, setTodos] = useState(TODO_DATA);

    const nextId = useRef(1);

    const onInsert = useCallback(
      (text: string) => {
        const todo = {
          id: nextId.current,
          todo: text,
          checked: false,
        };
        setTodos(todos.concat(todo)); // 상수데이터 활용해 concat으로 새로운 리스트 추가
        nextId.current += 1; // Todo가 추가되면 ref의 값을 1씩 더함
      },
      [todos],
    );

    /* ... */

    const TODO_DATA = [
      {
        id: 0,
        text: '',
        checked: false,
      },
    ];
    ```

  - **위의 코드를 `Redux`로 변경한다면...**

    ```ts
    /* todo.tsx */
    const nextId = useRef(1);

    const onInsert = useCallback(
      (text: string) => {
        dispatch(addTodo(text, nextId));
        nextId.current++; // Todo가 추가되면 1씩 더하기
      },
      [todos],
    );

    /* todos.ts */
    export const addTodo = (
      inputValue: string,
      nextId: React.MutableRefObject<number>,
    ) => ({
      type: ADD_TODO,
      nextId, // 새로들어온 id값
      inputValue, // changeField 함수로 저장된 e.target.value값
    });
    ```

- **Todo 리스트 불러오기(Read)**

  - todo.tsx에서 `useSelector`를 활용해 배열로 만들어진 `todos`를 props로 TodoList.tsx로 전달 후 `map`을 이용해 저장된 데이터들을 렌더링

- **Todo 수정하기(Update)**

  - edit버튼을 눌렀을 때 수정 input창이 나타나고 기존 값을 띄우도록 구현
    - 수정버튼 클릭할 땐 `boolean`값을 가진 isEdit이라는 state를 활용
  - Create할때와 마찬가지로 edit input창의 입력되는 string을 state에 저장
  - 수정버튼 클릭 시 input창에 focus되도록 `useRef`와 `useLayoutEffect`를 활용해서 구현

    ```ts
    const editRef = useRef<HTMLInputElement | null>(null);
    useLayoutEffect(() => {
      if (editRef.current !== null) return editRef.current.focus();
    });
    ```

  - todo.tsx에서 `onEdit`함수를 제작해 props로 전달

    ```ts
    const onEdit = useCallback(
      (e: React.FormEvent<HTMLFormElement>, id: number, editTodo: string) => {
        e.preventDefault();
        if (!editTodo) return alert('빈 칸으로 수정할 수 없습니다.'); // input창이 빈 칸일 때 alert창 활용
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, todo: editTodo } : todo,
          ),
        ); // 새롭게 수정되는 텍스트를 todo 스테이트에 반영
      },
      [todos],
    );
    ```

    - 수정 후 엔터를 쳤을 때 submit으로 새롭게 수정되는 텍스트를 todos에 반영하고 수정된 텍스트를 재렌더링

  - **위의 코드를 `Redux`로 변경한다면...**

    ```ts
    /* todo.tsx */
    const onEdit = useCallback(
      (e: React.FormEvent<HTMLFormElement>, edit_value: string, id: number) => {
        e.preventDefault();
        dispatch(editTodo(edit_value, id));
      },
      [todos],
    );

    /* todos.ts */
    export const editTodo = (edit_value: string, id: number) => ({
      type: EDIT_TODO,
      edit_value,
      id,
    });
    ```

- **Todo 리스트 삭제하기(Delete)**

  - `filter`메소드를 활용해서 클릭히면 클릭 된 todo의 id와 해당 todo의 id를 비교하여 일치하는 것 제외한 나머지 todo들을 뽑아내고 나머지 Todo 리스트들을 재렌더링

    ```ts
    const onRemove = useCallback(
      (id: number) => {
        dispatch(deleteTodo(id));
      },
      [todos],
    );
    ```
