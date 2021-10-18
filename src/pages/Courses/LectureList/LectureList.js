import React from 'react';
import { useState, useEffect } from 'react';

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

  return (
    <div
      className={mouseOver ? 'hover' : 'list'}
      onMouseEnter={handleHoverList}
      onMouseLeave={handleHoverList}
    >
      <img alt="강의리스트" src={mouseOver ? null : thumbnail} />
      <p className="title">{mouseOver ? title : title}</p>
      <p>{mouseOver ? null : author}</p>
      <p>{mouseOver ? null : star}</p>
      <p>{mouseOver ? null : price}</p>
      <p>{mouseOver && summary}</p>
      <p>{mouseOver && level}</p>
      <p>{mouseOver && category}</p>
    </div>
  );
}

export default LectureList;
