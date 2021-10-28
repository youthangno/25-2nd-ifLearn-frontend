import React from 'react';
import { useHistory } from 'react-router';
import { useState } from 'react';
import styled from 'styled-components';

function LectureList({
  id,
  title,
  price,
  author,
  popular,
  thumbnail,
  summary,
  level,
  category,
  star,
}) {
  const [mouseOver, setMouseOver] = useState(false);
  const handleHoverList = () => {
    setMouseOver(mouseOver => !mouseOver);
  };

  const history = useHistory();

  const gotoDetail = () => {
    history.push(`/course/${id}`);
  };

  return (
    <div
      onClick={gotoDetail}
      className={mouseOver ? 'hover' : 'list'}
      onMouseEnter={handleHoverList}
      onMouseLeave={handleHoverList}
    >
      <img alt="" src={!mouseOver && thumbnail} />
      <p className="title">{title}</p>
      <p>{!mouseOver && author}</p>
      <p>{!mouseOver && star}</p>
      <P>{!mouseOver && '₩' + parseInt(price)}</P>
      <p>{mouseOver && summary}</p>
      <P>{mouseOver && '📶' + level}</P>
      <p>{mouseOver && category}</p>
    </div>
  );
}

const P = styled.p`
  color: #3298dc;
  font-weight: 900;
`;
export default LectureList;
