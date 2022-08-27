import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faPen, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { ITodos } from './TodoList';

interface StyleProps {
  isDone: boolean | null;
}

interface TodoListItemProps {
  items: ITodos;
  setTodos: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        todo: string;
        isDone: boolean;
      }[]
    >
  >;
}

const TodoListItem = ({ items, setTodos }: TodoListItemProps) => {
  const [isDone, setIsDone] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editTodo, setEditTodo] = useState(items.todo);

  const editSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsEdit(false);
  };

  const saveEditTodoText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEditTodo(value);
  };
  return (
    <TodoListItemWrapper>
      <CheckBox
        isDone={isDone}
        // onClick={() => {
        //   getDoneTodo();
        // }}
      >
        {isDone ? (
          <FontAwesomeIcon icon={faSquareCheck} />
        ) : (
          <FontAwesomeIcon icon={faSquare} />
        )}
        {isEdit || <Text isDone={isDone}>{items.todo}</Text>}
      </CheckBox>
      {isEdit && (
        <EditForm
          onSubmit={(e) => {
            editSubmit(e);
          }}
        >
          <EditInput
            type="text"
            value={editTodo}
            onChange={(e) => {
              saveEditTodoText(e);
            }}
          />
        </EditForm>
      )}
      <Edit
        isDone={isDone}
        onClick={() => {
          setIsEdit((prev) => !prev);
        }}
      >
        <FontAwesomeIcon icon={faPen} />
      </Edit>
      <Remove
      // onClick={() => {
      //   deleteTodo();
      // }}
      >
        <FontAwesomeIcon icon={faTrashCan} />
      </Remove>
    </TodoListItemWrapper>
  );
};

export default TodoListItem;

const TodoListItemWrapper = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  position: relative;
  &:nth-child(even) {
    background: #f8f9fa;
  }

  & + & {
    border-top: 1px solid ${palette.gray[3]};
  }
`;

const CheckBox = styled.div<StyleProps>`
  cursor: pointer;
  flex: 1;
  display: flex;
  align-items: center;
  svg {
    font-size: 1.5rem;
    color: ${({ isDone }) => (!isDone ? 'inherit' : '#22b8cf')};
  }
`;

const Text = styled.div<StyleProps>`
  margin-left: 0.5rem;
  flex: 1;

  color: ${({ isDone }) => (!isDone ? 'inherit' : '#adb5bd')};
  text-decoration: ${({ isDone }) => (!isDone ? 'none' : 'line-through')};
`;

const Remove = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ff6b6b;
  cursor: pointer;
  &:hover {
    color: #ff8787;
  }
`;

const Edit = styled.div<StyleProps>`
  display: ${({ isDone }) => (isDone ? 'none' : 'flex')};
  margin-right: 1.5rem;
  align-items: center;
  font-size: 1.2rem;
  color: ${palette.gray[6]};
  cursor: pointer;
  &:hover {
    color: ${palette.gray[4]};
  }
`;

const EditForm = styled.form`
  position: absolute;
  left: 9%;
`;

const EditInput = styled.input`
  width: 24rem;
  height: 2rem;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid ${palette.gray[5]};
  padding: 0.5rem;
  padding-left: 0;
  font-size: 1rem;
  color: ${palette.gray[6]};
  &:focus {
    outline: none;
  }
`;
