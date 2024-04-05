import React from 'react';
import styled from 'styled-components'; // 스타일링 하기 위해 추가

const Box = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 25px;
  width: 100%;
  font-size: 1.1em;
  border-bottom: 1px solid #eee;
`;
const Input = styled.input`
  width: 100%;
  border: none;
  outline: 0;
`;

export default function TodoInput() {
  return (
    <Box>
      <Input placeholder="할 일을 입력해주세요" />
    </Box>
  );
}
