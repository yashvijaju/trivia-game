package com.example.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import com.example.demo.model.Game;

public interface GameRepository extends MongoRepository<Game, String> {
    
    /*
    Game findGame(String playertwoID){
        ArrayList<Game> allLobbies = findAll(Game game);
        for(int i=0; i<allLobbies.length(); i++)
        {
            if(allLobbies.get(i).hasSpace())
            {
                allLobbies.get(i).addPlayerTwo(playertwoID);
                return allLobbies.get(i);
            }
        }

        return null;
    }*/
    
    @Query(value="{'playertwoID' : '' }")
    Game findGame();

    @Query( value="{'_id' : '?0' }")
    Game findGameByID(int id);
}
