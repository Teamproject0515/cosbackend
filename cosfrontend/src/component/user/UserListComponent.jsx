import React, { Component } from 'react';
import ApiService from "../../ApiService";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';

class UserListComponent extends Component{
    constructor(props){
        super(props);

        this.state = {
            users : [],
            colors : [],
            message : null
        }
    }

    componentDidMount(){
        this.reloadUserList();
        this.reloadUserColorList();
    }


    reloadUserList = () => {
        ApiService.fetchUsers()
        .then( res => {
            this.setState({
                users : res.data
            })
        })
        .catch(err => {
            console.log('reloadUserList() Error!', err);
        })
    }


    // 각 유저의 색상 출력
    reloadUserColorList = () => {
        ApiService.fetchUserColors()
        .then( res => {
            this.setState({
                colors : res.data
            })
        })
        .catch(err => {
            console.log('reloadUserColorList() Error!', err);
        })
    }

    // deleteUser = (userID) => {
    //     ApiService.deleteUser(userID)
    //     .then( res => {
    //         this.setState({
    //             message : 'User Deleted Successfully.'
    //         });
    //         this.setState({
    //             users : this.state.users.filter(user =>
    //                 user.id !== userID)
    //         });
    //     })
    //     .catch(err =>{
    //         console.log('deleteUser() Error!', err);
    //     })
    // }

    // editUser = (ID) => {
    //     window.localStorage.setItem("userID", ID);
    //     this.props.history.push('/edit-user');
    // }

    // addUser = () => {
    //     window.localStorage.removeItem("userID");
    //     this.props.history.push('/add-user');
    // }


    render(){
        return(
            <div>
                <Typography variant ="h4" style={style}>User List</Typography>
                <Button variant="contained" color="primary" onClick={this.addUser}> Add User </Button>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>FistName</TableCell>
                            <TableCell alingn="right">LastName</TableCell>
                            <TableCell alingn="right">UserName</TableCell>
                            <TableCell alingn="right">Age</TableCell>
                            <TableCell alingn="right">Salary</TableCell>
                            <TableCell alingn="right">Edit</TableCell>
                            <TableCell alingn="right">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.users.map(user =>
                            <TableRow key={user.id}>
                                <TableCell component="th" scope="user"> {user.id} </TableCell>
                                <TableCell alingn="right">{ user.firstName }</TableCell>
                                <TableCell alingn="right">{user.lastName}</TableCell>
                                <TableCell alingn="right">{user.username}</TableCell>
                                <TableCell alingn="right">{user.age}</TableCell>
                                <TableCell alingn="right">{user.salary}</TableCell>
                                <TableCell alingn="right">
                                   <CreateIcon />
                                </TableCell>
                            {this.state.colors.map(color =>
                                <TableCell key={color.fk_user_id}>
                                    <span style={{width:'50px', height:'50px', backgroundColor:color.color1, color:'white'}}>{color.color1}</span>
                                    <span style={{width:'50px', height:'50px', backgroundColor:color.color2, color:'white'}}>{color.color2}</span>
                                    <span style={{width:'50px', height:'50px', backgroundColor:color.color3, color:'white'}}>{color.color3}</span>
                                    <span style={{width:'50px', height:'50px', backgroundColor:color.color4, color:'white'}}>{color.color4}</span>
                                    <span style={{width:'50px', height:'50px', backgroundColor:color.color5, color:'white'}}>{color.color5}</span>
                                    <span style={{width:'50px', height:'50px', backgroundColor:color.color6, color:'white'}}>{color.color6}</span>
                                    <span style={{width:'50px', height:'50px', backgroundColor:color.color7, color:'white'}}>{color.color7}</span>
                                    <span style={{width:'50px', height:'50px', backgroundColor:color.color8, color:'white'}}>{color.color8}</span>
                                    <span style={{width:'50px', height:'50px', backgroundColor:color.color9, color:'white'}}>{color.color9}</span>
                                    <span style={{width:'50px', height:'50px', backgroundColor:color.color10, color:'white'}}>{color.color10}</span>
                                    <span style={{width:'50px', height:'50px', backgroundColor:color.color11, color:'white'}}>{color.color11}</span>
                                    <span style={{width:'50px', height:'50px', backgroundColor:color.color12, color:'white'}}>{color.color12}</span>
                                </TableCell>
                            )}
                            </TableRow>
                        )}
                    </TableBody>

                    <TableBody>

                    </TableBody>
                </Table>
                <ul>
                    
                </ul>
            </div>
        );
    }

}

const style = {
    display: 'flex',
    justifyContent: 'center'
}

export default UserListComponent;