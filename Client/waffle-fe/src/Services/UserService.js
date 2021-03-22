import axios from 'axios';

const USER_API_URL="http://localhost:8080/api/v1/";

class UserService{
    addUser(user){
        return axios.post(USER_API_URL+'/addUser',user);
    }
    checkPassword(mail){
        return axios.get(USER_API_URL+'/checkPassword/'+mail);
    }
}

export default new UserService()