const Request = async (sourceBuffer, i = 0) => {
  const chunkCount = 100;
  const start = 100000;
  const length = 41927339;
  const segmentSize = Math.ceil(length / chunkCount);

  const range = `bytes=${start + segmentSize * i}-${
    start + segmentSize * (i + 1) - 1
  }`;

  const res = await fetch('http://10.58.4.154:8000/course/sample_dance.mp4', {
    headers: {
      Range: range,
    },
  });
  const chunk = await res.arrayBuffer();

  // chunkList.push(`${chunk.byteLength * i} - ${chunk.byteLength * (i + 1) - 1}`);
  sourceBuffer.appendBuffer(new Uint8Array(chunk));

  return;
};

export default Request;
