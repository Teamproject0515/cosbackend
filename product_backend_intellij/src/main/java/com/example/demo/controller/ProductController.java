package com.example.demo.controller;

import com.example.demo.mapper.ProductMapper;
import com.example.demo.vo.ProductVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    ProductMapper productMapper;

    @GetMapping
    public List<ProductVO> productList(){
//        System.out.println(userMapper.userList());
        System.out.println("222");
        return productMapper.productList();
    }

    @GetMapping("/{product_seq}")
    public ProductVO fetchProductByID(@PathVariable int product_seq){
//        System.out.println(productMapper.fetchProductByID(product_seq));
        ProductVO fetchProduct = productMapper.fetchProductByID(product_seq);
        return fetchProduct;
    }
}