import React, { useState } from "react";
import "./css/Topbig.css"
import { Button } from "@material-ui/core";
import Hnmain from "./images/hnmmain.jpg"
import { withRouter } from 'react-router-dom'

function Topbig(props){

    function selectCategoryList(findGender){
        window.localStorage.setItem("findGender", findGender);
        props.history.push('/product-list');
    }

    return(
        <div className="top-wrapper">
            <div className="top-image">
                <img src={Hnmain}/>
            </div>
            <div className="top-in">
                <h1>A summer in style</h1>
                <h3>절제된 감각으로 완성한 뉴 시즌 컬랙션</h3>
                <div>
                    <Button variant="contained" color="white" onClick = {() => {selectCategoryList('W')}}>여성 컬랙션</Button>
                </div>
                <div>
                    <Button variant="contained" color="white" onClick = {() => {selectCategoryList('M')}}>남성 컬랙션</Button>
                </div>
            </div>
        </div>
    );
}
// export default Topbig;
export default withRouter(Topbig);

