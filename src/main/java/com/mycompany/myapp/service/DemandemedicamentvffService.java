package com.mycompany.myapp.service;

import com.mycompany.myapp.domain.Demandemedicamentvff;
import com.mycompany.myapp.repository.DemandemedicamentvffRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Service Implementation for managing Demandemedicamentvff.
 */
@Service
public class DemandemedicamentvffService {

    private final Logger log = LoggerFactory.getLogger(DemandemedicamentvffService.class);
    
    private final DemandemedicamentvffRepository demandemedicamentvffRepository;

    public DemandemedicamentvffService(DemandemedicamentvffRepository demandemedicamentvffRepository) {
        this.demandemedicamentvffRepository = demandemedicamentvffRepository;
    }

    /**
     * Save a demandemedicamentvff.
     *
     * @param demandemedicamentvff the entity to save
     * @return the persisted entity
     */
    public Demandemedicamentvff save(Demandemedicamentvff demandemedicamentvff) {
        log.debug("Request to save Demandemedicamentvff : {}", demandemedicamentvff);
        Demandemedicamentvff result = demandemedicamentvffRepository.save(demandemedicamentvff);
        return result;
    }

    /**
     *  Get all the demandemedicamentvffs.
     *  
     *  @param pageable the pagination information
     *  @return the list of entities
     */
    public Page<Demandemedicamentvff> findAll(Pageable pageable) {
        log.debug("Request to get all Demandemedicamentvffs");
        Page<Demandemedicamentvff> result = demandemedicamentvffRepository.findAll(pageable);
        return result;
    }

    /**
     *  Get one demandemedicamentvff by id.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    public Demandemedicamentvff findOne(String id) {
        log.debug("Request to get Demandemedicamentvff : {}", id);
        Demandemedicamentvff demandemedicamentvff = demandemedicamentvffRepository.findOne(id);
        return demandemedicamentvff;
    }

    /**
     *  Delete the  demandemedicamentvff by id.
     *
     *  @param id the id of the entity
     */
    public void delete(String id) {
        log.debug("Request to delete Demandemedicamentvff : {}", id);
        demandemedicamentvffRepository.delete(id);
    }
}
