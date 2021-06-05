import React, {useState,useEffect} from 'react';
import {Table, TableBody, TableCell, TableHead, TableRow, Grid, Button} from '@material-ui/core';

function AddressinfoComponent() {
    //서버에서 받아올 유저 저장소
    const [useraddresses,setuseraddresses] = useState([]);
    
    //새로고침시에만 실행
    useEffect(()=>{
        getUserAddressList()
    },[])

    // 서버에서 해당 유저의 배송지 목록 조회 - 이게 필요한가? 바로 api써서 돌리면 될듯
    function getUserAddressList(){

    }

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

                {/* 해당 유저의 배송지 테이블에서 배송지목록 list로 받아서 map으로 반복문 돌릴 예정 */}
                <Table style={{marginBottom:'30px'}}>
                    <TableBody style={{borderRadius:'10px', padding:'10px', minWidth:'600px'}}>
                        <TableRow style={{display:'flex', alignItems:'center'}}>
                            <TableCell style={{fontSize:'12px', border:'0px', padding:'0px', color:'black', paddingBottom:'10px', paddingRight:'50px'}}>나의 집</TableCell><TableCell style={{border:'0px', padding:'0px', paddingBottom:'10px'}}><Button style={{fontSize:'13px', padding:'0px'}} onClick={() => AddressModify()}>수정</Button></TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell style={{fontSize:'12px', border:'0px', margin:'0px', padding:'0px', color:'gray'}}>010-4474-9986</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell style={{fontSize:'12px', border:'0px', margin:'0px', padding:'0px', color:'gray'}}>서울특별시 영등포구 당산동 121-289번지 가온빌 701호</TableCell>
                        </TableRow>   
                    </TableBody>
                </Table>

                <Table style={{marginBottom:'30px'}}>
                    <TableBody style={{borderRadius:'10px', padding:'10px', minWidth:'600px'}}>
                        <TableRow style={{display:'flex', alignItems:'center'}}>
                            <TableCell style={{fontSize:'12px', border:'0px', padding:'0px', color:'black', paddingBottom:'10px', paddingRight:'50px'}}>고향 집</TableCell><TableCell style={{border:'0px', padding:'0px', paddingBottom:'10px'}}><Button style={{fontSize:'13px', padding:'0px'}} onClick={() => AddressModify()}>수정</Button></TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell style={{fontSize:'12px', border:'0px', margin:'0px', padding:'0px', color:'gray'}}>010-4474-9986</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell style={{fontSize:'12px', border:'0px', margin:'0px', padding:'0px', color:'gray'}}>대구광역시 수성구 만촌1동 1327-13번지 1층</TableCell>
                        </TableRow>   
                    </TableBody>
                </Table>
            </div>
        </Grid>
        </>
    )
}

const button = {
    width:'170px', border:'1px solid lightgray', margin:'5px'
}

export default AddressinfoComponent
