package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Demandemedicamentvff;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the Demandemedicamentvff entity.
 */
@SuppressWarnings("unused")
public interface DemandemedicamentvffRepository extends MongoRepository<Demandemedicamentvff,String> {

}
