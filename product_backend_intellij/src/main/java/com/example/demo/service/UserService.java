package com.example.demo.service;

import com.example.demo.vo.UserVO;

import java.util.List;

public interface UserService {

    // 해당 유저 아이디에 맞는 유저 정보 들고오기
    public UserVO UserByID(String user_email);
    
    // 해당 유저의 주소 모두 들고오기
    public List<UserVO> UserAddressList(String user_email);

    // 해당 유저의 정보 수정
    public void UpdateUserInfo(UserVO userVO);

    // 해당 유저 회원 탈퇴
    public void DeleteUserInfo(UserVO userVO);
}
