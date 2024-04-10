import React from 'react';
import styled from 'styled-components'; // 스타일링 하기 위해 추가

const Box = styled.div<{ isEditing?: boolean }>`
  display: flex;
  align-items: center;
  padding: ${props => (props.isEditing ? '5px 0px' : '15px 25px')};
  width: 100%;
  font-size: 1.1em;
  border-bottom: 1px solid #eee;
`;
const Input = styled.input`
  width: 100%;
  border: none;
  outline: 0;
`;

export default function TodoInput({
  setTodoList,
  isEditing, // Todo 수정용인지 추가용인지 확인할 수 있도록 함
  editContent, // Todo를 수정할 때 기존 Todo 내용을 텍스트 박스에 담기 위해 필요
  editModeTodo, // editing 상태를 변경하는 함수
  editTodo, // Todo 내용을 변경하는 함수
}: {
  setTodoList?: (todo: ITodoItem) => void; // 수정하기 모드에서는 사용하지 않으므로 ? 추가
  isEditing?: boolean;
  editContent?: string;
  editModeTodo?: () => void;
  editTodo?: (content: string) => void;
}) {
  const [content, setContent] = React.useState<string>('');

  return (
    <Box isEditing={isEditing}>
      <Input
        placeholder="할 일을 입력해주세요"
        value={content}
        onBlur={e => {
          if (e.currentTarget === e.target) {
            editTodo && editTodo(content);
          }
        }}
        onChange={e => setContent(e.target.value)}
        onKeyPress={e => {
          if (content === '') return;
          if (e.key !== 'Enter' && e.key !== 'NumpadEnter') return;
          if (isEditing) {
            editTodo && editTodo(content);
          } else {
            setTodoList &&
              setTodoList({
                // setTodoList라는 함수가 존재할 때만 함수를 실행
                id: '0',
                content: content,
                completed: false,
                editing: false,
              });
            setContent('');
          }
        }}
      />
    </Box>
  );
}
