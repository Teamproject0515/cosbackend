package com.example.demo.mapper;

<<<<<<< HEAD
import com.example.demo.vo.*;
=======
import com.example.demo.vo.ProductColorTestVO;
import com.example.demo.vo.ProductColorVO;
import com.example.demo.vo.ProductVO;
>>>>>>> f77bc0fcafa0911896ba28ed678a72fd782ed4c1
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ProductMapper {
//    List<ProductVO> productList();
    List<ProductVO> productList();
    ProductVO fetchProductByID(int product_seq);
<<<<<<< HEAD
    List<ProductColorLastVO> productCategory2(ProductColorLastVO productColorLastVO);
    List<ColorVO> selectColor(int SEQ);
    List<ColorVO> color(int SEQ);
    List<ProductColorLastVO> colorLast();
=======
    List<ProductColorTestVO> productCategory(String product_category);
>>>>>>> f77bc0fcafa0911896ba28ed678a72fd782ed4c1

}
