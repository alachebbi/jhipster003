package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.DossierMedical;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the DossierMedical entity.
 */
@SuppressWarnings("unused")
public interface DossierMedicalRepository extends MongoRepository<DossierMedical,String> {

}
