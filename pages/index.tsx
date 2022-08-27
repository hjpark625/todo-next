import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import styled from 'styled-components';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>TodoPage</title>
      </Head>
      <GoToTodo>
        <Link href="/todo">
          <HelloText>헬로우</HelloText>
        </Link>
      </GoToTodo>
    </>
  );
};

export default Home;

const GoToTodo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const HelloText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 80px;
  border: 1px solid red;
  cursor: pointer;
`;
