import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Login from '../../pages/Login/Login';
import useToggle from '../../hooks/useToggle';
import { Link } from 'react-router-dom';

export default function Nav() {
  const [navListData, setNavListData] = useState([]);
  const [isNavActive, setIsNavActive] = useState(true);
  const [secondDepthData, setSecondDepthData] = useState([]);
  const [thirdDepthData, setThirdDepthData] = useState([]);
  const [isOpened, setIsOpened] = useToggle();

  useEffect(() => {
    fetch('../data/category.json')
      .then(res => res.json())
      .then(data => {
        setNavListData(data.result);
      });
  }, []);

  return (
    <>
      <NavContainer>
        <NavHeader>
          <NavLinkBox>
            <Link to="/">
              <img src="../images/navlogo.png" alt="logo" />
            </Link>
            <StyledLink
              onMouseEnter={e => {
                setIsNavActive(!true);
              }}
              to="/"
            >
              강의
            </StyledLink>
            <StyledLink to="/">로드맵</StyledLink>
            <StyledLink to="/">멘토링</StyledLink>
            <StyledLink to="/">커뮤니티</StyledLink>
            <StyledLink to="/">이프런</StyledLink>
          </NavLinkBox>
          <div>
            <Button onClick={setIsOpened}>로그인</Button>
            <Button signup>회원가입</Button>
          </div>
        </NavHeader>
      </NavContainer>
      {isOpened ? <Login setIsOpened={setIsOpened} /> : null}
      <NavCategoryBox
        isNavActive={isNavActive}
        onMouseLeave={e => {
          setIsNavActive(true);
        }}
      >
        <CategoryBox>
          <div>
            {navListData.map(data => {
              return (
                <MainCategory
                  key={data.id}
                  onMouseEnter={() => setSecondDepthData(data.sub_category)}
                >
                  <LinkHover to="/courses">{data.name}</LinkHover>
                </MainCategory>
              );
            })}
          </div>
          <div>
            {secondDepthData.map(data => {
              return (
                <SubCategory
                  key={data.id}
                  onMouseEnter={() => setThirdDepthData(data.tag)}
                >
                  <LinkHover to="/courses">{data.name}</LinkHover>
                </SubCategory>
              );
            })}
          </div>
          <div>
            {thirdDepthData.map(data => {
              return (
                <ThirdCategory key={data.id}>
                  <LinkHover to="/courses">{data.name}</LinkHover>
                </ThirdCategory>
              );
            })}
          </div>
        </CategoryBox>
      </NavCategoryBox>
    </>
  );
}

const LinkHover = styled(Link)`
  text-decoration: none;
  color: black;
`;

const NavCategoryBox = styled.div`
  display: ${({ isNavActive }) => (isNavActive ? 'none' : 'block')};
  position: fixed;
  z-index: 9999;
  left: 275px;
`;

const CategoryBox = styled.ul`
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: #fff;
  padding: 10px;
  height: 100%;
  box-shadow: 5px 5px 5px grey;
`;

const MainCategory = styled.li`
  width: 150px;
  padding: 10px;
`;

const SubCategory = styled.ul`
  width: 150px;
  padding: 10px;
`;

const ThirdCategory = styled.li`
  width: 150px;
  padding: 10px;
`;

const NavHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 120px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
`;

const NavLinkBox = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const Button = styled.button`
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background-color: ${({ signup }) => (signup ? '#fe6d5a' : '#fff')};
  color: ${({ signup }) => (signup ? '#fff' : '#000')};
  margin-left: ${({ signup }) => (signup ? '10px' : 'none')};
`;

const StyledLink = styled(Link)`
  margin-left: 10px;
  text-decoration: none;
  color: black;
  font-weight: 400;
  &:nth-child(3) {
    margin: 0px 25px;
  }
  &:nth-child(5) {
    margin: 0px 25px;
  }
`;

const NavContainer = styled.section`
  position: fixed;
  top: 0;
  z-index: 9999;
  width: 100%;
  background-color: #fff;
`;
