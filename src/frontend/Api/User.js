import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/api/v1/users";

class UserService {

    getUser(username){
        return axios.get(USER_API_BASE_URL + '/' + username);
    }

    logUserIn(username, password){
        return axios.get(USER_API_BASE_URL + '/' + username + '/' + password);
    }

    createUser(username, password){
        return axios.post(USER_API_BASE_URL, {username, password});
    }

    updateHighScore(username, math_mode, score) {
        return axios.post(USER_API_BASE_URL + '/' + username + "/" + math_mode + "/" + score);
    }
}

export default new UserService()
