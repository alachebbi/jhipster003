package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.DossierMedicalVF;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the DossierMedicalVF entity.
 */
@SuppressWarnings("unused")
public interface DossierMedicalVFRepository extends MongoRepository<DossierMedicalVF,String> {

}
