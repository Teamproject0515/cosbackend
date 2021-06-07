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
        System.out.println("회원 정보 수정 user_email : "+userVO.getUser_email());
        System.out.println("회원 정보 수정 change_email : "+userVO.getChange_email());
        System.out.println("회원 정보 수정 change_phone : "+userVO.getChange_phone());
        System.out.println("회원 정보 수정 change_password : "+userVO.getChange_password());
        System.out.println("회원 정보 수정 UpdateUserInfo Success!");
        userService.UpdateUserInfo(userVO);
    }

    @PostMapping("/deleteuserinfo")
    public void DeleteUserInfo(@RequestBody UserVO userVO){
        System.out.println("회원탈퇴 user_email : "+userVO.getUser_email());
        System.out.println("회원탈퇴 DeleteUserInfo Success!");
        userService.DeleteUserInfo(userVO);
    }

    @PostMapping("/insertuseraccount")
    public void InsertUserAccount(@RequestBody UserVO userVO){
        System.out.println("user account insert");
        System.out.println("회원 환불 계좌 등록 : "+userVO.getUser_email());
        System.out.println("회원 환불 계좌 등록 : "+userVO.getUser_name());
        System.out.println("회원 환불 계좌 등록 : "+userVO.getUser_bank());
        System.out.println("회원 환불 계좌 등록 : "+userVO.getUser_account());
        userService.InsertUserAccount(userVO);
    }

    @GetMapping("/useraccount/{user_email}")
    public UserVO UserAccount(@PathVariable String user_email){
        UserVO userVO = new UserVO();
        userVO.setUser_email(user_email);
        System.out.println("user account select");
        System.out.println("회원 환불 계좌 조회 : "+userVO.getUser_email());
        return userService.UserAccount(userVO);
    }

    @PostMapping("/updateuseraccount")
    public void UpdateUserAccount(@RequestBody UserVO userVO){
        System.out.println("user account select");
        System.out.println("회원 환불 계좌 수정 : "+userVO.getUser_email());
        System.out.println("회원 환불 계좌 수정 : "+userVO.getUser_name());
        System.out.println("회원 환불 계좌 수정 : "+userVO.getUser_bank());
        System.out.println("회원 환불 계좌 수정 : "+userVO.getUser_account());
        userService.UpdateUserAccount(userVO);
    }

    @PostMapping("/insertuseraccountpay")
    public void InsertUserAccountPAY(@RequestBody UserVO userVO){
        System.out.println("InsertUserAccountPAY success!");
        System.out.println("소득공제용 정보 입력 : "+userVO.getUser_email());
        System.out.println("소득공제용 정보 입력 : "+userVO.getUser_name());
        System.out.println("소득공제용 정보 입력 : "+userVO.getUser_phone());
        userService.InsertUserAccountPAY(userVO);
    }
}