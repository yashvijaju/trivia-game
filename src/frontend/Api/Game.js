import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/api/v1/games";

class GameService {

    getNum() {
        return axios.get(USER_API_BASE_URL + '/' + "get_number");
    }

    findLobby(playertwoID)
    {
        return axios.get(USER_API_BASE_URL + '/find_lobby/' + playertwoID);
    }

    createLobby(playeroneID)
    {
        return axios.post(USER_API_BASE_URL + '/create_lobby/' + playeroneID);
    }

    incrementPlayerOneScore(gameID)
    {
        alert("here")
        return axios.get(USER_API_BASE_URL + '/player1_increment/' + gameID);
    }
    
    incrementPlayerTwoScore(gameID)
    {
        return axios.get(USER_API_BASE_URL + '/player2_increment/' + gameID);
    }

    decrementPlayerOneScore(gameID)
    {
        return axios.get(USER_API_BASE_URL + '/player1_decrement/' + gameID);
    }
    
    decrementPlayerTwoScore(gameID)
    {
        return axios.get(USER_API_BASE_URL + '/player2_decrement/' + gameID);
    }


    getPlayerOneScore(gameID)
    {
        return axios.get(USER_API_BASE_URL + '/player1_get_score/' + gameID);
    }
    
    getPlayerTwoScore(gameID)
    {
        return axios.get(USER_API_BASE_URL + '/player2_get_score/' + gameID);
    }

    isPlayerTwoFound(gameID)
    {
        return axios.get(USER_API_BASE_URL + '/is_player2_found/' + gameID);
    }
}

export default new GameService()
