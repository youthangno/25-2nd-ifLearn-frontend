# ifLearn

## Introduction

[ infLearn 사이트](https://www.inflearn.com/) 프로젝트<br>
강의 동영상 스트리밍 서비스입니다.

- 기간: 2021. 10. 18. ~ 2021. 10. 29.
- [Backend GitHub](https://github.com/wecode-bootcamp-korea/25-2nd-ifLearn-backend)
- ifLearn 사이트의 기획과 디자인을 제외한 모든 기능과 데이터는 직접 구현하였습니다.
- 초기 세팅부터 직접 구현하였으며, 모든 데이터는 프론트와 백의 통신으로 받아온 데이터입니다.

## Members

- **Frontend**: 김경현, 김동휘, 손호영, 이상철
- **Backend**: 김민찬, 김주형

## Technology

- **Frontend**: `JSX` `React(CRA)`, `React Hook`, `Styled Component` (Library: `React-router-DOM, Slick, polished`)
- **Backend**: `Python`, `Django Web Framework`, `AWS`, `MySQL`
- **Common**: 버전관리 `Git & GitHub`, 소통 `Slack`, 일정관리 Trello

## Main Function

- **메인 페이지**: Slick library 사용하여 케러셀 기능과 navbar 3단호버
- **소셜 로그인**: 카카오API를 이용한 소셜 로그인 기능
- **강의 리스트**: 전체적인 레이아웃. 백엔드 fetch를 통한 필터링 기능 및 검색창
- **강의 상세 페이지**: 백엔드 fetch 통한 데이터 통신 및 전체적인 레이아웃
- **강의 스트리밍 페이지)**: CSS Media Query를 사용한 반응형 웹 페이지, HTML5/Media Tag, Media Source Extension, Contnent Range 분할 요청을 통한 Streaming 기능 구현, RESTful API를 활용한 백엔드 통신, Custom Hook, 컴포넌트 재사용, 조건부 랜더링등을 활용한 설계, 단반향 바인딩을 고려한 컴포넌트 계층 설계

## Part

- 김경현: 영상 스트리밍, 스트리밍 페이지, 강의 목차,리스트 컴포넌트 제작
- 김동휘: 소셜 로그인, 강의 상세 페이지
- 손호영: 강의 리스트
- 이상철: 메인 페이지

## Demo

<img width="1682" alt="스크린샷 2021-10-31 오후 12 54 47" src="https://user-images.githubusercontent.com/81722144/139566782-b9b4eb2d-2cef-4a26-a561-fefd934f3d96.png">
