package com.example.demo.service;

import com.example.demo.mapper.ProductMapper;
import com.example.demo.vo.ProductVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService{

    @Autowired
    ProductMapper productMapper;


    @Override
    public ProductVO fetchProductByID(int product_seq) {
        return productMapper.fetchProductByID(product_seq);
    }

    @Override
    public List<ProductVO> productCategory(ProductVO productVO) {
        return productMapper.productCategory(productVO);
    }

    @Override
    public int findPageNum(ProductVO productVO) {
        return productMapper.findPageNum(productVO);
    }
}
