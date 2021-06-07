import React, {useState,useEffect} from 'react';
import {Table, TableBody, TableCell, TableHead, TableRow, Grid, Button} from '@material-ui/core';
import ApiService from '../../ApiService';

function InsertUserAccount(props) {

    const [user_name, setuser_name] = useState(props.user_name);
    const [user_email, setuser_email] = useState(props.user_email);
    const [user_phone, setuser_phone] = useState(null);



    function insertUserAccount(){
        const userAccount = {
            user_name : user_name,
            user_email : user_email,
            user_phone : user_phone,
        }
        console.log(userAccount);

        ApiService.insertUserAccountPAY(userAccount);
    }

    const onChangePhone = (e) =>{
        setuser_phone(e.target.value);
    }

    return (
        <div>
            <div style={{textAlign:'left'}}>
                <div style={{fontSize:'11px', color:'gray', textAlign:'left', marginBottom:'5px'}}>소득공제용(일반개인)</div>
                <input style={{textAlign:'left', border:'0px', borderRadius:'0px', padding:'8px', fontSize:'11px', color:'gray', backgroundColor:'#E7E7E7', width:'170px', marginBottom:'10px'}} type="text" placeholder="'-' 를 제외한 숫자만 입력해주세요." onChange={onChangePhone}/>
                <Button style={{backgroundColor:'#444', width:'105px', height:'30px', borderRadius:'0px', marginLeft:'10px',marginBottom:'0px', boxShadow:'none', fontSize:'13px', color:'white'}} onClick={() => insertUserAccount()}>등록하기</Button>
            </div>
        </div>
    )
}


export default InsertUserAccount
