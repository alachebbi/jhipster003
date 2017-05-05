package com.mycompany.myapp.web.rest;

import static org.springframework.data.mongodb.core.aggregation.Aggregation.group;
import static org.springframework.data.mongodb.core.aggregation.Aggregation.match;
import static org.springframework.data.mongodb.core.aggregation.Aggregation.newAggregation;
import static org.springframework.data.mongodb.core.aggregation.Aggregation.project;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletResponse;

import com.mycompany.myapp.domain.Infirmier;
import com.mycompany.myapp.domain.User;
import com.mycompany.myapp.service.MailService;
import com.mycompany.myapp.service.UserService;
import com.mycompany.myapp.service.dto.UserDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.codahale.metrics.annotation.Timed;
import com.mycompany.myapp.domain.Doctor;
import com.mycompany.myapp.repository.DoctorRepository;
import com.mycompany.myapp.security.AuthoritiesConstants;
import com.mycompany.myapp.service.dto.ChartData;
import com.mycompany.myapp.service.dto.DoctorDTO;
import com.mycompany.myapp.service.util.DynamicReporGenerator;
import com.mycompany.myapp.service.util.ReportTemplate;
import com.mycompany.myapp.web.rest.util.HeaderUtil;
import com.mycompany.myapp.web.rest.util.PaginationUtil;

import io.github.jhipster.web.util.ResponseUtil;
import io.swagger.annotations.ApiParam;
import net.sf.dynamicreports.report.exception.DRException;


/**
 * REST controller for managing Doctor.
 */
@RestController
@RequestMapping("/api")
public class DoctorResource {

    private final Logger log = LoggerFactory.getLogger(DoctorResource.class);

    private static final String ENTITY_NAME = "doctor";

    private final DoctorRepository doctorRepository;

    private final UserService userService;

    private final MailService mailService;
    @Autowired
    MongoTemplate mongoTemplate;

    @Autowired
    DynamicReporGenerator reportGenarator ;

    public DoctorResource(DoctorRepository doctorRepository, UserService userService, MailService mailService) {
        this.doctorRepository = doctorRepository;
        this.userService = userService ;
        this.mailService = mailService;

    }

    /**
     * POST  /doctors : Create a new doctor.
     *
     * @param doctor the doctor to create
     * @return the ResponseEntity with status 201 (Created) and with body the new doctor, or with status 400 (Bad Request) if the doctor has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/doctors")
    @Timed
    public ResponseEntity<Doctor> createDoctor(@RequestBody Doctor doctor) throws URISyntaxException {
		/*log.debug("REST request to save Doctor : {}", doctor);
		if (doctor.getId() != null) {
			return ResponseEntity.badRequest().headers(HeaderUtil.createFailureAlert(ENTITY_NAME, "idexists", "A new doctor cannot already have an ID")).body(null);
		}
		Doctor result = doctorRepository.save(doctor);
		return ResponseEntity.created(new URI("/api/doctors/" + result.getId()))
				.headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
				.body(result);
	}*/

        log.debug("REST request to save Doctor : {}", doctor);
        if (doctor.getId() != null) {
            return ResponseEntity.badRequest().headers(HeaderUtil.createFailureAlert(ENTITY_NAME, "idexists", "A new infirmier cannot already have an ID")).body(null);
        }
        Set<String> autrority = new HashSet<>();
        // autrority.add("ROLE_MEDECIN_CHEF");
        autrority.add("ROLE_MEDECIN");
        UserDTO userDTO = new UserDTO(null, doctor.getLogin(), doctor.getNometprenom(), doctor.getNometprenom(), doctor.getEmail(),true, null, "en", null, null, null, null,doctor.getPhoto(), autrority);
        User createUser = userService.createUser(userDTO);
        doctor.setMotdepasse(createUser.getPassword());
        Doctor result = doctorRepository.save(doctor);
        mailService.sendCreationEmail(createUser);
        return ResponseEntity.created(new URI("/api/doctors/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }
    /**
     * PUT  /doctors : Updates an existing doctor.
     *
     * @param doctor the doctor to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated doctor,
     * or with status 400 (Bad Request) if the doctor is not valid,
     * or with status 500 (Internal Server Error) if the doctor couldnt be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/doctors")
    @Timed
    public ResponseEntity<Doctor> updateDoctor(@RequestBody Doctor doctor) throws URISyntaxException {
        log.debug("REST request to update Doctor : {}", doctor);
        if (doctor.getId() == null) {
            return createDoctor(doctor);
        }
        Doctor result = doctorRepository.save(doctor);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, doctor.getId().toString()))
            .body(result);
    }


    /**
     * GET  /doctors : get all the doctors.
     *
     * @param pageable the pagination information
     * @return the ResponseEntity with status 200 (OK) and the list of doctors in body
     * @throws URISyntaxException if there is an error to generate the pagination HTTP headers
     */
    @GetMapping("/doctors")
    @Timed
    public ResponseEntity<List<Doctor>> getAllDoctors(@ApiParam Pageable pageable)
        throws URISyntaxException {
        log.debug("REST request to get a page of Doctors");
        Page<Doctor> page = doctorRepository.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/doctors");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

    /**
     * GET  /doctors/:id : get the "id" doctor.
     *
     * @param id the id of the doctor to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the doctor, or with status 404 (Not Found)
     */
    @GetMapping("/doctors/{id}")
    @Timed
    public ResponseEntity<Doctor> getDoctor(@PathVariable String id) {
        log.debug("REST request to get Doctor : {}", id);
        Doctor doctor = doctorRepository.findOne(id);
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(doctor));
    }

    /**
     * DELETE  /doctors/:id : delete the "id" doctor.
     *
     * @param id the id of the doctor to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/doctors/{id}")
    @Timed
    public ResponseEntity<Void> deleteDoctor(@PathVariable String id) {
        log.debug("REST request to delete Doctor : {}", id);
        doctorRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }

    @GetMapping("/doctors/all-doctor.pdf")
    @Secured({AuthoritiesConstants.ADMIN,AuthoritiesConstants.MEDECIN})
    public void printAll(HttpServletResponse resp) throws ServletException, IOException , URISyntaxException, DRException {
        final List<DoctorDTO> medecins = doctorRepository.findAll()
            .stream()
            .map(DoctorDTO::new)
            .collect(Collectors.toList());
        reportGenarator.generate(resp, medecins, ReportTemplate.MEDECIN_LIST);
    }

    @GetMapping("/doctors/{id}/doctor.pdf")
    @Secured({AuthoritiesConstants.ADMIN,AuthoritiesConstants.MEDECIN})
    public void printOne(@PathVariable String id ,HttpServletResponse resp) throws ServletException, IOException , URISyntaxException, DRException {
        final Doctor medecin = doctorRepository.findOne(id);
        List<DoctorDTO> medecins = Stream.of(medecin).map(DoctorDTO::new).collect(Collectors.toList());
        reportGenarator.generate(resp, medecins, ReportTemplate.MEDECIN_DETAIL);
    }


    @GetMapping("/doctors/chartdata")
    public List<ChartData> getMedecinChartData(){
        Aggregation agg = newAggregation(
            match(Criteria.where("_id").ne(null)),
            group("specialite").count().as("value"),
            project("value").and("title").previousOperation()
        );

        AggregationResults<ChartData> groupResults
            = mongoTemplate.aggregate(agg, Doctor.class, ChartData.class);
        return groupResults.getMappedResults();


    }
}
