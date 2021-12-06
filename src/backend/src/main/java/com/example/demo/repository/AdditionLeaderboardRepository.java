package com.example.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;


import com.example.demo.model.User;

public interface AdditionLeaderboardRepository extends MongoRepository<User, String>{

    @Query(value="{ '_id' : '?0'}")
    User findUser(String username);
}

