import React from 'react';
import dbConfig from '../../store/action/firebaseConfig';
import { logoutRequestAsync } from '../../store/action/logout';
import { connect } from 'react-redux';
import Image from '../../images/blood-transfusion.svg';
import './needer.css';
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory } from 'react-router';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DonorActions from '../../store/action/donor';

const style = {
    btn: {
        backgroundColor: '#ee6b56 !important',
    }
}
const styles = {
    customWidth: {
        width: 200,
    },
};
class Needer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            contact: 1,
            isUser: false,
            value: 'A+',
            bloodGroup: [
                "A+",
                "B+",
                "AB+",
                "AB-",
                "A-",
                "B-",
                "O+",
                "O-"
            ]
        }
        dbConfig.auth().onAuthStateChanged(user => {
            if (user) {
                this.state.isUser = true;
            } else {
                this.state.isUser = false;
            }
        })

    }
    handleChange = (event, index, value) => {
        let availableBloodGroups = [];
        console.log(`value: ${value}`);
        console.log(`index: ${index}`);
        this.setState({ value });
        switch (value) {
            case 'A+':
                {

                    for (let i = 0; i < this.props.allUsers.length; i++) {
                        if (this.props.allUsers[i].bloodGroup === 'A-' || this.props.allUsers[i].bloodGroup === 'O-' || this.props.allUsers[i].bloodGroup === 'A+') {
                            availableBloodGroups.push(this.props.allUsers[i]);
                        }
                    }
                    break;
                }
            case 'O+':
                {

                    for (let i = 0; i < this.props.allUsers.length; i++) {
                        if (this.props.allUsers[i].bloodGroup === 'O-' || this.props.allUsers[i].bloodGroup === 'O+') {
                            availableBloodGroups.push(this.props.allUsers[i]);
                        }
                    }
                    break;
                }
            case 'B+':
                {

                    for (let i = 0; i < this.props.allUsers.length; i++) {
                        if (this.props.allUsers[i].bloodGroup === 'O+' || this.props.allUsers[i].bloodGroup === 'O-' || this.props.allUsers[i].bloodGroup === 'B+' || this.props.allUsers[i].bloodGroup === 'B-') {
                            availableBloodGroups.push(this.props.allUsers[i]);
                        }
                    }
                    break;
                }
            case 'AB+':
                {

                    for (let i = 0; i < this.props.allUsers.length; i++) {
                        if (this.props.allUsers[i].bloodGroup === 'O+' || this.props.allUsers[i].bloodGroup === 'A+' || this.props.allUsers[i].bloodGroup === 'B+' || this.props.allUsers[i].bloodGroup === 'AB+' || this.props.allUsers[i].bloodGroup === 'O-' || this.props.allUsers[i].bloodGroup === 'A-' || this.props.allUsers[i].bloodGroup === 'B-' || this.props.allUsers[i].bloodGroup === 'AB-') {
                            availableBloodGroups.push(this.props.allUsers[i]);
                        }
                    }
                    break;
                }
            case 'A-':
                {

                    for (let i = 0; i < this.props.allUsers.length; i++) {
                        if (this.props.allUsers[i].bloodGroup === 'A-' || this.props.allUsers[i].bloodGroup === 'O-') {
                            availableBloodGroups.push(this.props.allUsers[i]);
                        }
                    }
                    break;
                }
            case 'O-':
                {

                    for (let i = 0; i < this.props.allUsers.length; i++) {
                        if (this.props.allUsers[i].bloodGroup === 'O-') {
                            availableBloodGroups.push(this.props.allUsers[i]);
                        }
                    }
                    break;
                }
            case 'B-':
                {

                    for (let i = 0; i < this.props.allUsers.length; i++) {
                        if (this.props.allUsers[i].bloodGroup === 'O-' || this.props.allUsers[i].bloodGroup === 'B-') {
                            availableBloodGroups.push(this.props.allUsers[i]);
                        }
                    }
                    break;
                }
            case 'AB-':
                {

                    for (let i = 0; i < this.props.allUsers.length; i++) {
                        if (this.props.allUsers[i].bloodGroup === 'O-' || this.props.allUsers[i].bloodGroup === 'A-' || this.props.allUsers[i].bloodGroup === 'AB-' || this.props.allUsers[i].bloodGroup === 'B-') {
                            availableBloodGroups.push(this.props.allUsers[i]);
                        }
                    }
                    break;
                }
        }
    }
  
    render() {
        console.log(this.props.allUsers);
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
                <div className={`form-wrapper`}>
                    <div className={`form`}>
                        <SelectField
                            floatingLabelText="Blood Group"
                            value={this.state.value}
                            onChange={this.handleChange}
                        >
                        {
                            this.state.bloodGroup.map(data=>{
                                return(
                                    <MenuItem value={data} primaryText={data} key={data} />
                                )
                            })
                        }
                            
                        </SelectField>
                        <RaisedButton className={`btn`} onClick={this.submitForm} label="Submit" secondary={true} />
                    </div>
                </div>



            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Needer);

function mapStateToProps(state) {
    return {
        allUsers: state.donorReducer.usersData
    }
}
function mapDispatchToProps(dispatch) {
    return {
        sendData: (dataObj) => dispatch(DonorActions.sendDonorData(dataObj))
    }
}