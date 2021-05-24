package com.example.demo.mapper;

import com.example.demo.vo.UserColorVO;
import com.example.demo.vo.UserVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface UserMapper {

    List<UserVO> userList();
    UserVO fetchUserByID(int id);
    void updateUser(UserVO user);
    void insertUser(UserVO user);
    void deleteUser(int id);

    List<UserColorVO> userColorList();
    List<UserColorVO> category(String firstname);

}
