import React from 'react';
import dbConfig from '../../store/action/firebaseConfig';
import { logoutRequestAsync } from '../../store/action/logout';
import { connect } from 'react-redux';
import Image from '../../images/blood-transfusion.svg';
import './donor.css';
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
class Donor extends React.Component {
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
        console.log(`value: ${value}`);
        console.log(`index: ${index}`);
        this.setState({ value });
    }
    submitForm = () =>{
        const obj = {
            name: this.state.name,
            email:this.state.email,
            contact: this.state.contact,
            bloodGroup: this.state.value
        }
        console.log(obj);
        if(obj.name.trim() !== '' && obj.email.trim() !== '' && obj.contact.trim() !== '' ){
            this.props.sendData(obj);
            this.setState({name: '', email:'', contact: ''});
            browserHistory.push('/bloodneed');
        }
        else{
            alert('form badly formated');
        }
        
    }
    updateState = (type, event)=>{
        let obj = {};
        obj[type] = event.target.value;
        this.setState(obj);
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
                <div className={`form-wrapper`}>
                    <div className={`form`}>
                        <TextField
                            onChange = {(e)=>{this.updateState('name',e)}}
                            value={this.state.name}
                            type='text'
                            underlineFocusStyle={{ borderBottom: '2px solid #ec543f' }}
                            hintText="Name"
                        /><br />
                        <TextField
                            onChange = {(e)=>{this.updateState('email',e)}}                            
                            value={this.state.email}
                            type='email'
                            underlineFocusStyle={{ borderBottom: '2px solid #ec543f' }}
                            hintText="Email"
                        /><br />
                        <TextField
                            onChange = {(e)=>{this.updateState('contact',e)}}                            
                            value={this.state.number}
                            type='number'
                            underlineFocusStyle={{ borderBottom: '2px solid #ec543f' }}
                            hintText="Contact"
                        /><br />
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

export default connect(mapStateToProps, mapDispatchToProps)(Donor);

function mapStateToProps(state) {
    return {
        currentUser: state.applicationLogoutReducer.currentUser
    }
}
function mapDispatchToProps(dispatch) {
    return {
        sendData: (dataObj) => dispatch(DonorActions.sendDonorData(dataObj))
    }
}