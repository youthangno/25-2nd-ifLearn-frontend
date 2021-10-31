import React from 'react';
import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import Request from './Request';

const mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2';

function Video({ src }) {
  const videoRef = useRef();
  let i = 0;
  useEffect(() => {
    if (videoRef.current && MediaSource.isTypeSupported(mimeCodec)) {
      const mediaSource = new MediaSource();
      const url = window.URL.createObjectURL(mediaSource);
      videoRef.current.src = url;

      mediaSource.addEventListener('sourceopen', sourceOpen);

      function sourceOpen() {
        const sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);
        fetch(src, {
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
            Request(src, sourceBuffer, i++);
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
    </div>
  );
}
const VideoMain = styled.video`
  background-color: #171717;
  height: 90vh;
  width: 100%;
`;

export default Video;
