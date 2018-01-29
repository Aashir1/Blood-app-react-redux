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
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

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
            ],
            availableBloodGroups:[]
        }
        dbConfig.auth().onAuthStateChanged(user => {
            if (user) {
                this.state.isUser = true;
            } else {
                this.state.isUser = false;
            }
        })

    }

    componentDidMount(){
        console.log('from component will Mount: ', this.props.allUsers);
        if(this.props.allUsers.length < 1){
            console.log('if chala')
            this.props.loadStoreAfterRefresh();
        }        
        
    }

    handleChange = (event, index, value) => {
        

        console.log(this.state.availableBloodGroups);
        console.log(`index: ${index}`);
        this.setState({ value });
        switch (value) {
            case 'A+':
                {
                    let array = [];
                    for (let i = 0; i < this.props.allUsers.length; i++) {
                        if (this.props.allUsers[i].bloodGroup === 'A-' || this.props.allUsers[i].bloodGroup === 'O-' || this.props.allUsers[i].bloodGroup === 'A+') {
                            // this.setState({availableBloodGroups: [...this.state.availableBloodGroups, this.props.allUsers[i]]});
                            
                            array.push(this.props.allUsers[i]);
                  
                        }
                    }
                    this.setState({availableBloodGroups: array});
                    break;
                }
            case 'O+':
                {
                    let array = [];
                    

                    for (let i = 0; i < this.props.allUsers.length; i++) {
                        if (this.props.allUsers[i].bloodGroup === 'O-' || this.props.allUsers[i].bloodGroup === 'O+') {
                                array.push(this.props.allUsers[i]);
                            
                            // this.setState({availableBloodGroups: [...this.state.availableBloodGroups, this.props.allUsers[i]]});
                            
                        }
                    }
                    this.setState({availableBloodGroups: array});
                    break;
                }
            case 'B+':
                {
                    let array = [];
                    

                    for (let i = 0; i < this.props.allUsers.length; i++) {
                        if (this.props.allUsers[i].bloodGroup === 'O+' || this.props.allUsers[i].bloodGroup === 'O-' || this.props.allUsers[i].bloodGroup === 'B+' || this.props.allUsers[i].bloodGroup === 'B-') {
                                array.push(this.props.allUsers[i]);
                            
                            // this.setState({availableBloodGroups: [...this.state.availableBloodGroups, this.props.allUsers[i]]});
                            
                        }
                    }
                    this.setState({availableBloodGroups: array});
                    break;
                }
            case 'AB+':
                {
                    let array = [];
                    

                    for (let i = 0; i < this.props.allUsers.length; i++) {
                        if (this.props.allUsers[i].bloodGroup === 'O+' || this.props.allUsers[i].bloodGroup === 'A+' || this.props.allUsers[i].bloodGroup === 'B+' || this.props.allUsers[i].bloodGroup === 'AB+' || this.props.allUsers[i].bloodGroup === 'O-' || this.props.allUsers[i].bloodGroup === 'A-' || this.props.allUsers[i].bloodGroup === 'B-' || this.props.allUsers[i].bloodGroup === 'AB-') {
                                array.push(this.props.allUsers[i]);
                            
                            // this.setState({availableBloodGroups: [...this.state.availableBloodGroups, this.props.allUsers[i]]});
                            
                        }
                    }
                    this.setState({availableBloodGroups: array});
                    break;
                }
            case 'A-':
                {
                    let array = [];
                    

                    for (let i = 0; i < this.props.allUsers.length; i++) {
                        if (this.props.allUsers[i].bloodGroup === 'A-' || this.props.allUsers[i].bloodGroup === 'O-') {
                                array.push(this.props.allUsers[i]);
                            
                            // this.setState({availableBloodGroups: [...this.state.availableBloodGroups, this.props.allUsers[i]]});
                            
                        }
                    }
                    this.setState({availableBloodGroups: array});
                    break;
                }
            case 'O-':
                {
                    let array = [];
                    

                    for (let i = 0; i < this.props.allUsers.length; i++) {
                        if (this.props.allUsers[i].bloodGroup === 'O-') {
                                array.push(this.props.allUsers[i]);
                            
                            // this.setState({availableBloodGroups: [...this.state.availableBloodGroups, this.props.allUsers[i]]});
                            
                        }
                    }
                    this.setState({availableBloodGroups: array});
                    break;
                }
            case 'B-':
                {
                    let array = [];
                    

                    for (let i = 0; i < this.props.allUsers.length; i++) {
                        if (this.props.allUsers[i].bloodGroup === 'O-' || this.props.allUsers[i].bloodGroup === 'B-') {
                                array.push(this.props.allUsers[i]);
                            
                            // this.setState({availableBloodGroups: [...this.state.availableBloodGroups, this.props.allUsers[i]]});
                            
                        }
                    }
                    this.setState({availableBloodGroups: array});
                    break;
                }
            case 'AB-':
                {
                    let array = [];
                    this.setState({availableBloodGroups:array},()=>console.log(this.state));
                    for (let i = 0; i < this.props.allUsers.length; i++) {
                        if (this.props.allUsers[i].bloodGroup === 'O-' || this.props.allUsers[i].bloodGroup === 'A-' || this.props.allUsers[i].bloodGroup === 'AB-' || this.props.allUsers[i].bloodGroup === 'B-') {
                            // this.setState({availableBloodGroups: [...this.state.availableBloodGroups, this.props.allUsers[i]]});
                            
                        }
                    }
                    this.setState({availableBloodGroups: array});
                    break;
                }
        }
        console.log(this.state.availableBloodGroups);
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
                                this.state.bloodGroup.map(data => {
                                    return (
                                        <MenuItem value={data} primaryText={data} key={data} />
                                    )
                                })
                            }

                        </SelectField>
                    </div>
                </div>
                <Table>
                    <TableHeader adjustForCheckbox={false}
                        displaySelectAll={false}>
                        <TableRow>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>Email</TableHeaderColumn>
                            <TableHeaderColumn>BloodGroup</TableHeaderColumn>
                            <TableHeaderColumn>Contact</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody
                    displayRowCheckbox={false}>
                        {
                            this.state.availableBloodGroups.map(eachObj => {
                                return (
                                    <TableRow key={eachObj.contact}
                                        >
                                        <TableRowColumn>{eachObj.name}</TableRowColumn>
                                        <TableRowColumn>{eachObj.email}</TableRowColumn>
                                        <TableRowColumn>{eachObj.bloodGroup}</TableRowColumn>
                                        <TableRowColumn>{eachObj.contact}</TableRowColumn>
                                    </TableRow>

                                )
                            })
                        }
                    </TableBody>

                </Table>


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
        sendData: (dataObj) => dispatch(DonorActions.sendDonorData(dataObj)),
        loadStoreAfterRefresh : () => dispatch(DonorActions.loadStoreAfterPageRefresh()),
    }
}