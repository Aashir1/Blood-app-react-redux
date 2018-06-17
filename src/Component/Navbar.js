import React from 'react';
import dbConfig from '../store/action/firebaseConfig';
import MenuItem from 'material-ui/MenuItem';
import './Navbar.css';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import { browserHistory } from 'react-router';
import { logoutRequestAsync } from '../store/action/logout';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    currentUser: state.applicationLogoutReducer.currentUser
  }
}
function mapDispatchToProps(dispatch) {
  return {
    signOutUser: () => dispatch(logoutRequestAsync())
  }
}
class DrawerUndockedExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      status: false
    };
    dbConfig.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ status: true });
      }
      else {
        this.setState({ status: false });
      }
    })
  }
  signOut = () => {
    this.props.signOutUser();
    this.setState({ open: !this.state.open });
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  changeURL = (page) => {
    if(page === "") browserHistory.push(`/${page}`)
    else if (this.props.currentUser.typeof !== undefined) {
      browserHistory.push(`/${page}`);
      this.setState({ open: !this.state.open },()=>{
        console.log(this.state);
      })
    } else {
      browserHistory.push('/login');
    }

  }

  render() {
    return (
      <div>
        <AppBar
          className={`nav`}
          style={{ backgroundColor: '#ec543f' }}
          title="Blood Donor App"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonClick={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({ open })}
        >
          <MenuItem onClick={() => { this.changeURL('bloodneed') }}>Blood Need</MenuItem>
          <MenuItem onClick={() => { this.changeURL('donateblood') }}>Blood Donor</MenuItem>
          <MenuItem onClick={() => { this.changeURL('') }}>Home</MenuItem>

          {
            this.state.status ?
              <MenuItem onClick={this.signOut}>Logout</MenuItem>
              :
              null
          }
        </Drawer>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DrawerUndockedExample);