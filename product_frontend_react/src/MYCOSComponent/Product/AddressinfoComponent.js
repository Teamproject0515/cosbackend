import React, {useState,useEffect} from 'react';
import {Table, TableBody, TableCell, TableHead, TableRow, Grid, Button} from '@material-ui/core';
import ApiService from '../../ApiService';

function AddressinfoComponent(props) {

    const [useraddresses,setuseraddresses] = useState([]);

    useEffect(() => {
        alert('넘어오는 이메일 확인 : '+props.user.user_email);
        ApiService.getUserAddressList(props.user.user_email)
        .then( res => {
            setuseraddresses(res.data);
            console.log(useraddresses);
        })
        .catch(err => {
            console.log('userinfo print error!', err);
        })
    },[props.user.user_email]);


    //서버에서 받아올 유저 저장소
    

    function AddressModify(){
        alert('정보 수정 모달 띄우기');
    }

    function AddressAdd(){
        alert('배송지 추가 버튼');
    }



    
    return (
        <>
        <Grid item xs={6} sm={7}>
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <div style={{fontSize:'13px', textAlign:'left', marginBottom:'20px'}}>배송지 정보</div><div style={{fontSize:'13px', textAlign:'left', marginBottom:'20px'}}><Button style={{fontSize:'13px', padding:'0px'}} onClick={() => AddressAdd()}>배송지 추가</Button></div>
            </div>
            <div style={{minHeight:'800px'}}>

                {useraddresses.map(useraddress => 
                        
                <Table style={{marginBottom:'30px'}}>
                    <TableBody style={{borderRadius:'10px', padding:'10px', minWidth:'600px'}}>
                        <TableRow key={useraddress.user_email}                      
                        style={{display:'flex', alignItems:'center'}}>
                            <TableCell style={{fontSize:'12px', border:'0px', padding:'0px', color:'black', paddingBottom:'10px', paddingRight:'50px'}}>{useraddress.address_name}</TableCell><TableCell style={{border:'0px', padding:'0px', paddingBottom:'10px'}}><Button style={{fontSize:'13px', padding:'0px'}} onClick={() => AddressModify()}>수정</Button></TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell style={{fontSize:'12px', border:'0px', margin:'0px', padding:'0px', color:'gray'}}>{useraddress.address}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell style={{fontSize:'12px', border:'0px', margin:'0px', padding:'0px', color:'gray'}}>{useraddress.detailaddress}</TableCell>
                        </TableRow>   
                    </TableBody>
                </Table>
                )}
            </div>
        </Grid>
        </>
    )
}

const button = {
    width:'170px', border:'1px solid lightgray', margin:'5px'
}

export default AddressinfoComponent
