import React from 'react';
import styled from 'styled-components';
import Unit from './Unit';

const ContentBox = ({ list }) => {
  return (
    <>
      <ContentTitle>{list.section_name}</ContentTitle>

      {list.lecture_list.map(lecture => (
        <Unit lecture={lecture} key={lecture.lecture_id} />
      ))}
    </>
  );
};

const ContentTitle = styled.div`
  height: 50px;
  padding: 12px 20px;
  background-color: #f1f3f5;
  line-height: 1.5;
  color: #212529;
  font-size: 16px;
  font-weight: 500;
  border-top: 1px solid #dee2e6;
  border-bottom: 1px solid #dee2e6;

  @media ${({ theme }) => theme.device.pc} {
    padding: 16px 32px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    padding: 16px 20px;
  }
`;

export default ContentBox;
