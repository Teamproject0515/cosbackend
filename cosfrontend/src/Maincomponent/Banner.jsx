import React, { useState } from "react";
import CloseIcon from '@material-ui/icons/Close';
import {IconButton, TextField} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import Logo from "./images/logo.jpg";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import "./css/Banner.css"
import {SidebarData} from "./SidebarData"
import {Link} from "react-router-dom";

function Banner(){
    const [sidebar,setSidebar] = useState(false);

    const showSidebar = ()=> setSidebar(!sidebar);

    function searchKeyword(e){
        window.localStorage.setItem("search_keyword", e.target.value);
    }

    return(
        <>
            <div className="banner">
                    <div style={{float:'left'}} className="left_menu">
                        <IconButton style={{float:'left'}} className="menuButton" onClick={showSidebar}>
                            <MenuIcon/>
                        </IconButton>
                        <IconButton style={{float:'left'}} className="menuButton">
                            <SearchOutlinedIcon/>
                        </IconButton>
                        <form style={{float:'left'}} noValidate action="/search-keyword" autoComplete="off">
                            <TextField id="standard-search" label="Search" type="search" onChange={searchKeyword} style={{width:'100px'}}/>
                        </form>
                    </div>
                    <div className="mid_menu">
                    <img
                        src={ Logo }
                        style={{height:"50px"}}
                        alt='testA' />
                    </div>
                    <div className="right_menu">
                    <IconButton className="menuButton">
                        <ShoppingCartOutlinedIcon/>
                    </IconButton>
                    </div>
            </div>
            <nav className={sidebar ? "nav-menu active":"nav-menu"}>
                <ul className="nav-menu-items">
                    <li className="navbar-toggle">
                        <IconButton className="menuButton" onClick={showSidebar}>
                            <CloseIcon/>
                        </IconButton>
                    </li>
                    <form noValidate action="/search-keyword" autoComplete="off" style={{width:'150px', padding: '8px 0px 8px 30px'}}>
                        <TextField id="standard-search" label="Search" type="search" onChange={searchKeyword} style={{width:'150px'}}/>
                    </form>
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