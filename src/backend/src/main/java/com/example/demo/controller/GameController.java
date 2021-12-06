package com.example.demo.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.User;
import com.example.demo.model.UserPassword;
import com.example.demo.repository.UserRepository;

import com.example.demo.model.Game;
import com.example.demo.repository.GameRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class GameController {
    
    @Autowired
    private GameRepository gameRepository;

    @GetMapping("/games/get_number")
    public int getNum()
    {
        int rando = (int)(Math.random()*100);
        return rando;
    }

    @GetMapping("/games/{playertwoID}")
    public int findLobby(@PathVariable(value = "playertwoID") String playertwoID)
    {
        Game game = gameRepository.findGame();
        if(game!=null)
        {
            game.addPlayerTwo(playertwoID);
            gameRepository.save(game);
            return game.getId();
        }
        return 0;
    }

    @PostMapping("/games/{playeroneID}")
    public Game createLobby(@PathVariable(value = "playeroneID") String playeroneID)
    {
        Game game_new = new Game(playeroneID);
        return gameRepository.save(game_new);
    }

    
}