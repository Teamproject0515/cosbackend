package com.example.demo.vo;

import lombok.Data;

import java.sql.Date;

@Data
public class UserVO {
        // 유저 기본 정보 출력
        private String user_email;
        private String user_password;
        private String user_name;
        private String user_birthday;
        private String user_phone;
        private Date user_regdate;

        // 유저 주소 리스트 출력
        private String address_name;
        private int postcode;
        private String address;
        private String detailaddress;

}
