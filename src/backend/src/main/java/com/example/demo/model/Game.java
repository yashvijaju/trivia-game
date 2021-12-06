package com.example.demo.model;

import java.util.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "games")

public class Game {
    
    @Id
    private int id = 1;
    private String playeroneID;
    private String playertwoID;



    public Game(String playeroneID)
    {
        this.playeroneID = playeroneID;
        this.playertwoID = "";
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

