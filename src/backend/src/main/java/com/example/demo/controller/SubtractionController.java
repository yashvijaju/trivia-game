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
import com.example.demo.model.Subtraction;
import com.example.demo.model.SubtractionThread;
import com.example.demo.repository.SubtractionLeaderboardRepository;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/leaderboard/subtraction")
public class SubtractionController {

    @Autowired
    private SubtractionLeaderboardRepository subtractionLeaderboardRepository;

    @GetMapping("/{username}/{score}")
    public void getHighScore(@PathVariable(value = "username") String username, @PathVariable(value = "score") int score)
    {
        Subtraction sub = subtractionLeaderboardRepository.findUser(username);
        if (sub != null) {
            sub.updateScore(score);
            subtractionLeaderboardRepository.save(sub);
        }
        else {
            Subtraction new_obj = new Subtraction(username, score);
            subtractionLeaderboardRepository.save(new_obj);
        }
    }


    @GetMapping("/get_top_scores")
    public ArrayList<Subtraction> getTop10(){
        ArrayList<Subtraction> all_leaderboard = subtractionLeaderboardRepository.findAll();
        for (Subtraction curr_leaderboard : all_leaderboard){
            Thread t = new SubtractionThread(curr_leaderboard);
            t.start();
        }
        all_leaderboard = SubtractionThread.arr;
        return all_leaderboard;
    }    
}