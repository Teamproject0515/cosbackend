import React, { Component } from 'react';
import ApiService from "../../ApiService";
import Grid from '@material-ui/core/Grid';

import {Table,TableCell,TableRow,Typography, InputLabel, MenuItem, Select, FormControl} from '@material-ui/core';
import img01 from '../image/01.jpg';

class ProductListComponent extends Component{

    constructor(props){
        super(props);

        this.state = {
            products : [],
            SEQ : 0,
            product_pageNum : 1,
            product_gender : null,
            product_category : null,
            select_color : null,
            select_size : null

        }
        this.selectPageNumUp = this.selectPageNumUp.bind(this);
        this.selectPageNumDown = this.selectPageNumDown.bind(this);
        this.selectGender = this.selectGender.bind(this);
        this.selectCategory = this.selectCategory.bind(this);
        this.selectColor = this.selectColor.bind(this);
        this.selectSize = this.selectSize.bind(this);
        

    }

    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    
    // 페이지로 넘어오면 가장 먼저 실행되는 함수
    componentDidMount(){
        this.reloadProductList();
    }

    // 페이지로 넘어오면 products에 해당 페이지의 json을 가져오게 된다.
    reloadProductList = () => {
        
        ApiService.productsCategory(this.state.product_pageNum, this.state.product_gender, this.state.product_category, this.state.select_color, this.state.select_size)
        .then( res => {
            this.setState({
                products : res.data,
            });
        })
        .catch(err => {
            console.log('reloadProductList() Error!', err);
        })
    }

    // radio버튼을 클릭하게 되면, 해당 값이 넘어간다. 넘어간 값은 reloadProductList에서 파라미터로 넘긴다.

    selectGender(e){
        this.state.product_gender = e.target.value;
        this.reloadProductList();
    }

    selectCategory(e){
        this.state.product_category = e.target.value;
        this.reloadProductList();
    }

    selectColor(e){
        this.state.select_color = e.target.value;
        this.reloadProductList();
    }

    selectSize(e){
        this.state.select_size = e.target.value;
        this.reloadProductList();
    }

    selectPageNumUp(){
        this.state.product_pageNum = this.state.product_pageNum+1;
        this.reloadProductList();
    }

    selectPageNumDown(){
        if(this.state.product_pageNum > 1){this.state.product_pageNum = this.state.product_pageNum-1;}
        this.reloadProductList();
    }

    // 한개의 아이템을 클릭하게되면 해당 상세페이지로 이동해야한다. 그렇기 위해서 localStorage에 set으로 값을 담고, 그 값을 상세 페이지에 넘어가서 get으로 불러올 수 있게된다. 
    selectProduct = (SEQ) => {
        window.localStorage.setItem("ProductSEQ", SEQ);
        this.props.history.push('product-detail');
    }

    render(){
        return(
            <div>
                <div style={{}}>
                <Grid container spacing={3} style={{paddingLeft:'20px', paddingRight:'20px'}}>
                    <Grid item xs={12}> 
                    <Typography variant ="h5" style={{marginTop:'30px'}}>New Arrivals</Typography>
                        
                    <div>
                        <FormControl style={{minWidth:'80px', marginLeft:'0px'}}>
                            <a href="http://localhost:3000/product-list"> <InputLabel>Clothing</InputLabel></a>
                        </FormControl>
                        <FormControl style={{minWidth:'80px', marginLeft:'0px'}}>
                            <a href="http://localhost:3000/accessories-list"> <InputLabel>Accessories</InputLabel></a>
                        </FormControl>
                    </div>

                    <hr style={{height:'1px', backgroundColor:'lightgray', border:'0px', opacity:'70%', margin:'50px 20px 0px 20px'}}/>

                    <div style={{float:'left'}}>
                        <ul style={{paddingLeft:'20px'}}>
                        <FormControl style={{minWidth:'70px', marginLeft:'0px', textDecoration:'none', border:'0px'}}>
                            <InputLabel style={{fontSize:'14px', textDecoration:'none'}}>Gender</InputLabel>
                            <Select onChange={this.selectGender}>
                            <MenuItem value={'M'} style={{fontSize:'14px'}}>Man</MenuItem>
                            <MenuItem value={'W'} style={{fontSize:'14px'}}>Woman</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl style={{minWidth:'80px', marginLeft:'20px'}}>
                            <InputLabel style={{fontSize:'14px'}}>Category</InputLabel>
                            <Select onChange={this.selectCategory}>
                            <MenuItem value={'치마'} style={{fontSize:'14px'}}>치마</MenuItem>
                            <MenuItem value={'바지'} style={{fontSize:'14px'}}>바지</MenuItem>
                            <MenuItem value={'원피스'} style={{fontSize:'14px'}}>원피스</MenuItem>
                            <MenuItem value={'모자'} style={{fontSize:'14px'}}>모자</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl style={{minWidth:'60px', marginLeft:'20px'}}>
                            <InputLabel style={{fontSize:'14px'}}>Color</InputLabel>
                            <Select onChange={this.selectColor}>
                            <MenuItem value={'BLACK'} style={{fontSize:'14px'}}>Black</MenuItem>
                            <MenuItem value={'WHITE'} style={{fontSize:'14px'}}>White</MenuItem>
                            <MenuItem value={'RED'} style={{fontSize:'14px'}}>Red</MenuItem>
                            <MenuItem value={'YELLOW'} style={{fontSize:'14px'}}>Yellow</MenuItem>
                            <MenuItem value={'GREEN'} style={{fontSize:'14px'}}>Green</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl style={{minWidth:'50px', marginLeft:'20px'}}>
                            <InputLabel style={{fontSize:'14px'}}>Size</InputLabel>
                            <Select onChange={this.selectSize}>
                            <MenuItem value={'XS'} style={{fontSize:'14px'}}>XS</MenuItem>
                            <MenuItem value={'S'} style={{fontSize:'14px'}}>S</MenuItem>
                            <MenuItem value={'M'} style={{fontSize:'14px'}}>M</MenuItem>
                            <MenuItem value={'L'} style={{fontSize:'14px'}}>L</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl style={{minWidth:'20px', marginLeft:'20px'}}>
                            <a href="http://localhost:3000/product-list"> <InputLabel style={{fontSize:'14px'}}>Reset</InputLabel></a>
                        </FormControl>
                        </ul>
                    </div>
                    
                    <div style={{float:'right'}}>
                        <ul style={{paddingRight:'20px'}}>
                        <FormControl style={{minWidth:'50px'}}>
                            <buttion onClick={this.selectPageNumDown}><InputLabel style={{fontSize:'14px'}}>이전</InputLabel></buttion>
                        </FormControl>

                        <FormControl style={{minWidth:'50px'}}>
                            <buttion onClick={this.selectPageNumUp}><InputLabel style={{fontSize:'14px'}}>다음</InputLabel></buttion>
                        </FormControl>
                        </ul>
                    </div>

                    </Grid>

                    {this.state.products.map(product =>
                    <Grid item xs={6} sm={4}>
                        <Table style={{marginBottom:'30px'}}>          
                                    <div align="right" onClick = {() => {this.selectProduct(product.product_seq)}}>

                                    <TableRow key={product.product_seq}>
                                        <TableCell component="th" scope="product" style={{border:'0px'}}> <img src={img01} style={{width:'100%'}}/></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell alingn="right" style={{border:'0px'}}>{ product.product_title }</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell alingn="right" style={{border:'0px'}}>{ product.product_price }</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell alingn="right" style={{border:'0px'}}>
                                            <div style={{marginRight:'3px', float:'left', width:'15px', height:'15px', backgroundColor:product.colors[0]}}></div>     
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
                                            <div style={{marginRight:'3px', float:'left', width:'15px', height:'15px', backgroundColor:product.colors[11]}}></div>
                                        </TableCell>
                                    </TableRow>
                                    </div>
                        </Table>
                    </Grid>
                )}
                </Grid>
                </div>
            </div>
        );
    }
}

const style = {
    display: 'flex',
    justifyContent: 'center'
}

export default ProductListComponent;