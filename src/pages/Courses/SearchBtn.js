import React, { useState } from 'react';
import styled from 'styled-components';

function SearchBtn({ searchSkill, handleInputSearchResult }) {
  const [inputData, setInputData] = useState('');

  const handleChange = e => {
    setInputData(e.target.value);
  };

  const handleEnter = e => {
    if (e.key === 'Enter') {
      handleInputSearchResult(inputData);
    }
  };

  return (
    <Search>
      <Input
        placeholder={searchSkill ? '강의 검색하기' : '기술검색'}
        type="text"
        onChange={handleChange}
        value={inputData}
        onKeyPress={handleEnter}
        searchSkill={searchSkill}
      />
      <Button sign onClick={() => handleInputSearchResult(inputData)}>
        {searchSkill ? '검색' : 'X'}
      </Button>
    </Search>
  );
}

const Search = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Input = styled.input`
  padding: 10px;
  padding-right: ${props => (props.searchSkill ? '120px' : '5px')};
  border: none;
  background-color: #f6f6f6;
`;

const Button = styled.button`
  display: inline-flex;
  padding: 10px;
  outline: none;
  border: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
  font-size: 1rem;
  background: #1dc078;
`;

export default SearchBtn;
