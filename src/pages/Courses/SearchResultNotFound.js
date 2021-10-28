import React from 'react';
import styled from 'styled-components';

function SearchResultNotFound() {
  return (
    <div>
      <UndefinedList big>🙈 검색 결과가 없어요! 🙊</UndefinedList>
      <UndefinedList>
        필터를 다시 적용해보시거나 카테고리를 이동해보세요
      </UndefinedList>
    </div>
  );
}

const UndefinedList = styled.div`
  position: sticky;
  padding: 15px;
  text-align: center;
  font-size: ${props => (props.big ? '50px' : '25px')};
  font-weight: ${props => (props.big ? '700' : '400')};
  color: #787878;
`;

export default SearchResultNotFound;
