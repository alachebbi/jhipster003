package com.mycompany.myapp.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.mycompany.myapp.domain.Demandemedi;

import com.mycompany.myapp.repository.DemandemediRepository;
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
 * REST controller for managing Demandemedi.
 */
@RestController
@RequestMapping("/api")
public class DemandemediResource {

    private final Logger log = LoggerFactory.getLogger(DemandemediResource.class);

    private static final String ENTITY_NAME = "demandemedi";
        
    private final DemandemediRepository demandemediRepository;

    public DemandemediResource(DemandemediRepository demandemediRepository) {
        this.demandemediRepository = demandemediRepository;
    }

    /**
     * POST  /demandemedis : Create a new demandemedi.
     *
     * @param demandemedi the demandemedi to create
     * @return the ResponseEntity with status 201 (Created) and with body the new demandemedi, or with status 400 (Bad Request) if the demandemedi has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/demandemedis")
    @Timed
    public ResponseEntity<Demandemedi> createDemandemedi(@RequestBody Demandemedi demandemedi) throws URISyntaxException {
        log.debug("REST request to save Demandemedi : {}", demandemedi);
        if (demandemedi.getId() != null) {
            return ResponseEntity.badRequest().headers(HeaderUtil.createFailureAlert(ENTITY_NAME, "idexists", "A new demandemedi cannot already have an ID")).body(null);
        }
        Demandemedi result = demandemediRepository.save(demandemedi);
        return ResponseEntity.created(new URI("/api/demandemedis/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /demandemedis : Updates an existing demandemedi.
     *
     * @param demandemedi the demandemedi to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated demandemedi,
     * or with status 400 (Bad Request) if the demandemedi is not valid,
     * or with status 500 (Internal Server Error) if the demandemedi couldnt be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/demandemedis")
    @Timed
    public ResponseEntity<Demandemedi> updateDemandemedi(@RequestBody Demandemedi demandemedi) throws URISyntaxException {
        log.debug("REST request to update Demandemedi : {}", demandemedi);
        if (demandemedi.getId() == null) {
            return createDemandemedi(demandemedi);
        }
        Demandemedi result = demandemediRepository.save(demandemedi);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, demandemedi.getId().toString()))
            .body(result);
    }

    /**
     * GET  /demandemedis : get all the demandemedis.
     *
     * @param pageable the pagination information
     * @return the ResponseEntity with status 200 (OK) and the list of demandemedis in body
     * @throws URISyntaxException if there is an error to generate the pagination HTTP headers
     */
    @GetMapping("/demandemedis")
    @Timed
    public ResponseEntity<List<Demandemedi>> getAllDemandemedis(@ApiParam Pageable pageable)
        throws URISyntaxException {
        log.debug("REST request to get a page of Demandemedis");
        Page<Demandemedi> page = demandemediRepository.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/demandemedis");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

    /**
     * GET  /demandemedis/:id : get the "id" demandemedi.
     *
     * @param id the id of the demandemedi to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the demandemedi, or with status 404 (Not Found)
     */
    @GetMapping("/demandemedis/{id}")
    @Timed
    public ResponseEntity<Demandemedi> getDemandemedi(@PathVariable String id) {
        log.debug("REST request to get Demandemedi : {}", id);
        Demandemedi demandemedi = demandemediRepository.findOne(id);
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(demandemedi));
    }

    /**
     * DELETE  /demandemedis/:id : delete the "id" demandemedi.
     *
     * @param id the id of the demandemedi to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/demandemedis/{id}")
    @Timed
    public ResponseEntity<Void> deleteDemandemedi(@PathVariable String id) {
        log.debug("REST request to delete Demandemedi : {}", id);
        demandemediRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }

}
