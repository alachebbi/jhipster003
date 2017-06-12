package com.mycompany.myapp.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.mycompany.myapp.domain.DemandeMedicamentVf;

import com.mycompany.myapp.repository.DemandeMedicamentVfRepository;
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
 * REST controller for managing DemandeMedicamentVf.
 */
@RestController
@RequestMapping("/api")
public class DemandeMedicamentVfResource {

    private final Logger log = LoggerFactory.getLogger(DemandeMedicamentVfResource.class);

    private static final String ENTITY_NAME = "demandeMedicamentVf";
        
    private final DemandeMedicamentVfRepository demandeMedicamentVfRepository;

    public DemandeMedicamentVfResource(DemandeMedicamentVfRepository demandeMedicamentVfRepository) {
        this.demandeMedicamentVfRepository = demandeMedicamentVfRepository;
    }

    /**
     * POST  /demande-medicament-vfs : Create a new demandeMedicamentVf.
     *
     * @param demandeMedicamentVf the demandeMedicamentVf to create
     * @return the ResponseEntity with status 201 (Created) and with body the new demandeMedicamentVf, or with status 400 (Bad Request) if the demandeMedicamentVf has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/demande-medicament-vfs")
    @Timed
    public ResponseEntity<DemandeMedicamentVf> createDemandeMedicamentVf(@RequestBody DemandeMedicamentVf demandeMedicamentVf) throws URISyntaxException {
        log.debug("REST request to save DemandeMedicamentVf : {}", demandeMedicamentVf);
        if (demandeMedicamentVf.getId() != null) {
            return ResponseEntity.badRequest().headers(HeaderUtil.createFailureAlert(ENTITY_NAME, "idexists", "A new demandeMedicamentVf cannot already have an ID")).body(null);
        }
        DemandeMedicamentVf result = demandeMedicamentVfRepository.save(demandeMedicamentVf);
        return ResponseEntity.created(new URI("/api/demande-medicament-vfs/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /demande-medicament-vfs : Updates an existing demandeMedicamentVf.
     *
     * @param demandeMedicamentVf the demandeMedicamentVf to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated demandeMedicamentVf,
     * or with status 400 (Bad Request) if the demandeMedicamentVf is not valid,
     * or with status 500 (Internal Server Error) if the demandeMedicamentVf couldnt be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/demande-medicament-vfs")
    @Timed
    public ResponseEntity<DemandeMedicamentVf> updateDemandeMedicamentVf(@RequestBody DemandeMedicamentVf demandeMedicamentVf) throws URISyntaxException {
        log.debug("REST request to update DemandeMedicamentVf : {}", demandeMedicamentVf);
        if (demandeMedicamentVf.getId() == null) {
            return createDemandeMedicamentVf(demandeMedicamentVf);
        }
        DemandeMedicamentVf result = demandeMedicamentVfRepository.save(demandeMedicamentVf);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, demandeMedicamentVf.getId().toString()))
            .body(result);
    }

    /**
     * GET  /demande-medicament-vfs : get all the demandeMedicamentVfs.
     *
     * @param pageable the pagination information
     * @return the ResponseEntity with status 200 (OK) and the list of demandeMedicamentVfs in body
     * @throws URISyntaxException if there is an error to generate the pagination HTTP headers
     */
    @GetMapping("/demande-medicament-vfs")
    @Timed
    public ResponseEntity<List<DemandeMedicamentVf>> getAllDemandeMedicamentVfs(@ApiParam Pageable pageable)
        throws URISyntaxException {
        log.debug("REST request to get a page of DemandeMedicamentVfs");
        Page<DemandeMedicamentVf> page = demandeMedicamentVfRepository.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/demande-medicament-vfs");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

    /**
     * GET  /demande-medicament-vfs/:id : get the "id" demandeMedicamentVf.
     *
     * @param id the id of the demandeMedicamentVf to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the demandeMedicamentVf, or with status 404 (Not Found)
     */
    @GetMapping("/demande-medicament-vfs/{id}")
    @Timed
    public ResponseEntity<DemandeMedicamentVf> getDemandeMedicamentVf(@PathVariable String id) {
        log.debug("REST request to get DemandeMedicamentVf : {}", id);
        DemandeMedicamentVf demandeMedicamentVf = demandeMedicamentVfRepository.findOne(id);
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(demandeMedicamentVf));
    }

    /**
     * DELETE  /demande-medicament-vfs/:id : delete the "id" demandeMedicamentVf.
     *
     * @param id the id of the demandeMedicamentVf to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/demande-medicament-vfs/{id}")
    @Timed
    public ResponseEntity<Void> deleteDemandeMedicamentVf(@PathVariable String id) {
        log.debug("REST request to delete DemandeMedicamentVf : {}", id);
        demandeMedicamentVfRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }

}
