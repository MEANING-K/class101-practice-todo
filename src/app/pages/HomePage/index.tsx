import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import TodoInput from 'app/components/TodoInput';
import TodoItem from 'app/components/TodoItem';

// 페이지 속 요소를 가운데로 해줌
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eee;
`;

// 박스 컴포넌트
const Box = styled.div`
  width: 400px;
  height: 600px;
  background-color: white;
  box-shadow: 0px 25px 100px -60px rgba(0, 0, 0, 0.18);
`;

// 타이틀 컴포넌트
const Title = styled.h1`
  margin: 0;
  padding: 15px 25px;
`;

// 투두리스트 컴포넌트
const TodoList = styled.div``;

// 투두체크 컴포넌트
const TodoCheck = styled.input`
  margin-right: 15px;
`;

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Main</title>
        <meta name="description" content="Todo Main App" />
      </Helmet>
      <Wrapper>
        <Box>
          <Title>할 일</Title>
          <TodoInput />
          <TodoList>
            <TodoItem
              todo={{
                id: '1',
                completed: false,
                content: 'This is Todo 1',
                editing: false,
              }}
            />
          </TodoList>
        </Box>
      </Wrapper>
    </>
  );
}
