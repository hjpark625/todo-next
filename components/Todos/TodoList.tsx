import React from 'react';
import styled from 'styled-components';
import TodoListItem from './TodoListItem';
import palette from '../../styles/palette';

export interface ITodos {
  id: number;
  todo: string;
  checked: boolean;
}
interface TodosProps {
  todos: ITodos[];
  onRemove: (id: number) => void;
  onEdit: (
    e: React.FormEvent<HTMLFormElement>,
    id: number,
    editTodo: string,
  ) => void;
}

function TodoList({ todos, onRemove, onEdit }: TodosProps) {
  return (
    <TodoListWrapper>
      {todos.length === 1 && (
        <EmptyTodos>해야 할 일 들을 채워주세요!</EmptyTodos>
      )}
      {todos
        .map((todo) => {
          return (
            <TodoListItem
              items={todo}
              key={todo.id}
              onRemove={onRemove}
              onEdit={onEdit}
            />
          );
        })
        .slice(1)}
    </TodoListWrapper>
  );
}

export default TodoList;

const TodoListWrapper = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`;

const EmptyTodos = styled.div`
  text-align: center;
  margin-top: 8rem;
  color: ${palette.gray[5]};
  font-size: 2rem;
`;
