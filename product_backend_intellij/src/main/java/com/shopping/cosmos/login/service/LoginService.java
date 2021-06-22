package com.shopping.cosmos.login.service;

import com.shopping.cosmos.login.vo.UserVO;

public interface LoginService {
     public int getUserCntByPass(UserVO user);
     public UserVO getUserByEmail(String user_email);
     public UserVO getLogin(UserVO user);
     public int getEmailCnt(UserVO user);
     public UserVO getEmail(UserVO user);
     public int getPWCnt(UserVO user);
     public UserVO getPassword(UserVO user);

}
