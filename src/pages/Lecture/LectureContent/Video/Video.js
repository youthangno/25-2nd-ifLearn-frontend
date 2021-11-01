import React from 'react';
import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import Request from './Request';

const mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2';
function Video() {
  const videoRef = useRef();

  function setTime() {
    return (videoRef.current.currentTime = '8.0');
  }

  let i = 0;
  useEffect(() => {
    if (videoRef.current && MediaSource.isTypeSupported(mimeCodec)) {
      const mediaSource = new MediaSource();
      const url = window.URL.createObjectURL(mediaSource);
      videoRef.current.src = url;

      mediaSource.addEventListener('sourceopen', sourceOpen);

      function sourceOpen() {
        const sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);
        fetch('http://10.58.4.154:8000/course/sample_dance.mp4', {
          headers: {
            Range: 'bytes=0-99999',
          },
        })
          .then(res => res.arrayBuffer())
          .then(res => sourceBuffer.appendBuffer(res));

        sourceBuffer.addEventListener('updateend', requestMore);

        function requestMore() {
          if (mediaSource.readyState === 'closed') return;
          if (sourceBuffer.updating) return;
          if (i < 100) {
            Request(sourceBuffer, i++);
          } else {
            mediaSource.endOfStream();
          }
        }
      }
    }
  });

  return (
    <div>
      <VideoMain ref={videoRef} autoPlay muted controls />
      <Box>
        <CurrentTime onClick={setTime}>00:08</CurrentTime>{' '}
        <CurrentTime>(윙크 하는 법)</CurrentTime>
      </Box>
    </div>
  );
}
const VideoMain = styled.video`
  background-color: #171717;
  height: 90vh;
  width: 100%;
`;

const Box = styled.div`
  width: 100%;
  height: 50px;
  padding: 20px 32px;
`;

const CurrentTime = styled.span`
  color: blue;
`;

export default Video;
