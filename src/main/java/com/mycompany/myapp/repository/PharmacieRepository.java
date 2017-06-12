package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Pharmacie;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the Pharmacie entity.
 */
@SuppressWarnings("unused")
public interface PharmacieRepository extends MongoRepository<Pharmacie,String> {

}
