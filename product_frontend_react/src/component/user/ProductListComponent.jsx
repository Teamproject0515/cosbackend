import React, { Component } from 'react';
import ApiService from "../../ApiService";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';


class ProductListComponent extends Component{

    constructor(props){
        super(props);

        this.state = {
            products : [],
            message : null
        }
    }

    componentDidMount(){
        this.reloadProductList();
    }

    reloadProductList = () => {
        ApiService.fetchProducts()
        .then( res => {
            this.setState({
                products : res.data
            });
        })
        .catch(err => {
            console.log('reloadProductList() Error!', err);
        })
    }

    // deleteUser = (userID) => {
    //     ApiService.deleteUser(userID)
    //     .then( res => {
    //         this.setState({
    //             message : 'User Deleted Successfully.'
    //         });
    //         this.setState({
    //             users : this.state.users.filter(user =>
    //                 user.id !== userID)
    //         });
    //     })
    //     .catch(err =>{
    //         console.log('deleteUser() Error!', err);
    //     })
    // }

    // editUser = (ID) => {
    //     window.localStorage.setItem("userID", ID);
    //     this.props.history.push('/edit-user');
    // }

    // addUser = () => {
    //     window.localStorage.removeItem("userID");
    //     this.props.history.push('/add-user');
    // }

    selectProduct = (SEQ) => {
        window.localStorage.setItem("ProductSEQ", SEQ);
        this.props.history.push('product-detail');
    }


    render(){
        return(
            <div>
                <Typography variant ="h4" style={style}>Product List</Typography>
                <Table>
                    <TableHead>
                        <div>
                        <TableRow>
                            <TableCell alingn="right">이미지</TableCell>
                            <TableCell alingn="right">상품 이름</TableCell>
                            <TableCell alingn="right">가격</TableCell>
                            <TableCell alingn="right">색상</TableCell>
                        </TableRow>
                        </div>
                    </TableHead>
                    <TableBody>
                        
                        {this.state.products.map(product =>
                            <TableRow key={product.product_seq}>
                                <div alingn="right" onClick = {() => {this.selectProduct(product.product_seq)}}>
                                <TableCell component="th" scope="users"> {product.product_img} </TableCell>
                                <TableCell alingn="right">{ product.product_title }</TableCell>
                                <TableCell alingn="right">{ product.product_price }</TableCell>
                                <TableCell alingn="right">{ product.product_color }</TableCell>
                                </div>
                            </TableRow>
                            )}
                    </TableBody>
                </Table>
            </div>
        );
    }

}

const style = {
    display: 'flex',
    justifyContent: 'center'
}

const root = {
    root: {
        flexGrow: 1,
      },
}

export default ProductListComponent;