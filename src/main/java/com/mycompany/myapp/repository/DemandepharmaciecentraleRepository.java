package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Demandepharmaciecentrale;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the Demandepharmaciecentrale entity.
 */
@SuppressWarnings("unused")
public interface DemandepharmaciecentraleRepository extends MongoRepository<Demandepharmaciecentrale,String> {

}
