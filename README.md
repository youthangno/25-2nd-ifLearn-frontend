# ifLearn

## Introduction

[ infLearn 사이트](https://www.inflearn.com/) 프로젝트<br>
동영상 강의 스트리밍 서비스입니다.

- 기간: 2021. 10. 18. ~ 2021. 10. 29.
- ifLearn 사이트의 기획과 디자인을 제외한 모든 기능과 데이터는 직접 구현하였습니다.
- 초기 세팅부터 직접 구현하였으며, 모든 데이터는 프론트와 백의 통신으로 받아온 데이터입니다.
- 프론트엔드 4인, 백엔드 2인으로 구성된 팀입니다.

## Technology

- **Frontend**: `JSX` `React(CRA)`, `React Hook`, `Sass` (Library: `React-router-DOM, Slick`)
- **Backend**: `Python`, `Django Web Framework`, `AWS`, `MySQL`
- **Common**: 버전관리 `Git & GitHub`, 소통 `Slack`, 일정관리 Trello

## Main Function
- **강의 상세 페이지**: 백엔드 fetch 통한 데이터 통신 및 전체적인 레이아웃
<br>
- **메인 페이지**: Slick library 사용하여 케러셀 기능과 navbar 3단호버
- **소셜 로그인**: 카카오API를 이용한 소셜 로그인 기능
- **강의 리스트**: 전체적인 레이아웃. 백엔드 fetch를 통한 필터링 기능 및 검색창
- **강의 상세 페이지 (영상 스트리밍)**:

## Part

- 손호영: 강의 리스트 페이지
  - React Functional Component와 Hooks 를 사용하여 구성
  - Array 타입을 활용한 데이터 핸들링
  - React Hook을 이용한 클릭 이벤트(toggle) 상태 관리
  - RESTFul API를 통한 Back-end 통신
  - Path parameters를 사용한 동적 라우팅 구현


## Demo

<img width="1682" alt="스크린샷 2021-10-31 오후 12 54 47" src="https://user-images.githubusercontent.com/81722144/139566782-b9b4eb2d-2cef-4a26-a561-fefd934f3d96.png">
https://www.youtube.com/watch?v=ncfkby6QBHs
