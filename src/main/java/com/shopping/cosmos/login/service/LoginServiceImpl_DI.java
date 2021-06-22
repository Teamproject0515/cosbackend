package com.shopping.cosmos.login.service;


import com.shopping.cosmos.login.mapper.UserMapper_DI;
import com.shopping.cosmos.login.vo.UserVO_DI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginServiceImpl_DI implements LoginService_DI {

    @Autowired
    UserMapper_DI userMapper;

    @Override
    public int getUserCntByPass(UserVO_DI user) {
        return userMapper.getUserCntByPass(user);
    }

    @Override
    public UserVO_DI getUserByEmail(String user_email) {
        return userMapper.getUserByEmail(user_email);
    }

    @Override
    public UserVO_DI getLogin(UserVO_DI user) {
        return userMapper.getUser(user);
    }

    @Override
    public int getEmailCnt(UserVO_DI user) {
        return userMapper.getEmailCnt(user);
    }

    @Override
    public UserVO_DI getEmail(UserVO_DI user) {
            return userMapper.getEmail(user);
    }

    @Override
    public int getPWCnt(UserVO_DI user) {
        return userMapper.getPWCnt(user);
    }

    @Override
    public UserVO_DI getPassword(UserVO_DI user) {
        return userMapper.getPW(user);
    }




}





