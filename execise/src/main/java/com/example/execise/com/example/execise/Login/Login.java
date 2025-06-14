package com.example.execise.Login;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "login_table")
public class Login {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long user_id;
     @Column(nullable = false, unique = true)
    private String username ;
    @Column(nullable = false)
    private String password ;

    public Login() {}
       public Login(String username, String password) {
        this.username = username;
        this.password = password;
    }
}
