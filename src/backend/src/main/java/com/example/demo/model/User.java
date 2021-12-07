package com.example.demo.model;

import java.util.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "users")
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
        this.high_scores.put("addition", 0);
        this.high_scores.put("subtraction", 0);
        this.high_scores.put("multiplication", 0);
        this.high_scores.put("division", 0);
    }

    public User getUser(String username) {
        if (this.username == username) return this;
        return null;
    }

    public int getScore() {
        return score;
    }

    public TreeMap<String,Integer> getHighScore() {
        return high_scores;
    }

    public void updateScore(TreeMap<String,Integer> new_scores) {
        high_scores = new_scores;
    }
}