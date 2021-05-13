/* 여기는 유저 회원가입 화면입니다. */

import React, {Component} from 'react';
import ApiService from "../../ApiService";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class EditUserComponent extends Component{

    constructor(props){
        super(props);

        this.state ={
            id : '',
            firstName : '',
            lastName : '',
            age : '',
            salary : '',
            message : null
        }
    }

    componentDidMount(){
        this.loadUser();
    }

    loadUser = () => {
        ApiService.fetchUserByID(window.localStorage.getItem("userID"))
            .then( res =>{
                let user = res.data;
                this.setState({
                    id: user.id,
                    username : user.username,
                    firstName : user.firstName,
                    lastName : user.lastName,
                    age : user.age,
                    salary : user.salary
                })
            })
            .catch(err => {
                console.log('loadUser() 에러', err);
            });
    }



    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    saveUser = (e) => {
        e.preventDefault(); // 기본동작을 막는 것이다. 즉, 제출을 하지 않는다?

        let user = {
            id : this.state.id,
            password : this.state.password,
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            age : this.state.age,
            salary : this.state.salary,
        }
        // 들어온 모든 유저 데이터 값들을 let user의 속성으로 넣는다.

        // 그리고 그 유저데이터를 파라미터로 넣겠다.
        ApiService.editUser(user)
            .then( res => {
                this.setState({
                    message: user.lastName + '님이 성공적으로 등록되었습니다.'
                })

                this.props.history.push('/users'); // 작업을 정상적으로 진행하면 메시지를 넘겨서 그것을 로그에 찍고 users 페이지로 넘어갈 것이다.

            })
            .catch( err => {
                console.log('saveUser() 에러', err);
            });

    }


    render(){
        return(
            <div>
                <Typography variant="h4" style={style}>Edit User</Typography>
                <form>
                   
                   
                        <TextField type="text" name="username" readOnly={true} fullWidth margin="normal" value={this.state.username}/>
                   
                        <TextField placeholder="Edit your First Name" name="firstName" fullWidth margin="normal" value={this.state.firstName} onChange={this.onChange} />
                   
                        <TextField placeholder="Edit your Last Name" name="lastName" fullWidth margin="normal" value={this.state.lastName} onChange={this.onChange} />
                   
                        <TextField type="number" placeholder="Edit your Age" name="age" fullWidth margin="normal" value={this.state.age} onChange={this.onChange} />
                   
                        <TextField type="number" placeholder="Edit your salary" name="salary" fullWidth margin="normal" value={this.state.salary} onChange={this.onChange} />
                   
                    <Button variant="contained" color="primary" onClick={this.saveUser}>Save</Button>

                </form>
            </div>
        );
    }
}


const style={
    display :'flex',
    justifyContent : 'center'
}






export default EditUserComponent;