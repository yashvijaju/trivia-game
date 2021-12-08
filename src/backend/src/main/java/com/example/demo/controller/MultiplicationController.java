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
import com.example.demo.model.Multiplication;
import com.example.demo.model.MultiplicationThread;
import com.example.demo.repository.MultiplicationLeaderboardRepository;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/leaderboard/multiplication")
public class MultiplicationController {

    @Autowired
    private MultiplicationLeaderboardRepository multiplicationLeaderboardRepository;

    @GetMapping("/{username}/{score}")
    public void getHighScore(@PathVariable(value = "username") String username, @PathVariable(value = "score") int score)
    {
        Multiplication add = multiplicationLeaderboardRepository.findUser(username);
        if (add != null) {
            add.updateScore(score);
            multiplicationLeaderboardRepository.save(add);
        }
        else {
            Multiplication new_obj = new Multiplication(username, score);
            multiplicationLeaderboardRepository.save(new_obj);
        }
    }


    @GetMapping("/get_top_scores")
    public ArrayList<Multiplication> getTop10(){
        ArrayList<Multiplication> all_leaderboard = multiplicationLeaderboardRepository.findAll();
        for (Multiplication curr_leaderboard : all_leaderboard){
            Thread t = new MultiplicationThread(curr_leaderboard);
            t.start();
        }
        all_leaderboard = MultiplicationThread.arr;
        return all_leaderboard;
    }    
}

