import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/api/v1/games";

class GameService {

    getNum()
    {
        return axios.get(USER_API_BASE_URL + '/' + "get_number");
    }
}

export default new GameService()
