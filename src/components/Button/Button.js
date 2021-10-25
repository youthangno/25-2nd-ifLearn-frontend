import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';

const Button = ({ icon, text }) => {
  return (
    <ButtonInfo>
      <Icon>
        <i className={`fas ${icon}`} />
      </Icon>
      <Text>{text}</Text>
    </ButtonInfo>
  );
};

const ButtonInfo = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  border-radius: 6px;
  margin-left: 32px;
  cursor: pointer;

  @media ${({ theme }) => theme.device.tablet} {
    margin-left: 0;
  }

  ${({ finish }) => finish === 1} {
    pointer-events: none;
  }

  &:hover,
  &:active {
    background: ${lighten(0.1, '#ddd')};
  }
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  margin-bottom: 8px;
`;

const Text = styled.div`
  color: #495057;
  font-size: 12px;
`;

export default Button;
