package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.DemandeMedicamentVf;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the DemandeMedicamentVf entity.
 */
@SuppressWarnings("unused")
public interface DemandeMedicamentVfRepository extends MongoRepository<DemandeMedicamentVf,String> {

}
