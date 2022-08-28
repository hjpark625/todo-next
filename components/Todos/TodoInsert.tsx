import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

interface TodoInsertProps {
  onInsert: (text: string) => void;
}

function TodoInsert({ onInsert }: TodoInsertProps) {
  const [todoValue, setTodoValue] = useState('');

  const getInputValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTodoValue(e.target.value);
    },
    [],
  );

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      onInsert(todoValue);
      setTodoValue('');
      e.preventDefault();
    },
    [onInsert, todoValue],
  );

  return (
    <TodoInsertForm onSubmit={onSubmit}>
      <TodoInput
        placeholder="할 일을 입력하세요"
        value={todoValue}
        onChange={getInputValue}
      />
      <AddButton type="submit">
        <FontAwesomeIcon icon={faPlus} />
      </AddButton>
    </TodoInsertForm>
  );
}

export default TodoInsert;

const TodoInsertForm = styled.form`
  display: flex;
  background: #495057;
  position: sticky;
  top: 0;
  z-index: 2;
`;

const TodoInput = styled.input`
  background: none;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
  color: white;
  &::placeholder {
    color: #dee2e6;
  }
  flex: 1;
`;

const AddButton = styled.button`
  background: none;
  outline: none;
  border: none;
  background: #868e96;
  color: white;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background 0.1s ease-in;
  &:hover {
    background: #adb5bd;
  }
`;
