package com.example.execise.Login;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class LoginServices {
    @Autowired
    private final LoginRepository loginRepository;

    public LoginServices(LoginRepository loginRepository){
        this.loginRepository = loginRepository;
    }
// Login Function services 
public List<Map<String ,String>> login(String username,String password){
    List<Map<String ,String>> login =this.loginRepository.login(username, password);
    return login;
}
}
