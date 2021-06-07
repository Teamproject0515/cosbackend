import React, {useState} from 'react';
import {Grid, Button, makeStyles, Modal, Backdrop, Fade} from '@material-ui/core';

function ModalUpdatePasswordComponent(props) {

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

    return (
        <div>
            {/* 휴대전화번호 변경 모달 */}
            <Modal
                className={classes.modal}
                open={props.openChangePassword}
                onClose={props.handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
            >
                <Fade in={props.openChangePassword}>
                    <div className={classes.paper}>
                        <div style={{textAlign:'left', marginTop:'10px'}}>
                            <div style={{fontSize:'11px', color:'gray', textAlign:'left', marginBottom:'5px'}}>변경할 비밀번호</div>
                            <input style={{textAlign:'left', border:'0px', borderRadius:'0px', padding:'8px', fontSize:'11px', color:'gray', backgroundColor:'#E7E7E7', width:'170px', marginBottom:'10px'}} type="password" placeholder="비밀번호를 입력해주세요." name="change_password" onChange={props.onChange} onKeyPress={props.onKeyPress}/>
                            <Button style={{backgroundColor:'#444', width:'105px', height:'30px', borderRadius:'0px', marginLeft:'10px',marginBottom:'0px', boxShadow:'none', fontSize:'13px', color:'white'}} onClick={() => props.updateButton()}>수정하기</Button>
                        </div>
                    </div>
                    </Fade>
            </Modal>
        </div>
    )
}


export default ModalUpdatePasswordComponent
