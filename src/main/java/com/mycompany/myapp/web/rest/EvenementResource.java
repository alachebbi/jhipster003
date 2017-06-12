package com.mycompany.myapp.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.mycompany.myapp.domain.Evenement;

import com.mycompany.myapp.repository.EvenementRepository;
import com.mycompany.myapp.web.rest.util.HeaderUtil;
import com.mycompany.myapp.web.rest.util.PaginationUtil;
import io.swagger.annotations.ApiParam;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing Evenement.
 */
@RestController
@RequestMapping("/api")
public class EvenementResource {

    private final Logger log = LoggerFactory.getLogger(EvenementResource.class);

    private static final String ENTITY_NAME = "evenement";
        
    private final EvenementRepository evenementRepository;

    public EvenementResource(EvenementRepository evenementRepository) {
        this.evenementRepository = evenementRepository;
    }

    /**
     * POST  /evenements : Create a new evenement.
     *
     * @param evenement the evenement to create
     * @return the ResponseEntity with status 201 (Created) and with body the new evenement, or with status 400 (Bad Request) if the evenement has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/evenements")
    @Timed
    public ResponseEntity<Evenement> createEvenement(@RequestBody Evenement evenement) throws URISyntaxException {
        log.debug("REST request to save Evenement : {}", evenement);
        if (evenement.getId() != null) {
            return ResponseEntity.badRequest().headers(HeaderUtil.createFailureAlert(ENTITY_NAME, "idexists", "A new evenement cannot already have an ID")).body(null);
        }
        Evenement result = evenementRepository.save(evenement);
        return ResponseEntity.created(new URI("/api/evenements/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /evenements : Updates an existing evenement.
     *
     * @param evenement the evenement to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated evenement,
     * or with status 400 (Bad Request) if the evenement is not valid,
     * or with status 500 (Internal Server Error) if the evenement couldnt be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/evenements")
    @Timed
    public ResponseEntity<Evenement> updateEvenement(@RequestBody Evenement evenement) throws URISyntaxException {
        log.debug("REST request to update Evenement : {}", evenement);
        if (evenement.getId() == null) {
            return createEvenement(evenement);
        }
        Evenement result = evenementRepository.save(evenement);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, evenement.getId().toString()))
            .body(result);
    }

    /**
     * GET  /evenements : get all the evenements.
     *
     * @param pageable the pagination information
     * @return the ResponseEntity with status 200 (OK) and the list of evenements in body
     * @throws URISyntaxException if there is an error to generate the pagination HTTP headers
     */
    @GetMapping("/evenements")
    @Timed
    public ResponseEntity<List<Evenement>> getAllEvenements(@ApiParam Pageable pageable)
        throws URISyntaxException {
        log.debug("REST request to get a page of Evenements");
        Page<Evenement> page = evenementRepository.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/evenements");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

    /**
     * GET  /evenements/:id : get the "id" evenement.
     *
     * @param id the id of the evenement to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the evenement, or with status 404 (Not Found)
     */
    @GetMapping("/evenements/{id}")
    @Timed
    public ResponseEntity<Evenement> getEvenement(@PathVariable String id) {
        log.debug("REST request to get Evenement : {}", id);
        Evenement evenement = evenementRepository.findOne(id);
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(evenement));
    }

    /**
     * DELETE  /evenements/:id : delete the "id" evenement.
     *
     * @param id the id of the evenement to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/evenements/{id}")
    @Timed
    public ResponseEntity<Void> deleteEvenement(@PathVariable String id) {
        log.debug("REST request to delete Evenement : {}", id);
        evenementRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }

}
