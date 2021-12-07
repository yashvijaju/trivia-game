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

    @GetMapping("/users/{username}/{math_mode}/{score}")
    public int getHighScore()
    {

        Addition add = additionLeaderboardRepository.findUserByID(username);
        if(add != null){
            add.updateScore(score);
            additionLeaderboardRepository.save(add);
        }
        else{
            Additon new_obj = new Addition(username, score);
            additionLeaderboardRepository.save(new_obj);
        }
    }    
}