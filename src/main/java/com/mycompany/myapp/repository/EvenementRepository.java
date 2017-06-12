package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Evenement;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the Evenement entity.
 */
@SuppressWarnings("unused")
public interface EvenementRepository extends MongoRepository<Evenement,String> {

}
