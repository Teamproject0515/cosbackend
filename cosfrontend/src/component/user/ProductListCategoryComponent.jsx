import React, { Component } from 'react';
import ApiService from "../../ApiService";
import Grid from '@material-ui/core/Grid';

import {Table,TableCell,TableRow,Typography} from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import img01 from '../image/01.PNG';

class ProductListComponent extends Component{


    constructor(props){
        super(props);

        this.state = {
            products : [],
            SEQ : 0,
            product_pageNum : 2,
            product_gender : null,
            product_category : null,
            select_color : null,
            select_size : null

        }
        this.selectPageNum = this.selectPageNum.bind(this);
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

    selectPageNum(e){
        this.state.product_pageNum = e.target.value;
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
                <Grid container spacing={3}>
                    <Grid item xs={12}> 
                    <Typography variant ="h4" style={style}>Product List2</Typography>
                        {/* <FormControl component="fieldset">
                            <FormLabel component="legend">Gender</FormLabel>
                            <FormControlLabel value="남자" control={<Radio />} label="남자" onClike={this.selectGender}/>
                            <FormControlLabel value="여자" control={<Radio />} label="여자" onClike={this.selectGender}/>
                        </FormControl>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Category</FormLabel>
                            <FormControlLabel value="치마" control={<Radio />} label="치마" onClike={this.selectCategory}/>
                            <FormControlLabel value="바지" control={<Radio />} label="바지" onClike={this.selectCategory}/>
                        </FormControl> */}
                        <input type="radio" value="남자" name="gender" onClick={this.selectGender}/>남자
                        <input type="radio" value="여자" name="gender" onChange={this.selectGender}/>여자<br/>
                        <input type="radio" value="치마" name="category" onClick={this.selectCategory}/>치마
                        <input type="radio" value="바지" name="category" onClick={this.selectCategory}/>바지
                        <input type="radio" value="상의" name="category" onClick={this.selectCategory}/>상의
                        <input type="radio" value="하의" name="category" onChange={this.selectCategory}/>하의
                        <input type="radio" value="신발" name="category" onChange={this.selectCategory}/>신발
                        <input type="radio" value="모자" name="category" onChange={this.selectCategory}/>모자<br/>
                        <input type="radio" value="black" name="color" onClick={this.selectColor}/>black
                        <input type="radio" value="white" name="color" onChange={this.selectColor}/>white
                        <input type="radio" value="green" name="color" onChange={this.selectColor}/>green
                        <input type="radio" value="yellow" name="color" onChange={this.selectColor}/>yellow
                        <input type="radio" value="blue" name="color" onChange={this.selectColor}/>blue<br/>
                        <input type="radio" value="S" name="Size" onClick={this.selectSize}/>S
                        <input type="radio" value="M" name="Size" onChange={this.selectSize}/>M
                        <input type="radio" value="L" name="Size" onChange={this.selectSize}/>L
                        <input type="radio" value="XL" name="Size" onChange={this.selectSize}/>XL<br/>
                        

                    </Grid>

                    {this.state.products.map(product =>
                    <Grid item xs={6} sm={4}>
                        <Table style={{backgroundColor:'lightorange'}}>          
                                    <div align="right" onClick = {() => {this.selectProduct(product.product_seq)}}>

                                    <TableRow key={product.product_seq}>
                                        <TableCell component="th" scope="product"> <img src= {img01}/> <br/> {product.product_img} </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell alingn="right">{ product.product_title }</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell alingn="right">{ product.product_price }</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell alingn="right">
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