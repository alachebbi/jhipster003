package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Medicament;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

/**
 * Spring Data MongoDB repository for the Medicament entity.
 */
@SuppressWarnings("unused")
public interface MedicamentRepository extends MongoRepository<Medicament,String> {


    @Query ("{ 'nom' :  {'$regex' : ?0} }")
    Medicament findByname(String nom);
}
