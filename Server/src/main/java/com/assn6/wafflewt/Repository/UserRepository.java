package com.assn6.wafflewt.Repository;

import com.assn6.wafflewt.Models.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {
    User findByMail(String mail);
}
