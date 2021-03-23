package com.assn6.wafflewt.Conrollers;

import com.assn6.wafflewt.Models.Post;
import com.assn6.wafflewt.Repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class PostController {

    @Autowired
    private PostRepository postRepo;

    @PostMapping("/addPost")
    public Post addPost(@RequestBody Post p){
        return postRepo.save(p);
    }

    @GetMapping("/getPosts/{channel}")
    public List<Post> getPost(@PathVariable String channel){
        return postRepo.findByChannel(channel);
    }

    @GetMapping("/posts")
    public List<Post> allPosts(){return postRepo.findAll();}
}
