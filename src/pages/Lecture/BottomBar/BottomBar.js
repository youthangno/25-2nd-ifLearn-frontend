import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';
import useToggle from '../../../hooks/useToggle';
import LectureSideContent from '../SideContent/LectureSideContent';

const BottomBar = ({ data }) => {
  const [isOpened, setIsOpened] = useToggle();

  return (
    <Wrap>
      <LectureSideContent isOpened={isOpened} data={data} />
      <Bar>
        <Button onClick={setIsOpened}>
          <Icon>
            <i className="fas fa-bars" />
          </Icon>
          <Text>목차</Text>
        </Button>
      </Bar>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: none;

  @media ${({ theme }) => theme.device.pc} {
    display: contents;
  }
`;

const Bar = styled.footer`
  display: none;

  @media ${({ theme }) => theme.device.pc} {
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 0;
    height: 70px;
    width: 100%;
    padding: 0 32px;
    border-top: 1px solid #dee2e6;
    background-color: #ffffff;
    cursor: pointer;
  }
`;

const Button = styled.div`
  display: flex;
  flex-direction: column;
  width: 60px;
  margin: auto;
  color: #868e96;

  &:hover,
  &:active {
    background: ${lighten(0.1, '#ddd')};
  }
`;

const Icon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
`;

const Text = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 6px;
  font-size: 11px;
`;

export default BottomBar;
