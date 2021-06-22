package com.shopping.cosmos.login.mapper;

import com.shopping.cosmos.login.vo.UserVO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper {

    //로그인 시 회원 유무 체크
    public int getUserCntByPass(UserVO user);
    //회원 정보 받기
    public UserVO getUser(UserVO user);
    //회원 정보 이메일로 찾기
    public UserVO getUserByEmail(String user_email);
    //아이디 찾기 체크
    public int getEmailCnt(UserVO user);
    //아이디 찾기 조건
    public UserVO getEmail(UserVO user);
    //비밀번호 찾기 체크
    public int getPWCnt(UserVO user);
    //비밀번호 찾기 조건
    public UserVO getPW(UserVO user);
}
