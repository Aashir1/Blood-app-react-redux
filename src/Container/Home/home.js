import React from 'react';
import dbConfig from '../../store/action/firebaseConfig';
import { logoutRequestAsync } from '../../store/action/logout';
import { connect } from 'react-redux';
import Image from '../../images/blood-transfusion.svg';
import './home.css';
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory } from 'react-router';

const style = {
    btn: {
        backgroundColor: '#ee6b56 !important',
    }
}

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            isUser: false
        }
        dbConfig.auth().onAuthStateChanged(user => {
            if (user) {
                this.state.isUser = true;
            } else {
                this.state.isUser = false;
            }
        });
    }

    navigateToDonor = () => {
        if (this.props.currentUser.hasOwnProperty("email") || this.props.signupCurrUser.hasOwnProperty("email")) {
            console.log(this.props.currentUser.hasOwnProperty("email"));
            browserHistory.push('/donateblood');
        } else {
            // console.log(this.props.currentUser.typeof === null)
            // console.log(this.isEmpty(this.props.currentUser));
            console.log(this.props.currentUser);
            console.log(this.props.currentUser.hasOwnProperty("uid"));
            browserHistory.push('/login');
        }
    }

    isEmpty(obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    navigateToNeed = () => {
        // browserHistory.push('/bloodneed');        
        if (this.props.currentUser.hasOwnProperty("email") || this.props.signupCurrUser.hasOwnProperty("email") ) {
            console.log(this.props.currentUser.typeof);
            browserHistory.push('/bloodneed');
        } else {
            console.log(this.props.currentUser.typeof !== undefined)
            browserHistory.push('/login');
        }
    }

    render() {
        return (
            <div className={`whole-wrapper`}>
                <div className={`heading-wapper`}>
                    <img src={Image} alt={`bloodlogo`} className={`logo`} />
                    <h2 className={`heading`}>
                        <span style={{ color: '#6b6b6b' }}>Blood</span>{'  '}
                        <span style={{ color: '#ec543f' }}>Donation</span>
                        <br />
                        <span className={`heading-smalltext`}>Save Human Life.</span>
                    </h2>
                </div>
                <div className={`para-wrapper`}>
                    <h2 className={`sub-heading`}>Welcome Sir,</h2>
                    <p className={`para`}>
                        Blood donation is an app to help and connect peoples with the same
                        blood type in the same location, You can request blood donation help
                        or ask some one to help.
                    </p>
                </div>
                <div className={`button-wrapper`}>
                    <RaisedButton className={`btn`} onClick={this.navigateToDonor} label="Donate Blood" secondary={true} style={style.btn} />
                    <RaisedButton className={`btn`} onClick={this.navigateToNeed} label="Blood Need" secondary={true} />
                </div>


            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

function mapStateToProps(state) {
    dbConfig.auth().onAuthStateChanged(user => {
        if (user) {
            if (!state.applicationSignInReducer.currentUser.hasOwnProperty('email')) {
                let obj = JSON.parse(localStorage.getItem('state'))
                if (obj !== null) {
                    state = obj;
                }
            }
        } else {

        }
    })
    return {
        currentUser: state.applicationSignInReducer.currentUser,
        signupCurrUser: state.applicationReducers.currentUser,

    }
}
function mapDispatchToProps(dispatch) {
    return {
        signInUser: (dataObj) => dispatch(logoutRequestAsync(dataObj))
    }
}