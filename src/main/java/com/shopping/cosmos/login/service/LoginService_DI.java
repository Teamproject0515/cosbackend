package com.shopping.cosmos.login.service;

import com.shopping.cosmos.login.vo.UserVO_DI;

public interface LoginService_DI {
     public int getUserCntByPass(UserVO_DI user);
     public UserVO_DI getUserByEmail(String user_email);
     public UserVO_DI getLogin(UserVO_DI user);
     public int getEmailCnt(UserVO_DI user);
     public UserVO_DI getEmail(UserVO_DI user);
     public int getPWCnt(UserVO_DI user);
     public UserVO_DI getPassword(UserVO_DI user);

}
