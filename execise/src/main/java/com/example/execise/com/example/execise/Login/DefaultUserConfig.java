package com.example.execise.Login;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DefaultUserConfig {

    @Bean
    public CommandLineRunner insertDefaultUser(LoginRepository loginRepository) {
        return args -> {
            String defaultUsername = "asma";
            String defaultPassword = "12345";

            if (!loginRepository.existsByUsername(defaultUsername)) {
                loginRepository.save(new Login(defaultUsername, defaultPassword));
                System.out.println("✅ Default user inserted");
            } else {
                System.out.println("ℹ️ Default user already exists");
            }
        };
    }
}
