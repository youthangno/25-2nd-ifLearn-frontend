import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/" component={Main} />
          <Route exact path="/lecture" component={Lecture} />
          <Route exact path="/course/:id" component={Course} />
          <Route exact path="/courses" component={Courses} />
          <Route exact path="/oauth/callback/kakao" component={KakaoRedirect} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
