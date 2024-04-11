import React from 'react';
import styled from 'styled-components'; // 스타일링 하기 위해 추가

const Box = styled.div<{ isEditing?: boolean }>`
  display: flex;
  align-items: center;
  padding: ${props => (props.isEditing ? '5px 0px' : '15px 25px')};
  width: 100%;
  border-bottom: 1px solid #eee;
`;
const Input = styled.input`
  width: 100%;
  border: none;
  outline: 0;
`;

export default function TodoInput({
  addTodo,
  isEditing, // Todo 수정용인지 추가용인지 확인할 수 있도록 함
  editContent, // Todo를 수정할 때 기존 Todo 내용을 텍스트 박스에 담기 위해 필요
  editModeTodo, // editing 상태를 변경하는 함수
  editTodo, // Todo 내용을 변경하는 함수
}: {
  addTodo?: (content: string) => void; // 수정하기 모드에서는 사용하지 않으므로 ? 추가
  isEditing?: boolean;
  editContent?: string;
  editModeTodo?: () => void;
  editTodo?: (content: string) => void;
}) {
  const [content, setContent] = React.useState<string>(editContent || '');

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
            addTodo && addTodo(content);
            setContent('');
          }
        }}
      />
    </Box>
  );
}
