import React, { useState } from 'react';
import styled from 'styled-components';
import LectureSideContent from './LectureSideContent';
import theme from '../../styles/theme';

function LectureSideBar() {
  const [isOpened, setOpen] = useState(false);

  const handleToggle = () => setOpen(prev => !prev);

  return (
    <>
      <LectureSideContent isOpened={isOpened} onClick={handleToggle} />
      <AsideBar>
        <AsideMenu>
          <i className="fas fa-bars" onClick={handleToggle} />
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
  width: 68px;
  min-height: 100vh;
  padding-top: 10px;
  background-color: #f8f9fa;

  @media ${({ labtop }) => theme.device.labtop} {
    display: none !important;
  }
`;

const AsideMenu = styled.span`
  display: flex;
  justify-content: center;
  height: 48px;
  width: 48px;
  padding-top: 10px 10px 0 10px;
  align-items: center;
  font-size: 22px;
  color: #868e96;
  cursor: pointer;
  transition: back-ground-color #e9ecef 0.15s linear;
`;

export default LectureSideBar;
