import React, { useState } from 'react';
import { useFetch } from '../../../hooks/useFetch';
import { useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import LectureHeader from './LectureHeader';
import LectureFooter from './LectureFooter';
import SideBar from '../SideBar/SideBar';
import Video from './Video';
import BottomBar from '../BottomBar/BottomBar';
import MobileInfo from './Mobile/MobileInfo';

function Lecture() {
  const match = useRouteMatch();

  const data = useFetch(
    'http://6d77-211-106-114-186.ngrok.io/course/video/500'
  );

  const streamingData = useFetch(
    `http://6d77-211-106-114-186.ngrok.io/course/video/detail/${match.params.id}`
  );

  console.log('match.params', match.params.id);

  console.log(streamingData);

  if (!data || !streamingData) return null;

  return (
    <>
      <Container>
        <MainContent>
          <LectureHeader title={streamingData.lecture_name} />
          <Video src={streamingData.lecture_video_url} />
          <LectureFooter data={streamingData} />
          <MobileInfo data={data} streamingData={streamingData} />
        </MainContent>
        <SideBar data={data} />
      </Container>
      <BottomBar data={data} />
    </>
  );
}
const Container = styled.div`
  display: flex;
`;

const MainContent = styled.div`
  width: 100%;
`;

export default Lecture;
