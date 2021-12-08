package com.example.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;


import com.example.demo.model.Multiplication;

import java.util.*;

public interface MultiplicationLeaderboardRepository extends MongoRepository<Multiplication, String>{

    @Query(value="{ '_id' : '?0' }")
    Multiplication findUser(String player_username);
    
    ArrayList<Multiplication> findAll();
}  