package com.mycompany.myapp.service;

import com.mycompany.myapp.domain.Demande;
import com.mycompany.myapp.repository.DemandeRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Service Implementation for managing Demande.
 */
@Service
public class DemandeService {

    private final Logger log = LoggerFactory.getLogger(DemandeService.class);
    
    private final DemandeRepository demandeRepository;

    public DemandeService(DemandeRepository demandeRepository) {
        this.demandeRepository = demandeRepository;
    }

    /**
     * Save a demande.
     *
     * @param demande the entity to save
     * @return the persisted entity
     */
    public Demande save(Demande demande) {
        log.debug("Request to save Demande : {}", demande);
        Demande result = demandeRepository.save(demande);
        return result;
    }

    /**
     *  Get all the demandes.
     *  
     *  @param pageable the pagination information
     *  @return the list of entities
     */
    public Page<Demande> findAll(Pageable pageable) {
        log.debug("Request to get all Demandes");
        Page<Demande> result = demandeRepository.findAll(pageable);
        return result;
    }

    /**
     *  Get one demande by id.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    public Demande findOne(String id) {
        log.debug("Request to get Demande : {}", id);
        Demande demande = demandeRepository.findOne(id);
        return demande;
    }

    /**
     *  Delete the  demande by id.
     *
     *  @param id the id of the entity
     */
    public void delete(String id) {
        log.debug("Request to delete Demande : {}", id);
        demandeRepository.delete(id);
    }
}
