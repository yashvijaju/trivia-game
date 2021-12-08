package com.example.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;


import com.example.demo.model.Subtraction;

import java.util.*;

public interface SubtractionLeaderboardRepository extends MongoRepository<Subtraction, String>{

    @Query(value="{ '_id' : '?0' }")
    Subtraction findUser(String player_username);
    
    ArrayList<Subtraction> findAll();
}