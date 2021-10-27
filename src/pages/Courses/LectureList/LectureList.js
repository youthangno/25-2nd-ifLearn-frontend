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
      <img alt="" src={mouseOver ? null : thumbnail} />
      <p className="title">{mouseOver ? title : title}</p>
      <p>{mouseOver ? null : author}</p>
      <p>{mouseOver ? null : star}</p>
      <P>{mouseOver ? null : '₩' + price}</P>
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
