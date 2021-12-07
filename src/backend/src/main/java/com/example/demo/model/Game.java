package com.example.demo.model;

import java.util.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "games")

public class Game {
    
    @Id
    private int id;
    private String playeroneID;
    private String playertwoID;

    private int player1score;
    private int player2score;


    public Game(String playeroneID)
    {
        this.playeroneID = playeroneID;
        this.playertwoID = "";

        player1score = 0;
        player2score = 0;

        int rand_num = (int)(Math.random()*1000000);
        id = rand_num;
    }

    public void increment1()
    {
        player1score++;
    }

    public void increment2()
    {
        player2score++;
    }

    public void decrement1()
    {
        player1score--;
    }

    public void decrement2()
    {
        player2score--;
    }

    public int getPlayer1Score()
    {
        return player1score;
    }

    public int getPlayer2Score()
    {
        return player2score;
    }

    public boolean isPlayerTwoFound()
    {
        if(playertwoID.equals("")) return false;
        return true;
    }

    public void addPlayerTwo(String playertwoID)
    {
       this.playertwoID = playertwoID;
    }

    public int getId()
    {
        return id;
    }
}

