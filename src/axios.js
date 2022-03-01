import axios from 'axios';

const instance = axios.create({
    baseURL: "https://tinder-clone-teddy99.herokuapp.com/"
});

export default instance;