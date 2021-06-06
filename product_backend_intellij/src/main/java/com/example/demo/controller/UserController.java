package com.example.demo.controller;

import com.example.demo.service.UserService;
import com.example.demo.vo.UserVO;
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

    @GetMapping("/updateuserinfo/{user_email}/{change_email}/{change_phone}/{change_password}")
    public void UpdateUserInfo(@PathVariable String user_email, String change_email, String change_phone, String change_password){
        UserVO userVO = new UserVO();
        userVO.setUser_email(user_email);
        userVO.setChange_email(change_email);
        userVO.setChange_phone(change_phone);
        userVO.setChange_password(change_password);
        System.out.println("UpdateUserInfo Success!");
        userService.UpdateUserInfo(userVO);
    }
}