package com.example.demo.controller;

import com.example.demo.service.ProductService;
import com.example.demo.vo.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    ProductService productService;


    @GetMapping("/{product_seq}")
    public ProductVO ProductByID(@PathVariable int product_seq){
        return productService.ProductByID(product_seq);
    }

    @GetMapping("/{product_pageNum}/{product_gender}/{product_category}/{select_color}/{select_size}")
    public List<ProductVO> productCategory(ProductVO productVO){
        return productService.productCategory(productVO);
    }

    @GetMapping("/{product_gender}/{product_category}/{select_color}/{select_size}")
    public int findPageNum(ProductVO productVO){
        if((productService.findPageNum(productVO)%12)==0){
            return productService.findPageNum(productVO)/12;
        }else{
            return productService.findPageNum(productVO)/12+1;
        }
    }
}