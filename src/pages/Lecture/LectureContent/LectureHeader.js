import React from 'react';
import styled from 'styled-components';

import { lighten } from 'polished';

function LectureHeader({ title }) {
  console.log('title', title);
  return (
    <Container>
      <Wrapper>
        <ArrowButton>
          <i className="fas fa-external-link-alt" />
          강의 대시보드
        </ArrowButton>
        <Title>{title}</Title>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  background: #171717;
  color: #fff;

  @media ${({ theme }) => theme.device.pc} {
    display: none !important;
  }
`;

const Title = styled.span`
  padding-left: 34px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ArrowButton = styled.a`
  height: 100%;
  padding: 16px 16px 16px 18px;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  background: #212529;

  &:hover,
  &:active {
    background: ${lighten(0.1, '#212529')};
  }
`;

export default LectureHeader;
