import axios from 'axios';

const POST_API_URL="http://localhost:8080/api/v1";

class PostService{
    addPost(post){
        return axios.post(POST_API_URL+'/addPost',post);
    }
    getPosts(channel){
        return axios.get(POST_API_URL+'/getPosts/'+channel);
    }
    allPosts(){
        return axios.get(POST_API_URL+'/posts');
    }
}

export default new PostService()