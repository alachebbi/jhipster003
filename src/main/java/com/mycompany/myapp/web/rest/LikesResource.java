package com.mycompany.myapp.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.mycompany.myapp.domain.Likes;
import com.mycompany.myapp.service.LikesService;
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
 * REST controller for managing Likes.
 */
@RestController
@RequestMapping("/api")
public class LikesResource {

    private final Logger log = LoggerFactory.getLogger(LikesResource.class);

    private static final String ENTITY_NAME = "likes";
        
    private final LikesService likesService;

    public LikesResource(LikesService likesService) {
        this.likesService = likesService;
    }

    /**
     * POST  /likes : Create a new likes.
     *
     * @param likes the likes to create
     * @return the ResponseEntity with status 201 (Created) and with body the new likes, or with status 400 (Bad Request) if the likes has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/likes")
    @Timed
    public ResponseEntity<Likes> createLikes(@RequestBody Likes likes) throws URISyntaxException {
        log.debug("REST request to save Likes : {}", likes);
        if (likes.getId() != null) {
            return ResponseEntity.badRequest().headers(HeaderUtil.createFailureAlert(ENTITY_NAME, "idexists", "A new likes cannot already have an ID")).body(null);
        }
        Likes result = likesService.save(likes);
        return ResponseEntity.created(new URI("/api/likes/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /likes : Updates an existing likes.
     *
     * @param likes the likes to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated likes,
     * or with status 400 (Bad Request) if the likes is not valid,
     * or with status 500 (Internal Server Error) if the likes couldnt be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/likes")
    @Timed
    public ResponseEntity<Likes> updateLikes(@RequestBody Likes likes) throws URISyntaxException {
        log.debug("REST request to update Likes : {}", likes);
        if (likes.getId() == null) {
            return createLikes(likes);
        }
        Likes result = likesService.save(likes);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, likes.getId().toString()))
            .body(result);
    }

    /**
     * GET  /likes : get all the likes.
     *
     * @param pageable the pagination information
     * @return the ResponseEntity with status 200 (OK) and the list of likes in body
     * @throws URISyntaxException if there is an error to generate the pagination HTTP headers
     */
    @GetMapping("/likes")
    @Timed
    public ResponseEntity<List<Likes>> getAllLikes(@ApiParam Pageable pageable)
        throws URISyntaxException {
        log.debug("REST request to get a page of Likes");
        Page<Likes> page = likesService.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/likes");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

    /**
     * GET  /likes/:id : get the "id" likes.
     *
     * @param id the id of the likes to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the likes, or with status 404 (Not Found)
     */
    @GetMapping("/likes/{id}")
    @Timed
    public ResponseEntity<Likes> getLikes(@PathVariable String id) {
        log.debug("REST request to get Likes : {}", id);
        Likes likes = likesService.findOne(id);
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(likes));
    }

    /**
     * DELETE  /likes/:id : delete the "id" likes.
     *
     * @param id the id of the likes to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/likes/{id}")
    @Timed
    public ResponseEntity<Void> deleteLikes(@PathVariable String id) {
        log.debug("REST request to delete Likes : {}", id);
        likesService.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }

}
