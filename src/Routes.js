import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Main from './pages/Main/Main';
import Lecture from './pages/Lecture/Lecture';
import Courses from './pages/Courses/Courses';
import Course from './pages/Course/Course';
import KakaoRedirect from './pages/Login/KakaoRedirect';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/" component={Main} />
          <Route exact path="/lecture" component={Lecture} />
          <Route exact path="/course" component={Course} /> {/* 상세페이지 */}
          <Route exact path="/courses" component={Courses} />
          <Route exact path="/oauth/callback/kakao" component={KakaoRedirect} />
          {/* 강의 리스트 */}
        </Switch>
      </Router>
    );
  }
}
export default Routes;
