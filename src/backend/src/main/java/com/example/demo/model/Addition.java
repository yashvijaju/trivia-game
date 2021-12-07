package com.example.demo.model;

import java.util.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "addition_leaderboard")
public class Addition {
<<<<<<< HEAD
        
    private String player_ID;
=======
    
    @Id    
    private String player_username;
>>>>>>> 809736095c3407bfa9d9eb13535904622033ff0a
    private int player_score;

    public void updateScore(int score) {
        if (player_score < score) {
            player_score = score;
        }
    }

    public int getPlayerScore() {
        return player_score;
    }

<<<<<<< HEAD
    public Addition(String playeroneID, int score)
    {
        this.player_ID = playeroneID;
        player_score = score;
=======
    public Addition(String player_one_username) {
        this.player_username = player_one_username;
        player_score = 0;
>>>>>>> 809736095c3407bfa9d9eb13535904622033ff0a
    }

    public boolean isPlayerFound() {
        if(player_username.equals("")) return false;
        return true;
    }

}

