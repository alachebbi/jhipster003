package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Participation;
import com.mycompany.myapp.domain.Service;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

/**
 * Spring Data MongoDB repository for the Service entity.
 */
@SuppressWarnings("unused")
public interface ServiceRepository extends MongoRepository<Service,String> {



}
