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
import com.example.demo.model.Division;
import com.example.demo.model.DivisionThread;
import com.example.demo.repository.DivisionLeaderboardRepository;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/leaderboard/division")
public class DivisionController {

    @Autowired
    private DivisionLeaderboardRepository divisionLeaderboardRepository;

    @GetMapping("/{username}/{score}")
    public void getHighScore(@PathVariable(value = "username") String username, @PathVariable(value = "score") int score)
    {
        Division add = divisionLeaderboardRepository.findUser(username);
        if (add != null) {
            add.updateScore(score);
            divisionLeaderboardRepository.save(add);
        }
        else {
            Division new_obj = new Division(username, score);
            divisionLeaderboardRepository.save(new_obj);
        }
    }


    @GetMapping("/get_top_scores")
    public ArrayList<Division> getTop10(){
        ArrayList<Division> all_leaderboard = divisionLeaderboardRepository.findAll();
        for (Division curr_leaderboard : all_leaderboard){
            Thread t = new DivisionThread(curr_leaderboard);
            t.start();
        }
        all_leaderboard = DivisionThread.arr;
        return all_leaderboard;
    }    
}