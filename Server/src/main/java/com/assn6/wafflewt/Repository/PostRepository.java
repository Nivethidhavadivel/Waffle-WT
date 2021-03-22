package com.assn6.wafflewt.Repository;

import com.assn6.wafflewt.Models.Post;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface PostRepository extends MongoRepository<Post, String> {
}
