import { RootState, ActionType } from '../types/todos.type';

const CHANGE_FIELD = 'todo/CHANGE_FIELD';
const EDIT_CHANGE = 'todo/EDIT_CHANGE';
const ADD_TODO = 'todo/ADD_TODO';
const DELETE_TODO = 'todo/DELETE_TODO';
const CHECK_TODO = 'todo/CHECK_TODO';
const EDIT_TODO = 'todo/EDIT_TODO';

export const changeField = (value: string) => ({
  type: CHANGE_FIELD,
  value,
});
export const editChange = (edit_value: string) => ({
  type: EDIT_CHANGE,
  edit_value,
});
export const addTodo = (
  inputValue: string,
  nextId: React.MutableRefObject<number>,
) => ({
  type: ADD_TODO,
  nextId,
  inputValue,
});
export const deleteTodo = (id: number) => ({ type: DELETE_TODO, id });
export const checkTodo = (id: number) => ({
  type: CHECK_TODO,
  id,
});
export const editTodo = (edit_value: string, id: number) => ({
  type: EDIT_TODO,
  edit_value,
  id,
});

const initialState: RootState = {
  value: '',
  edit_value: '',
  todos: [],
};

const todos = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        value: action.value,
      };
    case EDIT_CHANGE:
      return {
        ...state,
        edit_value: action.edit_value,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: state.todos.concat({
          id: action.nextId.current,
          text: action.inputValue,
          checked: false,
        }),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    case CHECK_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
        ),
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, text: action.edit_value } : todo,
        ),
      };
    default:
      return state;
  }
};

export default todos;
