package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Dislike;

import com.mycompany.myapp.domain.Likes;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

/**
 * Spring Data MongoDB repository for the Dislike entity.
 */
@SuppressWarnings("unused")
public interface DislikeRepository extends MongoRepository<Dislike,String> {

    @Query("{ 'article' :  {'$regex' : ?0} , 'utilisateur' :  {'$regex' : ?1} }")
    Dislike findByidandname(String article , String utilisateur);

}
