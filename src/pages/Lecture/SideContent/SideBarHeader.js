import React from 'react';
import styled from 'styled-components';

import InfoContent from './InfoContent';
import Progress from './Progress';

function SideBarHeader({ onClick, data }) {
  return (
    <>
      <ToggleBtn />
      <Wrapper>
        <Header>
          <Title>목차</Title>
          <Button onClick={onClick}>
            <i className="fas fa-times" />
          </Button>
        </Header>
        <InfoContent course_name={data.course_name}>
          <Progress data={data} />
        </InfoContent>
      </Wrapper>
    </>
  );
}

const ToggleBtn = styled.div`
  width: 64px;
  height: 6px;
  border-radius: 4px;
  background: #adb5bd;
  flex-shrink: 0;
  margin: 12px auto;
`;

const Wrapper = styled.div`
  @media ${({ theme }) => theme.device.pc} {
    display: none !important;
  }
`;

const Header = styled.div`
  width: 480px;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.span`
  font-size: 22px;
  font-weight: 700;
  color: #1b1c1d;
`;

const Button = styled.span`
  font-size: 24px;
  cursor: pointer;
`;

export default SideBarHeader;
