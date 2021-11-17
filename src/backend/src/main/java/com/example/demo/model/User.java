package com.example.demo.model;

import java.util.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document("users")
public class User {

    @Id
    private String username;

    private String password;
    private int score;
    private TreeMap<String,Integer> high_scores;
    
    public User(String username, String password) {
        super();
        this.username = username;
        this.password = password;
        this.score = 0;
        high_scores = new TreeMap<String,Integer>();
        this.high_scores.put("Addition", 0);
        this.high_scores.put("Subtraction", 0);
        this.high_scores.put("Multiplication", 0);
        this.high_scores.put("Division", 0);
    }

    public String getUsername() {
        return username;
    }

    public Boolean LogIn(String username, String password) {
        return this.username.equals(username) && this.password.equals(password);
    }
}
