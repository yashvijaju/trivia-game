import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/api/v1/leaderboard";

class LeaderboardService {

    updateAdditionHighScore(username, score) {
        return axios.get(USER_API_BASE_URL + "/addition/" + username + "/" + score);
    }

    getTop10ScoresAddition() {
        return axios.get(USER_API_BASE_URL + "/addition/get_top_scores");
    }

    getTop10ScoresSubtraction() {
        return axios.get(USER_API_BASE_URL + "/subtraction/get_top_scores");
    }

    getTop10ScoresMultiplication() {
        return axios.get(USER_API_BASE_URL + "/multiplication/get_top_scores");
    }

    getTop10ScoresDivision() {
        return axios.get(USER_API_BASE_URL + "/division/get_top_scores");
    }
}

export default new LeaderboardService()
