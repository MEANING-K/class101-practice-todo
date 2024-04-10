import React from 'react';
import styled from 'styled-components';

const Circle = styled.div`
  width: 36px;
  min-width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export default function CircleButton({
  className, // 상위 컴포넌트에서 css 상에서 CircleButton을 접근하기 위해 필요
  onClick, // 버튼을 클릭하였을 때 실행할 함수
  Icon,
}: {
  className?: string;
  onClick: () => void; // onClick은 받는 인자도 없고 반환값도 없기에 void로 넣어줌
  Icon: () => JSX.Element; // 함수가 JSX.Element라는 타입을 반환하기 때문에 이렇게 적음
}) {
  return (
    <Circle onClick={onClick} className={className}>
      <Icon />
    </Circle>
  );
}
