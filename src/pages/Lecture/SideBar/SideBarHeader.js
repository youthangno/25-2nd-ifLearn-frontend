import React from 'react';
import styled from 'styled-components';

function SideBarHeader({ onClick }) {
  return (
    <Header>
      <Title>목차</Title>
      <Button onClick={onClick}>
        <i className="fas fa-times" />
      </Button>
    </Header>
  );
}

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
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
