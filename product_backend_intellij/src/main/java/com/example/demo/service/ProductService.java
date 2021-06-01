package com.example.demo.service;

import com.example.demo.vo.ProductVO;

import java.util.List;

public interface ProductService {
    public ProductVO fetchProductByID(int product_seq);
    public List<ProductVO> productCategory(ProductVO productVO);
    public int findPageNum(ProductVO productVO);
}
