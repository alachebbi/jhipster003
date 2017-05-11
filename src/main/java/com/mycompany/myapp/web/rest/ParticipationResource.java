package com.mycompany.myapp.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.mycompany.myapp.domain.Likes;
import com.mycompany.myapp.domain.Participation;

import com.mycompany.myapp.repository.ParticipationRepository;
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
 * REST controller for managing Participation.
 */
@RestController
@RequestMapping("/api")
public class ParticipationResource {

    private final Logger log = LoggerFactory.getLogger(ParticipationResource.class);

    private static final String ENTITY_NAME = "participation";

    private final ParticipationRepository participationRepository;

    public ParticipationResource(ParticipationRepository participationRepository) {
        this.participationRepository = participationRepository;
    }

    /**
     * POST  /participations : Create a new participation.
     *
     * @param participation the participation to create
     * @return the ResponseEntity with status 201 (Created) and with body the new participation, or with status 400 (Bad Request) if the participation has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/participations")
    @Timed
    public ResponseEntity<Participation> createParticipation(@RequestBody Participation participation) throws URISyntaxException {
        log.debug("REST request to save Participation : {}", participation);
        if (participation.getId() != null) {
            return ResponseEntity.badRequest().headers(HeaderUtil.createFailureAlert(ENTITY_NAME, "idexists", "A new participation cannot already have an ID")).body(null);
        }
        Participation result = participationRepository.save(participation);
        return ResponseEntity.created(new URI("/api/participations/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /participations : Updates an existing participation.
     *
     * @param participation the participation to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated participation,
     * or with status 400 (Bad Request) if the participation is not valid,
     * or with status 500 (Internal Server Error) if the participation couldnt be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/participations")
    @Timed
    public ResponseEntity<Participation> updateParticipation(@RequestBody Participation participation) throws URISyntaxException {
        log.debug("REST request to update Participation : {}", participation);
        if (participation.getId() == null) {
            return createParticipation(participation);
        }
        Participation result = participationRepository.save(participation);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, participation.getId().toString()))
            .body(result);
    }

    /**
     * GET  /participations : get all the participations.
     *
     * @param pageable the pagination information
     * @return the ResponseEntity with status 200 (OK) and the list of participations in body
     * @throws URISyntaxException if there is an error to generate the pagination HTTP headers
     */
    @GetMapping("/participations")
    @Timed
    public ResponseEntity<List<Participation>> getAllParticipations(@ApiParam Pageable pageable)
        throws URISyntaxException {
        log.debug("REST request to get a page of Participations");
        Page<Participation> page = participationRepository.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/participations");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

    /**
     * GET  /participations/:id : get the "id" participation.
     *
     * @param id the id of the participation to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the participation, or with status 404 (Not Found)
     */
    @GetMapping("/participations/{id}")
    @Timed
    public ResponseEntity<Participation> getParticipation(@PathVariable String id) {
        log.debug("REST request to get Participation : {}", id);
        Participation participation = participationRepository.findOne(id);
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(participation));
    }

    /**
     * DELETE  /participations/:id : delete the "id" participation.
     *
     * @param id the id of the participation to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/participations/{id}")
    @Timed
    public ResponseEntity<Void> deleteParticipation(@PathVariable String id) {
        log.debug("REST request to delete Participation : {}", id);
        participationRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }

    @GetMapping("/participations/{evenement}/{participant}")
    @Timed
    public ResponseEntity<Participation> findByidandname(@PathVariable String evenement, @PathVariable String participant) {

        Participation participation = participationRepository.findByidandname(evenement,participant);
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(participation));
    }

}
