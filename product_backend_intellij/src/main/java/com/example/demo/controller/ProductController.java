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
//    public List<ProductVO> productColorList(){
//        System.out.println("productList Success");
//        return productMapper.productList();
//    }

    @GetMapping("/{product_seq}")
    public ProductVO fetchProductByID(@PathVariable int product_seq){
        ProductVO fetchProduct = productMapper.fetchProductByID(product_seq);
        return fetchProduct;
    }

    @GetMapping("/{product_pageNum}/{product_gender}/{product_category}/{select_color}/{select_size}")
    public List<ProductColorLastVO> productCategory(@PathVariable int product_pageNum, @PathVariable String product_gender, @PathVariable String product_category, @PathVariable String select_color, @PathVariable String select_size){
        ProductColorLastVO productColorLastVO = new ProductColorLastVO();
        productColorLastVO.setProduct_pageNum(product_pageNum);
//        System.out.println("now page number : " + product_pageNum);
        productColorLastVO.setProduct_gender(product_gender);
//        System.out.println(product_gender);
        productColorLastVO.setProduct_category(product_category);
//        System.out.println(product_category);
        productColorLastVO.setSelect_color(select_color);
//        System.out.println(select_color);
        productColorLastVO.setSelect_size(select_size);
//        System.out.println(select_size);
//        System.out.println("Product Category Success");
        return productMapper.productCategory(productColorLastVO);
    }

    @GetMapping("/{product_gender}/{product_category}/{select_color}/{select_size}")
    public int findPageNum(@PathVariable String product_gender, @PathVariable String product_category, @PathVariable String select_color, @PathVariable String select_size){
//        System.out.println("findPageNum");
        ProductColorLastVO productColorLastVO = new ProductColorLastVO();
        productColorLastVO.setProduct_gender(product_gender);
//        System.out.println(product_gender);
        productColorLastVO.setProduct_category(product_category);
//        System.out.println(product_category);
        productColorLastVO.setSelect_color(select_color);
//        System.out.println(select_color);
        productColorLastVO.setSelect_size(select_size);
//        System.out.println(select_size);
        if((productMapper.findPageNum(productColorLastVO)%12)==0){
//            System.out.println("total page number : " + (productMapper.findPageNum(productColorLastVO)/12));
            return productMapper.findPageNum(productColorLastVO)/12;
        }else{
//            System.out.println("total page number : " + (productMapper.findPageNum(productColorLastVO)/12+1));
            return productMapper.findPageNum(productColorLastVO)/12+1;
        }
    }
//    @PostMapping
//    void productCategoryPost(@RequestBody ProductColorLastVO productColorLastVO){
//        System.out.println("Product Category Post Success");
//    }
}