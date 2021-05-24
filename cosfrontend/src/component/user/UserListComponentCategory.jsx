import React, { Component } from 'react';
import ApiService from "../../ApiService";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import CreateIcon from '@material-ui/icons/Create';
// import DeleteIcon from '@material-ui/icons/Delete';

class UserListComponent extends Component{
    constructor(props){
        super(props);

        this.state = {
            users : [],
            message : null,
            category : 3,
        }
        this.selectCategory = this.selectCategory.bind(this);
    }

    componentDidMount(){
        this.reloadUserList();
    }


    reloadUserList = () => {
        ApiService.category(this.state.category)
        .then( res => {
            this.setState({
                users : res.data
            })
        })
        .catch(err => {
            console.log('reloadUserList() Error!', err);
        })
    }

    selectCategory(e){
        this.state.category = e.target.value;
        alert('categoryChangeSuccess!');
        this.reloadUserList();
    }

    render(){
        return(
            <div>
                <Typography variant ="h4" style={style}>User List</Typography>
                <Button variant="contained" color="primary"> Add User </Button>
                <input type="radio" value="5" name="category" onChange={this.selectCategory}/>5
                <input type="radio" value="6" name="category" onChange={this.selectCategory}/>6
                <input type="radio" value="7" name="category" onChange={this.selectCategory}/>7
                <input type="radio" value="8" name="category" onChange={this.selectCategory}/>8
                <input type="radio" value="9" name="category" onChange={this.selectCategory}/>9
                <input type="radio" value="10" name="category" onChange={this.selectCategory}/>10
                <input type="radio" value="11" name="category" onChange={this.selectCategory}/>11
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
                                    <div style={{marginRight:'3px', float : 'left', width:'15px', height:'15px', backgroundColor:user.color1}}></div>
                                    <div style={{marginRight:'3px', float : 'left', width:'15px', height:'15px', backgroundColor:user.color2}}></div>
                                    <div style={{marginRight:'3px', float : 'left', width:'15px', height:'15px', backgroundColor:user.color3}}></div>
                                    <div style={{marginRight:'3px', float : 'left', width:'15px', height:'15px', backgroundColor:user.color4}}></div>
                                    <div style={{marginRight:'3px', float : 'left', width:'15px', height:'15px', backgroundColor:user.color5}}></div>
                                    <div style={{marginRight:'3px', float : 'left', width:'15px', height:'15px', backgroundColor:user.color6}}></div>
                                    <div style={{marginRight:'3px', float : 'left', width:'15px', height:'15px', backgroundColor:user.color7}}></div>
                                    <div style={{marginRight:'3px', float : 'left', width:'15px', height:'15px', backgroundColor:user.color8}}></div>
                                    <div style={{marginRight:'3px', float : 'left', width:'15px', height:'15px', backgroundColor:user.color9}}></div>
                                    <div style={{marginRight:'3px', float : 'left', width:'15px', height:'15px', backgroundColor:user.color10}}></div>
                                    <div style={{marginRight:'3px', float : 'left', width:'15px', height:'15px', backgroundColor:user.color11}}></div>
                                    <div style={{marginRight:'3px', float : 'left', width:'15px', height:'15px', backgroundColor:user.color12}}></div>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        );
    }

}

const boxstyle = {
    marginRight:'3px', 
    float : 'left', 
    width:'15px', 
    height:'15px'
}

const style = {
    display: 'flex',
    justifyContent: 'center'
}

export default UserListComponent;