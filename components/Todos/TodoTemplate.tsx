import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

interface TodoTemplateProps {
  children: React.ReactNode;
}

const TodoTemplate = ({ children }: TodoTemplateProps) => {
  return (
    <TodoWrapper>
      <Link href="/">
        <AppTitle>일정 관리</AppTitle>
      </Link>
      <Content>{children}</Content>
    </TodoWrapper>
  );
};

export default TodoTemplate;

const TodoWrapper = styled.div`
  width: 512px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6rem;
  border-radius: 4px;
  overflow: hidden;
`;

const AppTitle = styled.div`
  position: relative;
  background: #22b8cf;
  color: white;
  height: 4rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Content = styled.div`
  background: white;
  height: 22rem;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
