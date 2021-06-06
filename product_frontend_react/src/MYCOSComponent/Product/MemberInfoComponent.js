import React, { useEffect, useState } from 'react';
import {Grid, Button} from '@material-ui/core';
import {InputLabel, MenuItem, Select, FormControl} from '@material-ui/core';
import ApiService from '../../ApiService';



function MemberInfoComponent(props) {

    return (
        <>
           <Grid item xs={6} sm={7}>
                    <div style={{fontSize:'13px', textAlign:'left'}}>회원정보변경</div>
                    <hr style={{height:'1px', backgroundColor:'lightgray', border:'0px', opacity:'70%', margin:'20px 0px 20px 0px', paddingBottom:'0px'}}/>

                    <div style={centerDiv}>
                        <div style={centerDivBetween}>
                            <div style={centerLabel}>이메일 주소</div>
                            <div>변경하기</div>
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
                            <div>변경하기</div>
                        </div>
                        <div style={{textAlign:'left'}}><input disabled style={centerInput} value={props.user.user_phone}></input></div>
                    </div>

                    <div style={centerDiv}>
                        <div style={centerDivBetween}>
                            <div style={centerLabel}>비밀번호</div>
                            <div>변경하기</div>
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
