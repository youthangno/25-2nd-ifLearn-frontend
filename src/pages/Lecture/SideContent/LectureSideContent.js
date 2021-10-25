import React from 'react';
import styled, { css } from 'styled-components';

import SideBarHeader from './SideBarHeader';
import SideBarContent from './SideBarContent';

function LectureSideContent({ isOpened, onClick, data }) {
  return (
    <SideBar isOpened={isOpened}>
      <SideBarHeader onClick={onClick} data={data} />
      <SideBarContent section_list={data.section_list} />
    </SideBar>
  );
}

const SideBar = styled.aside`
  width: ${({ isOpened }) => (isOpened ? '480px' : '0')};
  opacity: ${({ isOpened }) => (isOpened ? '1' : '0')};
  background: #fff;
  transition: width 0.2s ease, opacity 0.2s ease;

  @media ${({ theme }) => theme.device.pc} {
    width: 100%;
    height: 75vh;
    opacity: unset;
    position: fixed;
    bottom: ${({ isOpened }) => (isOpened ? '70px' : '0')};
    z-index: 6;
    overflow: auto;
    transform: ${({ isOpened }) =>
      isOpened ? css`translateY(0)` : css`translateY(100%)`};
    transition: transform 0.2s ease;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
  }
`;

export default LectureSideContent;
