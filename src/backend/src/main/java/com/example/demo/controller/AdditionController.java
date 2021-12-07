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
import com.example.demo.model.AdditionThread;
import com.example.demo.repository.AdditionLeaderboardRepository;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/leaderboard/addition")
public class AdditionController {

    @Autowired
    private AdditionLeaderboardRepository additionLeaderboardRepository;

    @GetMapping("/{username}/{score}")
    public void getHighScore(@PathVariable(value = "username") String username, @PathVariable(value = "score") int score)
    {
        Addition add = additionLeaderboardRepository.findUser(username);
        if (add != null) {
            add.updateScore(score);
            additionLeaderboardRepository.save(add);
        }
        else {
            Addition new_obj = new Addition(username, score);
            additionLeaderboardRepository.save(new_obj);
        }
    }


    @GetMapping("/get_top_scores")
    public ArrayList<Addition> getTop10(){
        ArrayList<Addition> all_leaderboard = additionLeaderboardRepository.findAll();
        for (Addition curr_leaderboard : all_leaderboard){
            Thread t = new AdditionThread(curr_leaderboard);
            t.start();
        }
        return all_leaderboard;
    }    
}