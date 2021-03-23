import axios from 'axios';

const USER_API_URL="http://localhost:8080/api/v1/";

class ChannelService{
    getChannels(){
        return axios.get(USER_API_URL+'/channels');
    }
    addChannel(channel){
        return axios.post(USER_API_URL+'/addChannel',channel);
    }
}

export default new ChannelService()