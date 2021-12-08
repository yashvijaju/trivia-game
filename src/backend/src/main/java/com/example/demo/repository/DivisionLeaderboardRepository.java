package com.example.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;


import com.example.demo.model.Division;

import java.util.*;

public interface DivisionLeaderboardRepository extends MongoRepository<Division, String>{

    @Query(value="{ '_id' : '?0' }")
    Division findUser(String player_username);
    
    ArrayList<Division> findAll();
}