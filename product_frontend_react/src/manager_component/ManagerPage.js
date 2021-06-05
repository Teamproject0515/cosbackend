import React,{useState} from 'react'
import './managerCss/managermain.css'
import ManagerSidebar from './ManagerSidebar';
import MemberInfoComponent from './Product/MemberInfoComponent';
import DeliveryInfoComponent from './Product/DeliveryInfoComponent';
import AddressinfoComponent from './Product/AddressinfoComponent';
import MyCOSDashBoardComponent from './MyCOSDashBoardComponent';
import {Grid, Button} from '@material-ui/core';

function ManagerPage() {

    const [memberinfo, setMemberinfo] = useState(false);
    const [deliveryinfo, setDeliveryinfo] = useState(false);
    const [addressinfo, setAddressinfo] = useState(false);
    const [dashBoard, setDashBoard] = useState(true);
    const [productDetail, setProductDetail] = useState(false);
    const [sidebarshow, setSidebarshow] = useState(false);

    const memberinfoOpen = ()=>{
        setMemberinfo(true);
        setDeliveryinfo(false);
        setAddressinfo(false);
        setDashBoard(false);
        setProductDetail(false);
    }

    const deliveryinfoOpen= ()=>{
        setDeliveryinfo(true);
        setMemberinfo(false);
        setAddressinfo(false);
        setDashBoard(false);
        setProductDetail(false);
    }

    const addressinfoOpen= ()=>{
        setAddressinfo(true);
        setDeliveryinfo(false);
        setMemberinfo(false);
        setDashBoard(false);
        setProductDetail(false);
    }
    const dashBoardOpen= ()=>{
        setDashBoard(true);
        setAddressinfo(false);
        setDeliveryinfo(false);
        setMemberinfo(false);
        setProductDetail(false);
    }
    const productDetailOpen=()=>{
        setProductDetail(true);
        setDashBoard(false);
        setAddressinfo(false);
        setDeliveryinfo(false);
        setMemberinfo(false);
    }

    let user_id = 'suovj140';
    let user_name = '구지훈';
    let user_email = 'design_k@kakao.com';
    let user_phone = '010-4474-9986';
    let user_password = 'pw';
    let user_birthday = '1993-06-15'
    const user = {
        user_id,
        user_name,
        user_email,
        user_phone,
        user_password,
        user_birthday
    }

    let [check_password, setcheck_password] = useState(null);

    // 비밀번호 입력창에서 enter치면 checkPW 함수 불러오기
    const onKeyPress = (e) => {
        if(e.key == 'Enter'){
            checkPW();
        }
    }

    function checkPW(){
        if(user.user_password === check_password){
            window.localStorage.setItem("checkpw", true);
            setSidebarshow(true);
            memberinfoOpen();
        }else{
            window.localStorage.setItem("checkpw", false);
        };
    }

    function onChangePW(e){
        setcheck_password(e.target.value);
    }

    return (
        <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
            <Grid container spacing={3} style={{ paddingLeft:'10px', paddingRight:'10px', minHeight:'800px', width:'100%', maxWidth:'1560px', minHeight:'300px'}}>
                <Grid item xs={12} style={{height:'100px'}}></Grid>
                <Grid item xs={12} style={{height:'60px'}}> 
                    <div style={{textAlign:'left',fontSize:'25px', marginBottom:'20px'}} onClick={() => dashBoardOpen()}>My COS</div>
                </Grid>
                {dashBoard && <MyCOSDashBoardComponent user={user} checkPW={checkPW} onChangePW={onChangePW} onKeyPress={onKeyPress}/>}
                {sidebarshow && <ManagerSidebar memberinfoOpen={memberinfoOpen} deliveryinfoOpen={deliveryinfoOpen} addressinfoOpen={addressinfoOpen}/>}
                {memberinfo && <MemberInfoComponent user={user} checkPW={checkPW} onChangePW={onChangePW} onKeyPress={onKeyPress}/>}
                {deliveryinfo && <DeliveryInfoComponent />}
                {addressinfo && <AddressinfoComponent/>}
            </Grid>
        </div>
    )
}

export default ManagerPage
