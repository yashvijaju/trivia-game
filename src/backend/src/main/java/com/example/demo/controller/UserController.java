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

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.User;
import com.example.demo.model.UserPassword;
import com.example.demo.repository.UserRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/users/{username}")
    public Boolean getUser(@PathVariable(value = "username") String username) {
        if (userRepository.existsById(username)) return true;
        return false;
    }

    @GetMapping("/users/{username}/{password}")
    public Boolean logUserIn(@PathVariable(value = "username") String username, @PathVariable(value = "password") String password) {
        User user_ = userRepository.findUser(username, password);
        if (user_ != null) return true;
        return false;
    }

    @PostMapping("/users")
    public User createUser(@RequestBody UserPassword user) {
        User user_new = new User(user.getUsername(), user.getPassword());
        return userRepository.save(user_new);
    }
}