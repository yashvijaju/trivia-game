package com.example.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;


import com.example.demo.model.User;

public interface UserRepository extends MongoRepository<User, String>{

    @Query(value="{ '_id' : '?0', 'password' : '?1' }")
    User findUser(String username, String password);
}
