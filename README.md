# Todo App with Next.js + TypeScript

## ๐ก ํ๋ก์ ํธ ์ ๋ณด

> 1. ํ๋ก์ ํธ ๋ช: Todo App with Next.js and TypeScript
> 2. ํ๋ก์ ํธ ๊ธฐ๊ฐ: 2022. 8. 27. ~ 2022. 9. 1

---

## ๐ ํ๋ก์ ํธ ์คํ ๋ฐฉ๋ฒ

    git clone https://github.com/hjpark625/todo-next.git
    cd todo-next
    yarn install
    yarn start

---

## โญ ๋ฐฐํฌ ๋งํฌ

> <https://hjpark625.github.io/todo-next/>

---

## ๐ ํ์ฉ ๊ธฐ์  ์คํ

![next](https://img.shields.io/badge/Next.js-12.2.5-FFFFFF?logo=next.js)
![react](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)
![typescript](https://img.shields.io/badge/TypeScript-4.8.2-3178C6?logo=typescript)
![styledComponents](https://img.shields.io/badge/Styled--Components-5.3.5-DB7093?logo=styledcomponents)  
![redux](https://img.shields.io/badge/redux-4.2.0-pink?logo=redux)
![react-redux](https://img.shields.io/badge/react--redux-8.0.2-pink?logo=redux)

- **์ ์  ์ด์ **
  - _Next.js_
    - ์๋ฒ์ฌ์ด๋๋ ๋๋ง(SSR)์ ํ์ฉํ์ฌ ํด๋ผ์ด์ธํธ์ฌ์ด๋๋ ๋๋ง(CSR)๋ณด๋ค ์ฐ์ํ ์๋์ ๋ ๋๋ง์ ๊ตฌํ์ด ๊ฐ๋ฅํ๋ค.
      - CSR์ ํ ๋น์ด์๋ HTMLํ์ผ์ ํด๋ผ์ด์ธํธ๊ฐ ๋ค์ด๋ก๋๋ฐ๊ณ  ๊ทธ ์ดํ ์คํฌ๋ฆฝํธ๋ฅผ ๋ก๋ํด HTML์ ๊ทธ๋ ค๋ด๋ ๋ฐฉ์์ธ ๋ฐ๋ฉด SSR์ ์๋ฒ์์ฒด์์ HTML์ ๋ชจ๋  ์คํฌ๋ฆฝํธ๋ค์ ๊ทธ๋ ค์ ํด๋ผ์ด์ธํธ์ ๋ด๋ณด๋ด๋ ๋ฐฉ์์ผ๋ก ํด๋ผ์ด์ธํธ์์ ์ผ์ ๋ ๋ฒ ํ  ๊ฒ์ ํ ๋ฒ์ผ๋ก ์ค์ฌ์ฃผ๋ ์ฅ์ ์ด ์๋ค.
    - ์์ ์ค๋ช์ ๊ทผ๊ฑฐํ์ฌ ๊ฒ์์์ง์ต์ ํ(SEO)์๋ ์ต์ ์ ์ฑ๋ฅ์ ๊ตฌํํ  ์ ์๋ค.
  - _React_
    - React๋ ํ์กดํ๋ ์๋ฐ์คํฌ๋ฆฝํธ ๋ผ์ด๋ธ๋ฌ๋ฆฌ ์ค ๋ง์ด ํ์ฉ์ค์ ์๋ค.
    - SPA๋ผ๋ ๊ฐ์ ์ด ์กด์ฌํด ์๋ก์ด ํ์ด์ง๋ฅผ ์์ฒญ ํ  ๋ ๋ณ๊ฒฝ๋ ๋ถ๋ถ๋ง ๊ฐฑ์ ํจ์ผ๋ก์จ ํธ๋ํฝ ๊ฐ์์ ๋ ๋๋ง์์ ํจ์จ์ ์ด๋ค.
      - ๋น ๋ฅธ ํ๋ฉด ์ด๋์ด ๊ฐ๋ฅํ๋ฉฐ ์ฑ์ฒ๋ผ ์์ฐ์ค๋ฌ์ด ๋์์ผ๋ก ์ต์ ์ UX๋ฅผ ์ ๊ณตํ  ์ ์๋ค.
  - _TypeScript_
    - ์ ์  ํ์ ์ง์ํ๋ฏ๋ก ์ปดํ์ผ ๋จ๊ณ์์ ์ค๋ฅ๋ฅผ ์ฌ์ ์ ํฌ์ฐฉํ  ์ ์์ผ๋ฉฐ ์ด๋ฅผ ํตํด ๋ฏธ๋ฆฌ ๋๋ฒ๊น์ด ๊ฐ๋ฅํ๋ค.
      - ๊ฐ๋ฐ ๊ฐ ๊ฐ๋ฐ์์ ํด๋จผ ์๋ฌ๋ฅผ ๋ฏธ๋ฆฌ ๊ฐ์งํ์ฌ ์ถํ ๋ฐฐํฌ ์์ ๋ฌธ์ ๋ฅผ ์ฌ์ ์ ์ผ๋ก ์ฐจ๋จํ๋๋ฐ ํจ๊ณผ์ ์ด๋ค.
  - _Redux_ / _React-Redux_
    - ์ ์ญ์ํ ๊ด๋ฆฌํ๋๋ฐ ์์ด ํ์ค์ ์ผ๋ก ์ฌ์ฉ๋๋ ๋ผ์ด๋ธ๋ฌ๋ฆฌ์ด๋ค.
    - FLUXํจํด์ผ๋ก ๋ฐ์ดํฐ ํ๋ฆ์ ๋จ๋ฐฉํฅ์ฑ์ ์ถ๊ตฌํ์ฌ ์ถํ ์๋ฌ๋ฐ์ ์ ์๋ฌ์ ์์ธ์ ํ์ํ๋๋ฐ ์ฝ๊ณ  ์ ์ง๋ณด์์ ๋งค์ฐ ํ๋ ฅ์ ์ด๋ค.
  - _Styled-Components_
    - CSS-in-JS๋ ์งง์ ๊ธธ์ด์ ์ ๋ํฌํ ํด๋์ค๋ฅผ ์๋์ ์ผ๋ก ์์ฑํ๊ธฐ์ ์ฝ๋ ๊ฒฝ๋ํ์ ํจ๊ณผ์ ์ด๋ค.
    - ์ปดํฌ๋ํธ ๊ธฐ๋ฐ ๊ฐ๋ฐ ๋ฐฉ๋ฒ์ ์ ํฉํ๊ณ  ๊ฐ์ฅ ๋ง์ด ์ฌ์ฉ๋๋ CSS-in-JS ๋ผ์ด๋ธ๋ฌ๋ฆฌ
    - JS ์์์ ํจ์๋ฅผ ์ฝ๊ฒ ๊ณต์ ํ์ฌ props๋ฅผ ํ์ฉํ ์กฐ๊ฑด๋ถ ๋ ๋๋ง์ ์ฉ์ดํ๋ค.
    - ์ปดํฌ๋ํธํํ์ฌ ์คํ์ผ์ ์ฌํ์ฉํ๋๋ฐ ์ฉ์ดํ๋ค.

---

## ๐ ํด๋ ๊ตฌ์กฐ

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

## ๐ ๊ตฌํ ๊ธฐ๋ฅ

- **Todo ๋ฆฌ์คํธ ์์ฑ(Create)**

  - todo.tsx์์ TODO_DATA๋ผ๋ ์ด๊ธฐ๊ฐ ์ญํ ์ ํ๋ ์์ ๋ฐ์ดํฐ๋ฅผ ์ ์
  - TodoInsert.tsx์์ ์ฌ์ฉ์๊ฐ input์ ์๋ ฅํ ๊ฐ์ state์ ์ ์ฅ

    ```ts
    /* TodoInsert.tsx */
    const [todoValue, setTodoValue] = useState('');

    const saveInputValue = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodoValue(e.target.value); // input์ ์์ฑ๋๋ string์ state์ ์ ์ฅ
      },
      [],
    );
    ```

  - **์์ ์ฝ๋๋ฅผ `Redux`๋ก ๋ณ๊ฒฝํ๋ค๋ฉด...**

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

    - ๊ธฐ์กด์ setState๋ฅผ ํ์ฉํด value๋ฅผ ์ ์ฅํ๋ค๋ฉด `dispatch`ํจ์๋ฅผ ํ์ฉํด `todos.ts`์ ์๋ ์ก์์์ฑํจ์์ธ `changeField`๋ฅผ `e.target.value`๋ฅผ payload์ ๋ด์ ์คํ์ํจ๋ค.

  - ์ ์ฅ๋ value๋ฅผ ์ถ๊ฐ ๋ฒํผ์ ๋๋ ์ ๋ todo.tsx์์ props๋ก ๋ด๋ ค์ฃผ๋ `onInsert`ํจ์์ ํฌํจ์์ผ submit

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
        setTodos(todos.concat(todo)); // ์์๋ฐ์ดํฐ ํ์ฉํด concat์ผ๋ก ์๋ก์ด ๋ฆฌ์คํธ ์ถ๊ฐ
        nextId.current += 1; // Todo๊ฐ ์ถ๊ฐ๋๋ฉด ref์ ๊ฐ์ 1์ฉ ๋ํจ
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

  - **์์ ์ฝ๋๋ฅผ `Redux`๋ก ๋ณ๊ฒฝํ๋ค๋ฉด...**

    ```ts
    /* todo.tsx */
    const nextId = useRef(1);

    const onInsert = useCallback(
      (text: string) => {
        dispatch(addTodo(text, nextId));
        nextId.current++; // Todo๊ฐ ์ถ๊ฐ๋๋ฉด 1์ฉ ๋ํ๊ธฐ
      },
      [todos],
    );

    /* todos.ts */
    export const addTodo = (
      inputValue: string,
      nextId: React.MutableRefObject<number>,
    ) => ({
      type: ADD_TODO,
      nextId, // ์๋ก๋ค์ด์จ id๊ฐ
      inputValue, // changeField ํจ์๋ก ์ ์ฅ๋ e.target.value๊ฐ
    });
    ```

- **Todo ๋ฆฌ์คํธ ๋ถ๋ฌ์ค๊ธฐ(Read)**

  - todo.tsx์์ `useSelector`๋ฅผ ํ์ฉํด ๋ฐฐ์ด๋ก ๋ง๋ค์ด์ง `todos`๋ฅผ props๋ก TodoList.tsx๋ก ์ ๋ฌ ํ `map`์ ์ด์ฉํด ์ ์ฅ๋ ๋ฐ์ดํฐ๋ค์ ๋ ๋๋ง

- **Todo ์์ ํ๊ธฐ(Update)**

  - edit๋ฒํผ์ ๋๋ ์ ๋ ์์  input์ฐฝ์ด ๋ํ๋๊ณ  ๊ธฐ์กด ๊ฐ์ ๋์ฐ๋๋ก ๊ตฌํ
    - ์์ ๋ฒํผ ํด๋ฆญํ  ๋ `boolean`๊ฐ์ ๊ฐ์ง isEdit์ด๋ผ๋ state๋ฅผ ํ์ฉ
  - Createํ ๋์ ๋ง์ฐฌ๊ฐ์ง๋ก edit input์ฐฝ์ ์๋ ฅ๋๋ string์ state์ ์ ์ฅ
  - ์์ ๋ฒํผ ํด๋ฆญ ์ input์ฐฝ์ focus๋๋๋ก `useRef`์ `useLayoutEffect`๋ฅผ ํ์ฉํด์ ๊ตฌํ

    ```ts
    const editRef = useRef<HTMLInputElement | null>(null);
    useLayoutEffect(() => {
      if (editRef.current !== null) return editRef.current.focus();
    });
    ```

  - todo.tsx์์ `onEdit`ํจ์๋ฅผ ์ ์ํด props๋ก ์ ๋ฌ

    ```ts
    const onEdit = useCallback(
      (e: React.FormEvent<HTMLFormElement>, id: number, editTodo: string) => {
        e.preventDefault();
        if (!editTodo) return alert('๋น ์นธ์ผ๋ก ์์ ํ  ์ ์์ต๋๋ค.'); // input์ฐฝ์ด ๋น ์นธ์ผ ๋ alert์ฐฝ ํ์ฉ
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, todo: editTodo } : todo,
          ),
        ); // ์๋กญ๊ฒ ์์ ๋๋ ํ์คํธ๋ฅผ todo ์คํ์ดํธ์ ๋ฐ์
      },
      [todos],
    );
    ```

    - ์์  ํ ์ํฐ๋ฅผ ์ณค์ ๋ submit์ผ๋ก ์๋กญ๊ฒ ์์ ๋๋ ํ์คํธ๋ฅผ todos์ ๋ฐ์ํ๊ณ  ์์ ๋ ํ์คํธ๋ฅผ ์ฌ๋ ๋๋ง

  - **์์ ์ฝ๋๋ฅผ `Redux`๋ก ๋ณ๊ฒฝํ๋ค๋ฉด...**

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

- **Todo ๋ฆฌ์คํธ ์ญ์ ํ๊ธฐ(Delete)**

  - `filter`๋ฉ์๋๋ฅผ ํ์ฉํด์ ํด๋ฆญํ๋ฉด ํด๋ฆญ ๋ todo์ id์ ํด๋น todo์ id๋ฅผ ๋น๊ตํ์ฌ ์ผ์นํ๋ ๊ฒ ์ ์ธํ ๋๋จธ์ง todo๋ค์ ๋ฝ์๋ด๊ณ  ๋๋จธ์ง Todo ๋ฆฌ์คํธ๋ค์ ์ฌ๋ ๋๋ง

    ```ts
    const onRemove = useCallback(
      (id: number) => {
        dispatch(deleteTodo(id));
      },
      [todos],
    );
    ```
