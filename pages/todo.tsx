import React, { useRef, useCallback } from 'react';
import Head from 'next/head';
import TodoInsert from '../components/Todos/TodoInsert';
import TodoList from '../components/Todos/TodoList';
import TodoTemplate from '../components/Todos/TodoTemplate';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, editTodo, checkTodo } from '../store/todos';
import { RootState } from '../types/todos.type';

interface IState {
  todos: RootState;
}

const Todo = () => {
  const dispatch = useDispatch();

  const nextId = useRef(1);

  const todos = useSelector((state: IState) => state.todos.todos);

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
      dispatch(editTodo(edit_value, id));
    },
    [todos],
  );

  const onCheck = useCallback(
    (checked: boolean, id: number) => {
      dispatch(checkTodo(checked, id));
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
