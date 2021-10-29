import React, { useEffect, useState } from 'react';
import Box from './Box';
import Nav from '../../components/Nav/Nav';
import styled from 'styled-components';
import { useRouteMatch } from 'react-router-dom';

export default function Course() {
  const [courseData, setCourseDats] = useState([]);
  const {
    name,
    summary,
    subcategory,
    category,
    thumbnail,
    detail,
    price,
    stars,
    people,
    level,
  } = courseData;
  const firstBox = courseData.course_info?.filter(el => el.info_type_id === 1);
  const secondBox = courseData.course_info?.filter(el => el.info_type_id === 2);
  const thirdBox = courseData.course_info?.filter(el => el.info_type_id === 3);
  const match = useRouteMatch();

  useEffect(() => {
    fetch(`http://10.58.5.115:8000/courses/course/${id}`)
      .then(res => res.json())
      .then(res => setCourseDats(res.result));
  }, [match]);

  return (
    <div>
      <Nav />
      <WrapContatiner>
        <section>
          <Background>
            <article>
              <Video src={thumbnail} />
              <Header>
                <section>
                  <LabelBest>BEST</LabelBest>
                  <span className="categoty">{category}</span>
                  <span>＞</span>
                  <span className="subCategoty">{subcategory}</span>
                </section>
                <CourseName>{name}</CourseName>
                <CourseInfo>
                  <span>
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </span>
                  <span>
                    <strong> ({Math.floor(stars * 10) / 10})</strong>
                  </span>
                  <span>{people * 43}개의 수강평</span>
                  <span>∙</span>
                  <span>
                    <strong> {people * 176}명</strong>의 수강생
                  </span>
                </CourseInfo>
                <CreatorInfo>
                  <span>
                    <i className="fas fa-user" />
                  </span>
                  <span>그랩</span>
                  <span>
                    <i className="fas fa-crown" />
                  </span>
                </CreatorInfo>
                <Tags>
                  <span>
                    <i className="fas fa-hashtag" />
                  </span>
                  <strong>JavaScript</strong>
                  <strong>React</strong>
                </Tags>
              </Header>
            </article>
          </Background>
        </section>
        <section>
          <MenuContainer>
            <span>강의 소개</span>
            <span>커리큘럼</span>
            <span>수강 후기</span>
            <span>수강전 문의</span>
            <span>새소식</span>
          </MenuContainer>
        </section>
        <ContentWrapper>
          <ContentDetail>
            <Summary>
              <span>{level}</span>자를 위해 준비한 [<span>{subcategory}</span>]
              강의입니다.
            </Summary>
            <DetailedSummary>{summary}</DetailedSummary>
            <Box
              imoticon="✍🏻"
              upTitle="이런걸"
              downTitle="배워요!"
              listArr={firstBox}
            />
            <img src={detail} alt="coursePhoto" />
            <Line />
            <Tips>
              지식공유자가 알려주는 <br />
              <strong>강의수강 꿀팁!</strong>
            </Tips>
            <Box
              imoticon="🎓"
              upTitle="이런 분들께"
              downTitle="추천드려요!"
              listArr={secondBox}
            />
            <Box
              imoticon="📚"
              upTitle="선수 지식,"
              downTitle="필요한가요?"
              listArr={thirdBox}
            />
          </ContentDetail>
          <PriceDetail>
            <div>
              <PriceHeader>깜짝 할인중!</PriceHeader>
              <PriceDetailWrapper>
                <Price>월 {parseInt(price).toLocaleString()}</Price>
                <ApplyButton>수강 신청</ApplyButton>
                <FunctionWrapper>
                  <span>
                    <i className="fas fa-folder" /> 폴더에 추가
                  </span>
                  <span>|</span>
                  <span>
                    <i className="fas fa-heart" /> {people * 143}
                  </span>
                  <span>|</span>
                  <span>
                    <i className="fas fa-share-alt" /> 공유
                  </span>
                </FunctionWrapper>
              </PriceDetailWrapper>
            </div>
          </PriceDetail>
        </ContentWrapper>
      </WrapContatiner>
    </div>
  );
}

const WrapContatiner = styled.section`
  margin-top: 69px;
`;

const Background = styled.div`
  padding: 40px 0;
  background-color: rgb(9, 34, 50);

  article {
    margin: 0 auto;
    width: max-content;
  }
`;

const LabelBest = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  padding: 6px;
  font-size: 12px;
  font-weight: 800;
  background-color: rgb(45, 119, 246);
  color: white;
`;

const Video = styled.img`
  display: inline-flex;
  justify-content: center;
  margin-left: 30px;
  width: 440px;
  height: 286px;
  border-radius: 8px;
`;

const Header = styled.div`
  position: relative;
  top: -60px;
  display: inline-block;
  width: max-content;
  background-color: inherit;
  padding: 0 42px 0 24px;
  color: white;

  section {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;

    span {
      padding-right: 5px;
      font-size: 14px;
    }
  }
`;

const CourseName = styled.div`
  margin-bottom: 40px;
  font-size: 26px;
  font-weight: 700;
`;

const CourseInfo = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  font-size: 14px;

  strong {
    font-weight: 800;
  }

  span {
    margin-right: 5px;
  }

  i {
    color: rgb(247, 201, 70);
  }
`;

const CreatorInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 800;

  span {
    margin-right: 2px;
  }

  img {
    width: 20px;
  }
`;

const Tags = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-right: 10px;
  }

  strong {
    margin-right: 4px;
    padding: 4px 12px;
    border-radius: 5px;
    background-color: rgb(33, 62, 79);
    font-size: 12px;
    line-height: 1.5;
  }
`;

const MenuContainer = styled.div`
  margin: 0 auto;
  padding: 0 54px;
  max-width: 1200px;
  border-bottom: 1px solid #f1f3f5;

  span {
    display: inline-block;
    padding: 20px;
    line-height: 1.43;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;

    :nth-child(1) {
      border-bottom: 3px solid #00c471;
    }
  }
`;

const ContentWrapper = styled.section`
  display: flex;
`;

const ContentDetail = styled.div`
  padding: 48px 52px 0 34px;
  margin: 0 auto;
  max-width: 50%;
`;

const Summary = styled.div`
  margin-bottom: 16px;
  font-size: 22px;
  line-height: 1.45;
  color: #343a40;
`;

const DetailedSummary = styled.div`
  margin-bottom: 8px;
  line-height: 1.69;
  font-size: 16px;
  color: #495057;
`;

const Tips = styled.div`
  margin-top: 42px;
  margin-bottom: 24px;
  line-height: 1.45;
  font-size: 22px;
  color: #343a40;

  strong {
    font-weight: 800;
  }
`;

const PriceDetail = styled.section`
  flex-basis: 22%;
  padding: 0 8px;
  margin: 0 auto;
  max-width: 33%;

  div {
    position: sticky;
    top: 75px;
  }
`;

const PriceHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 0;
  line-height: 1.5;
  font-size: 16px;
  font-weight: 700;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: #e5503c;
  color: white;
`;

const PriceDetailWrapper = styled.div`
  border: 1px solid #ededed;
`;

const Price = styled.div`
  padding: 20px;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.42;
`;

const ApplyButton = styled.div`
  margin: 10px;
  padding: 15px;
  text-align: center;
  border-radius: 10px;
  font-weight: 600;
  background-color: #00c471;
  color: white;
`;

const FunctionWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  padding: 10px;
  font-size: 14px;

  span {
    margin-right: 10px;
    cursor: pointer;
  }

  i {
    margin-right: 5px;
    color: #00c471;
  }
`;

const Line = styled.div`
  height: 1px;
  border-bottom: 1px solid #ededed;
`;
