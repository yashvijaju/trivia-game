import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/api/v1/leaderboard";

class LeaderboardService {

    updateAdditionHighScore(username, score) {
        return axios.get(USER_API_BASE_URL + "/addition/" + username + "/" + score);
    }
}

export default new LeaderboardService()
