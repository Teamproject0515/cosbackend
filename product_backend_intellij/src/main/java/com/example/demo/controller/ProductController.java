package com.example.demo.controller;

import com.example.demo.mapper.ProductMapper;
<<<<<<< HEAD
import com.example.demo.vo.*;
=======
import com.example.demo.vo.ProductColorTestVO;
import com.example.demo.vo.ProductColorVO;
import com.example.demo.vo.ProductVO;
import com.example.demo.vo.UserColorVO;
>>>>>>> f77bc0fcafa0911896ba28ed678a72fd782ed4c1
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    ProductMapper productMapper;

    @GetMapping
<<<<<<< HEAD
    public List<ProductVO> productColorList(){
        System.out.println("productList Success");
        return productMapper.productList();
=======
    public List<ProductColorVO> productColorList(){
        System.out.println("ProductColorVOList Success!");
        return productMapper.productColorList();
>>>>>>> f77bc0fcafa0911896ba28ed678a72fd782ed4c1
    }

    @GetMapping("/{product_seq}")
    public ProductVO fetchProductByID(@PathVariable int product_seq){
        ProductVO fetchProduct = productMapper.fetchProductByID(product_seq);
        System.out.println("fetchProductById Success!");
        return fetchProduct;
    }

<<<<<<< HEAD
    @GetMapping("/{product_category}/{product_pageNum}/{select_color}/{select_size}")
    public List<ProductColorLastVO> productCategory(@PathVariable String product_category, @PathVariable int product_pageNum, @PathVariable String select_color, @PathVariable String select_size){
        ProductColorLastVO productColorLastVO = new ProductColorLastVO();
        productColorLastVO.setProduct_category(product_category);
        productColorLastVO.setProduct_pageNum(product_pageNum);
        productColorLastVO.setSelect_color(select_color);
        productColorLastVO.setSelect_size(select_size);
        System.out.println("Product Category Success");
        return productMapper.productCategory2(productColorLastVO);
        // 얘는 지금 리스트형태의 객체를 들고 있다. 1페이지를 누르게되면 1값이 넘어오고 rownum이 1~10인 애들이 출력되서 가야하고, 2누르면 11~20...
    }

    @GetMapping("/color/{SEQ}")
    public List<ColorVO> color(@PathVariable int SEQ){
        System.out.println("color Success");
        return productMapper.color(SEQ);
    }

    @GetMapping("/colorList")
    public List<ProductColorLastVO> colorLast(){
        System.out.println("colorLast Success");
        return productMapper.colorLast();
=======
    @GetMapping("/category/{product_category}")
    public List<ProductColorTestVO> productCategory(@PathVariable String product_category){
        System.out.println("Product Category Success!");
        return productMapper.productCategory(product_category);
>>>>>>> f77bc0fcafa0911896ba28ed678a72fd782ed4c1
    }
}
