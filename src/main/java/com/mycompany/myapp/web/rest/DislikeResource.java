package com.mycompany.myapp.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.mycompany.myapp.domain.Dislike;

import com.mycompany.myapp.domain.Likes;
import com.mycompany.myapp.repository.DislikeRepository;
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
 * REST controller for managing Dislike.
 */
@RestController
@RequestMapping("/api")
public class DislikeResource {

    private final Logger log = LoggerFactory.getLogger(DislikeResource.class);

    private static final String ENTITY_NAME = "dislike";

    private final DislikeRepository dislikeRepository;

    public DislikeResource(DislikeRepository dislikeRepository) {
        this.dislikeRepository = dislikeRepository;
    }

    /**
     * POST  /dislikes : Create a new dislike.
     *
     * @param dislike the dislike to create
     * @return the ResponseEntity with status 201 (Created) and with body the new dislike, or with status 400 (Bad Request) if the dislike has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/dislikes")
    @Timed
    public ResponseEntity<Dislike> createDislike(@RequestBody Dislike dislike) throws URISyntaxException {
        log.debug("REST request to save Dislike : {}", dislike);
        if (dislike.getId() != null) {
            return ResponseEntity.badRequest().headers(HeaderUtil.createFailureAlert(ENTITY_NAME, "idexists", "A new dislike cannot already have an ID")).body(null);
        }
        Dislike result = dislikeRepository.save(dislike);
        return ResponseEntity.created(new URI("/api/dislikes/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /dislikes : Updates an existing dislike.
     *
     * @param dislike the dislike to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated dislike,
     * or with status 400 (Bad Request) if the dislike is not valid,
     * or with status 500 (Internal Server Error) if the dislike couldnt be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/dislikes")
    @Timed
    public ResponseEntity<Dislike> updateDislike(@RequestBody Dislike dislike) throws URISyntaxException {
        log.debug("REST request to update Dislike : {}", dislike);
        if (dislike.getId() == null) {
            return createDislike(dislike);
        }
        Dislike result = dislikeRepository.save(dislike);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, dislike.getId().toString()))
            .body(result);
    }

    /**
     * GET  /dislikes : get all the dislikes.
     *
     * @param pageable the pagination information
     * @return the ResponseEntity with status 200 (OK) and the list of dislikes in body
     * @throws URISyntaxException if there is an error to generate the pagination HTTP headers
     */
    @GetMapping("/dislikes")
    @Timed
    public ResponseEntity<List<Dislike>> getAllDislikes(@ApiParam Pageable pageable)
        throws URISyntaxException {
        log.debug("REST request to get a page of Dislikes");
        Page<Dislike> page = dislikeRepository.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/dislikes");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

    /**
     * GET  /dislikes/:id : get the "id" dislike.
     *
     * @param id the id of the dislike to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the dislike, or with status 404 (Not Found)
     */
    @GetMapping("/dislikes/{id}")
    @Timed
    public ResponseEntity<Dislike> getDislike(@PathVariable String id) {
        log.debug("REST request to get Dislike : {}", id);
        Dislike dislike = dislikeRepository.findOne(id);
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(dislike));
    }

    /**
     * DELETE  /dislikes/:id : delete the "id" dislike.
     *
     * @param id the id of the dislike to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/dislikes/{id}")
    @Timed
    public ResponseEntity<Void> deleteDislike(@PathVariable String id) {
        log.debug("REST request to delete Dislike : {}", id);
        dislikeRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }
    @GetMapping("/dislikes/{article}/{utilisateur}")
    @Timed
    public ResponseEntity<Dislike> findByidandname(@PathVariable String article, @PathVariable String utilisateur) {

        Dislike dislike = dislikeRepository.findByidandname(article,utilisateur);
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(dislike));
    }

}
