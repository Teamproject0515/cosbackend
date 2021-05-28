package com.example.demo.vo;

import lombok.Data;

@Data
public class ProductColorLastVO {

    int product_seq;
    String product_title;
    int product_price;
    String product_img;
    String product_gender;
    String product_size;
    int product_stock;
    int product_saled;
    String product_category;
    String product_content;
    String product_color;
    String product_size_1;
    int product_pageNum;
    String[] colors;
    String select_color;
    String select_size;


    public void setProduct_color(String product_color) {
        colors=product_color.split(",");
    }
}