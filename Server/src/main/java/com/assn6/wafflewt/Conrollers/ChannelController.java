package com.assn6.wafflewt.Conrollers;

import com.assn6.wafflewt.Models.Channel;
import com.assn6.wafflewt.Models.Post;
import com.assn6.wafflewt.Repository.ChannelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class ChannelController {
    @Autowired
    private ChannelRepository channelRepo;

    @PostMapping("/addChannel")
    public Channel addChannel(@RequestBody Channel c){
        return channelRepo.save(c);
    }

    @GetMapping("/channels")
    public List<Channel> getChannels(){
        return channelRepo.findAll();
    }
}
