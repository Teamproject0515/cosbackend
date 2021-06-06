package com.example.demo.mapper;

import com.example.demo.vo.UserVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface UserMapper {

    // 해당 회원의 정보 출력
    UserVO UserByID(String user_email);

    // 해당 회원의 주소 리스트 출력
    List<UserVO> UserAddressList(String user_email);

}