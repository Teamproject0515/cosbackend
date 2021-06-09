import React, {useState,useEffect} from 'react';
import {Table, TableBody, TableCell, TableRow, Grid, Button, Modal, Backdrop, Fade} from '@material-ui/core';
import {makeStyles} from '@material-ui/core';

import DaumPostcode from 'react-daum-postcode';

function ModalKAKAOPostComponent(props) {

    
    
    // const [postcode,setPostcode] = useState(null);              // 우편번호
    // const [address,setAddress] = useState(null);                // 주소
    // const [detailAddress, setDetailAddress] = useState(null);   // 상세 주소

    // const useraddresses = {
    //     user_email : props.user_email,
    //     postcode : postcode,
    //     address : address,
    //     // detailAddress : detailAddress,
    // }

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

    // //카카오 주소 api
    // function seachAddress(e){
    //     const onCompletePost = (data) => {
    //         let fullAddress = data.address;
    //         let zonecode = data.zonecode;
    //         let extraAddress = ''; 
            
    //         if (data.addressType === 'R') {
    //         if (data.bname !== '') {
    //             extraAddress += data.bname;
    //         }
    //         if (data.buildingName !== '') {
    //             extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
    //         }
    //         fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
    //         }
            
    //         setPostcode(zonecode);
    //         setAddress(fullAddress);
    //         props.setIsOpenPost(false);
    //         console.log(props.isOpenPost);
    //         console.log("카카오에 넘어오는 회원 이메일 : "+props.user_email);
    //         console.log("우편 번호 : "+zonecode+"는 postcode에 입력했음");
    //         console.log("전체 주소 : "+fullAddress+"는 address에 입력했음");
    //         props.setOpenDetailAddress(true);
    //         window.localStorage.setItem("useraddresses", useraddresses);
    //     }     
    
    //     const postCodeStyle =  makeStyles((theme) => ({
    //     paper: {
    //     position: 'absolute',
    //     width: 400,
    //     backgroundColor: theme.palette.background.paper,
    //     border: '2px solid #000',
    //     boxShadow: theme.shadows[5],
    //     padding: theme.spacing(2, 4, 3),
    //     },
    //     }));
    //     return (
    //         <Modal
    //         className={classes.modal}
    //         open={props.isOpenPost}
    //         onClose={props.handleClose}
    //         closeAfterTransition
    //         BackdropComponent={Backdrop}
    //         BackdropProps={{
    //             timeout: 500,
    //         }}
    //         >
    //             <Fade in={props.isOpenPost}>
    //                 <div className={classes.paper} style={{width:'640px'}}>
    //                     {props.isOpenPost && <DaumPostcode style={postCodeStyle} onComplete={onCompletePost} />}
    //                 </div>
    //             </Fade>
    //         </Modal>
    //     );
    // }    

    return (
        <Modal  
        className={classes.modal}
        open={props.isOpenPost}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
            timeout: 500,
        }}
        >
            <Fade in={props.isOpenPost}>
                <div className={classes.paper} style={{width:'640px'}}>
                    {props.isOpenPost && props.seachAddress()}
                </div>
            </Fade>
        </Modal>
    )
}

export default ModalKAKAOPostComponent
