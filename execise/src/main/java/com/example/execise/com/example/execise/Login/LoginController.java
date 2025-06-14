package com.example.execise.Login;

import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin
@RestController
@RequestMapping("api/login")

public class LoginController {
    

    private final LoginServices loginServices;

    public LoginController(LoginServices loginServices){
        this.loginServices = loginServices;
    }
@GetMapping("/authenticated")
    public ResponseEntity<List<Map<String ,String>>> login(@RequestParam String username,@RequestParam String password){
        List<Map<String ,String>> login = loginServices.login(username, password);
        return new ResponseEntity<>(login,HttpStatus.OK);
    }
}
