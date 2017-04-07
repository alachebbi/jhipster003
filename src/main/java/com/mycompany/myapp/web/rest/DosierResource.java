package com.mycompany.myapp.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.mycompany.myapp.domain.Dosier;

import com.mycompany.myapp.repository.DosierRepository;
import com.mycompany.myapp.web.rest.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing Dosier.
 */
@RestController
@RequestMapping("/api")
public class DosierResource {

    private final Logger log = LoggerFactory.getLogger(DosierResource.class);

    private static final String ENTITY_NAME = "dosier";
        
    private final DosierRepository dosierRepository;

    public DosierResource(DosierRepository dosierRepository) {
        this.dosierRepository = dosierRepository;
    }

    /**
     * POST  /dosiers : Create a new dosier.
     *
     * @param dosier the dosier to create
     * @return the ResponseEntity with status 201 (Created) and with body the new dosier, or with status 400 (Bad Request) if the dosier has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/dosiers")
    @Timed
    public ResponseEntity<Dosier> createDosier(@RequestBody Dosier dosier) throws URISyntaxException {
        log.debug("REST request to save Dosier : {}", dosier);
        if (dosier.getId() != null) {
            return ResponseEntity.badRequest().headers(HeaderUtil.createFailureAlert(ENTITY_NAME, "idexists", "A new dosier cannot already have an ID")).body(null);
        }
        Dosier result = dosierRepository.save(dosier);
        return ResponseEntity.created(new URI("/api/dosiers/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /dosiers : Updates an existing dosier.
     *
     * @param dosier the dosier to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated dosier,
     * or with status 400 (Bad Request) if the dosier is not valid,
     * or with status 500 (Internal Server Error) if the dosier couldnt be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/dosiers")
    @Timed
    public ResponseEntity<Dosier> updateDosier(@RequestBody Dosier dosier) throws URISyntaxException {
        log.debug("REST request to update Dosier : {}", dosier);
        if (dosier.getId() == null) {
            return createDosier(dosier);
        }
        Dosier result = dosierRepository.save(dosier);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, dosier.getId().toString()))
            .body(result);
    }

    /**
     * GET  /dosiers : get all the dosiers.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of dosiers in body
     */
    @GetMapping("/dosiers")
    @Timed
    public List<Dosier> getAllDosiers() {
        log.debug("REST request to get all Dosiers");
        List<Dosier> dosiers = dosierRepository.findAll();
        return dosiers;
    }

    /**
     * GET  /dosiers/:id : get the "id" dosier.
     *
     * @param id the id of the dosier to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the dosier, or with status 404 (Not Found)
     */
    @GetMapping("/dosiers/{id}")
    @Timed
    public ResponseEntity<Dosier> getDosier(@PathVariable String id) {
        log.debug("REST request to get Dosier : {}", id);
        Dosier dosier = dosierRepository.findOne(id);
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(dosier));
    }

    /**
     * DELETE  /dosiers/:id : delete the "id" dosier.
     *
     * @param id the id of the dosier to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/dosiers/{id}")
    @Timed
    public ResponseEntity<Void> deleteDosier(@PathVariable String id) {
        log.debug("REST request to delete Dosier : {}", id);
        dosierRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }

}
