import React, {useState,useEffect} from 'react';
import {Table, TableBody, TableCell, TableRow, Grid, Button, Modal, Backdrop, Fade} from '@material-ui/core';
import {makeStyles} from '@material-ui/core';

import ApiService from '../../ApiService';
import DaumPostcode from 'react-daum-postcode';
import ModalKAKAOPost from './ModalKAKAOPostComponent';
import ModalDetailAddress from './ModalDetailAddressComponent';
import ModalUpdateAddress from './ModalUpdateAddressComponent';

function AddressinfoComponent(props) {

    const [useraddresses,setuseraddresses] = useState([]);
    const [postcode,setPostcode] = useState('');                  //우편번호
    const [address,setAddress] = useState('');                  //주소
    const [isOpenUpdatePost, setIsOpenUpdatePost] = useState(false);
    const [isOpenPost, setIsOpenPost] = useState(false);
    const [openDetailAddress, setOpenDetailAddress] = useState(false);
    const [UserAddressBySeq, setUserAddressBySeq] = useState('');
    const [state, setState] = useState(0);


    const [user_email, setUser_email] = useState(props.user.user_email);
    const [user_phone, setUser_phone] = useState(null);
    const [user_phone2, setUser_phone2] = useState(null);
    const [detailaddress, setDetailAddress] = useState(null);
    const [address_name, setAddress_name] = useState(null);

    const [changePostcode, setChangePostcode] = useState('');

    const [user_info, setUserinfo] = useState([]);
    //const user_email = props.user.user_email; // 유저 이메일

    useEffect(() => {
        ApiService.getUserAddressList(user_email)
        .then( res => {
            setuseraddresses(res.data);
            setState(0);

        })
        .catch(err => {
            console.log('userinfo print error!', err);
        })
        
    },[user_email, isOpenUpdatePost, isOpenPost, state, openDetailAddress]);


    // 수정 누르면 뜨는 모달 데이터
    function toggleUpdatePost(address_seq){
        // e.preventDefault();
        //사용자가 클릭시 falue면 true로 true면 falue로 토글
        ApiService.getUserAddressByAddress_seq(address_seq)
        .then( res => {
            setUserAddressBySeq(res.data);
            // console.log(UserAddressBySeq);
            setState(1);
            console.log(state);
        })
        .catch(err => {
            console.log('UserAddressBySeq print error!', err);
        })
        setIsOpenUpdatePost(isOpenUpdatePost => !isOpenUpdatePost);
        // console.log(isOpenUpdatePost);
    }


    const toggleNav = (e) => {
        // e.preventDefault();
        //사용자가 클릭시 falue면 true로 true면 falue로 토글
        setIsOpenPost(isOpenPost => !isOpenPost);
        setState(2);
        // console.log(state);
        // console.log(isOpenPost);
    }

    const handleClose = (e) => {
        setIsOpenPost(false);
        setOpenDetailAddress(false);
        setIsOpenUpdatePost(false);
        setState(3);
        // console.log(state);
    };

//    function onPostcode(e){
//        setPostcode(e.currentTarget.value)
//    }
//    function onAddress(e){
//        setAddress(e.currentTarget.value)
//    }

    const onChange = (e) => {
        if(e.target.name === "change_email"){
            setUser_email(e.target.value);
            // console.log(user_email);
        }else if(e.target.name === "change_phone"){
            setUser_phone(e.target.value);
            // console.log(user_phone);
        }else if(e.target.name === "change_phone2"){
            setUser_phone2(e.target.value);
            // console.log(user_phone2);
        }else if(e.target.name === "change_postcode"){
            setPostcode(e.target.value);
            // console.log(postcode);
        }else if(e.target.name === "change_address"){
            setAddress(e.target.value);
            // console.log(address);
        }else if(e.target.name === "change_detailaddress"){
            setDetailAddress(e.target.value);
            // console.log(detailaddress);
        }else if(e.target.name === "change_address_name"){
            setAddress_name(e.target.value);
            // console.log(address_name);
        }
        setState(4);
        // console.log(state);
    }

   function AddressAdd(){
       console.log(useraddresses);
       alert('배송지 추가 버튼');
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
            padding: theme.spacing(5, 5, 5),
            borderRadius:'10px'
        },
    }));
    
    const classes = useStyles();


    //카카오 주소 api
    function seachAddress(e){
        const onCompletePost = (data) => {
            let fullAddress = data.address;
            let zonecode = data.zonecode;
            let extraAddress = ''; 
            
            if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
            }

            const postcode = zonecode;
            const address = fullAddress;
            setPostcode(zonecode);
            setAddress(fullAddress);
//            console.log(isOpenPost);
//            console.log("카카오에 넘어오는 회원 이메일 : "+user_email);
//            console.log("우편 번호 : "+zonecode+"는 postcode에 입력했음");
//            console.log("전체 주소 : "+fullAddress+"는 address에 입력했음");
            setState(5);
            // console.log(state);
            const useraddress = {
                address_seq : UserAddressBySeq.address_seq,
                user_email : user_email,
                postcode : postcode,
                address : address,
                user_phone : user_phone,
                user_phone2 : user_phone2,
                detailaddress : detailaddress,
            }

            //UpdateUserAddress(useraddress);
            setIsOpenPost(false);
            setIsOpenUpdatePost(false);
            setOpenDetailAddress(true);
        }     



        //function UpdateUserAddress(useraddress){
        //    ApiService.UpdateUserAddress(useraddress);
        //}


    
        const postCodeStyle =  makeStyles((theme) => ({
        paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        },
        }));
        return (
            <Modal
            className={classes.modal}
            open={isOpenPost}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
            >
                <Fade in={isOpenPost}>
                    <div className={classes.paper} style={{width:'640px'}}>
                        {isOpenPost && <DaumPostcode style={postCodeStyle} onComplete={onCompletePost} />}
                    </div>
                </Fade>
            </Modal>
        );
    }    


    function onNextButton(){
        setIsOpenPost(false);
        setIsOpenUpdatePost(false);
        setOpenDetailAddress(true);
        setState(6);
        // console.log(state);
    }

    function deleteUserAddress(address_seq){
        setState(7);
        console.log(state);
        ApiService.deleteUserAddress(address_seq);
        setState(8);
        alert("주소가 삭제됐습니다.");
        console.log(state);
    }












    return (
        <>
        <Grid item xs={6} sm={7}>
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <div style={{fontSize:'13px', textAlign:'left', marginBottom:'20px'}}>배송지 정보</div><div style={{fontSize:'13px', textAlign:'left', marginBottom:'20px'}}>
                    <Button style={{fontSize:'13px', padding:'0px'}} onClick={() => AddressAdd()}>배송지 추가</Button>
                </div>
            </div>
            <div style={{minHeight:'800px'}}>

                {useraddresses.map(useraddress => 
                        
                <Table style={{marginBottom:'30px'}}>
                    <TableBody style={{borderRadius:'10px', padding:'10px', minWidth:'600px'}}>
                        <TableRow key={useraddress.user_email} style={{display:'flex', alignItems:'center'}}>
                            <TableCell style={{fontSize:'11px', border:'0px', padding:'0px', color:'black', paddingBottom:'10px', paddingRight:'50px'}}>{useraddress.address_name}</TableCell><TableCell style={{border:'0px', padding:'0px', paddingBottom:'10px'}}>
                                <Button style={{fontSize:'11px', padding:'0px'}} onClick={() => toggleUpdatePost(useraddress.address_seq)}>수정</Button>
                                <Button style={{fontSize:'11px', padding:'0px'}} onClick={() => deleteUserAddress(useraddress.address_seq)}>삭제</Button>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell style={{fontSize:'11px', border:'0px', margin:'0px', padding:'0px', color:'#999'}}>{useraddress.user_phone}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell style={{fontSize:'11px', border:'0px', margin:'0px', padding:'0px', color:'#999'}}>{useraddress.address}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell style={{fontSize:'11px', border:'0px', margin:'0px', padding:'0px', color:'#999'}}>{useraddress.detailaddress}</TableCell>
                        </TableRow>   
                    </TableBody>
                </Table>
                )}

                {isOpenPost && <ModalKAKAOPost isOpenPost={isOpenPost} setIsOpenPost={setIsOpenPost} handleClose={handleClose} user_email={user_email} setOpenDetailAddress={setOpenDetailAddress} seachAddress={seachAddress}/>}
                {isOpenUpdatePost && <ModalUpdateAddress isOpenUpdatePost={isOpenUpdatePost} handleClose={handleClose} UserAddressBySeq={UserAddressBySeq} toggleNav={toggleNav} onChange={onChange} onNextButton={onNextButton}/>}
                {openDetailAddress && <ModalDetailAddress openDetailAddress={openDetailAddress} UserAddressBySeq={UserAddressBySeq} handleClose={handleClose} postcode={postcode} address={address} toggleNav={toggleNav} user_phone2={user_phone2}  onChange={onChange} detailaddress={detailaddress} postcode={postcode} address={address} user_phone={user_phone} address_name={address_name}/>}
            </div>
        </Grid>
        </>
    )
}

const button = {
    width:'170px', border:'1px solid lightgray', margin:'5px'
}

export default AddressinfoComponent
