package com.example.demo.model;

import java.util.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "addition_leaderboard")
public class Addition {
    
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

    public Addition(String player_one_username) {
        this.player_username = player_one_username;
        player_score = 0;
    }

    public boolean isPlayerFound() {
        if(player_username.equals("")) return false;
        return true;
    }

}

