package com.mycompany.myapp.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.mycompany.myapp.domain.DossierMedicalVF;

import com.mycompany.myapp.repository.DossierMedicalVFRepository;
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
 * REST controller for managing DossierMedicalVF.
 */
@RestController
@RequestMapping("/api")
public class DossierMedicalVFResource {

    private final Logger log = LoggerFactory.getLogger(DossierMedicalVFResource.class);

    private static final String ENTITY_NAME = "dossierMedicalVF";
        
    private final DossierMedicalVFRepository dossierMedicalVFRepository;

    public DossierMedicalVFResource(DossierMedicalVFRepository dossierMedicalVFRepository) {
        this.dossierMedicalVFRepository = dossierMedicalVFRepository;
    }

    /**
     * POST  /dossier-medical-vfs : Create a new dossierMedicalVF.
     *
     * @param dossierMedicalVF the dossierMedicalVF to create
     * @return the ResponseEntity with status 201 (Created) and with body the new dossierMedicalVF, or with status 400 (Bad Request) if the dossierMedicalVF has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/dossier-medical-vfs")
    @Timed
    public ResponseEntity<DossierMedicalVF> createDossierMedicalVF(@Valid @RequestBody DossierMedicalVF dossierMedicalVF) throws URISyntaxException {
        log.debug("REST request to save DossierMedicalVF : {}", dossierMedicalVF);
        if (dossierMedicalVF.getId() != null) {
            return ResponseEntity.badRequest().headers(HeaderUtil.createFailureAlert(ENTITY_NAME, "idexists", "A new dossierMedicalVF cannot already have an ID")).body(null);
        }
        DossierMedicalVF result = dossierMedicalVFRepository.save(dossierMedicalVF);
        return ResponseEntity.created(new URI("/api/dossier-medical-vfs/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /dossier-medical-vfs : Updates an existing dossierMedicalVF.
     *
     * @param dossierMedicalVF the dossierMedicalVF to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated dossierMedicalVF,
     * or with status 400 (Bad Request) if the dossierMedicalVF is not valid,
     * or with status 500 (Internal Server Error) if the dossierMedicalVF couldnt be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/dossier-medical-vfs")
    @Timed
    public ResponseEntity<DossierMedicalVF> updateDossierMedicalVF(@Valid @RequestBody DossierMedicalVF dossierMedicalVF) throws URISyntaxException {
        log.debug("REST request to update DossierMedicalVF : {}", dossierMedicalVF);
        if (dossierMedicalVF.getId() == null) {
            return createDossierMedicalVF(dossierMedicalVF);
        }
        DossierMedicalVF result = dossierMedicalVFRepository.save(dossierMedicalVF);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, dossierMedicalVF.getId().toString()))
            .body(result);
    }

    /**
     * GET  /dossier-medical-vfs : get all the dossierMedicalVFS.
     *
     * @param pageable the pagination information
     * @return the ResponseEntity with status 200 (OK) and the list of dossierMedicalVFS in body
     * @throws URISyntaxException if there is an error to generate the pagination HTTP headers
     */
    @GetMapping("/dossier-medical-vfs")
    @Timed
    public ResponseEntity<List<DossierMedicalVF>> getAllDossierMedicalVFS(@ApiParam Pageable pageable)
        throws URISyntaxException {
        log.debug("REST request to get a page of DossierMedicalVFS");
        Page<DossierMedicalVF> page = dossierMedicalVFRepository.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/dossier-medical-vfs");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

    /**
     * GET  /dossier-medical-vfs/:id : get the "id" dossierMedicalVF.
     *
     * @param id the id of the dossierMedicalVF to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the dossierMedicalVF, or with status 404 (Not Found)
     */
    @GetMapping("/dossier-medical-vfs/{id}")
    @Timed
    public ResponseEntity<DossierMedicalVF> getDossierMedicalVF(@PathVariable String id) {
        log.debug("REST request to get DossierMedicalVF : {}", id);
        DossierMedicalVF dossierMedicalVF = dossierMedicalVFRepository.findOne(id);
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(dossierMedicalVF));
    }

    /**
     * DELETE  /dossier-medical-vfs/:id : delete the "id" dossierMedicalVF.
     *
     * @param id the id of the dossierMedicalVF to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/dossier-medical-vfs/{id}")
    @Timed
    public ResponseEntity<Void> deleteDossierMedicalVF(@PathVariable String id) {
        log.debug("REST request to delete DossierMedicalVF : {}", id);
        dossierMedicalVFRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }

}
