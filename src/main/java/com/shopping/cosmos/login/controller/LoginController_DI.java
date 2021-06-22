package com.shopping.cosmos.login.controller;

import com.shopping.cosmos.login.service.LoginService_DI;
import com.shopping.cosmos.login.vo.UserVO_DI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600, allowCredentials = "true")
@RestController
@RequestMapping("/cosmos")
public class LoginController_DI {

    @Autowired
    private LoginService_DI loginService;

    /*@Autowired
    public LoginController(LoginService loginService) {
     this.loginService = loginService;
    }*/

    /*연결확인 위한 메소드*/
    @GetMapping("/{id}/{pw}")
    public int login(@PathVariable String id,@PathVariable String pw){
        UserVO_DI vo = new UserVO_DI();
        vo.setUser_email(id);
        vo.setUser_password(pw);
        vo.setUser_role("User");
        return loginService.getUserCntByPass(vo);
    }

    /*로그인 후 UserVO 객체 리턴*/
    @PostMapping("/signIn")
    public UserVO_DI signIn(@RequestBody UserVO_DI user, HttpSession session, HttpServletResponse response){
        UserVO_DI vo;
        try{
            System.out.println("로그인 시도");
            if(loginService.getUserCntByPass(user) >0){
               /* UserVO 객체 받음*/
                vo = loginService.getLogin(user);
                if(vo != null){
                   /* 세션, 쿠키 생성*/
                    this.sessionCreated(vo, session, response);
                    System.out.println("로그인 성공:"+ vo);
                    return vo;
                }else return null;
            }else return null;

        }catch(Exception e){
            e.printStackTrace();
        }
        return null;
    }

   /* 이메일(아이디) 찾기*/
    @PostMapping("/findEmail")
    public UserVO_DI findEmail(@RequestBody UserVO_DI user){
        UserVO_DI vo;
        try{
            System.out.println("이메일 찾기 시도");
            if(loginService.getEmailCnt(user)>0){
                vo = loginService.getEmail(user);
                if(vo != null){
                    System.out.println("이메일 찾기 성공:"+vo);
                    return vo;
                }else return null;
            }else return null;

        }catch(Exception e){
            e.printStackTrace();
        }
        return null;
    }

    /*비밀번호 찾기*/
    @PostMapping("/findPW")
    public UserVO_DI findPassword(@RequestBody UserVO_DI user){
        UserVO_DI vo;
        try{
            System.out.println("비밀번호 찾기 시도");
            if(loginService.getPWCnt(user)>0){
                vo = loginService.getPassword(user);
                if(vo != null){
                    System.out.println("비밀번호 찾기 성공");
                    return vo;
                }else return null;
            }else return null;

        }catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

    @GetMapping("/signOut/{user_email}")
    public void signOut(@PathVariable String user_email, HttpServletRequest request, HttpServletResponse response){
        try {
            //기존의 세션값 불러옴
            HttpSession session = request.getSession(false);
            //세션 삭제
            session.invalidate();
            //기존 세션 JSESSIONID 구해서 로그인 했을때 생성했던 쿠키 동일하게 만들기
            String sessionId = session.getId();
            Cookie cookie = new Cookie("sessionId", sessionId);
            //유효시간 0으로 만들어서 response
            cookie.setMaxAge(0);
            response.addCookie(cookie);
            System.out.println("로그아웃 성공");
        }catch(Exception e){
            e.printStackTrace();
        }
    }

    /*브라우저 Cookie에서 session ID 전달 받아서 session 확인*/
    @GetMapping("/checkSession")
    public String checkSession( HttpServletRequest request) {
        try {
            //기존 세션값만 받아옴
            HttpSession session = request.getSession(false);
            //JSESSIONID 받아서 쿠키에 저장
            String sessionId = session.getId();
            Cookie[] cookies = request.getCookies();
            //로그인 시에 쿠키에 JSESSIONID 저장했음 비교해서 확인
            if (cookies != null && cookies.length > 0) {
                for (int i = 0; i < cookies.length; i++) {
                    System.out.println(cookies[i].getName() + "=" + cookies[i].getValue());
                    if (cookies[i].getValue() == sessionId) break;
                }
                return "true";
            } else {
                System.out.println("세션 없음");
                return "false";
            }
        }catch (Exception e){

            System.out.println("checkSession 오류 기존 세션없음");
            return "false";
        }
    }

    public void sessionCreated(UserVO_DI vo, HttpSession session, HttpServletResponse response) {
        try {
            String sessionId = session.getId();
            /* 세션 유효시간 정하기 (/s)*/
            session.setMaxInactiveInterval(1800);
            System.out.println("세션 생성 완료:" + session + ":" + sessionId);

            /* 세션에 아이디 저장*/
            String user_email = vo.getUser_email();
            session.setAttribute("user_email",user_email);

            Cookie cookie = new Cookie("sessionId", sessionId);
            /*브라우저를 닫으면 쿠키 사라짐*/
            cookie.setMaxAge(1800);
            response.addCookie(cookie);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
