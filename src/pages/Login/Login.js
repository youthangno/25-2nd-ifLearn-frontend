import React from 'react';
import { KAKAO_AUTH_URL } from './OAuth';
import styled from 'styled-components';

export default function Login() {
  const loginAlert = () => {
    alert(
      '아이디와 비밀번호를 확인해주세요 :) 카카오톡 로그인으로 진행해주세요!'
    );
  };

  return (
    <LoginWrapper>
      <SiteName>ifLearn</SiteName>
      <input placeholder="이메일 또는 아이디 입력" />
      <input type="password" placeholder="비밀번호" />
      <Button onClick={loginAlert}>로그인</Button>
      <SignupInformation>
        <h4>비밀번호 찾기</h4>
        <h4>|</h4>
        <h4>회원가입</h4>
      </SignupInformation>
      <EasyLogin>
        <div />
        <h5>간편 로그인</h5>
      </EasyLogin>
      <a href={KAKAO_AUTH_URL}>
        <Button kakao>
          <img
            alt="kakaoLogo"
            src="https://repickus.com/images/btn_kakao.png"
          />
          카카오톡 로그인
        </Button>
      </a>
    </LoginWrapper>
  );
}

const LoginWrapper = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: fit-content;
  padding: 40px;
  text-align: center;
  background-color: white;
  border-radius: 6px;
  border: 1px solid #dee2e6;

  input {
    display: block;
    margin: auto;
    margin-bottom: 12px;
    padding: 13px 12px;
    width: 310px;
    height: 48px;
    line-height: 1.47;
    border: 1px solid #dee2e6;
    border-radius: 4px;
    background-color: #fff;
  }
`;

const Button = styled.button`
  margin: 12px 0;
  padding: 0 12px;
  width: 310px;
  height: 48px;
  border-color: #00c471;
  border-radius: 12px;
  font-weight: 700;
  color: ${props => (props.kakao ? 'black' : '#fff')};
  background-color: ${props => (props.kakao ? 'rgb(248,220,95)' : '#00c471')};

  img {
    margin-right: 10px;
    width: 30px;
    height: 30px;
    vertical-align: middle;
  }
`;

const SiteName = styled.header`
  padding: 30px;
  color: #00c471;
  font-size: 30px;
  font-weight: 800;
`;

const SignupInformation = styled.article`
  margin-bottom: 24px;
  font-size: 13px;

  h4 {
    display: inline;
    margin: 5px;
    border-bottom: 1px solid #858a8d;
    color: #616568;
    cursor: pointer;

    &:nth-child(2) {
      border-bottom: none;
    }
  }
`;

const EasyLogin = styled.div`
  h5 {
    position: relative;
    width: max-content;
    margin: auto;
    margin-bottom: 16px;
    padding: 0 8px;
    color: #abb0b5;
    font-size: 11px;
    z-index: 10;
  }

  div {
    position: relative;
    bottom: -6px;
    height: 1px;
    border: none;
    background-color: #f1f3f5;
  }
`;
