export interface ITodos {
  id: number;
  text: string;
  checked: boolean;
}

export interface IInitialState {
  value: string;
  edit_value: string;
  todos: { id: number; text: string; checked: boolean }[];
}

export interface ActionType {
  type: string;
  nextId: { current: number };
  id: number;
  inputValue: string;
  edit_value: string;
  checked: boolean;
  value: string;
}

export interface ITodos {
  id: number;
  text: string;
  checked: boolean;
}
