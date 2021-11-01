import React from 'react';
import Nav from '../../components/Nav/Nav';
import MainSearch from './MainSearch';
import MainLecture from './MainLecture';
import MainSlider from './MainSlider';
import styled from 'styled-components';
import { KMC_API, KJH_API } from '../../config';

import { useState, useEffect } from 'react';
import Slider from 'react-slick';

export default function Main() {
  const [data, setData] = useState([]);
  const [images, setImage] = useState([]);

  // useEffect(() => {
  //   fetch(`${KMC_API}/carousel/`)
  //     .then(res => res.json())
  //     .then(images => {
  //       setImage(images.result);
  //     });
  // }, []);

  useEffect(() => {
    fetch(`${KJH_API}/courses/all`)
      .then(res => res.json())
      .then(data => {
        setData(data.result);
      });
  }, []);

  return (
    <>
      <Nav />
      <Section>
        <ImgSection>
          <MainSlider images={images} />
        </ImgSection>

        <ImgNav>
          <ControlBox>
            <NumberBox>1/11</NumberBox>
            <IconBox>
              <i className="fas fa-chevron-left" />
              <i className="fas fa-chevron-right" />
            </IconBox>
          </ControlBox>

          <ControlBoxes>
            <LinkBox>#위코드 25기</LinkBox>
            <LinkBox forMagin>#2달동안</LinkBox>
            <LinkBox>#너무</LinkBox>
            <LinkBox forMagin>#고생하셨습니다.</LinkBox>
            <LinkBox forBorderColor>#앞으로도</LinkBox>
            <LinkBox forMagin>#힘내서</LinkBox>
            <LinkBox>#잘해봐요 우리</LinkBox>
          </ControlBoxes>

          <div>
            <Btn>
              <i className="fas fa-chevron-down" />
            </Btn>
          </div>
        </ImgNav>

        <MainSearch />
        <MainLectureBox>
          <MainLectureContainer>
            <LectureTitleBox>
              <LectureTitle>여기서 시작해 보세요!</LectureTitle>
              <LectureSubTitle>
                이미 검증된 쉽고 친절한 입문강의
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
    </>
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
  margin-top: 65px;
  height: 100%;
`;

const ImgSection = styled.div`
  display: flex;
  width: 100%;
`;

const ImgNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px 150px;
  margin-bottom: 55px;
`;

const ControlBoxes = styled.div`
  display: flex;
  overflow: hidden;
`;
const LinkBox = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.3);
  padding: 10px 20px;
  border-radius: 25px;
  margin: ${({ forMagin }) => (forMagin ? '0px 10px' : 'null')};
  &:hover {
    border: 2px solid green;
  }
`;

const Btn = styled.div`
  .fas {
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    &:hover {
      border: 1px solid green;
    }
  }
`;

const ControlBox = styled.div`
  border: 1px solid #7f7f7f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-radius: 25px;
  background-color: #7f7f7f;
  color: #fff;
`;
const NumberBox = styled.div`
  margin-right: 20px;
`;

const IconBox = styled.div`
  margin-left: 20px;
  .fas.fa-chevron-left {
    margin-right: 10px;
  }
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
