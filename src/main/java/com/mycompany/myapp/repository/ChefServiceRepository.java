package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.ChefService;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the ChefService entity.
 */
@SuppressWarnings("unused")
public interface ChefServiceRepository extends MongoRepository<ChefService,String> {

}
