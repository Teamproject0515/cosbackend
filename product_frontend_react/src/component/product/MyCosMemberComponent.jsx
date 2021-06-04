import React, {useState, useEffect} from 'react';
import ApiService from "../../ApiService";
import new01 from '../images/new01.jpg';
import new02 from '../images/new02.jpg';
import new03 from '../images/new03.jpg';
import new04 from '../images/new04.jpg';
import new05 from '../images/new05.jpg';
import new06 from '../images/new06.jpg';
import new07 from '../images/new07.jpg';
import new08 from '../images/new08.jpg';

import {Table, TableCell, TableRow, Typography, InputLabel, MenuItem, Select, FormControl, Grid, TextField, Button, Link} from '@material-ui/core';

function ProductListComponent(props){

    // let [products, setproducts ] = useState([]);
    // let [product_pageNum, setproduct_pageNum] = useState(1);
    // let [product_gender, setproduct_gender] = useState(null);
    // let [product_category, setproduct_category] = useState(null);
    // let [select_color, setselect_color] = useState(null);
    // let [select_size, setselect_size] = useState(null);
    // let [total_pageNum, settotal_pageNum] = useState(1);
    // let [search_keyword, setsearch_keyword] = useState(null);
    // let [select_option, setselect_option] = useState(null);

    // function selectAll(selectGender){
    //     window.localStorage.setItem("selectGender", selectGender);
    //     window.localStorage.setItem("selectOption", 'product_seq');
    //     props.history.push('/product-list');
    // }

    // function selectAccessory(selectGender){
    //     window.localStorage.setItem("selectGender", selectGender);
    //     window.localStorage.setItem("selectCategory", '악세사리');
    //     window.localStorage.setItem("selectOption", 'product_seq');
    //     props.history.push('/accessories-list');
    // }

    // function selectAllList(selectGender){
    //     window.localStorage.setItem("selectGender", selectGender);
    //     window.localStorage.setItem("selectOption", null);
    //     props.history.push('/product-list');
    // }

    // function selectMagazine(){
    //     props.history.push('/magazine');
    // }
    const[user, setUser] = useState(window.localStorage.getItem("user")); //window.localStorage에 저장된 user를 호출해서 user객체에 넣음, 현재 user에는 user_email과 user_password가 들어가있는 상황이 된다. 


    // let user_id;
    // let user_name;
    // let user_email;
    // let user_phone;
    // let user_password = 'aaa';

    // let user = {
    //     user_id,
    //     user_name,
    //     user_email,
    //     user_phone,
    //     user_password 
    // }

    let [check_password, setcheck_password] = useState(null);
    

    function checkPW(){
        window.localStorage.setItem("user_password", user.user_password);
        if(window.localStorage.getItem("user_password") === check_password){
            alert('맞아요 따란');
            console.log(window.localStorage.getItem(user.user_password));
            console.log(check_password);
            props.history.push('/product-list');
        }else{
            alert('틀렸어요 따란');
            console.log(window.localStorage.getItem(user.user_password));
            console.log(check_password);
        };
    }

    function onChangePW(e){
        setcheck_password(e.target.value);
    }

    return (
        <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
            <Grid container spacing={3} style={{ paddingLeft:'10px', paddingRight:'10px', minHeight:'800px', width:'100%', maxWidth:'1560px', minHeight:'300px'}}>

                {/* 옵션 선택 사항 */}
                <Grid item xs={12} style={{height:'100px'}}> 

                </Grid>
                <Grid item xs={12} style={{height:'60px'}}> 
                <div style={{textAlign:'left',fontSize:'25px', marginBottom:'20px'}}>My COS</div>

                </Grid>

                    {/* */}
                        <Grid item xs={6} sm={3}>
                            <div style={{textAlign:'left',fontSize:'13px', marginBottom:'8px', color:'#999999'}}>회원정보</div>
                            <div style={{textAlign:'left',fontSize:'13px', marginBottom:'8px', color:'#999999'}}>주문/배송</div>
                            <div style={{textAlign:'left',fontSize:'13px', marginBottom:'8px', color:'#999999'}}>배송지관리</div>
                            <div style={{textAlign:'left',fontSize:'13px', marginBottom:'8px', color:'#999999'}}>예치금</div>
                            <div style={{textAlign:'left',fontSize:'13px', marginBottom:'8px', color:'#999999'}}>영수증/세금계산서</div>
                        </Grid>

                        <Grid item xs={6} sm={9}>
                           <div style={{fontSize:'13px', textAlign:'left'}}>회원정보변경</div>
                           <hr style={{height:'1px', backgroundColor:'lightgray', border:'0px', opacity:'70%', margin:'20px 0px 20px 0px', paddingBottom:'0px'}}/>
                           <div style={{marginTop:'25px'}}>
                                <div style={{fontSize:'13px', textAlign:'left', color:'#999999'}}>아이디</div>
                                <div style={{textAlign:'left'}}><input disabled style={{border:'0px', backgroundColor:'white', textAlign:'left', fontSize:'12px'}} value={user.user_id}></input></div>
                           </div>
                           <div style={{marginTop:'25px'}}>
                                <div style={{fontSize:'13px', textAlign:'left', color:'#999999'}}>이름</div>
                                <div style={{textAlign:'left'}}><input disabled style={{border:'0px', backgroundColor:'white', textAlign:'left', fontSize:'12px'}} value={user.user_name}></input></div>
                           </div>
                           <div style={{marginTop:'25px'}}>
                                <div style={{fontSize:'13px', textAlign:'left', color:'#999999'}}>이메일</div>
                                <div style={{textAlign:'left'}}><input disabled style={{border:'0px', backgroundColor:'white', textAlign:'left', fontSize:'12px'}} value={user.user_email}></input></div>
                           </div>
                           <div style={{marginTop:'25px'}}>
                                <div style={{fontSize:'13px', textAlign:'left', color:'#999999'}}>휴대폰번호</div>
                                <div style={{textAlign:'left'}}><input disabled style={{border:'0px', backgroundColor:'white', textAlign:'left', fontSize:'12px'}} value={user.user_phone}></input></div>
                           </div>
                           <div style={{marginTop:'25px'}}>
                                <div style={{fontSize:'13px', textAlign:'left', color:'#999999'}}>비밀번호</div>
                                <div style={{textAlign:'left'}}><input type="password" style={{textAlign:'left', fontSize:'15px', border:'0px', width:'100%', backgroundColor:'#E7E7E7', padding:'7px', marginTop:'5px', maxWidth:'256px'}} onChange={onChangePW}></input></div>
                           </div>
                           <div style={{marginTop:'25px'}}>
                                <div style={{fontSize:'11px', textAlign:'left', color:'#999999', maxWidth:'270px'}}><b>고객님의 소중한 회원정보를 환인/변경 하기 위해 비밀번호 재확인이 필요합니다.</b></div>
                           </div>
                           <div style={{marginTop:'25px'}}>
                                <div style={{fontSize:'11px', textAlign:'left', color:'#999999', maxWidth:'270px'}}><b>카카오 로그인 등으로 가입하신 고객님은 로그아웃 후 '비밀번호 찾기'를 통해 비밀번호 재설정이 필요합니다.</b></div>
                           </div>
                           <div style={{marginTop:'25px', marginBottom:'100px'}}>
                               <Button style={{display:'flex', color:'#FFFFFF', backgroundColor:'#444444', border:'0px', fontSize:'13px', width:'100%', padding:'7px 0px 7px 0px', maxWidth:'270px'}} onClick={checkPW}>확인</Button>
                           </div>
                        </Grid>
                </Grid>
            </div>
    )
}




export default ProductListComponent;