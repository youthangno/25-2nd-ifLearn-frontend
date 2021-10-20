import React from 'react';
import styled from 'styled-components';

export default function MainSearch() {
  return (
    <Container>
      <MainSearchText>느리더라도 꾸준히 정진할 것.</MainSearchText>
      <MainSearchInput>
        <SearchInput placeholder="배우고 싶은 지식을 입력해보세요" />
        <i className="fas fa-search" />
      </MainSearchInput>
      <LinkBox>
        <TopLink>
          <Links>#Front-End</Links>
          <Links>#MVC</Links>
          <Links>#React</Links>
          <Links>#JavaScript</Links>
          <Links>#Native</Links>
          <Links>#Back-End</Links>
          <Links>#Python</Links>
        </TopLink>
        <BottomLink>
          <Links>#Spring</Links>
          <Links>#게임개발</Links>
          <Links>#Java</Links>
        </BottomLink>
      </LinkBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainSearchText = styled.h1`
  font-size: 25px;
  font-weight: 400;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  width: 580px;
  padding: 20px 15px;
  border-radius: 25px;
  border: 1px solid #bfead1;
  background-color: #e4f7ef;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
`;

const MainSearchInput = styled.div`
  position: relative;
  .fas.fa-search {
    position: absolute;
    top: 35%;
    right: 25px;
    font-size: 20px;
  }
`;

const LinkBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Links = styled.div`
  background-color: #e8ebee;
  padding: 8px 10px;
  border-radius: 15px;
  font-size: 12px;
  margin: 0px 5px;
`;

const TopLink = styled.div`
  display: flex;
  margin: 15px 0px 10px 0px;
`;

const BottomLink = styled.div`
  display: flex;
`;
