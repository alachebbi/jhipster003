package com.mycompany.myapp.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.mycompany.myapp.domain.Demandepharmaciecentrale;

import com.mycompany.myapp.repository.DemandepharmaciecentraleRepository;
import com.mycompany.myapp.service.MailService;
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
 * REST controller for managing Demandepharmaciecentrale.
 */
@RestController
@RequestMapping("/api")
public class DemandepharmaciecentraleResource {

    private final Logger log = LoggerFactory.getLogger(DemandepharmaciecentraleResource.class);

    private static final String ENTITY_NAME = "demandepharmaciecentrale";

    private final MailService mailService;

    private final DemandepharmaciecentraleRepository demandepharmaciecentraleRepository;

    public DemandepharmaciecentraleResource(DemandepharmaciecentraleRepository demandepharmaciecentraleRepository, MailService mailService) {
        this.demandepharmaciecentraleRepository = demandepharmaciecentraleRepository;
        this.mailService = mailService;
    }

    /**
     * POST  /demandepharmaciecentrales : Create a new demandepharmaciecentrale.
     *
     * @param demandepharmaciecentrale the demandepharmaciecentrale to create
     * @return the ResponseEntity with status 201 (Created) and with body the new demandepharmaciecentrale, or with status 400 (Bad Request) if the demandepharmaciecentrale has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/demandepharmaciecentrales")
    @Timed
    public ResponseEntity<Demandepharmaciecentrale> createDemandepharmaciecentrale(@RequestBody Demandepharmaciecentrale demandepharmaciecentrale) throws URISyntaxException {
        log.debug("REST request to save Demandepharmaciecentrale : {}", demandepharmaciecentrale);
        if (demandepharmaciecentrale.getId() != null) {
            return ResponseEntity.badRequest().headers(HeaderUtil.createFailureAlert(ENTITY_NAME, "idexists", "A new demandepharmaciecentrale cannot already have an ID")).body(null);
        }
        Demandepharmaciecentrale result = demandepharmaciecentraleRepository.save(demandepharmaciecentrale);
        mailService.sendPharmacieEmail(demandepharmaciecentrale);
        return ResponseEntity.created(new URI("/api/demandepharmaciecentrales/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /demandepharmaciecentrales : Updates an existing demandepharmaciecentrale.
     *
     * @param demandepharmaciecentrale the demandepharmaciecentrale to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated demandepharmaciecentrale,
     * or with status 400 (Bad Request) if the demandepharmaciecentrale is not valid,
     * or with status 500 (Internal Server Error) if the demandepharmaciecentrale couldnt be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/demandepharmaciecentrales")
    @Timed
    public ResponseEntity<Demandepharmaciecentrale> updateDemandepharmaciecentrale(@RequestBody Demandepharmaciecentrale demandepharmaciecentrale) throws URISyntaxException {
        log.debug("REST request to update Demandepharmaciecentrale : {}", demandepharmaciecentrale);
        if (demandepharmaciecentrale.getId() == null) {
            return createDemandepharmaciecentrale(demandepharmaciecentrale);
        }
        Demandepharmaciecentrale result = demandepharmaciecentraleRepository.save(demandepharmaciecentrale);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, demandepharmaciecentrale.getId().toString()))
            .body(result);
    }

    /**
     * GET  /demandepharmaciecentrales : get all the demandepharmaciecentrales.
     *
     * @param pageable the pagination information
     * @return the ResponseEntity with status 200 (OK) and the list of demandepharmaciecentrales in body
     * @throws URISyntaxException if there is an error to generate the pagination HTTP headers
     */
    @GetMapping("/demandepharmaciecentrales")
    @Timed
    public ResponseEntity<List<Demandepharmaciecentrale>> getAllDemandepharmaciecentrales(@ApiParam Pageable pageable)
        throws URISyntaxException {
        log.debug("REST request to get a page of Demandepharmaciecentrales");
        Page<Demandepharmaciecentrale> page = demandepharmaciecentraleRepository.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/demandepharmaciecentrales");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

    /**
     * GET  /demandepharmaciecentrales/:id : get the "id" demandepharmaciecentrale.
     *
     * @param id the id of the demandepharmaciecentrale to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the demandepharmaciecentrale, or with status 404 (Not Found)
     */
    @GetMapping("/demandepharmaciecentrales/{id}")
    @Timed
    public ResponseEntity<Demandepharmaciecentrale> getDemandepharmaciecentrale(@PathVariable String id) {
        log.debug("REST request to get Demandepharmaciecentrale : {}", id);
        Demandepharmaciecentrale demandepharmaciecentrale = demandepharmaciecentraleRepository.findOne(id);
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(demandepharmaciecentrale));
    }

    /**
     * DELETE  /demandepharmaciecentrales/:id : delete the "id" demandepharmaciecentrale.
     *
     * @param id the id of the demandepharmaciecentrale to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/demandepharmaciecentrales/{id}")
    @Timed
    public ResponseEntity<Void> deleteDemandepharmaciecentrale(@PathVariable String id) {
        log.debug("REST request to delete Demandepharmaciecentrale : {}", id);
        demandepharmaciecentraleRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }

}
