import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchBtn from './SearchBtn';
import LectureList from './LectureList/LectureList';
import { API, CONFIGFILTER } from '../../config';
import SearchResultNotFound from './SearchResultNotFound';

function Courses() {
  const [lectureList, setLectureList] = useState([]);
  const [skillOpen, setSkillOpen] = useState(false);
  const [optionOpen, setOptionOpen] = useState('select');

  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    handleInputSearchResult();
  }, []);

  const getList = () => {
    fetch(`${API}/`)
      // fetch('http://localhost:3000/data/data.json')
      .then(res => res.json())
      .then(data => setLectureList(data.result));
  };

  const toggleLecture = () => {
    setSkillOpen(skillOpen => !skillOpen);
  };

  const handlePrevent = e => {
    e.stopPropagation();
  };

  const selectOption = e => {
    setOptionOpen(e.target.value);
  };

  //검색창 필터링 버튼
  const handleInputSearchResult = search => {
    fetch(`${CONFIGFILTER.SEARCH}${search}&order=search`)
      // fetch('http://localhost:3000/data/data.json')
      .then(res => res.json())
      .then(data => setLectureList(data.result));
  };

  // 난이도, hashTag 필터링버튼(Query Parameter)
  const handleLectureFilter = input => {
    if (typeof input === 'number') {
      fetch(`${CONFIGFILTER.LEVEL}${input}`)
        // fetch('http://localhost:3000/data/data.json')
        .then(res => res.json())
        .then(data => setLectureList(data.result));
    } else {
      fetch(`${CONFIGFILTER.TAG}/${input}`)
        // fetch('http://localhost:3000/data/data.json')
        .then(res => res.json())
        .then(data => setLectureList(data.result));
    }
  };

  //aside 필터링버튼(Path Parameter)
  const handleCourseFilter = path => {
    fetch(`${CONFIGFILTER.ASIDE}${path}`)
      // fetch('http://localhost:3000/data/data.json')
      .then(res => res.json())
      .then(data => setLectureList(data.result));
  };
  return (
    <Inner>
      <Section>
        <Aside>
          <Navcategory>
            <ul>
              <li>전체강의</li>
              <li>
                <SkillIcon>
                  <div onClick={toggleLecture}>
                    개발 . 프로그래밍
                    <Arrow>{skillOpen ? '🡫' : '➔'}</Arrow>
                  </div>
                  <ul
                    className={skillOpen ? 'showLecture' : 'hideLecture'}
                    onClick={handlePrevent}
                  >
                    <li onClick={() => handleCourseFilter(1)}>ALL</li>
                    <li onClick={() => handleCourseFilter('1/1')}>웹개발</li>
                    <li onClick={() => handleCourseFilter('1/2')}>
                      프론트엔드
                    </li>
                    <li onClick={() => handleCourseFilter('1/3')}>백엔드</li>
                  </ul>
                </SkillIcon>
              </li>
              <li>보안.네트워크</li>
              <li>데이터 사이언스</li>
              <li>크리에이티브</li>
              <li>직무.마케팅</li>
              <li>학문.외국어</li>
              <li>커리어</li>
              <li>교양</li>
            </ul>
          </Navcategory>
          <Navcheckbox>
            <Difficult>난이도</Difficult>
            <Input>
              <InputLevel>
                <input onClick={() => handleLectureFilter(1)} type="checkbox" />{' '}
                <label>입문</label>
              </InputLevel>
              <InputLevel>
                <input onClick={() => handleLectureFilter(2)} type="checkbox" />{' '}
                <label>초급</label>
              </InputLevel>
              <InputLevel>
                <input onClick={() => handleLectureFilter(3)} type="checkbox" />{' '}
                <label>중급이상</label>
              </InputLevel>
            </Input>
          </Navcheckbox>
        </Aside>
        <Article>
          <SearchBtn
            searchSkill="searchSkill"
            handleInputSearchResult={handleInputSearchResult}
          />
          <Upper>
            <Category>
              <span>개발.프로그래밍</span>
              {/* before로 옆줄 */}
            </Category>
            <Button>
              <select value={optionOpen} onChange={selectOption}>
                <option value="recommand">추천순</option>
                <option value="low">낮은가격</option>
                <option value="high">높은가격</option>
                <option value="score">평점순</option>
              </select>
            </Button>
          </Upper>

          <MediumSkill>
            <SearchBtn handleInputSearchResult={handleInputSearchResult} />
            <TagBtn>
              <SkillBtn onClick={() => handleLectureFilter('skill=html')}>
                Html
              </SkillBtn>
              <SkillBtn onClick={() => handleLectureFilter('skill=Css')}>
                Css
              </SkillBtn>
              <SkillBtn onClick={() => handleLectureFilter('skill=styled')}>
                styled
              </SkillBtn>
              <SkillBtn onClick={() => handleLectureFilter('skill=JavaScript')}>
                JavaScript
              </SkillBtn>
              <SkillBtn onClick={() => handleLectureFilter('skill=React')}>
                React
              </SkillBtn>
            </TagBtn>
          </MediumSkill>
          <CardList>
            {/* 검색창 결과값 없을때 띄울것 */}
            {lectureList ? (
              lectureList.map(data => (
                <LectureList
                  key={data.id}
                  id={data.id}
                  title={data.title}
                  price={data.price}
                  author={data.author}
                  popular={data.popular}
                  thumbnail={data.thumbnail}
                  summary={data.summary}
                  level={data.level}
                  category={data.category}
                  star={data['star-number']}
                />
              ))
            ) : (
              <SearchResultNotFound />
            )}
          </CardList>
        </Article>
      </Section>
    </Inner>
  );
}

const Inner = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  margin-top: 30px;
`;

const Section = styled.div`
  display: flex;
`;

const Article = styled.div`
  width: 83%;
  margin-left: 30px;
`;

const Aside = styled.div`
  width: 17%;
`;

const Navcategory = styled.div`
  li {
    padding: 15px 0px;
    margin-top: -1px;
    border: 1px solid grey;
    background-color: #f6f6f6;
    cursor: pointer;
  }
`;

const SkillIcon = styled.div`
  .hideLecture {
    display: none;
  }

  .showLecture {
    width: 100%;
    margin-top: 20px;

    li {
      padding: 15px;
      background-color: #ffffff;

      :hover {
        background-color: #efefef;
      }
    }
  }
`;

const Arrow = styled.span`
  padding: 25px;
`;

const Navcheckbox = styled.div`
  margin-top: 15px;
`;

const Difficult = styled.div`
  margin: 15px;
  padding: 17px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

const Input = styled.div`
  padding: 0px 0px 10px 10px;
`;

const InputLevel = styled.p`
  margin-top: 10px;
`;

const Upper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  border-top: 1px solid black;
`;

const Category = styled.span`
  margin-top: 20px;
`;

const Button = styled.div`
  margin-top: 11px;
  select {
    padding: 8px;
  }
`;

const MediumSkill = styled.div`
  display: flex;
  margin-top: 20px;
`;

const SkillBtn = styled.button`
  padding: 10px;
  margin-right: 10px;
  border-radius: 4px;
  background-color: #b8b8b8;
  color: white;
  &:focus {
    background-color: #1bb571;
  }
`;

const TagBtn = styled.div`
  margin-top: 5px;
  margin-left: 20px;
`;

const CardList = styled.div`
  display: flex;
  height: 35%;
  flex-wrap: wrap;
  cursor: pointer;

  .list {
    width: 25%;
    padding: 15px;
    margin-top: 30px;
  }

  .hover {
    width: 25%;
    padding: 15px;
    margin-top: 30px;
    background-color: #002021;
    color: white;
  }

  img {
    width: 100%;
  }

  .title {
    font-size: 1rem;
    font-weight: 700;
  }
  p {
    margin-top: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
  }
`;

export default Courses;
