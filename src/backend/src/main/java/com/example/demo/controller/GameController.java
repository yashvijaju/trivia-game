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

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class GameController {
    //ArrayList<Integer> firstNum  = new ArrayList<Integer>();
    //ArrayList<Integer> secNum  = new ArrayList<Integer>();
    int score = 0;
    //send two random numbers
    //@
    /*public int getFirstNum()
    {
        int fnum = (int)(Math.random()*100);
        firstNum.add(fnum);
        return fnum;
    }

    public int getSecNum()
    {
        int snum = (int)(Math.random()*100);
        secNum.add(snum);
        return snum;
    }*/
    @GetMapping("/games/get_number")
    public int getNum()
    {
        int rando = (int)(Math.random()*100);
        return rando;
    }

    /*@GetMapping("/games/get_score")
    public int getScore()
    {
        return score;
    }

    @PostMapping("/games/increment_score")
    public void incrementScore()
    {
        score++;   
    }*/
}