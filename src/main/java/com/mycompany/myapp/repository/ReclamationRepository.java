package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Likes;
import com.mycompany.myapp.domain.Medicament;
import com.mycompany.myapp.domain.Reclamation;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

/**
 * Spring Data MongoDB repository for the Reclamation entity.
 */
@SuppressWarnings("unused")
public interface ReclamationRepository extends MongoRepository<Reclamation,String> {


    @Query ("{ 'recusername' :  {'$regex' : ?0} }")
    List<Reclamation> findByrecusername(String recusername);
}
