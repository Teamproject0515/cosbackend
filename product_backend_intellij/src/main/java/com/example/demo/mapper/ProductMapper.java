package com.example.demo.mapper;

import com.example.demo.vo.ProductColorVO;
import com.example.demo.vo.ProductVO;
import com.example.demo.vo.UserColorVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ProductMapper {
//    List<ProductVO> productList();
    List<ProductColorVO> productColorList();
    ProductVO fetchProductByID(int product_seq);
    List<ProductColorVO> productCategory(String product_category);

}
