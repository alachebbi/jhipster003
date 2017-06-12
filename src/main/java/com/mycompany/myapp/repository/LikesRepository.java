package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Likes;

import com.mycompany.myapp.domain.Medicament;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

/**
 * Spring Data MongoDB repository for the Likes entity.
 */
@SuppressWarnings("unused")
public interface LikesRepository extends MongoRepository<Likes,String> {

    @Query("{ 'articleid' :  {'$regex' : ?0} , 'userid' :  {'$regex' : ?1} }")
    Likes findByidandname(String articleid ,String userid);

}
