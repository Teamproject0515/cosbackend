package com.shopping.cosmos.login.service;


import com.shopping.cosmos.login.mapper.UserMapper;
import com.shopping.cosmos.login.vo.UserVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginServiceImpl implements LoginService{

    @Autowired
    UserMapper userMapper;

    @Override
    public int getUserCntByPass(UserVO user) {
        return userMapper.getUserCntByPass(user);
    }

    @Override
    public UserVO getUserByEmail(String user_email) {
        return userMapper.getUserByEmail(user_email);
    }

    @Override
    public UserVO getLogin(UserVO user) {
        return userMapper.getUser(user);
    }

    @Override
    public int getEmailCnt(UserVO user) {
        return userMapper.getEmailCnt(user);
    }

    @Override
    public UserVO getEmail(UserVO user) {
            return userMapper.getEmail(user);
    }

    @Override
    public int getPWCnt(UserVO user) {
        return userMapper.getPWCnt(user);
    }

    @Override
    public UserVO getPassword(UserVO user) {
        return userMapper.getPW(user);
    }




}





