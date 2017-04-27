package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Likes;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the Likes entity.
 */
@SuppressWarnings("unused")
public interface LikesRepository extends MongoRepository<Likes,String> {

}
