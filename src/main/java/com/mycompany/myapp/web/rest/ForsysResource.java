package com.mycompany.myapp.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.mycompany.myapp.domain.Forsys;

import com.mycompany.myapp.repository.ForsysRepository;
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

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing Forsys.
 */
@RestController
@RequestMapping("/api")
public class ForsysResource {

    private final Logger log = LoggerFactory.getLogger(ForsysResource.class);

    private static final String ENTITY_NAME = "forsys";
        
    private final ForsysRepository forsysRepository;

    public ForsysResource(ForsysRepository forsysRepository) {
        this.forsysRepository = forsysRepository;
    }

    /**
     * POST  /forsys : Create a new forsys.
     *
     * @param forsys the forsys to create
     * @return the ResponseEntity with status 201 (Created) and with body the new forsys, or with status 400 (Bad Request) if the forsys has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/forsys")
    @Timed
    public ResponseEntity<Forsys> createForsys(@Valid @RequestBody Forsys forsys) throws URISyntaxException {
        log.debug("REST request to save Forsys : {}", forsys);
        if (forsys.getId() != null) {
            return ResponseEntity.badRequest().headers(HeaderUtil.createFailureAlert(ENTITY_NAME, "idexists", "A new forsys cannot already have an ID")).body(null);
        }
        Forsys result = forsysRepository.save(forsys);
        return ResponseEntity.created(new URI("/api/forsys/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /forsys : Updates an existing forsys.
     *
     * @param forsys the forsys to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated forsys,
     * or with status 400 (Bad Request) if the forsys is not valid,
     * or with status 500 (Internal Server Error) if the forsys couldnt be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/forsys")
    @Timed
    public ResponseEntity<Forsys> updateForsys(@Valid @RequestBody Forsys forsys) throws URISyntaxException {
        log.debug("REST request to update Forsys : {}", forsys);
        if (forsys.getId() == null) {
            return createForsys(forsys);
        }
        Forsys result = forsysRepository.save(forsys);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, forsys.getId().toString()))
            .body(result);
    }

    /**
     * GET  /forsys : get all the forsys.
     *
     * @param pageable the pagination information
     * @return the ResponseEntity with status 200 (OK) and the list of forsys in body
     * @throws URISyntaxException if there is an error to generate the pagination HTTP headers
     */
    @GetMapping("/forsys")
    @Timed
    public ResponseEntity<List<Forsys>> getAllForsys(@ApiParam Pageable pageable)
        throws URISyntaxException {
        log.debug("REST request to get a page of Forsys");
        Page<Forsys> page = forsysRepository.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/forsys");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

    /**
     * GET  /forsys/:id : get the "id" forsys.
     *
     * @param id the id of the forsys to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the forsys, or with status 404 (Not Found)
     */
    @GetMapping("/forsys/{id}")
    @Timed
    public ResponseEntity<Forsys> getForsys(@PathVariable String id) {
        log.debug("REST request to get Forsys : {}", id);
        Forsys forsys = forsysRepository.findOne(id);
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(forsys));
    }

    /**
     * DELETE  /forsys/:id : delete the "id" forsys.
     *
     * @param id the id of the forsys to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/forsys/{id}")
    @Timed
    public ResponseEntity<Void> deleteForsys(@PathVariable String id) {
        log.debug("REST request to delete Forsys : {}", id);
        forsysRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }

}
