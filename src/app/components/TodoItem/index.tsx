import React from 'react';
import styled from 'styled-components';
import Block from '../Block';
import CheckBox from '../Checkbox';

// 투두아이템 컴포넌트
const Box = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 25px;
  width: 100%;
  font-size: 1.2em;
  border-bottom: 1px solid #eee;
`;

const TodoContet = styled.span<{ checked: boolean }>`
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-work;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  cursor: text;
  text-decoration: ${props => (props.checked ? 'line-through' : 'initial')};
  color: ${props => (props.checked ? '#aaa' : '#000')};
`;

export default function TodoItem({ todo }: { todo: ITodoItem }) {
  return (
    <Box>
      <CheckBox checked={todo.completed} />
      <Block marginLeft="10px" />
      <TodoContet checked={todo.completed}>{todo.content}</TodoContet>
    </Box>
  );
}
