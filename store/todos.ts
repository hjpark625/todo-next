import { createAction, createReducer } from '@reduxjs/toolkit';
import { IInitialState } from '../types/todos.type';

const CHANGE_FIELD = 'todo/CHANGE_FIELD';
const EDIT_CHANGE = 'todo/EDIT_CHANGE';
const ADD_TODO = 'todo/ADD_TODO';
const DELETE_TODO = 'todo/DELETE_TODO';
const CHECK_TODO = 'todo/CHECK_TODO';
const EDIT_TODO = 'todo/EDIT_TODO';

export const changeField = createAction(CHANGE_FIELD, (value: string) => ({
  payload: value,
}));
export const editChange = createAction(EDIT_CHANGE, (edit_value: string) => ({
  payload: edit_value,
}));
export const addTodo = createAction(
  ADD_TODO,
  (input_value: string, nextId: React.MutableRefObject<number>) => ({
    payload: { input_value, nextId },
  }),
);
export const deleteTodo = createAction(DELETE_TODO, (id: number) => ({
  payload: id,
}));
export const checkTodo = createAction(CHECK_TODO, (id: number) => ({
  payload: id,
}));
export const editTodo = createAction(
  EDIT_TODO,
  (edit_value: string, id: number) => ({ payload: { edit_value, id } }),
);

const initialState: IInitialState = {
  value: '',
  edit_value: '',
  todos: [],
};

const todos = createReducer(initialState, {
  [CHANGE_FIELD]: (state, { payload }) => ({
    ...state,
    value: payload,
  }),
  [EDIT_CHANGE]: (state, { payload }) => ({
    ...state,
    edit_value: payload,
  }),
  [ADD_TODO]: (state, { payload }) => ({
    ...state,
    todos: state.todos.concat({
      id: payload.nextId.current,
      text: payload.input_value,
      checked: false,
    }),
  }),
  [DELETE_TODO]: (state, { payload }) => ({
    ...state,
    todos: state.todos.filter((todo) => todo.id !== payload),
  }),
  [CHECK_TODO]: (state, { payload }) => ({
    ...state,
    todos: state.todos.map((todo) =>
      todo.id === payload ? { ...todo, checked: !todo.checked } : todo,
    ),
  }),
  [EDIT_TODO]: (state, { payload }) => ({
    ...state,
    todos: state.todos.map((todo) =>
      todo.id === payload.id ? { ...todo, text: payload.edit_value } : todo,
    ),
  }),
});

export default todos;
