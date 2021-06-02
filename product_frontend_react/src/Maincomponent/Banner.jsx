import React, { useState } from "react";
import {Link} from "react-router-dom";

import {IconButton, TextField, Modal, Backdrop, Fade, makeStyles } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from "@material-ui/icons/Menu";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

import Logo from "./images/logo.jpg";
import {SidebarData} from "./SidebarData"
import "./css/Banner.css"


function Banner(){
    const [sidebar,setSidebar] = useState(false);

    const showSidebar = ()=> setSidebar(!sidebar);

    function searchKeyword(e){
        window.localStorage.setItem("search_keyword", e.target.value);
    }

    const useStyles = makeStyles((theme) => ({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            backgroundColor: 'white',
            borderRadius : '30px',
            padding: theme.spacing(5, 5, 5),
        },
      }));

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return(
        <>
            <div className="banner">
                    <div style={{float:'left'}} className="left_menu">
                        <IconButton style={{float:'left'}} className="menuButton" onClick={showSidebar}>
                            <MenuIcon/>
                        </IconButton>
                        <IconButton style={{float:'left'}} className="menuButton" onClick={handleOpen}>
                            <SearchOutlinedIcon/>
                        </IconButton>
                        <Modal
                            className={classes.modal}
                            open={open}
                            onClose={handleClose}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                        >
                            <Fade in={open}>
                            <div className={classes.paper} style={{opacity:'0.9'}}>
                                <form style={{float:'left', width:'500px'}} noValidate action="/search-keyword" autoComplete="off">
                                    <TextField style={{textAlign : 'center', width:'500px'}} id="standard-search" type="search" onChange={searchKeyword}/>
                                </form>
                            </div>
                            </Fade>
                        </Modal>

                    </div>
                    <div className="mid_menu">
                    <img
                        src={ Logo }
                        style={{height:"50px"}}
                        alt='testA' />
                    </div>
                    <div className="right_menu">
                    <IconButton>
                        <ShoppingCartOutlinedIcon/>
                    </IconButton>
                    </div>
            </div>
            <nav className={sidebar ? "nav-menu active":"nav-menu"}>
                <ul className="nav-menu-items">
                    <li className="navbar-toggle" style={{paddingLeft:'300px'}}>
                        <IconButton className="menuButton" onClick={showSidebar}>
                            <CloseIcon/>
                        </IconButton>
                    </li>
                    <li><form noValidate action="/search-keyword" autoComplete="off" style={{width:'150px', padding: '8px 0px 8px 30px'}}>
                        <TextField id="standard-search" label="Search" type="search" onChange={searchKeyword} style={{width:'300px'}}/>
                    </form>
                    </li>
                    {SidebarData.map((item,index)=>{
                        return(
                            <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                <span>{item.title}</span>
                            </Link>
                        </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );

}

export default Banner;