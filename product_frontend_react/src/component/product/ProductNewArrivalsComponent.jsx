import React, {useState, useEffect} from 'react';
import ApiService from "../../ApiService";
import new01 from '../images/new01.jpg';
import new02 from '../images/new02.jpg';
import new03 from '../images/new03.jpg';
import new04 from '../images/new04.jpg';
import new05 from '../images/new05.jpg';
import new06 from '../images/new06.jpg';
import new07 from '../images/new07.jpg';
import new08 from '../images/new08.jpg';

import {Table, TableCell, TableRow, Typography, InputLabel, MenuItem, Select, FormControl, Grid, TextField} from '@material-ui/core';

function ProductListComponent(props){

    let [products, setproducts ] = useState([]);
    let [product_pageNum, setproduct_pageNum] = useState(1);
    let [product_gender, setproduct_gender] = useState(null);
    let [product_category, setproduct_category] = useState(null);
    let [select_color, setselect_color] = useState(null);
    let [select_size, setselect_size] = useState(null);
    let [total_pageNum, settotal_pageNum] = useState(1);
    let [search_keyword, setsearch_keyword] = useState(null);
    let [select_option, setselect_option] = useState(null);

    function selectAll(selectGender){
        window.localStorage.setItem("selectGender", selectGender);
        window.localStorage.setItem("selectOption", 'product_seq');
        props.history.push('/product-list');
    }

    function selectAccessory(selectGender){
        window.localStorage.setItem("selectGender", selectGender);
        window.localStorage.setItem("selectCategory", '악세사리');
        window.localStorage.setItem("selectOption", 'product_seq');
        props.history.push('/accessories-list');
    }

    function selectAllList(selectGender){
        window.localStorage.setItem("selectGender", selectGender);
        window.localStorage.setItem("selectOption", null);
        props.history.push('/product-list');
    }

    function selectMagazine(){
        props.history.push('/magazine');
    }


    return (
        <div style={{display:'flex', alignItems:'center', textAlign:'center', justifyContent:'center'}}>
            <Grid container spacing={3} style={{ paddingLeft:'10px', paddingRight:'10px', minHeight:'800px', width:'100%', maxWidth:'1560px'}}>

                {/* 옵션 선택 사항 */}
                <Grid item xs={12}> 
                    <Typography variant ="h5" style={{margin:'30px 0px 30px 0px'}}>New Arrivals</Typography>
                </Grid>


                    {/* 바디 여성 상품 */}
                        <Grid item xs={6} sm={3} style={{margin:'0px'}}>
                            <Table style={{marginBottom:'30px'}}>     
                                <div align="right" onClick = {() => {selectAll('W')}}>
                                    <TableRow>
                                        <TableCell component="th" scope="product" style={{border:'0px', padding:'0px'}}> <img src={new01} style={{width:'100%'}}/></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell alingn="right" style={{border:'0px', fontSize:'12px', padding:'10px 0px 10px 0px'}}>WOMEN: NEW ARRIVALS</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell alingn="right" style={{border:'0px', fontSize:'12px', padding:'10px 0px 10px 0px'}}>쇼핑하기</TableCell>
                                    </TableRow>
                                </div>
                            </Table>
                        </Grid>

                        <Grid item xs={6} sm={3} style={{margin:'0px'}}>
                            <Table style={{marginBottom:'30px'}}>     
                                <div align="right" onClick = {() => {selectAccessory('W')}}>
                                    <TableRow>
                                        <TableCell component="th" scope="product" style={{border:'0px', padding:'0px'}}> <img src={new02} style={{width:'100%'}}/></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell alingn="right" style={{border:'0px', fontSize:'12px', padding:'10px 0px 10px 0px'}}>WOMEN: NEW ACCESSORIES</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell alingn="right" style={{border:'0px', fontSize:'12px', padding:'10px 0px 10px 0px'}}>쇼핑하기</TableCell>
                                    </TableRow>
                                </div>
                            </Table>
                        </Grid>


                    {/* 남성 상품 */}
                        <Grid item xs={6} sm={3} style={{margin:'0px'}}>
                            <Table style={{marginBottom:'30px'}}>     
                                <div align="right" onClick = {() => {selectAll('M')}}>
                                    <TableRow>
                                        <TableCell component="th" scope="product" style={{border:'0px', padding:'0px'}}> <img src={new03} style={{width:'100%'}}/></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell alingn="right" style={{border:'0px', fontSize:'12px', padding:'10px 0px 10px 0px'}}>MEN: NEW ARRIVALS</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell alingn="right" style={{border:'0px', fontSize:'12px', padding:'10px 0px 10px 0px'}}>쇼핑하기</TableCell>
                                    </TableRow>
                                </div>
                            </Table>
                        </Grid>

                        <Grid item xs={6} sm={3} style={{margin:'0px'}}>
                            <Table style={{marginBottom:'30px'}}>     
                                <div align="right" onClick = {() => {selectAccessory('M')}}>
                                    <TableRow>
                                        <TableCell component="th" scope="product" style={{border:'0px', padding:'0px'}}> <img src={new04} style={{width:'100%'}}/></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell alingn="right" style={{border:'0px', fontSize:'12px', padding:'10px 0px 10px 0px'}}>MEN: NEW ACCESSORIES</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell alingn="right" style={{border:'0px', fontSize:'12px', padding:'10px 0px 10px 0px'}}>쇼핑하기</TableCell>
                                    </TableRow>
                                </div>
                            </Table>
                        </Grid>

                        <Grid item xs={12}> 
                        <hr style={{height:'1px', backgroundColor:'lightgray', border:'0px', opacity:'70%', margin:'50px 0px 50px 0px', paddingBottom:'0px'}}/>
                        <Typography variant ="h5" style={{margin:'70px 0px 40px 0px'}}>더 많은 아이템 살펴보기</Typography>
                        </Grid>

                        <Grid item xs={6} sm={3} style={{margin:'0px'}}>
                            <Table style={{marginBottom:'30px'}}>     
                                <div align="right" onClick = {() => {selectAllList('W')}}>
                                    <TableRow>
                                        <TableCell component="th" scope="product" style={{border:'0px', padding:'0px'}}> <img src={new05} style={{width:'100%'}}/></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell alingn="right" style={{border:'0px', fontSize:'12px', padding:'10px 0px 10px 0px'}}>WOMEN'S COLLECTION</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell alingn="right" style={{border:'0px', fontSize:'12px', padding:'10px 0px 10px 0px'}}>여성 컬렉션</TableCell>
                                    </TableRow>
                                </div>
                            </Table>
                        </Grid>

                        <Grid item xs={6} sm={3} style={{margin:'0px'}}>
                            <Table style={{marginBottom:'30px'}}>     
                                <div align="right" onClick = {() => {selectAllList('M')}}>
                                    <TableRow>
                                        <TableCell component="th" scope="product" style={{border:'0px', padding:'0px'}}> <img src={new06} style={{width:'100%'}}/></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell alingn="right" style={{border:'0px', fontSize:'12px', padding:'10px 0px 10px 0px'}}>MEN'S COLLECTION</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell alingn="right" style={{border:'0px', fontSize:'12px', padding:'10px 0px 10px 0px'}}>남성 컬렉션</TableCell>
                                    </TableRow>
                                </div>
                            </Table>
                        </Grid>

                        <Grid item xs={6} sm={3} style={{margin:'0px'}}>
                            <Table style={{marginBottom:'30px'}}>     
                                <div align="right" onClick = {() => {selectAllList(null)}}>
                                    <TableRow>
                                        <TableCell component="th" scope="product" style={{border:'0px', padding:'0px'}}> <img src={new07} style={{width:'100%'}}/></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell alingn="right" style={{border:'0px', fontSize:'12px', padding:'10px 0px 10px 0px'}}>ALL COLLECTION</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell alingn="right" style={{border:'0px', fontSize:'12px', padding:'10px 0px 10px 0px'}}>ALL PRODUCT</TableCell>
                                    </TableRow>
                                </div>
                            </Table>
                        </Grid>

                        <Grid item xs={6} sm={3} style={{margin:'0px'}}>
                            <Table style={{marginBottom:'30px'}}>     
                                <div align="right" onClick = {() => {selectMagazine()}}>
                                    <TableRow>
                                        <TableCell component="th" scope="product" style={{border:'0px', padding:'0px'}}> <img src={new08} style={{width:'100%'}}/></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell alingn="right" style={{border:'0px', fontSize:'12px', padding:'10px 0px 10px 0px'}}>FASHION FOR THE FUTURE</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell alingn="right" style={{border:'0px', fontSize:'12px', padding:'10px 0px 10px 0px'}}>더 보기</TableCell>
                                    </TableRow>
                                </div>
                            </Table>
                        </Grid>

                </Grid>
            </div>
    )
    
}




export default ProductListComponent;