import React from 'react';
import styled from 'styled-components';

export default function MainSearch() {
  return (
    <Container>
      <MainSearchText>성장기회의 평등을 추구합니다.</MainSearchText>
      <MainSearchInput>
        <SearchInput placeholder="배우고 싶은 지식을 입력해보세요" />
        <i className="fas fa-search" />
      </MainSearchInput>
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
  font-weight: 300;
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
