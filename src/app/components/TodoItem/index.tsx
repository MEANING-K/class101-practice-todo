import React from 'react';
import styled from 'styled-components';
import Block from '../Block';
import CheckBox from '../Checkbox';
import CircleButton from '../Button/CircleButton';
import TodoInput from '../TodoInput';

// 투두아이템 컴포넌트
const Box = styled.div<{ isEditing: boolean }>`
  display: flex;
  align-items: center;
  padding: ${props =>
    props.isEditing ? '15px 15px 11px 25px' : '15px 15px 15px 25px'};
  width: 100%;
  height: 4em;
  font-size: 1.1em;
  border-bottom: 1px solid #eee;

  & > .delete-button {
    display: none;
  }

  &:hover {
    padding: 11.5px 25px 11px; // hover 했을 때, Box가 덜그럭거리지 않도록 패딩으로 조절
    & > .delete-button {
      display: flex;
    }
  }
`;

const TodoContent = styled.span<{ checked: boolean }>`
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

export default function TodoItem({
  todo,
  checkTodo,
  editModeTodo,
  editTodo,
  deleteTodo,
}: {
  todo: ITodoItem;
  checkTodo: () => void;
  editModeTodo: () => void;
  editTodo: (todo: string) => void;
  deleteTodo: () => void;
}) {
  return (
    <Box isEditing={todo.editing}>
      <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
        <CheckBox checked={todo.completed} onClick={() => checkTodo()} />
        <Block marginLeft="10px" />
        {todo.editing ? (
          <TodoInput
            editTodo={(todo: string) => {
              editTodo(todo);
              editModeTodo();
            }}
            isEditing={true}
            editContent={todo.content}
          />
        ) : (
          <TodoContent onClick={() => editModeTodo()} checked={todo.completed}>
            {todo.content}
          </TodoContent>
        )}
      </div>
      <CircleButton
        className="delete-button"
        onClick={() => deleteTodo()}
        Icon={() => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
          </svg>
        )}
      />
    </Box>
  );
}
