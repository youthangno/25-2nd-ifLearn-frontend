import React from 'react';
import styled from 'styled-components';
import MainSearch from './MainSearch';
import MainLecture from './MainLecture';
import MainSlider from './MainSlider';
import { useState, useEffect } from 'react';
import Slider from 'react-slick';

export default function Main() {
  const [data, setData] = useState([]);
  const [images, setImage] = useState([]);

  useEffect(() => {
    fetch('https://6d77-211-106-114-186.ngrok.io/carousel/')
      .then(res => res.json())
      .then(images => {
        setImage(images.result);
      });
  }, []);

  useEffect(() => {
    fetch('https://6d77-211-106-114-186.ngrok.io/course/')
      .then(res => res.json())
      .then(data => {
        setData(data.result);
      });
  }, []);

  return (
    <Section>
      <ImgSection>
        <MainSlider images={images} />
      </ImgSection>
      <ImgNav />

      <MainSearch />

      <MainLectureBox>
        <MainLectureContainer>
          <LectureTitleBox>
            <LectureTitle>여기서 시작해 보세요!</LectureTitle>
            <LectureSubTitle>이미 검증된 쉽고 친절한 입문강의</LectureSubTitle>
          </LectureTitleBox>
          <MainLectureProduct>
            <StyledSlider {...settings}>
              {data.map(item => {
                return <MainLecture key={item.id} lecture={item} />;
              })}
            </StyledSlider>
          </MainLectureProduct>
        </MainLectureContainer>
      </MainLectureBox>

      <MainLectureBox>
        <MainLectureContainer>
          <LectureTitleBox>
            <LectureTitle>읽어보기</LectureTitle>
            <LectureSubTitle>이미 검증된 쉽고 재미있는 뉴스~</LectureSubTitle>
          </LectureTitleBox>
          <MainLectureProduct>
            <StyledSlider {...settings}>
              {data.map(item => {
                return <MainLecture key={item.id} lecture={item} />;
              })}
            </StyledSlider>
          </MainLectureProduct>
        </MainLectureContainer>
      </MainLectureBox>

      <MainLectureBox>
        <MainLectureContainer>
          <LectureTitleBox>
            <LectureTitle>기본부터 실무까지 제시해주는 로드맵</LectureTitle>
            <LectureSubTitle>
              아무것도 몰라도 따라오다 보면 전문가가 될 수 있어요!
            </LectureSubTitle>
          </LectureTitleBox>
          <MainLectureProduct>
            <StyledSlider {...settings}>
              {data.map(item => {
                return <MainLecture key={item.id} lecture={item} />;
              })}
            </StyledSlider>
          </MainLectureProduct>
        </MainLectureContainer>
      </MainLectureBox>
    </Section>
  );
}

const settings = {
  infinite: false,
  speed: 500,
  slidesToScroll: 5,
  slidesToShow: 5,
  arrows: true,
};

const MainLectureProduct = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100%;

  .slick-prev:before {
    position: relative;
    left: 5px;
    content: '<';
    color: #000;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    font-size: 25px;
    box-shadow: 8px 3px 12px grey;
    padding: 10px 15px;
  }

  .slick-next:before {
    position: relative;
    right: 25px;
    content: '>';
    color: #000;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    font-size: 25px;
    box-shadow: 8px 3px 12px grey;
    padding: 10px 15px;
  }
`;

const StyledSlider = styled(Slider)`
  width: 100%;
`;

const Section = styled.section`
  height: 100%;
`;

const ImgSection = styled.div`
  display: flex;
  width: 100%;
`;

const ImgNav = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px 100px;
  margin-bottom: 55px;
`;

const MainLectureBox = styled.article`
  margin-top: 135px;
`;

const MainLectureContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
`;

const LectureTitleBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const LectureTitle = styled.h1`
  font-size: 25px;
  font-weight: bold;
  span {
    font-size: 12px;
    margin: 0px 8px;
  }
`;

const LectureSubTitle = styled.h3`
  font-size: 15px;
  color: grey;
  margin: 15px 10px 25px 0px;
`;
