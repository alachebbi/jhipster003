package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Dislike;
import com.mycompany.myapp.domain.Servicemedical;


import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

/**
 * Spring Data MongoDB repository for the Servicemedical entity.
 */

public interface ServicemedicalRepository extends MongoRepository<Servicemedical,String> {




}
