import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';

export default function MainVideo({ lecture }) {
  const history = useHistory();
  const goToCourse = () => {
    history.push(`/course/${lecture.id}`);
  };
  return (
    <Container onClick={goToCourse}>
      <LectureImg src={lecture.thumbnail} alt="img" />
      <LectureTitle>{lecture.title}</LectureTitle>
      <LectureAuthor>{lecture.author}</LectureAuthor>
      <LectureStars>⭐️⭐️⭐️⭐️⭐️</LectureStars>
      <LecturePrice>{parseInt(lecture.price).toLocaleString()}</LecturePrice>
    </Container>
  );
}

const Container = styled.section`
  cursor: pointer;
  border-radius: 5px;
  &:first-child {
    margin-right: 8px;
  }
  &:nth-child(3) {
    margin: 0px 8px;
  }
  &:last-child {
    margin-left: 8px;
  }
`;
const LectureImg = styled.img`
  width: 100%;
  border-radius: 3px;
  margin-bottom: 5px;
`;

const LectureTitle = styled.h1`
  margin: 5px 0px;
  font-size: 17px;
  line-height: 20px;
`;

const LectureAuthor = styled.h3`
  font-size: 15px;
  color: grey;
`;

const LectureStars = styled.div`
  color: red;
  margin: 7px 0px;
`;

const LecturePrice = styled.div`
  color: blue;
`;
