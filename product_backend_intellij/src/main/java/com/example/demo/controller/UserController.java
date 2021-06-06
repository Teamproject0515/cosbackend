package com.example.demo.controller;

import com.example.demo.service.UserService;
import com.example.demo.vo.UserVO;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/mycos")
public class UserController {

    @Autowired
    UserService userService;


    @GetMapping("/userinfo/{user_email}")
    public UserVO UserByID(@PathVariable String user_email){
        System.out.println("UserInfo Success!");
        return userService.UserByID(user_email);
    }

    @GetMapping("/useraddressinfo/{user_email}")
    public List<UserVO> UserAddressList(@PathVariable String user_email){
        System.out.println("UserAddressInfo Success!");
        return userService.UserAddressList(user_email);
    }

    @PostMapping("/updateuserinfo")
    public void UpdateUserInfo(@RequestBody UserVO userVO){
        System.out.println("user_email : "+userVO.getUser_email());
        System.out.println("change_email : "+userVO.getChange_email());
        System.out.println("change_phone : "+userVO.getChange_phone());
        System.out.println("change_password : "+userVO.getChange_password());
        System.out.println("UpdateUserInfo Success!");
        userService.UpdateUserInfo(userVO);
    }
}