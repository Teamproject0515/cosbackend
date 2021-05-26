package com.example.demo.mapper;

import com.example.demo.vo.ProductColorTestVO;
import com.example.demo.vo.ProductColorVO;
import com.example.demo.vo.ProductVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ProductMapper {
//    List<ProductVO> productList();
    List<ProductColorVO> productColorList();
    ProductVO fetchProductByID(int product_seq);
    List<ProductColorTestVO> productCategory(String product_category);

}
