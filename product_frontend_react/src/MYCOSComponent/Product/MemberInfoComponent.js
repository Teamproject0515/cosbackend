import React, { useEffect, useState } from 'react';
import {Grid, Button, makeStyles, Modal, Backdrop, Fade} from '@material-ui/core';
import {InputLabel, MenuItem, Select, FormControl} from '@material-ui/core';
import ApiService from '../../ApiService';



function MemberInfoComponent(props) {

    const [change_email, setchange_email] = useState(null);
    const [change_phone, setchange_phone] = useState(null);
    const [change_password, setchange_password] = useState(null);
    const [user_email, setuser_email] = useState(props.user.user_email);

    useEffect(() => {
    // setchange_email('suovj140@gmail.com');
    // setchange_phone('010-4474-9986');
    // setchange_password('rnwlgns2');
    console.log("change_email : " + change_email);
    console.log("change_phone : " + change_phone);
    console.log("change_password : " + change_password);
    },[change_email, change_phone, change_password]);



    // 업데이트 로직
    function updateButton(){

        const Change_user = {
            user_email : user_email,
            change_email : change_email,
            change_phone : change_phone,
            change_password : change_password,
        }

        console.log(Change_user);
        ApiService.updateUserInfo(Change_user);
        alert('업데이트 성공');
    };

    function onChange(e){
        if(e.target.name == "change_email"){
            setchange_phone(null);
            setchange_password(null);
            setchange_email(e.target.value);
        }else if(e.target.name == "change_phone"){
            setchange_email(null);
            setchange_password(null);
            setchange_phone(e.target.value);
        }else if(e.target.name == "change_password"){
            setchange_email(null);
            setchange_phone(null);
            setchange_password(e.target.value);
        }
    }




    // 모달
    const useStyles = makeStyles((theme) => ({
        modal: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        paper: {
          backgroundColor: theme.palette.background.paper,
          boxShadow: theme.shadows[5],
          padding: theme.spacing(2, 4, 3),
          borderRadius:'10px'
        },
      }));


    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [openChangePhone, setOpenChangePhone] = React.useState(false);
    const [openChangePassword, setOpenChangePassword] = React.useState(false);

    const handleOpen = (e) => {
        if(e.target.name == "change_email"){
            setOpen(true);
        }if(e.target.name == "change_phone"){
            setOpenChangePhone(true);
        }if(e.target.name == "change_password"){
            setOpenChangePassword(true);
        }
    };
    
    const handleClose = (e) => {
        setOpen(false);
        setOpenChangePhone(false);
        setOpenChangePassword(false);
        
    };


    // 엔터버튼 눌렀을 때 함수 실행
    const onKeyPress = (e) => {
        if(e.key =='Enter'){
            updateButton();
            handleClose();
        }
    }

















    return (
        <>
           <Grid item xs={6} sm={7}>
                    <div style={{fontSize:'13px', textAlign:'left'}}>회원정보변경</div>
                    <hr style={{height:'1px', backgroundColor:'lightgray', border:'0px', opacity:'70%', margin:'20px 0px 20px 0px', paddingBottom:'0px'}}/>

                    <div style={centerDiv}>
                        <div style={centerDivBetween}>
                            <div style={centerLabel}>이메일 주소</div>
                            <div><button name="change_email" onClick={handleOpen}>변경하기</button></div>
                        </div>
                        <div style={{textAlign:'left'}}><input disabled style={centerInput} value={props.user.user_email}></input></div>
                    </div>

                    <div style={centerDiv}>
                        <div style={centerLabel}>이름</div>
                        <div style={{textAlign:'left'}}><input disabled style={centerInput} value={props.user.user_name}></input></div>
                    </div>

                    <div style={centerDiv}>
                        <div style={centerLabel}>생년월일</div>
                        <div style={{textAlign:'left'}}><input disabled style={centerInput} value={props.user.user_birthday}></input></div>
                    </div>

                    <div style={centerDiv}>
                        <div style={centerDivBetween}>
                            <div style={centerLabel}>휴대폰번호</div>
                            <div><button name="change_phone" onClick={handleOpen}>변경하기</button></div>
                        </div>
                        <div style={{textAlign:'left'}}><input disabled style={centerInput} value={props.user.user_phone}></input></div>
                    </div>

                    <div style={centerDiv}>
                        <div style={centerDivBetween}>
                            <div style={centerLabel}>비밀번호</div>
                            <div><button name="change_password" onClick={handleOpen}>변경하기</button></div>
                        </div>
                    </div>

                    <div style={{fontSize:'13px', textAlign:'left', marginTop:'50px'}}>부가정보(선택)</div>
                    <hr style={{height:'1px', backgroundColor:'lightgray', border:'0px', opacity:'70%', margin:'20px 0px 20px 0px', paddingBottom:'0px'}}/>

                    <div style={centerDiv}>
                        <div style={centerLabel}>성별</div>
                        <div style={{fontSize:'14px', marginTop:'10px', justifyContent:'left', display:'flex'}}><input type='radio' value='M'/> 남 <input type='radio' value='W'/> 여</div>
                    </div>

                    <div style={centerDiv}>
                        <div style={centerLabel}>관심매장선택</div>
                        <div style={{textAlign:'left'}}>
                                            {/* 스타일 선택 */}
                            <FormControl style={{minWidth:'120px', marginRight:'10px'}}>
                                <InputLabel style={{fontSize:'14px'}}>관심매장선택</InputLabel>
                                <Select name='Favorite_Market'>
                                    <MenuItem><div style={{fontSize:'14px'}}>서울 송파점</div></MenuItem>
                                    <MenuItem><div style={{fontSize:'14px'}}>서울 영등포점</div></MenuItem>
                                    <MenuItem><div style={{fontSize:'14px'}}>서울 마포점</div></MenuItem>
                                    <MenuItem><div style={{fontSize:'14px'}}>서울 서초점</div></MenuItem>
                                    <MenuItem><div style={{fontSize:'14px'}}>서울 롯데점</div></MenuItem>
                                    <MenuItem><div style={{fontSize:'14px'}}>인천 계양점</div></MenuItem>
                                    <MenuItem><div style={{fontSize:'14px'}}>모르는데요?</div></MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>

                    <div style={centerDiv}>
                        <div style={centerLabel}>제3자(H&M) 정보제공동의</div>
                        <div style={{fontSize:'14px', marginTop:'10px', justifyContent:'left', display:'flex'}}>
                        <input type='radio' value='M'/> 동의합니다 <input type='radio' value='W'/> 동의하지 않습니다
                        </div>
                    </div>

                    <div style={{marginTop:'25px', marginBottom:'100px'}}>
                        <Button style={{display:'flex', color:'#FFFFFF', backgroundColor:'#444444', border:'0px', fontSize:'13px', width:'100%', padding:'7px 0px 7px 0px', maxWidth:'270px'}} onClick={props.checkPW}>확인</Button>
                    </div>


                    <div style={spaceBetween}><span>환불계좌/현금영수증</span> <span>더보기</span></div>
                    <hr style={bottomHr}/>

                    <div style={spaceBetween}><span>개인계정 연결관리</span> <span>더보기</span></div>
                    <hr style={bottomHr}/>

                    <div style={spaceBetween}><span>회원탈퇴</span> <span>더보기</span></div>
                    <hr style={bottomHr}/>

                    <div style={{marginBottom:'80px'}}></div>
                    

                </Grid>

                {/* 모달 모아두기 - 나중에 줄일 예정 */}
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <div className={classes.paper}>
                            <h4>변경할 이메일 주소</h4>
                            <p><input style={{padding:'10px', borderRadius:'10px', border:'1px solid gray'}} type="text" name="change_email" onChange={onChange} onKeyPress={onKeyPress}></input></p>
                        </div>
                        </Fade>
                </Modal>

                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={openChangePhone}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={openChangePhone}>
                        <div className={classes.paper}>
                            <h4>변경할 휴대폰 번호</h4>
                            <p><input style={{padding:'10px', borderRadius:'10px', border:'1px solid gray'}} type="text" name="change_phone" onChange={onChange} onKeyPress={onKeyPress}></input></p>
                        </div>
                        </Fade>
                </Modal>

                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={openChangePassword}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={openChangePassword}>
                        <div className={classes.paper}>
                            <h4>변경할 비밀번호</h4>
                            <p><input style={{padding:'10px', borderRadius:'10px', border:'1px solid gray'}} type="text" name="change_password" onChange={onChange} onKeyPress={onKeyPress}></input></p>
                        </div>
                        </Fade>
                </Modal>
        </>
    )    
}

const centerDivBetween = {
    display:'flex', justifyContent:'space-between'
}

const centerDiv = {
    marginTop:'25px'
}

const centerLabel = {
    fontSize:'13px', textAlign:'left', color:'#999999'
}

const centerInput = {
    border:'0px', backgroundColor:'white', textAlign:'left', fontSize:'12px'
}

const centerInfo = {
    fontSize:'11px', textAlign:'left', color:'#999999', maxWidth:'270px'
}

const spaceBetween = {
    fontSize:'13px', marginTop:'40px', display:'flex', justifyContent:'space-between'
}

const bottomHr = {
    height:'1px', backgroundColor:'lightgray', border:'0px', opacity:'70%', margin:'8px 0px 30px 0px', paddingBottom:'0px'
}

export default MemberInfoComponent
