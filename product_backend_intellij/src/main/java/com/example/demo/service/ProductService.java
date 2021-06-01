package com.example.demo.service;

import com.example.demo.vo.ProductColorLastVO;
import com.example.demo.vo.ProductVO;

import java.util.List;

public interface ProductService {
    public ProductVO fetchProductByID(int product_seq);
    public List<ProductColorLastVO> productCategory(ProductColorLastVO productColorLastVO);
    public int findPageNum(ProductColorLastVO productColorLastVO);
}
