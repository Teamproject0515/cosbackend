package com.example.demo.controller;

import com.example.demo.mapper.ProductMapper;
import com.example.demo.service.ProductService;
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
    ProductService productService;


    @GetMapping("/{product_seq}")
    public ProductVO fetchProductByID(@PathVariable int product_seq){
        return productService.fetchProductByID(product_seq);
    }

    @GetMapping("/{product_pageNum}/{product_gender}/{product_category}/{select_color}/{select_size}")
    public List<ProductColorLastVO> productCategory(@PathVariable int product_pageNum, @PathVariable String product_gender, @PathVariable String product_category, @PathVariable String select_color, @PathVariable String select_size){
        ProductColorLastVO productColorLastVO = new ProductColorLastVO();
        productColorLastVO.setProduct_pageNum(product_pageNum);
        productColorLastVO.setProduct_gender(product_gender);
        productColorLastVO.setProduct_category(product_category);
        productColorLastVO.setSelect_color(select_color);
        productColorLastVO.setSelect_size(select_size);
        return productService.productCategory(productColorLastVO);
    }

    @GetMapping("/{product_gender}/{product_category}/{select_color}/{select_size}")
    public int findPageNum(@PathVariable String product_gender, @PathVariable String product_category, @PathVariable String select_color, @PathVariable String select_size){
        ProductColorLastVO productColorLastVO = new ProductColorLastVO();
        productColorLastVO.setProduct_gender(product_gender);
        productColorLastVO.setProduct_category(product_category);
        productColorLastVO.setSelect_color(select_color);
        productColorLastVO.setSelect_size(select_size);
        if((productService.findPageNum(productColorLastVO)%12)==0){
            return productService.findPageNum(productColorLastVO)/12;
        }else{
            return productService.findPageNum(productColorLastVO)/12+1;
        }
    }
}