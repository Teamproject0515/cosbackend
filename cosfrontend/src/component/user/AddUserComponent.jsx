import React, { Component } from 'react';
import ApiService from "../../ApiService";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class AddUserComponent extends Component{

    constructor(props){
        super(props);

        this.state = {
            username : '',
            password : '',
            firstName : '',
            lastName : '',
            age : '',
            salary : '',
            message : null
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    saveUser = (e) => {
        e.preventDefault();

        let user = {
            username : this.state.username,
            password : this.state.password,
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            age : this.state.age,
            salary : this.state.salary
        }

        ApiService.addUser(user)
        .then(res => {
            this.setState({
                message : user.username + '님이 성공적으로 등록되었습니다.'
            })
            console.log(this.state.message);
            this.props.history.push('/users');
        })
        .catch( err =>{
            console.log('saveUser() 에러', err);
        });

    }

    render(){
        return(
            <div>
                <Typography variant="h4" style={style}>Add User</Typography>
                <from style={fromContainer}>

                    <TextField type="text" placeholder="please input your username" 
                    fullWidth margin="normal" name="username" value={this.state.username} onChange={this.onChange} />
                    
                    <TextField type="password" placeholder  ="plase input your password" 
                    fullWidth margin="normal" name="password" value={this.state.passowrd} onChange={this.onChange} />
                    
                    <TextField  placeholder="please input your first name" 
                    fullWidth margin="normal" name="firstName" value={this.state.firstName} onChange={this.onChange} />
                    
                    <TextField  placeholder="please input your last name" 
                    fullWidth margin="normal" name="lastName" value={this.state.lastName} onChange={this.onChange} />
                    
                    <TextField type="number" placeholder="plase input your age" 
                    fullWidth margin="normal" name="age" value={this.age} onChange={this.onChange} />
                    
                    <TextField type="number" placeholder="plase input your salary" 
                    fullWidth margin="normal" name="salary" value={this.state.salary} onChange={this.onChange} />

                    <Button variant="contained" color="primary" onClick={this.saveUser}>Save</Button>
                </from>
            </div>
        );
    }
}

const fromContainer = {
    display : 'flex',
    flexFlow : 'row wrap'
}

const style = {
    display: 'flex',
    justifyContent:'center'
}

export default AddUserComponent;