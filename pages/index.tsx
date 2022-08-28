import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import styled from 'styled-components';
import palette from '../styles/palette';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>TodoPage</title>
      </Head>
      <GoToTodo>
        <Link href="/todo">
          <HelloText>일정 관리 사용하기</HelloText>
        </Link>
      </GoToTodo>
    </>
  );
};

export default Home;

const GoToTodo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40vh;
`;

const HelloText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 50px;
  border: 1px solid ${palette.cyan[3]};
  border-radius: 4px;
  background-color: ${palette.cyan[3]};
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${palette.cyan[5]};
    background-color: ${palette.cyan[5]};
  }
`;
