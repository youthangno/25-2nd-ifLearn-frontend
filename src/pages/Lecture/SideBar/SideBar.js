import React from 'react';
import useToggle from '../../../hooks/useToggle';
import styled from 'styled-components';
import { lighten } from 'polished';

import LectureSideContent from '../SideContent/LectureSideContent';

function SideBar({ data }) {
  const [isOpened, setIsOpened] = useToggle();

  return (
    <>
      <LectureSideContent
        isOpened={isOpened}
        onClick={setIsOpened}
        data={data}
      />
      <AsideBar>
        <AsideMenu>
          <i className="fas fa-bars" onClick={setIsOpened} />
        </AsideMenu>
      </AsideBar>
    </>
  );
}

const AsideBar = styled.div`
  display: flex;
  justify-content: center;
  z-index: 1;
  height: 100%;
  min-height: 100vh;
  width: 68px;
  padding-top: 10px;
  background-color: #f8f9fa;
  box-shadow: 0 0 1px 0 rgb(0 0 0 / 56%);

  @media ${({ theme }) => theme.device.pc} {
    display: none !important;
  }
`;

const AsideMenu = styled.span`
  display: flex;
  justify-content: center;
  height: 48px;
  width: 60px;
  padding-top: 10px 10px 0 10px;
  align-items: center;
  font-size: 22px;
  color: #868e96;
  cursor: pointer;
  transition: back-ground-color #e9ecef 0.15s linear;

  &:hover,
  &:active {
    background: ${lighten(0.1, '#f7f7f7')};
  }
`;

export default SideBar;
