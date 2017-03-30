package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Medicament;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the Medicament entity.
 */
@SuppressWarnings("unused")
public interface MedicamentRepository extends MongoRepository<Medicament,String> {

}
