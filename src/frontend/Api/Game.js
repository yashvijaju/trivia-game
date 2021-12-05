import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/api/v1/games";

class GameService {

    /*getFirstNum()
    {
        return axios.get(USER_API_BASE_URL + '/' + );
    }

    getSecNum()
    {
        return axios.get(USER_API_BASE_URL + '/' );
    }*/

    getNum()
    {
        return axios.get(USER_API_BASE_URL + '/' + "get_number");
    }

    /*getScore()
    {
        return axios.get(USER_API_BASE_URL + '/' + "get_score");
    }

    incrementScore()
    {
        axios.get(USER_API_BASE_URL + '/' + "increment_score");
    }*/
}

export default new GameService()
