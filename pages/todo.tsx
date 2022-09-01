import React, { useState, useRef, useCallback } from 'react';
import Head from 'next/head';
import TodoInsert from '../components/Todos/TodoInsert';
import TodoList from '../components/Todos/TodoList';
import TodoTemplate from '../components/Todos/TodoTemplate';

const Todo = () => {
  const [todos, setTodos] = useState(TODO_DATA);

  const nextId = useRef(1);

  const onInsert = useCallback(
    (text: string) => {
      const todo = {
        id: nextId.current,
        todo: text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );

  const onRemove = useCallback(
    (id: number) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  const onEdit = useCallback(
    (e: React.FormEvent<HTMLFormElement>, id: number, editTodo: string) => {
      e.preventDefault();
      if (!editTodo) return alert('빈 칸으로 수정할 수 없습니다.');
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, todo: editTodo } : todo,
        ),
      );
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
        <TodoList todos={todos} onRemove={onRemove} onEdit={onEdit} />
      </TodoTemplate>
    </>
  );
};

const TODO_DATA = [
  {
    id: 0,
    todo: '',
    checked: false,
  },
];

export default Todo;
