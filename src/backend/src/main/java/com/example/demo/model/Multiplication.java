package com.example.demo.model;

import java.util.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "multiplication_leaderboard")
public class Multiplication {
    
    @Id    
    private String player_username;
    private int player_score;

    public void updateScore(int score) {
        if (player_score < score) {
            player_score = score;
        }
    }

    public int getPlayerScore() {
        return player_score;
    }

    public String getPlayerUsername() {
        return player_username;
    }

    public Multiplication(String player_username, int player_score) {
        this.player_username = player_username;
        this.player_score = player_score;
    }

}

