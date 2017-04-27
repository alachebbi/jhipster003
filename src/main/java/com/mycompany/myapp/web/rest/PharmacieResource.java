package com.mycompany.myapp.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.mycompany.myapp.domain.Doctor;
import com.mycompany.myapp.domain.Pharmacie;

import com.mycompany.myapp.domain.User;
import com.mycompany.myapp.repository.PharmacieRepository;
import com.mycompany.myapp.service.MailService;
import com.mycompany.myapp.service.UserService;
import com.mycompany.myapp.service.dto.UserDTO;
import com.mycompany.myapp.service.util.DynamicReporGenerator;
import com.mycompany.myapp.web.rest.util.HeaderUtil;
import com.mycompany.myapp.web.rest.util.PaginationUtil;
import io.swagger.annotations.ApiParam;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

/**
 * REST controller for managing Pharmacie.
 */
@RestController
@RequestMapping("/api")
public class PharmacieResource {

    private final Logger log = LoggerFactory.getLogger(PharmacieResource.class);

    private static final String ENTITY_NAME = "pharmacie";

    private final PharmacieRepository pharmacieRepository;

    private final UserService userService;

    private final MailService mailService;
    @Autowired
    MongoTemplate mongoTemplate;





    public PharmacieResource(PharmacieRepository pharmacieRepository , UserService userService, MailService mailService) {
        this.pharmacieRepository = pharmacieRepository;
        this.userService = userService ;
        this.mailService = mailService;
    }

    /**
     * POST  /pharmacies : Create a new pharmacie.
     *
     * @param pharmacie the pharmacie to create
     * @return the ResponseEntity with status 201 (Created) and with body the new pharmacie, or with status 400 (Bad Request) if the pharmacie has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/pharmacies")
    @Timed
    public ResponseEntity<Pharmacie> createPharmacie(@Valid @RequestBody Pharmacie pharmacie) throws URISyntaxException {
        log.debug("REST request to save Doctor : {}", pharmacie);
        if (pharmacie.getId() != null) {
            return ResponseEntity.badRequest().headers(HeaderUtil
                .createFailureAlert(ENTITY_NAME, "idexists", "A new infirmier cannot already have an ID")).body(null);
        }
        Set<String> autrority = new HashSet<>();
        // autrority.add("ROLE_MEDECIN_CHEF");
        autrority.add("ROLE_PHARMACIEN");
        UserDTO userDTO = new UserDTO(null, pharmacie.getLogin(), pharmacie.getNometprenom(), pharmacie.getNometprenom(), pharmacie.getEmail(),true, null, "en", null, null, null, null, autrority);
        User createUser = userService.createUser(userDTO);
        pharmacie.setMotdepasse(createUser.getPassword());
        Pharmacie result = pharmacieRepository.save(pharmacie);
        mailService.sendCreationEmail(createUser);
        return ResponseEntity.created(new URI("/api/pharmacies/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /pharmacies : Updates an existing pharmacie.
     *
     * @param pharmacie the pharmacie to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated pharmacie,
     * or with status 400 (Bad Request) if the pharmacie is not valid,
     * or with status 500 (Internal Server Error) if the pharmacie couldnt be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/pharmacies")
    @Timed
    public ResponseEntity<Pharmacie> updatePharmacie(@Valid @RequestBody Pharmacie pharmacie) throws URISyntaxException {
        log.debug("REST request to update Pharmacie : {}", pharmacie);
        if (pharmacie.getId() == null) {
            return createPharmacie(pharmacie);
        }
        Pharmacie result = pharmacieRepository.save(pharmacie);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, pharmacie.getId().toString()))
            .body(result);
    }

    /**
     * GET  /pharmacies : get all the pharmacies.
     *
     * @param pageable the pagination information
     * @return the ResponseEntity with status 200 (OK) and the list of pharmacies in body
     * @throws URISyntaxException if there is an error to generate the pagination HTTP headers
     */
    @GetMapping("/pharmacies")
    @Timed
    public ResponseEntity<List<Pharmacie>> getAllPharmacies(@ApiParam Pageable pageable)
        throws URISyntaxException {
        log.debug("REST request to get a page of Pharmacies");
        Page<Pharmacie> page = pharmacieRepository.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/pharmacies");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

    /**
     * GET  /pharmacies/:id : get the "id" pharmacie.
     *
     * @param id the id of the pharmacie to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the pharmacie, or with status 404 (Not Found)
     */
    @GetMapping("/pharmacies/{id}")
    @Timed
    public ResponseEntity<Pharmacie> getPharmacie(@PathVariable String id) {
        log.debug("REST request to get Pharmacie : {}", id);
        Pharmacie pharmacie = pharmacieRepository.findOne(id);
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(pharmacie));
    }

    /**
     * DELETE  /pharmacies/:id : delete the "id" pharmacie.
     *
     * @param id the id of the pharmacie to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/pharmacies/{id}")
    @Timed
    public ResponseEntity<Void> deletePharmacie(@PathVariable String id) {
        log.debug("REST request to delete Pharmacie : {}", id);
        pharmacieRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }

}
