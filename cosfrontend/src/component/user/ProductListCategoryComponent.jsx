import React, { Component } from 'react';
import ApiService from "../../ApiService";
import Grid from '@material-ui/core/Grid';

import {Table,TableCell,TableRow,Typography} from '@material-ui/core';


class ProductListComponent extends Component{

    constructor(props){
        super(props);

        this.state = {
            products : [],
            category : null,
            SEQ : 0
        }
        this.selectCategory = this.selectCategory.bind(this);
    }

    componentDidMount(){
        this.reloadProductList();
    }

    reloadProductList = () => {
        ApiService.productsCategory(this.state.category)
        .then( res => {
            this.setState({
                products : res.data,
            });
        })
        .catch(err => {
            console.log('reloadProductList() Error!', err);
        })

        
    }

    selectCategory(e){
        this.state.category = e.target.value;
        this.reloadProductList();
    }


    selectProduct = (SEQ) => {
        window.localStorage.setItem("ProductSEQ", SEQ);
        this.props.history.push('product-detail');
    }

    // selectColor = (SEQ) => {
    //     ApiService.selectColorById(this.state.SEQ)
    //     .then( res => {
    //         this.setState({
    //             colors : res.data
    //         });
    //     })
    //     .catch(err => {
    //         console.log('selectColor() Error!', err);
    //     })
    // }

    render(){
        return(
            <div>
                <div style={{}}>
                <Grid container spacing={3}>
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
                                            <div style={{width:'15px', height:'15px', backgroundColor:product.colors[0]}}></div>     
                                            <div style={{width:'15px', height:'15px', backgroundColor:product.colors[1]}}></div>
                                            <div style={{width:'15px', height:'15px', backgroundColor:product.colors[2]}}></div>
                                            <div style={{width:'15px', height:'15px', backgroundColor:product.colors[3]}}></div>
                                            <div style={{width:'15px', height:'15px', backgroundColor:product.colors[4]}}></div>
                                            <div style={{width:'15px', height:'15px', backgroundColor:product.colors[5]}}></div>
                                            <div style={{width:'15px', height:'15px', backgroundColor:product.colors[6]}}></div>
                                            <div style={{width:'15px', height:'15px', backgroundColor:product.colors[7]}}></div>
                                            <div style={{width:'15px', height:'15px', backgroundColor:product.colors[8]}}></div>
                                            <div style={{width:'15px', height:'15px', backgroundColor:product.colors[9]}}></div>
                                            <div style={{width:'15px', height:'15px', backgroundColor:product.colors[10]}}></div>
                                            <div style={{width:'15px', height:'15px', backgroundColor:product.colors[11]}}></div>
                                            
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