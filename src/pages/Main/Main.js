import React from 'react';
import styled from 'styled-components';
import MainSearch from './MainSearch';
import MainLecture from './MainLecture';
import { useState, useEffect } from 'react';

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
        {images &&
          images.map(image => {
            return <img src={image.image_url} alt="mainImg" key={image.id} />;
          })}
      </ImgSection>
      <ImgNav>
        <ImgNavControl>
          <div>1/6</div>
          <div>
            <i className="fas fa-chevron-left" />
            <i className="fas fa-pause" />
            <i className="fas fa-chevron-right" />
          </div>
        </ImgNavControl>
        <ImgNavToggleBtn>
          <i className="fas fa-chevron-down" />
        </ImgNavToggleBtn>
      </ImgNav>

      <MainSearch />

      <MainLectureBox>
        <MainLectureContainer>
          <LectureTitleBox>
            <LectureTitle>여기서 시작해 보세요!</LectureTitle>
            <LectureSubTitle>이미 검증된 쉽고 친절한 입문강의</LectureSubTitle>
          </LectureTitleBox>
          <MainLectureProduct>
            {data.map(item => {
              return <MainLecture key={item.id} lecture={item} />;
            })}
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
            {data.map(item => {
              return <MainLecture key={item.id} lecture={item} />;
            })}
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
            {data &&
              data.map(item => {
                return <MainLecture key={item.id} lecture={item} />;
              })}
          </MainLectureProduct>
        </MainLectureContainer>
      </MainLectureBox>
    </Section>
  );
}

const Section = styled.section`
  height: 100%;
`;

const ImgSection = styled.div`
  float: left;
  margin: 0 auto;
  height: 100%;
  img {
    width: 100%;
  }
`;

const ImgNav = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px 100px;
  margin-bottom: 55px;
`;

const ImgNavControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 135px;
  padding: 10px 15px;
  background-color: #7f7f7f;
  color: #fff;
  border-radius: 30px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
  .fas.fa-pause {
    margin: 0px 5px;
  }
`;

const ImgNavToggleBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.2);
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

const MainLectureProduct = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
