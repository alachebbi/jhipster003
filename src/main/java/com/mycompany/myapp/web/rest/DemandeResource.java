package com.mycompany.myapp.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.mycompany.myapp.domain.Demande;
import com.mycompany.myapp.service.DemandeService;
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
 * REST controller for managing Demande.
 */
@RestController
@RequestMapping("/api")
public class DemandeResource {

    private final Logger log = LoggerFactory.getLogger(DemandeResource.class);

    private static final String ENTITY_NAME = "demande";
        
    private final DemandeService demandeService;

    public DemandeResource(DemandeService demandeService) {
        this.demandeService = demandeService;
    }

    /**
     * POST  /demandes : Create a new demande.
     *
     * @param demande the demande to create
     * @return the ResponseEntity with status 201 (Created) and with body the new demande, or with status 400 (Bad Request) if the demande has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/demandes")
    @Timed
    public ResponseEntity<Demande> createDemande(@RequestBody Demande demande) throws URISyntaxException {
        log.debug("REST request to save Demande : {}", demande);
        if (demande.getId() != null) {
            return ResponseEntity.badRequest().headers(HeaderUtil.createFailureAlert(ENTITY_NAME, "idexists", "A new demande cannot already have an ID")).body(null);
        }
        Demande result = demandeService.save(demande);
        return ResponseEntity.created(new URI("/api/demandes/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /demandes : Updates an existing demande.
     *
     * @param demande the demande to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated demande,
     * or with status 400 (Bad Request) if the demande is not valid,
     * or with status 500 (Internal Server Error) if the demande couldnt be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/demandes")
    @Timed
    public ResponseEntity<Demande> updateDemande(@RequestBody Demande demande) throws URISyntaxException {
        log.debug("REST request to update Demande : {}", demande);
        if (demande.getId() == null) {
            return createDemande(demande);
        }
        Demande result = demandeService.save(demande);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, demande.getId().toString()))
            .body(result);
    }

    /**
     * GET  /demandes : get all the demandes.
     *
     * @param pageable the pagination information
     * @return the ResponseEntity with status 200 (OK) and the list of demandes in body
     * @throws URISyntaxException if there is an error to generate the pagination HTTP headers
     */
    @GetMapping("/demandes")
    @Timed
    public ResponseEntity<List<Demande>> getAllDemandes(@ApiParam Pageable pageable)
        throws URISyntaxException {
        log.debug("REST request to get a page of Demandes");
        Page<Demande> page = demandeService.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/demandes");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

    /**
     * GET  /demandes/:id : get the "id" demande.
     *
     * @param id the id of the demande to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the demande, or with status 404 (Not Found)
     */
    @GetMapping("/demandes/{id}")
    @Timed
    public ResponseEntity<Demande> getDemande(@PathVariable String id) {
        log.debug("REST request to get Demande : {}", id);
        Demande demande = demandeService.findOne(id);
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(demande));
    }

    /**
     * DELETE  /demandes/:id : delete the "id" demande.
     *
     * @param id the id of the demande to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/demandes/{id}")
    @Timed
    public ResponseEntity<Void> deleteDemande(@PathVariable String id) {
        log.debug("REST request to delete Demande : {}", id);
        demandeService.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }

}
