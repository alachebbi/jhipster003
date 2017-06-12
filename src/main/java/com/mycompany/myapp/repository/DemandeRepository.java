package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Demande;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the Demande entity.
 */
@SuppressWarnings("unused")
public interface DemandeRepository extends MongoRepository<Demande,String> {

}
