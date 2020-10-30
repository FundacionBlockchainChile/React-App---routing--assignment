import React, { Component } from 'react';
import {
  Route,
  NavLink,
  BrowserRouter,
  Redirect,
  Switch,
} from 'react-router-dom';
import Courses from './containers/Courses/Courses';
// import Course from './containers/Course/Course';
import Users from './containers/Users/Users';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <div className="App">
          <header>
            <nav>
              <ul>
                <li>
                  <NavLink
                    to="/users/"
                    exact
                    activeClassName="my-active"
                    activeStyle={{
                      color: '#fa923f',
                      textDecoration: 'underline',
                    }}
                  >
                    Users
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={{
                      pathname: '/courses',
                      hash: '#submit',
                      search: '?quick-submit=true',
                    }}
                  >
                    Courses
                  </NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <Switch>
            <Route path="/users" component={Users} />
            {/*<Route path="/courses/:id/:title" component={Course} />*/}
            <Route path="/courses" component={Courses} />
            <Route render={() => <h1>Not found</h1>} />
            <Redirect from="/all-courses" to="/courses" />
          </Switch>
          {/*<ol style={{textAlign: 'left'}}>
          <li>Add Routes to load "Users" and "Courses" on different pages (by entering a URL, without Links)</li> OK
          <li>Add a simple navigation with two links => One leading to "Users", one leading to "Courses"</li> OK
          <li>Make the courses in "Courses" clickable by adding a link and load the "Course" component in the place of "Courses" (without passing any data for now)</li> OK
          <li>Pass the course ID to the "Course" page and output it there</li> OK
          <li>Pass the course title to the "Course" page - pass it as a param or score bonus points by passing it as query params (you need to manually parse them though!)</li> OK
          <li>Load the "Course" component as a nested component of "Courses"</li>
          <li>Add a 404 error page and render it for any unknown routes</li>
          <li>Redirect requests to /all-courses to /courses (=> Your "Courses" page)</li>
    </ol>*/}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
