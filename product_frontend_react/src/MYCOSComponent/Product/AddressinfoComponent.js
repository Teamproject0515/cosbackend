import React, {useState,useEffect} from 'react';
import {Table, TableBody, TableCell, TableRow, Grid, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core';

import ApiService from '../../ApiService';
import DaumPostcode from 'react-daum-postcode';
import ModalKAKAOPost from './ModalKAKAOPostComponent';
import ModalDetailAddress from './ModalDetailAddressComponent';


function AddressinfoComponent(props) {

    const [useraddresses,setuseraddresses] = useState([]);
    const [postcode,setPostcode] = useState(null);                  //우편번호
    const [address,setAddress] = useState(null);                  //주소
    const [isOpenPost, setIsOpenPost] = useState(false);
    const [openDetailAddress, setOpenDetailAddress] = useState(false);

    const user_email = props.user.user_email;

    const toggleNav = (e) => {
        // e.preventDefault();
        //사용자가 클릭시 falue면 true로 true면 falue로 토글
        setIsOpenPost(isOpenPost => !isOpenPost);
        console.log(isOpenPost);
    }

    const handleClose = (e) => {
        setIsOpenPost(false);
        setOpenDetailAddress(false);
    };

    function onPostcode(e){
        setPostcode(e.currentTarget.value)
    }
    function onAddress(e){
        setAddress(e.currentTarget.value)
    }

    useEffect(() => {
        ApiService.getUserAddressList(user_email)
        .then( res => {
            setuseraddresses(res.data);
            console.log(useraddresses);
        })
        .catch(err => {
            console.log('userinfo print error!', err);
        })
    },[props.user.user_email]);


    function AddressAdd(){
        console.log(useraddresses);
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
                            <TableCell style={{fontSize:'12px', border:'0px', padding:'0px', color:'black', paddingBottom:'10px', paddingRight:'50px'}}>{useraddress.address_name}</TableCell><TableCell style={{border:'0px', padding:'0px', paddingBottom:'10px'}}>
                                <Button style={{fontSize:'13px', padding:'0px'}} onClick={() => toggleNav()}>수정</Button>
                                </TableCell>
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

                {isOpenPost && <ModalKAKAOPost isOpenPost={isOpenPost} setIsOpenPost={setIsOpenPost} handleClose={handleClose} user_email={user_email} setOpenDetailAddress={setOpenDetailAddress}/>}
                {openDetailAddress && <ModalDetailAddress openDetailAddress={openDetailAddress} handleClose={handleClose}/>}

                {/* {isOpenPost && seachAddress()} */}

                {/* <input className="signUp-input" type="text" id="postcode" placeholder="우편번호" 
                 name="postcode" value={postcode} onChange={onPostcode}/>
                 </div>
                 
                 <div className="signUp-inputBox">
                 <label className="signUp-label">Address</label>
                 <input className="signUp-input" type="text" id="address" placeholder="주소"
                 name="roadaddress" value={address} onChange={onAddress}/> */}
            </div>
        </Grid>
        </>
    )
}

const button = {
    width:'170px', border:'1px solid lightgray', margin:'5px'
}

export default AddressinfoComponent
