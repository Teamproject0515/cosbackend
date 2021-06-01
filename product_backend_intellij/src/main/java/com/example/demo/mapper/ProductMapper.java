package com.example.demo.mapper;

import com.example.demo.vo.*;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ProductMapper {
    ProductVO fetchProductByID(int product_seq);
    List<ProductVO> productCategory(ProductVO productVO);
    int findPageNum(ProductVO productVO);
}