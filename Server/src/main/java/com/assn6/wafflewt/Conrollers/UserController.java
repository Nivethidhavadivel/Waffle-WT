package com.assn6.wafflewt.Conrollers;

import com.assn6.wafflewt.Models.User;
import com.assn6.wafflewt.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class UserController {


    @Autowired
    private UserRepository userRep;
    //add user
    @PostMapping("/addUser")
    public User addUser(@RequestBody User u){
        return userRep.save(u);
    }

    @GetMapping("/checkPassword/{mail}")
    public String getUser(@PathVariable String mail){
        User p = userRep.findByMail(mail);
        return p.getPassword();
    }
}
