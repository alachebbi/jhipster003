package com.mycompany.myapp.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.mycompany.myapp.domain.DossierMedical;

import com.mycompany.myapp.repository.DossierMedicalRepository;
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
 * REST controller for managing DossierMedical.
 */
@RestController
@RequestMapping("/api")
public class DossierMedicalResource {

    private final Logger log = LoggerFactory.getLogger(DossierMedicalResource.class);

    private static final String ENTITY_NAME = "dossierMedical";
        
    private final DossierMedicalRepository dossierMedicalRepository;

    public DossierMedicalResource(DossierMedicalRepository dossierMedicalRepository) {
        this.dossierMedicalRepository = dossierMedicalRepository;
    }

    /**
     * POST  /dossier-medicals : Create a new dossierMedical.
     *
     * @param dossierMedical the dossierMedical to create
     * @return the ResponseEntity with status 201 (Created) and with body the new dossierMedical, or with status 400 (Bad Request) if the dossierMedical has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/dossier-medicals")
    @Timed
    public ResponseEntity<DossierMedical> createDossierMedical(@RequestBody DossierMedical dossierMedical) throws URISyntaxException {
        log.debug("REST request to save DossierMedical : {}", dossierMedical);
        if (dossierMedical.getId() != null) {
            return ResponseEntity.badRequest().headers(HeaderUtil.createFailureAlert(ENTITY_NAME, "idexists", "A new dossierMedical cannot already have an ID")).body(null);
        }
        DossierMedical result = dossierMedicalRepository.save(dossierMedical);
        return ResponseEntity.created(new URI("/api/dossier-medicals/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /dossier-medicals : Updates an existing dossierMedical.
     *
     * @param dossierMedical the dossierMedical to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated dossierMedical,
     * or with status 400 (Bad Request) if the dossierMedical is not valid,
     * or with status 500 (Internal Server Error) if the dossierMedical couldnt be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/dossier-medicals")
    @Timed
    public ResponseEntity<DossierMedical> updateDossierMedical(@RequestBody DossierMedical dossierMedical) throws URISyntaxException {
        log.debug("REST request to update DossierMedical : {}", dossierMedical);
        if (dossierMedical.getId() == null) {
            return createDossierMedical(dossierMedical);
        }
        DossierMedical result = dossierMedicalRepository.save(dossierMedical);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, dossierMedical.getId().toString()))
            .body(result);
    }

    /**
     * GET  /dossier-medicals : get all the dossierMedicals.
     *
     * @param pageable the pagination information
     * @return the ResponseEntity with status 200 (OK) and the list of dossierMedicals in body
     * @throws URISyntaxException if there is an error to generate the pagination HTTP headers
     */
    @GetMapping("/dossier-medicals")
    @Timed
    public ResponseEntity<List<DossierMedical>> getAllDossierMedicals(@ApiParam Pageable pageable)
        throws URISyntaxException {
        log.debug("REST request to get a page of DossierMedicals");
        Page<DossierMedical> page = dossierMedicalRepository.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/dossier-medicals");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

    /**
     * GET  /dossier-medicals/:id : get the "id" dossierMedical.
     *
     * @param id the id of the dossierMedical to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the dossierMedical, or with status 404 (Not Found)
     */
    @GetMapping("/dossier-medicals/{id}")
    @Timed
    public ResponseEntity<DossierMedical> getDossierMedical(@PathVariable String id) {
        log.debug("REST request to get DossierMedical : {}", id);
        DossierMedical dossierMedical = dossierMedicalRepository.findOne(id);
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(dossierMedical));
    }

    /**
     * DELETE  /dossier-medicals/:id : delete the "id" dossierMedical.
     *
     * @param id the id of the dossierMedical to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/dossier-medicals/{id}")
    @Timed
    public ResponseEntity<Void> deleteDossierMedical(@PathVariable String id) {
        log.debug("REST request to delete DossierMedical : {}", id);
        dossierMedicalRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }

}
