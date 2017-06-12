package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Demandemedi;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the Demandemedi entity.
 */
@SuppressWarnings("unused")
public interface DemandemediRepository extends MongoRepository<Demandemedi,String> {

}
