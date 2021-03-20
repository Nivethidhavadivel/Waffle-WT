package com.assn6.wafflewt.Repository;

import com.assn6.wafflewt.Models.Channel;
import com.assn6.wafflewt.Models.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ChannelRepository extends MongoRepository<Channel, String> {
}
