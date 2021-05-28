import React, { Component } from 'react';
import ApiService from "../../ApiService";
import Grid from '@material-ui/core/Grid';

import {Table,TableCell,TableRow,Typography} from '@material-ui/core';


class ProductListComponent extends Component{

    constructor(props){
        super(props);

        this.state = {
            products : [],
<<<<<<< HEAD
            category : null,
            SEQ : 0,
            pageNum : 1

=======
            message : null,
            category : null,
            color : null
>>>>>>> f77bc0fcafa0911896ba28ed678a72fd782ed4c1
        }
        this.selectCategory = this.selectCategory.bind(this);
    }

    // 페이지로 넘어오면 가장 먼저 실행되는 함수
    componentDidMount(){
        this.reloadProductList();
    }

    // 페이지로 넘어오면 products에 해당 페이지의 json을 가져오게 된다.
    reloadProductList = () => {
        ApiService.productsCategory(this.state.category, this.state.pageNum)
        .then( res => {
            this.setState({
<<<<<<< HEAD
                products : res.data,
=======
                products : res.data
                
>>>>>>> f77bc0fcafa0911896ba28ed678a72fd782ed4c1
            });
        })
        .catch(err => {
            console.log('reloadProductList() Error!', err);
        })

        
    }

    // radio버튼을 클릭하게 되면, 해당 값이 넘어간다. 넘어간 값은 reloadProductList에서 파라미터로 넘긴다.
    selectCategory(e){
        this.state.category = e.target.value;
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
<<<<<<< HEAD
                    <Grid item xs={12}> 
                    <Typography variant ="h4" style={style}>Product List2</Typography>
                        <input type="radio" value="치마" name="category" onChange={this.selectCategory}/>치마
                        <input type="radio" value="바지" name="category" onChange={this.selectCategory}/>바지
                        <input type="radio" value="상의" name="category" onChange={this.selectCategory}/>상의
                        <input type="radio" value="하의" name="category" onChange={this.selectCategory}/>하의
                        <input type="radio" value="신발" name="category" onChange={this.selectCategory}/>신발
                        <input type="radio" value="모자" name="category" onChange={this.selectCategory}/>모자
                    </Grid>

                    {this.state.products.map(product =>
                    <Grid item xs={6} sm={4}>
                        <Table style={{backgroundColor:'lightorange'}}>          
                                    <div align="right" onClick = {() => {this.selectProduct(product.product_seq)}}>

                                    <TableRow key={product.product_seq}>
                                        <TableCell component="th" scope="product"> {product.product_img} </TableCell>
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
                                            
                                        {/* {this.state.SEQ = product.product_seq}
                                        <div align="right" onClick = {() => {this.selectColor(product.product_seq)}}>11</div>
                                            {this.state.colors.map(color => 
                                                <div key={color.product_seq}>
                                                    <div style={{width:'15px', height:'15px', backgroundColor:color.colors[0]}}></div>
                                                    <div style={{width:'15px', height:'15px', backgroundColor:color.colors[1]}}></div>
                                                    <div style={{width:'15px', height:'15px', backgroundColor:color.colors[2]}}></div>
                                                    <div style={{width:'15px', height:'15px', backgroundColor:color.colors[3]}}></div>
                                                    <div style={{width:'15px', height:'15px', backgroundColor:color.colors[4]}}></div>
                                                    <div style={{width:'15px', height:'15px', backgroundColor:color.colors[5]}}></div>
                                                    <div style={{width:'15px', height:'15px', backgroundColor:color.colors[6]}}></div>
                                                    <div style={{width:'15px', height:'15px', backgroundColor:color.colors[7]}}></div>
                                                    <div style={{width:'15px', height:'15px', backgroundColor:color.colors[8]}}></div>
                                                </div>
                                            )} */}
                                        </TableCell>
                                    </TableRow>
                                    </div>
                        </Table>
                    </Grid>
=======
                <Grid item xs={12}> 
                <Typography variant ="h4" style={style}>Product List</Typography>
                </Grid>

                <Grid item xs={12} style={{float:'left'}}> 

                <input type="radio" value="치마" name="category" onClick={this.selectCategory}/>치마
                <input type="radio" value="바지" name="category" onChange={this.selectCategory}/>바지
                <input type="radio" value="상의" name="category" onChange={this.selectCategory}/>상의
                <input type="radio" value="하의" name="category" onChange={this.selectCategory}/>하의
                <input type="radio" value="신발" name="category" onChange={this.selectCategory}/>신발
                <input type="radio" value="모자" name="category" onChange={this.selectCategory}/>모자
                </Grid>

                
                {this.state.products.map(product =>
                <Grid item xs={6} sm={4}>
                    <Table style={{backgroundColor:'orange'}}>          
                                <div alingn="right" onClick = {() => {this.selectProduct(product.product_seq)}}>

                                <TableRow key={product.product_seq}>
                                    
                                    <TableCell component="th" scope="product"> {product.product_img} </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell alingn="right">{ product.product_title }</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell alingn="right">{ product.product_price }</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell alingn="right">  
                                    <div style={{marginRight:'3px', float : 'left', width:'15px', height:'15px', backgroundColor:product.color1}}></div>
                                    <div style={{marginRight:'3px', float : 'left', width:'15px', height:'15px', backgroundColor:product.color2}}></div>
                                    <div style={{marginRight:'3px', float : 'left', width:'15px', height:'15px', backgroundColor:product.color3}}></div>
                                    <div style={{marginRight:'3px', float : 'left', width:'15px', height:'15px', backgroundColor:product.color4}}></div>
                                    <div style={{marginRight:'3px', float : 'left', width:'15px', height:'15px', backgroundColor:product.color5}}></div>
                                    <div style={{marginRight:'3px', float : 'left', width:'15px', height:'15px', backgroundColor:product.color6}}></div>
                                    <div style={{marginRight:'3px', float : 'left', width:'15px', height:'15px', backgroundColor:product.color7}}></div>
                                    <div style={{marginRight:'3px', float : 'left', width:'15px', height:'15px', backgroundColor:product.color8}}></div>
                                    <div style={{marginRight:'3px', float : 'left', width:'15px', height:'15px', backgroundColor:product.color9}}></div>
                                    <div style={{marginRight:'3px', float : 'left', width:'15px', height:'15px', backgroundColor:product.color10}}></div>
                                    <div style={{marginRight:'3px', float : 'left', width:'15px', height:'15px', backgroundColor:product.color11}}></div>
                                    <div style={{marginRight:'3px', float : 'left', width:'15px', height:'15px', backgroundColor:product.color12}}></div>
                                    </TableCell>
                                </TableRow>
                                </div>
                    </Table>
                </Grid>
>>>>>>> f77bc0fcafa0911896ba28ed678a72fd782ed4c1
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