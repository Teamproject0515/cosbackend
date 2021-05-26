package com.example.demo.controller;

import com.example.demo.mapper.ProductMapper;
import com.example.demo.vo.ProductColorTestVO;
import com.example.demo.vo.ProductColorVO;
import com.example.demo.vo.ProductVO;
import com.example.demo.vo.UserColorVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

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
    public List<ProductColorVO> productColorList(){
        System.out.println("222");
        return productMapper.productColorList();
    }

    @GetMapping("/{product_seq}")
    public ProductVO fetchProductByID(@PathVariable int product_seq){
        ProductVO fetchProduct = productMapper.fetchProductByID(product_seq);
        return fetchProduct;
    }

    @GetMapping("/category/{product_category}")
    public List<ProductColorTestVO> productCategory(@PathVariable String product_category){
        System.out.println("Product Category Success");
        return productMapper.productCategory(product_category);
    }
}
