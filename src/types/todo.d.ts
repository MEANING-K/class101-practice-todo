// TodoInput 개발을 위한 타입
interface ITodoItemContent {
  content: string; // todo 내용
}

interface ITodoItem extends ITodoItemContent {
  id: string;
  completed: boolean; // todo가 완료되었는지 확인
  editing: boolean; // todo가 수정 상태인지 아닌지 확인
}
