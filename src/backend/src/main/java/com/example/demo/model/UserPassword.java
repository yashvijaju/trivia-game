package com.example.demo.model;

public class UserPassword {
    private String username;
    private String password;

    public UserPassword(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }
}

