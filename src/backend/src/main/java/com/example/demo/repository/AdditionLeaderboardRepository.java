package com.example.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;


import com.example.demo.model.Addition;

public interface AdditionLeaderboardRepository extends MongoRepository<Addition, String>{

    @Query(value="{ '_id' : '?0'}")
    Addition findUser(String username);
}

