/* eslint-disable prettier/prettier */
// Todo 데이터 저장하는 함수
export const saveTodoData = (todoData: ITodoItem[]) => {
  localStorage.setItem('todoData', JSON.stringify(todoData));
};

// Todo 데이터 가져오는 함수
export const loadTodoData = (): ITodoItem[] => {
  const todoData = localStorage.getItem('todoData');
  if (todoData) {
    return JSON.parse(todoData);
  } else {
    return [];
  }
};
