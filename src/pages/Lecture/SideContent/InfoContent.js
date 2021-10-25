import React from 'react';
import styled from 'styled-components';

const InfoContent = ({ children, course_name }) => {
  return (
    <Wrapper>
      <Title>{course_name}</Title>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 20px 22px;
  color: #212529;

  @media ${({ theme }) => theme.device.pc} {
    padding: 20px 32px;
    margin-bottom: 1px;
    color: #495057;
    font-size: 13px;
    line-height: 1.5;
  }
`;

const Title = styled.div`
  margin-bottom: 12px;
  line-height: 1.5;
  color: #333;
  font-size: 18px;
  font-weight: 500;
`;

export default InfoContent;
