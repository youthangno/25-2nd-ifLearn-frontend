import React from 'react';
import styled from 'styled-components';

function Video() {
  return (
    <VideoContent>
      <VideoMain controls>
        <source src="../../data/savageLove.mp4" type="video/mp4" />
      </VideoMain>
    </VideoContent>
  );
}

const VideoContent = styled.div`
  background-color: #171717;
`;

const VideoMain = styled.video`
  height: 70vh;
  width: 100%;
`;

export default Video;
