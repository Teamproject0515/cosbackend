package com.example.demo.mapper;

import com.example.demo.vo.ProductVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ProductMapper {
    List<ProductVO> productList();
    ProductVO fetchProductByID(int product_seq);
}
