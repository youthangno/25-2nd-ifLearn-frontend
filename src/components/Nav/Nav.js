import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
export default class Nav extends Component {
  render() {
    return (
      <NavHeader>
        <NavLinkBox>
          <Link to="/">
            <img src="../images/navlogo.png" alt="logo" />
          </Link>
          <StyledLink to="/">강의</StyledLink>
          <StyledLink to="/">로드맵</StyledLink>
          <StyledLink to="/">멘토링</StyledLink>
          <StyledLink to="/">커뮤니티</StyledLink>
          <StyledLink to="/">이프런</StyledLink>
        </NavLinkBox>
        <div>
          <Button>로그인</Button>
          <Button signup>회원가입</Button>
        </div>
      </NavHeader>
    );
  }
}
const NavHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 100px;
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
  margin-left: 5px;
  text-decoration: none;
  color: black;
  font-weight: 300;
  &:nth-child(3) {
    margin: 0px 25px;
  }
  &:nth-child(5) {
    margin: 0px 25px;
  }
`;
