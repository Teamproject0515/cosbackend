import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import ApiService from '../../ApiService';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));



export default function FullWidthGrid() {
  const classes = useStyles();
  const [products,setProduct] = useState([]);

  const loadProductList = () => {
    ApiService.fetchProducts()
    .then( res => {
      setProduct({
        products : res.data
      })
    })
  }








  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <button onClick={loadProductList}>리스트불러오기</button>
      <Grid  item xs={12}> <Typography variant ="h4" style={style}>Product List</Typography></Grid>

        <Grid item xs={6} sm={4}>
                <Table>
                    <TableBody>
                      {products.map(product =>
                            <TableRow key={product.product_seq}>
                                <TableCell alingn="right">{product.product_title}</TableCell>
                            </TableRow>
                            )}

                            <TableRow>
                                <TableCell alingn="right">상품 이름</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell alingn="right">상품 가격</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell alingn="right">상품 색상</TableCell>
                            </TableRow>
                    </TableBody>
                </Table>
        </Grid>
        <Grid item xs={6} sm={4}>
                <Table>
                    <TableBody>
                            <TableRow>
                                <TableCell alingn="right">이미지</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell alingn="right">상품 이름</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell alingn="right">상품 가격</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell alingn="right">상품 색상</TableCell>
                            </TableRow>
                    </TableBody>
                </Table>
        </Grid>
        <Grid item xs={6} sm={4}>
                <Table>
                    <TableBody>
                            <TableRow>
                                <TableCell alingn="right">이미지</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell alingn="right">상품 이름</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell alingn="right">상품 가격</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell alingn="right">상품 색상</TableCell>
                            </TableRow>
                    </TableBody>
                </Table>
        </Grid>
      </Grid>
    </div>
  );
}

const style = {
  display: 'flex',
  justifyContent: 'center'
}

