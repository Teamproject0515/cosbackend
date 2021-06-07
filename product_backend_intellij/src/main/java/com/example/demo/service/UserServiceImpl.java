package com.example.demo.service;

import com.example.demo.mapper.UserMapper;
import com.example.demo.vo.UserVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    UserMapper userMapper;

    @Override
    public UserVO UserByID(String user_email) {
        return userMapper.UserByID(user_email);
    }

    @Override
    public List<UserVO> UserAddressList(String user_email) {
        return userMapper.UserAddressList(user_email);
    }

    @Override
    public void UpdateUserInfo(UserVO userVO) {
        userMapper.UpdateUserInfo(userVO);
    }

    @Override
    public void DeleteUserInfo(UserVO userVO) {
        userMapper.DeleteUserInfo(userVO);
    }


}
