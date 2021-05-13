/* 여기는 유저 회원가입 화면입니다. */

import React, {Component} from 'react';
import ApiService from "../../ApiService";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class AddUserComponent extends Component{

    constructor(props){
        super(props);

        this.state ={
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
        e.preventDefault(); // 기본동작을 막는 것이다. 즉, 제출을 하지 않는다?

        let user = {
            username : this.state.username,
            password : this.state.password,
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            age : this.state.age,
            salary : this.state.salary,
        }
        // 들어온 모든 유저 데이터 값들을 let user의 속성으로 넣는다.

        // 그리고 그 유저데이터를 파라미터로 넣겠다.
        ApiService.addUser(user)
            .then( res => {
                this.setState({
                    message: user.username + '님이 성공적으로 등록되었습니다.'
                })

                console.log(this.state.message);
                this.props.history.push('/users'); // 작업을 정상적으로 진행하면 메시지를 넘겨서 그것을 로그에 찍고 users 페이지로 넘어갈 것이다.

            })
            .catch( err => {
                console.log('saveUser() 에러', err);
            });

    }


    render(){
        return(
            <div>
                <Typography variant="h4" style={style}>Add User</Typography>
                <form style={formContainer}>

                        <TextField type="text" placeholder="please input your username" name="username" fullWidth margin="normal" value={this.state.username} onChange={this.onChange} />                    
                    
                        <TextField type="password" placeholder="please input your password" name="password" fullWidth margin="normal" value={this.state.password} onChange={this.onChange} />

                        <TextField placeholder="please input your First Name" name="firstName" fullWidth margin="normal" value={this.state.firstName} onChange={this.onChange} />

                        <TextField placeholder="please input your Last Name" name="lastName" fullWidth margin="normal" value={this.state.lastName} onChange={this.onChange} />

                        <TextField type="number" placeholder="please input your Age" name="age" fullWidth margin="normal" value={this.state.age} onChange={this.onChange} />

                        <TextField type="number" placeholder="please input your salary" name="salary" fullWidth margin="normal" value={this.state.salary} onChange={this.onChange} />

                    <Button variant="contained" color="primary" onClick={this.saveUser}>Save</Button>

                </form>
            </div>
        );
    }
}


const formContainer = {
    display : 'flex',
    flexFlow : 'row wrap'
}

const style = {
    display : 'flex',
    justifyContent : 'center'
}








export default AddUserComponent;