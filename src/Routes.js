import React from 'react'
// import {
//   Router,
//   Route,
//   Link,
//   Switch
// } from 'react-router-dom';

import Login from './Container/login/login';
import SignUp from './Container/signup/signup';
import Home from './Container/Home/home';
import Donor from './Container/Donor/donor';
import Needer from './Container/Needer/needer';
// import createBrowserHistory from 'history/createBrowserHistory'
import { Route, Router, browserHistory } from 'react-router';
// const customHistory = createBrowserHistory()

class Routers extends React.Component {
  render() {
    return (
      //   <Router history = {customHistory}>
      //   <Switch>   
      //     <Route exact path="/" component={Login}/>
      //     <Route path="/signup" component={SignUp}/>
      //     <Route path="/home" component={Home}/>

      //     {/* <Route path="/topics" component={Topics}/> */}
      //   </Switch>
      // </Router>
      <Router history={browserHistory}>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/donateblood" component={Donor} />
          <Route exact path="/bloodneed" component={Needer} />          
      </Router>
    )
  }
}
export default Routers;