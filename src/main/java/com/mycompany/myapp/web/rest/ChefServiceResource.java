package com.mycompany.myapp.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.mycompany.myapp.domain.ChefService;

import com.mycompany.myapp.domain.Doctor;
import com.mycompany.myapp.domain.User;
import com.mycompany.myapp.repository.ChefServiceRepository;
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

import java.net.URI;
import java.net.URISyntaxException;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

/**
 * REST controller for managing ChefService.
 */
@RestController
@RequestMapping("/api")
public class ChefServiceResource {

    private final Logger log = LoggerFactory.getLogger(ChefServiceResource.class);

    private static final String ENTITY_NAME = "chefService";

    private final ChefServiceRepository chefServiceRepository;

    private final UserService userService;

    private final MailService mailService;
    @Autowired
    MongoTemplate mongoTemplate;

    @Autowired
    DynamicReporGenerator reportGenarator ;

    public ChefServiceResource(ChefServiceRepository chefServiceRepository,UserService userService,MailService mailService) {
        this.chefServiceRepository = chefServiceRepository;
        this.userService = userService ;
        this.mailService = mailService;
    }

    /**
     * POST  /chef-services : Create a new chefService.
     *
     * @param chefService the chefService to create
     * @return the ResponseEntity with status 201 (Created) and with body the new chefService, or with status 400 (Bad Request) if the chefService has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/chef-services")
    @Timed
    public ResponseEntity<ChefService> createChefService(@RequestBody ChefService chefService) throws URISyntaxException {
        log.debug("REST request to save ChefService : {}", chefService);
        if (chefService.getId() != null) {
            return ResponseEntity.badRequest().headers(HeaderUtil.createFailureAlert(ENTITY_NAME, "idexists", "A new chefService cannot already have an ID")).body(null);
        }
        Set<String> autrority = new HashSet<>();
        autrority.add("ROLE_CHEF_SERVICE");
        UserDTO userDTO = new UserDTO(null, chefService.getLogin(), chefService.getNometprenom(), chefService.getNometprenom(), chefService.getEmail(),true, null, "en", null, null, null, null,chefService.getPhoto(), autrority);
        User createUser = userService.createUser(userDTO);
        chefService.setMotdepasse(createUser.getPassword());
        ChefService result = chefServiceRepository.save(chefService);
        mailService.sendCreationEmail(createUser);
        return ResponseEntity.created(new URI("/api/chef-services/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }







    /**
     * PUT  /chef-services : Updates an existing chefService.
     *
     * @param chefService the chefService to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated chefService,
     * or with status 400 (Bad Request) if the chefService is not valid,
     * or with status 500 (Internal Server Error) if the chefService couldnt be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/chef-services")
    @Timed
    public ResponseEntity<ChefService> updateChefService(@RequestBody ChefService chefService) throws URISyntaxException {
        log.debug("REST request to update ChefService : {}", chefService);
        if (chefService.getId() == null) {
            return createChefService(chefService);
        }
        ChefService result = chefServiceRepository.save(chefService);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, chefService.getId().toString()))
            .body(result);
    }

    /**
     * GET  /chef-services : get all the chefServices.
     *
     * @param pageable the pagination information
     * @return the ResponseEntity with status 200 (OK) and the list of chefServices in body
     * @throws URISyntaxException if there is an error to generate the pagination HTTP headers
     */
    @GetMapping("/chef-services")
    @Timed
    public ResponseEntity<List<ChefService>> getAllChefServices(@ApiParam Pageable pageable)
        throws URISyntaxException {
        log.debug("REST request to get a page of ChefServices");
        Page<ChefService> page = chefServiceRepository.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/chef-services");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

    /**
     * GET  /chef-services/:id : get the "id" chefService.
     *
     * @param id the id of the chefService to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the chefService, or with status 404 (Not Found)
     */
    @GetMapping("/chef-services/{id}")
    @Timed
    public ResponseEntity<ChefService> getChefService(@PathVariable String id) {
        log.debug("REST request to get ChefService : {}", id);
        ChefService chefService = chefServiceRepository.findOne(id);
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(chefService));
    }

    /**
     * DELETE  /chef-services/:id : delete the "id" chefService.
     *
     * @param id the id of the chefService to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/chef-services/{id}")
    @Timed
    public ResponseEntity<Void> deleteChefService(@PathVariable String id) {
        log.debug("REST request to delete ChefService : {}", id);
        chefServiceRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }

}
