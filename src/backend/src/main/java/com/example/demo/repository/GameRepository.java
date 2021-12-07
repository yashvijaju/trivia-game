package com.example.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import com.example.demo.model.Game;

public interface GameRepository extends MongoRepository<Game, String> {
    
    @Query(value="{'playertwoID' : '' }")
    Game findGame();

    @Query(value="{'_id' : ?0 }")
    Game findGameByID(int id);
    
}
