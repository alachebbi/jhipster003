package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Forsys;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the Forsys entity.
 */
@SuppressWarnings("unused")
public interface ForsysRepository extends MongoRepository<Forsys,String> {

}
