package com.example.demo.vo;

import lombok.Data;

@Data
public class ProductVO {

    int product_seq;
    String product_title;
    int product_price;
    String product_color;
    String product_img;
    String product_gender;
    String product_size;
    int product_stock;
    int product_sale;
    String product_category;
    String product_content;
}