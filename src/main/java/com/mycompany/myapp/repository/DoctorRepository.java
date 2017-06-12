package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Doctor;

import com.mycompany.myapp.domain.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

/**
 * Spring Data MongoDB repository for the Doctor entity.
 */
@SuppressWarnings("unused")
public interface DoctorRepository extends MongoRepository<Doctor,String> {

    Optional<User> findOneByEmail(String email);

    Optional<User> findOneByLogin(String login);

}
