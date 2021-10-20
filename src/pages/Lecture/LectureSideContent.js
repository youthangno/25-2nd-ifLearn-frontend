import React from 'react';
import styled from 'styled-components';
import SideBarHeader from './SideBar/SideBarHeader';
import SideBarContent from './SideBar/SideBarContent';

function LectureSideContent({ isOpened, onClick }) {
  return (
    <SideBar isOpened={isOpened}>
      <SideBarHeader onClick={onClick} />
      <SideBarContent />
    </SideBar>
  );
}

const SideBar = styled.aside`
  width: ${({ isOpened }) => (isOpened ? '480px' : '0')};
  opacity: ${({ isOpened }) => (isOpened ? '1' : '0')};
  background: #fff;
  transition: width 0.2s ease, opacity 0.2s ease;
`;

export default LectureSideContent;
