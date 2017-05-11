package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Likes;
import com.mycompany.myapp.domain.Participation;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

/**
 * Spring Data MongoDB repository for the Participation entity.
 */
@SuppressWarnings("unused")
public interface ParticipationRepository extends MongoRepository<Participation,String> {

    @Query("{ 'evenement' :  {'$regex' : ?0} , 'participant' :  {'$regex' : ?1} }")
    Participation findByidandname(String evenement , String participant);

}
