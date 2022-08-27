import React, { useState } from 'react';
import Head from 'next/head';
import TodoInsert from '../components/Todos/TodoInsert';
import TodoList from '../components/Todos/TodoList';
import TodoTemplate from '../components/Todos/TodoTemplate';

const Todo = () => {
  const [todos, setTodos] = useState(TODO_DATA);

  return (
    <>
      <Head>
        <title>Todo APP</title>
      </Head>

      <TodoTemplate>
        <TodoInsert setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </TodoTemplate>
    </>
  );
};

const TODO_DATA = [
  {
    id: 1,
    todo: '안녕',
    isDone: true,
  },
  {
    id: 2,
    todo: '해야 할 일 2',
    isDone: false,
  },
  {
    id: 3,
    todo: '해야 할 일 3',
    isDone: false,
  },
];

export default Todo;
