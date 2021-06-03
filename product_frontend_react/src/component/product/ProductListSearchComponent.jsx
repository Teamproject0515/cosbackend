import React, {useState, useEffect} from 'react';
import ApiService from "../../ApiService";
import img01 from '../images/01.jpg';


import {Table, TableCell, TableRow, Typography, InputLabel, MenuItem, Select, FormControl, Grid, TextField} from '@material-ui/core';

function ProductListComponent(props){


    let [products, setproducts ] = useState([]);
    let [product_pageNum, setproduct_pageNum] = useState(1);
    let [product_gender, setproduct_gender] = useState(null);
    let [product_category, setproduct_category] = useState(null);
    let [select_color, setselect_color] = useState(null);
    let [select_size, setselect_size] = useState(null);
    let [total_pageNum, settotal_pageNum] = useState(1);
    let [search_keyword, setsearch_keyword] = useState(window.localStorage.getItem("search_keyword"));
    let [select_option, setselect_option] = useState(null);
    // let [productvo, setproductvo ] = useState([]);

    
    useEffect (() => {

        // setproductvo(product_pageNum, product_category)

        ApiService.productsCategory(product_pageNum, product_gender, product_category, select_color, select_size, search_keyword, select_option)
        .then( res => {
              setproducts(res.data);
              
        })
        .catch(err => {
            console.log('reloadProductList() Error!', err);
        })

        ApiService.findPageNum(product_gender, product_category, select_color, select_size, search_keyword)
        .then( res => {
                settotal_pageNum(res.data);
        })
        .catch(err => {
            console.log('findPageNum() Error!', err);
        })
        
    },[product_pageNum, product_gender, product_category, select_color, select_size, search_keyword, select_option]);

    // 옵션 선택시 선택된 name확인 후 해당 값 변경
    function selectOption(e){
        if(e.target.name === 'product_category'){
            setproduct_category(e.target.value);
        }else if(e.target.name === 'select_color'){
            setselect_color(e.target.value);
        }else if(e.target.name === 'select_size'){
            setselect_size(e.target.value);
        }else if(e.target.name === 'select_option'){
            setselect_option(e.target.value);
        }
        setproduct_pageNum(1);
    }

    /* 기존에 각각 select했던 메소드를 selectOption으로 통합 */

    // function selectGender(e){
    //     setproduct_gender(e.target.value); 
    //     setproduct_pageNum(1);
    // }

    // function selectCategory(e){
    //     setproduct_category(e.target.value);
    //     setproduct_pageNum(1);
    // }

    // function selectColor(e){
    //     setselect_color(e.target.value);
    //     setproduct_pageNum(1);
    // }

    // function selectSize(e){
    //     setselect_size(e.target.value);
    //     setproduct_pageNum(1);
    // }

    // 페이지 업
    function selectPageNumUp(){
        if(product_pageNum < total_pageNum){
            setproduct_pageNum(product_pageNum+1);
        }
    }

    // 페이지 다운
    function selectPageNumDown(){
        if(product_pageNum > 1){
            setproduct_pageNum(product_pageNum-1);
        }
    }

    // 선택한 상품의 상세 페이지로 이동
    function Productinfo(ID){
        window.localStorage.setItem("ProductID", ID);
        props.history.push('/product-detail');
    }


    return (
        <div style={{display:'flex', alignItems:'center', textAlign:'center', justifyContent:'center'}}>
            <Grid container spacing={3} style={{paddingLeft:'10px', paddingRight:'10px', minHeight:'800px', width:'100%', maxWidth:'1560px'}}>

                {/* 옵션 선택 사항 */}
                <Grid item xs={12}> 
                {/* <form noValidate autoComplete="off">
                    <TextField id="standard-search" label="Search field" type="search" />
                </form> */}

                    <Typography variant ="h5" style={{marginTop:'30px'}}>"{search_keyword}" 검색 결과</Typography>
                        
                    <div>
                        <FormControl style={{minWidth:'80px'}}>
                            <a href="http://localhost:3000/product-list"> <InputLabel>Clothing</InputLabel></a>
                        </FormControl>
                        <FormControl style={{minWidth:'80px'}}>
                            <a href="http://localhost:3000/accessories-list"> <InputLabel>Accessories</InputLabel></a>
                        </FormControl>
                    </div>

                    <hr style={{height:'1px', backgroundColor:'lightgray', border:'0px', opacity:'70%', margin:'50px 0px 10px 0px', paddingBottom:'0px'}}/>

                    <div style={{float:'left'}}>
                        <ul style={{paddingLeft:'0px', marginTop:'0px'}}>

                        {/* 성별 선택 - 필요없어짐 */}
                        {/* <FormControl style={{minWidth:'70px', marginLeft:'0px', textDecoration:'none', border:'0px'}}>
                            <InputLabel style={{fontSize:'14px', textDecoration:'none'}}>Gender</InputLabel>
                            <Select onChange={selectGender}>
                            <MenuItem value={'M'} style={{fontSize:'14px'}}>Man</MenuItem>
                            <MenuItem value={'W'} style={{fontSize:'14px'}}>Woman</MenuItem>
                            </Select>
                        </FormControl> */}

                        {/* 스타일 선택 */}
                        {/* <FormControl style={{minWidth:'60px', marginLeft:'20px'}}>
                            <InputLabel style={{fontSize:'14px'}}>Style</InputLabel>
                            <Select name='product_category' onChange={selectOption}>
                            <MenuItem value={'치마'} style={{fontSize:'14px'}}>치마</MenuItem>
                            <MenuItem value={'바지'} style={{fontSize:'14px'}}>바지</MenuItem>
                            <MenuItem value={'원피스'} style={{fontSize:'14px'}}>원피스</MenuItem>
                            <MenuItem value={'모자'} style={{fontSize:'14px'}}>모자</MenuItem>
                            </Select>
                        </FormControl> */}

                        {/* 컬러 선택 */}
                        <FormControl style={{minWidth:'55px'}}>
                            <InputLabel style={{fontSize:'14px'}}>Color</InputLabel>
                            <Select name='select_color' onChange={selectOption}>
                            <MenuItem value={'BLACK'} style={{fontSize:'12px'}}><div style={{fontSize:'14px'}}>Black</div></MenuItem>
                            <MenuItem value={'WHITE'}><div style={{fontSize:'14px'}}>White</div></MenuItem>
                            <MenuItem value={'RED'}><div style={{fontSize:'14px'}}>Red</div></MenuItem>
                            <MenuItem value={'YELLOW'}><div style={{fontSize:'14px'}}>Yellow</div></MenuItem>
                            <MenuItem value={'GREEN'}><div style={{fontSize:'14px'}}>Green</div></MenuItem>
                            </Select>
                        </FormControl>

                        {/* 사이즈 선택 */}
                        <FormControl style={{minWidth:'50px', marginLeft:'20px'}}>
                            <InputLabel style={{fontSize:'14px'}}>Size</InputLabel>
                            <Select name='select_size' onChange={selectOption}>
                            <MenuItem value={'XS'}><div style={{fontSize:'14px'}}>XS</div></MenuItem>
                            <MenuItem value={'S'}><div style={{fontSize:'14px'}}>S</div></MenuItem>
                            <MenuItem value={'M'}><div style={{fontSize:'14px'}}>M</div></MenuItem>
                            <MenuItem value={'L'}><div style={{fontSize:'14px'}}>L</div></MenuItem>
                            </Select>
                        </FormControl>

                        {/* 정렬 선택 */}
                        <FormControl style={{minWidth:'50px', marginLeft:'20px'}}>
                            <InputLabel style={{fontSize:'14px'}}>Sort</InputLabel>
                            <Select name='select_option' onChange={selectOption}>
                            <MenuItem value={'product_saled'}><div style={{fontSize:'14px'}}>Best Seller</div></MenuItem>
                            <MenuItem value={'product_seq'}><div style={{fontSize:'14px'}}>New Arrivals</div></MenuItem>
                            <MenuItem value={'product_low_price'}><div style={{fontSize:'14px'}}>Low Price</div></MenuItem>
                            <MenuItem value={'product_high_price'}><div style={{fontSize:'14px'}}>High Price</div></MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl style={{minWidth:'20px', marginLeft:'20px'}}>
                            <a href="http://localhost:3000/search-keyword"> <InputLabel style={{fontSize:'14px'}}>Reset</InputLabel></a>
                        </FormControl>
                        </ul>
                    </div>
                    
                    <div style={{float:'right'}}>
                        <ul style={{paddingRight:'0px', marginTop:'0px'}}>
                        <FormControl style={{minWidth:'35px'}}>
                            <InputLabel style={{fontSize:'30px'}}><buttion onClick={selectPageNumDown}>🠔</buttion></InputLabel>
                        </FormControl>

                        <FormControl style={{minWidth:'40px'}}>
                            <InputLabel style={{fontSize:'30px'}}><buttion onClick={selectPageNumUp}>🠖</buttion></InputLabel>
                        </FormControl>
                        </ul>
                    </div>
                    </Grid>




                    {/* 바디 */}
                    {products.map(product =>
                        <Grid item xs={6} sm={4} style={{margin:'0px'}}>
                            <Table style={{marginBottom:'30px'}}>     
                                <div align="right" onClick = {() => {Productinfo(product.product_seq)}}>
                                    <TableRow key={product.product_seq}>
                                        <TableCell component="th" scope="product" style={{border:'0px', padding:'0px'}}> <img src={img01} style={{width:'100%'}}/></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell alingn="right" style={{border:'0px'}}>{ product.product_title }</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell alingn="right" style={{border:'0px'}}>{ product.product_price }</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell alingn="right" style={{border:'0px'}}>

                                            {/* product안의 color배열을 다시 map해서 출력하는 것 */}
                                            {product.colorSet.map(color=>
                                                <div key={color.index}>
                                                    <div style={{marginRight:'3px', float:'left', width:'15px', height:'15px', backgroundColor:color}}></div>     
                                                </div>
                                            )}

                                            {/* color 출력 기존 방식 */}
                                            {/* <div style={{marginRight:'3px', float:'left', width:'15px', height:'15px', backgroundColor:product.colors[0]}}></div>     
                                            <div style={{marginRight:'3px', float:'left', width:'15px', height:'15px', backgroundColor:product.colors[1]}}></div>
                                            <div style={{marginRight:'3px', float:'left', width:'15px', height:'15px', backgroundColor:product.colors[2]}}></div>
                                            <div style={{marginRight:'3px', float:'left', width:'15px', height:'15px', backgroundColor:product.colors[3]}}></div>
                                            <div style={{marginRight:'3px', float:'left', width:'15px', height:'15px', backgroundColor:product.colors[4]}}></div>
                                            <div style={{marginRight:'3px', float:'left', width:'15px', height:'15px', backgroundColor:product.colors[5]}}></div>
                                            <div style={{marginRight:'3px', float:'left', width:'15px', height:'15px', backgroundColor:product.colors[6]}}></div>
                                            <div style={{marginRight:'3px', float:'left', width:'15px', height:'15px', backgroundColor:product.colors[7]}}></div>
                                            <div style={{marginRight:'3px', float:'left', width:'15px', height:'15px', backgroundColor:product.colors[8]}}></div>
                                            <div style={{marginRight:'3px', float:'left', width:'15px', height:'15px', backgroundColor:product.colors[9]}}></div>
                                            <div style={{marginRight:'3px', float:'left', width:'15px', height:'15px', backgroundColor:product.colors[10]}}></div>
                                            <div style={{marginRight:'3px', float:'left', width:'15px', height:'15px', backgroundColor:product.colors[11]}}></div> */}

                                        </TableCell>
                                    </TableRow>
                                </div>
                            </Table>
                        </Grid>
                    )}                    
                </Grid>
            </div>
    )
    
}




export default ProductListComponent;