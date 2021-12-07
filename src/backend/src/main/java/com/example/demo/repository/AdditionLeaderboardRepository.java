package com.example.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;


import com.example.demo.model.Addition;

import java.util.*;

public interface AdditionLeaderboardRepository extends MongoRepository<Addition, String>{

    @Query(value="{ '_id' : '?0' }")
    Addition findUser(String player_username);

    ArrayList<Addition> findAll();
}

