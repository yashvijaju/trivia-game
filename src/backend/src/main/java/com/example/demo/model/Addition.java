package com.example.demo.model;

import java.util.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "addition")

public class Addition {
    
    @Id
    private int id = 1;

    
    private String player_ID;
    private int player_score;

    public void updateScore(int score)
    {
        if(player_score < score)
        {
            player_score = score;
        }
    }

    public int getPlayerScore()
    {
        return player_score;
    }

    public Addition(String playeroneID)
    {
        this.player_ID = playeroneID;
        player_score = 0;
    }

    public boolean isPlayerFound()
    {
        if(player_ID.equals("")) return false;
        return true;
    }

}

