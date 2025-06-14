package com.example.execise.Login;

import java.util.List;
import java.util.Map;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.JpaRepository;



public interface LoginRepository extends JpaRepository<Login,Long> {
    @Query(value = "select * from login_table where username = :username and password = :password",nativeQuery=true)
     List<Map<String,String>> login(String username,String password);
       boolean existsByUsername(String username);

}
