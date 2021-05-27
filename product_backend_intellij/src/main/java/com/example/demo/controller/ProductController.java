package com.example.demo.controller;

import com.example.demo.mapper.ProductMapper;
import com.example.demo.vo.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    ProductMapper productMapper;

//    @GetMapping
//    public List<ProductVO> productList(){
//        System.out.println("222");
//        return productMapper.productList();
//    }

    @GetMapping
    public List<ProductVO> productColorList(){
        System.out.println("productList Success");
        return productMapper.productList();
    }

    @GetMapping("/{product_seq}")
    public ProductVO fetchProductByID(@PathVariable int product_seq){
        ProductVO fetchProduct = productMapper.fetchProductByID(product_seq);
        return fetchProduct;
    }

    @GetMapping("/category/{product_category}")
    public List<ProductColorLastVO> productCategory(@PathVariable String product_category){
        System.out.println("Product Category Success");
        return productMapper.productCategory(product_category);
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
    }
}