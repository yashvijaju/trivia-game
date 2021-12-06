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
import com.example.demo.model.Addition;
import com.example.demo.repository.AdditionLeaderboardRepository;

import com.example.demo.model.Game;
import com.example.demo.repository.GameRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class AdditionController {
    
    @Autowired
    private GameRepository additionLeaderboardRepository;

    @GetMapping("/games/get_number")
    public int getNum()
    {
        int rando = (int)(Math.random()*100);
        return rando;
    }

    @GetMapping("/games/find_lobby/{playertwoID}")
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

    @PostMapping("/games/create_lobby/{playeroneID}")
    public int createLobby(@PathVariable(value = "playeroneID") String playeroneID)
    {
        Game game_new = new Game(playeroneID);
        gameRepository.save(game_new);
        return game_new.getId();
    }




    @GetMapping("/games/player1_increment/{gameID}")
    public void incrementOne(@PathVariable(value = "gameID") int gameID)
    {
        Game game_cur = gameRepository.findGameByID(gameID);
        game_cur.increment1();
        gameRepository.save(game_cur);
    }

    @GetMapping("/games/player2_increment/{gameID}")
    public void incrementTwo(@PathVariable(value = "gameID") int gameID)
    {
        Game game_cur = gameRepository.findGameByID(gameID);
        game_cur.increment2();
        gameRepository.save(game_cur);
    }

    @GetMapping("/games/player1_decrement/{gameID}")
    public void decrementOne(@PathVariable(value = "gameID") int gameID)
    {
        Game game_cur = gameRepository.findGameByID(gameID);
        game_cur.decrement1();
        gameRepository.save(game_cur);
    }

    @GetMapping("/games/player2_decrement/{gameID}")
    public void decrementTwo(@PathVariable(value = "gameID") int gameID)
    {
        Game game_cur = gameRepository.findGameByID(gameID);
        game_cur.decrement2();
        gameRepository.save(game_cur);
    }





    @GetMapping("/games/player1_get_score/{gameID}")
    public int getScoreOne(@PathVariable(value = "gameID") int gameID)
    {
        Game game_cur = gameRepository.findGameByID(gameID);
        gameRepository.save(game_cur);
        return game_cur.getPlayer1Score();
    }

    @GetMapping("/games/player2_get_score/{gameID}")
    public int getScoreTwo(@PathVariable(value = "gameID") int gameID)
    {
        Game game_cur = gameRepository.findGameByID(gameID);
        gameRepository.save(game_cur);
        return game_cur.getPlayer2Score();
    }

    @GetMapping("games/is_player2_found/{gameID}")
    public Boolean isPlayerTwoFound(@PathVariable(value = "gameID") int gameID)
    {
        Game game_cur = gameRepository.findGameByID(gameID);
        if(game_cur.isPlayerTwoFound()) return true;
        return false;
    }

    
}