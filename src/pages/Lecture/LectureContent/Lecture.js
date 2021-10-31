import React, { useState } from 'react';
import { useFetch } from '../../../hooks/useFetch';
import { useRouteMatch } from 'react-router-dom';
import { KJH_API } from '../../../config';
import styled from 'styled-components';
import LectureHeader from './LectureHeader';
import LectureFooter from './LectureFooter';
import SideBar from '../SideBar/SideBar';
import Video from '././Video/Video';
import BottomBar from '../BottomBar/BottomBar';
import MobileInfo from './Mobile/MobileInfo';

function Lecture() {
  const match = useRouteMatch();

  const data = useFetch(`${KJH_API}/courses/video/1`);

  const streamingData = useFetch(
    `${KJH_API}/courses/video/detail/${match.params.id}`
  );
  console.log('data', data);
  if (!data || !streamingData) return null;

  return (
    <>
      <Container>
        <MainContent>
          <LectureHeader title={streamingData.lecture_name} />
          <Video src={streamingData.lecture_video_url} />
          <LectureFooter streamingData={streamingData} />
          <MobileInfo data={data} streamingData={streamingData} />
        </MainContent>
        <SideBar data={data} />
      </Container>
      <BottomBar data={data} />
    </>
  );
}
const Container = styled.div`
  height: 100vh;
  display: flex;
`;

const MainContent = styled.div`
  width: 100%;
  height: 100vh;
`;

export default Lecture;
