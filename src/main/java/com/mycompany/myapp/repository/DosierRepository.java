package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Dosier;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the Dosier entity.
 */
@SuppressWarnings("unused")
public interface DosierRepository extends MongoRepository<Dosier,String> {

}
