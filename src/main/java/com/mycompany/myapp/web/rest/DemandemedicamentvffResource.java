package com.mycompany.myapp.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.mycompany.myapp.domain.Demandemedicamentvff;
import com.mycompany.myapp.service.DemandemedicamentvffService;
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
 * REST controller for managing Demandemedicamentvff.
 */
@RestController
@RequestMapping("/api")
public class DemandemedicamentvffResource {

    private final Logger log = LoggerFactory.getLogger(DemandemedicamentvffResource.class);

    private static final String ENTITY_NAME = "demandemedicamentvff";
        
    private final DemandemedicamentvffService demandemedicamentvffService;

    public DemandemedicamentvffResource(DemandemedicamentvffService demandemedicamentvffService) {
        this.demandemedicamentvffService = demandemedicamentvffService;
    }

    /**
     * POST  /demandemedicamentvffs : Create a new demandemedicamentvff.
     *
     * @param demandemedicamentvff the demandemedicamentvff to create
     * @return the ResponseEntity with status 201 (Created) and with body the new demandemedicamentvff, or with status 400 (Bad Request) if the demandemedicamentvff has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/demandemedicamentvffs")
    @Timed
    public ResponseEntity<Demandemedicamentvff> createDemandemedicamentvff(@RequestBody Demandemedicamentvff demandemedicamentvff) throws URISyntaxException {
        log.debug("REST request to save Demandemedicamentvff : {}", demandemedicamentvff);
        if (demandemedicamentvff.getId() != null) {
            return ResponseEntity.badRequest().headers(HeaderUtil.createFailureAlert(ENTITY_NAME, "idexists", "A new demandemedicamentvff cannot already have an ID")).body(null);
        }
        Demandemedicamentvff result = demandemedicamentvffService.save(demandemedicamentvff);
        return ResponseEntity.created(new URI("/api/demandemedicamentvffs/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /demandemedicamentvffs : Updates an existing demandemedicamentvff.
     *
     * @param demandemedicamentvff the demandemedicamentvff to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated demandemedicamentvff,
     * or with status 400 (Bad Request) if the demandemedicamentvff is not valid,
     * or with status 500 (Internal Server Error) if the demandemedicamentvff couldnt be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/demandemedicamentvffs")
    @Timed
    public ResponseEntity<Demandemedicamentvff> updateDemandemedicamentvff(@RequestBody Demandemedicamentvff demandemedicamentvff) throws URISyntaxException {
        log.debug("REST request to update Demandemedicamentvff : {}", demandemedicamentvff);
        if (demandemedicamentvff.getId() == null) {
            return createDemandemedicamentvff(demandemedicamentvff);
        }
        Demandemedicamentvff result = demandemedicamentvffService.save(demandemedicamentvff);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, demandemedicamentvff.getId().toString()))
            .body(result);
    }

    /**
     * GET  /demandemedicamentvffs : get all the demandemedicamentvffs.
     *
     * @param pageable the pagination information
     * @return the ResponseEntity with status 200 (OK) and the list of demandemedicamentvffs in body
     * @throws URISyntaxException if there is an error to generate the pagination HTTP headers
     */
    @GetMapping("/demandemedicamentvffs")
    @Timed
    public ResponseEntity<List<Demandemedicamentvff>> getAllDemandemedicamentvffs(@ApiParam Pageable pageable)
        throws URISyntaxException {
        log.debug("REST request to get a page of Demandemedicamentvffs");
        Page<Demandemedicamentvff> page = demandemedicamentvffService.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/demandemedicamentvffs");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

    /**
     * GET  /demandemedicamentvffs/:id : get the "id" demandemedicamentvff.
     *
     * @param id the id of the demandemedicamentvff to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the demandemedicamentvff, or with status 404 (Not Found)
     */
    @GetMapping("/demandemedicamentvffs/{id}")
    @Timed
    public ResponseEntity<Demandemedicamentvff> getDemandemedicamentvff(@PathVariable String id) {
        log.debug("REST request to get Demandemedicamentvff : {}", id);
        Demandemedicamentvff demandemedicamentvff = demandemedicamentvffService.findOne(id);
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(demandemedicamentvff));
    }

    /**
     * DELETE  /demandemedicamentvffs/:id : delete the "id" demandemedicamentvff.
     *
     * @param id the id of the demandemedicamentvff to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/demandemedicamentvffs/{id}")
    @Timed
    public ResponseEntity<Void> deleteDemandemedicamentvff(@PathVariable String id) {
        log.debug("REST request to delete Demandemedicamentvff : {}", id);
        demandemedicamentvffService.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }

}
