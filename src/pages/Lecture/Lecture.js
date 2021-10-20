import React from 'react';
import styled from 'styled-components';
import LectureHeader from './LectureHeader';
import Video from './Video';
import LectureFooter from './LectureFooter';
// import LectureSideBar from './LectureSideBar';

function Lecture() {
  return (
    <Container>
      <MainContent>
        <LectureHeader title="JSX 기본 문법 알아보기 (ii)" />
        <Video />
        <LectureFooter />
      </MainContent>
      {/* <LectureSideBar /> */}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;

const MainContent = styled.div`
  width: 100%;
`;

export default Lecture;
