import React, { useRef, useCallback } from 'react';
import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux';
import TodoInsert from '../components/Todos/TodoInsert';
import TodoList from '../components/Todos/TodoList';
import TodoTemplate from '../components/Todos/TodoTemplate';
import { addTodo, deleteTodo, editTodo, checkTodo } from '../store/todos';
import { RootState } from '../store/index';

const Todo = () => {
  const dispatch = useDispatch();

  const nextId = useRef(1);

  const todos = useSelector((state: RootState) => state.todos.todos);

  const onInsert = useCallback(
    (text: string) => {
      dispatch(addTodo(text, nextId));
      nextId.current++;
    },
    [todos],
  );

  const onRemove = useCallback(
    (id: number) => {
      dispatch(deleteTodo(id));
    },
    [todos],
  );

  const onEdit = useCallback(
    (e: React.FormEvent<HTMLFormElement>, edit_value: string, id: number) => {
      e.preventDefault();
      if (edit_value.length === 0) {
        alert('빈 칸 으로 수정할 수 없습니다.');
      } else {
        dispatch(editTodo(edit_value, id));
      }
    },
    [todos],
  );

  const onCheck = useCallback(
    (id: number) => {
      dispatch(checkTodo(id));
    },
    [todos],
  );

  return (
    <>
      <Head>
        <title>Todo APP</title>
      </Head>

      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList
          todos={todos}
          onRemove={onRemove}
          onEdit={onEdit}
          onCheck={onCheck}
        />
      </TodoTemplate>
    </>
  );
};

export default Todo;
