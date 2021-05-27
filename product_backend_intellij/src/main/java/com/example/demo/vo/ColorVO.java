package com.example.demo.vo;

import lombok.Data;

@Data
public class ColorVO {

    int product_seq;
    String product_color;
    String[] colors;

    public void setProduct_color(String product_color) {
        colors=product_color.split(",");
    }
}