package com.example.demo.vo;

import lombok.Data;

@Data
public class ProductVO {

    int rnum;
    int product_seq;
    String product_title;
    String product_content;
    int product_price;
    String product_img;
    String product_gender;
    String product_category;

    String product_color;
    String[] colors;

    String product_size;
    String[] sizes;

    int product_pageNum;

    String select_color;
    String select_size;


    public void setProduct_color(String product_color) {
        colors=product_color.split(",");
    }
    public void setProduct_size(String product_size) { sizes=product_size.split(","); }
}