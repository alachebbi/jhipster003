package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.AvancementApp;

import com.mycompany.myapp.domain.Demandepharmaciecentrale;
import com.mycompany.myapp.repository.DemandepharmaciecentraleRepository;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.web.PageableHandlerMethodArgumentResolver;
import org.springframework.http.MediaType;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Test class for the DemandepharmaciecentraleResource REST controller.
 *
 * @see DemandepharmaciecentraleResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = AvancementApp.class)
public class DemandepharmaciecentraleResourceIntTest {

    private static final String DEFAULT_MEDICAMENT = "AAAAAAAAAA";
    private static final String UPDATED_MEDICAMENT = "BBBBBBBBBB";

    private static final String DEFAULT_TYPE = "AAAAAAAAAA";
    private static final String UPDATED_TYPE = "BBBBBBBBBB";

    private static final LocalDate DEFAULT_DATE = LocalDate.ofEpochDay(0L);
    private static final LocalDate UPDATED_DATE = LocalDate.now(ZoneId.systemDefault());

    private static final String DEFAULT_NOMPHARMACIEN = "AAAAAAAAAA";
    private static final String UPDATED_NOMPHARMACIEN = "BBBBBBBBBB";

    private static final String DEFAULT_MAIL = "AAAAAAAAAA";
    private static final String UPDATED_MAIL = "BBBBBBBBBB";

    private static final Integer DEFAULT_QUANTITE = 1;
    private static final Integer UPDATED_QUANTITE = 2;

    @Autowired
    private DemandepharmaciecentraleRepository demandepharmaciecentraleRepository;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    private MockMvc restDemandepharmaciecentraleMockMvc;

    private Demandepharmaciecentrale demandepharmaciecentrale;

    @Before
   /* public void setup() {
        MockitoAnnotations.initMocks(this);
            DemandepharmaciecentraleResource demandepharmaciecentraleResource = new DemandepharmaciecentraleResource(demandepharmaciecentraleRepository);
        this.restDemandepharmaciecentraleMockMvc = MockMvcBuilders.standaloneSetup(demandepharmaciecentraleResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setMessageConverters(jacksonMessageConverter).build();
    }*/

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Demandepharmaciecentrale createEntity() {
        Demandepharmaciecentrale demandepharmaciecentrale = new Demandepharmaciecentrale()
                .medicament(DEFAULT_MEDICAMENT)
                .type(DEFAULT_TYPE)
                .date(DEFAULT_DATE)
                .nompharmacien(DEFAULT_NOMPHARMACIEN)
                .mail(DEFAULT_MAIL)
                .quantite(DEFAULT_QUANTITE);
        return demandepharmaciecentrale;
    }

    @Before
    public void initTest() {
        demandepharmaciecentraleRepository.deleteAll();
        demandepharmaciecentrale = createEntity();
    }

    @Test
    public void createDemandepharmaciecentrale() throws Exception {
        int databaseSizeBeforeCreate = demandepharmaciecentraleRepository.findAll().size();

        // Create the Demandepharmaciecentrale

        restDemandepharmaciecentraleMockMvc.perform(post("/api/demandepharmaciecentrales")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(demandepharmaciecentrale)))
            .andExpect(status().isCreated());

        // Validate the Demandepharmaciecentrale in the database
        List<Demandepharmaciecentrale> demandepharmaciecentraleList = demandepharmaciecentraleRepository.findAll();
        assertThat(demandepharmaciecentraleList).hasSize(databaseSizeBeforeCreate + 1);
        Demandepharmaciecentrale testDemandepharmaciecentrale = demandepharmaciecentraleList.get(demandepharmaciecentraleList.size() - 1);
        assertThat(testDemandepharmaciecentrale.getMedicament()).isEqualTo(DEFAULT_MEDICAMENT);
        assertThat(testDemandepharmaciecentrale.getType()).isEqualTo(DEFAULT_TYPE);
        assertThat(testDemandepharmaciecentrale.getDate()).isEqualTo(DEFAULT_DATE);
        assertThat(testDemandepharmaciecentrale.getNompharmacien()).isEqualTo(DEFAULT_NOMPHARMACIEN);
        assertThat(testDemandepharmaciecentrale.getMail()).isEqualTo(DEFAULT_MAIL);
        assertThat(testDemandepharmaciecentrale.getQuantite()).isEqualTo(DEFAULT_QUANTITE);
    }

    @Test
    public void createDemandepharmaciecentraleWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = demandepharmaciecentraleRepository.findAll().size();

        // Create the Demandepharmaciecentrale with an existing ID
        Demandepharmaciecentrale existingDemandepharmaciecentrale = new Demandepharmaciecentrale();
        existingDemandepharmaciecentrale.setId("existing_id");

        // An entity with an existing ID cannot be created, so this API call must fail
        restDemandepharmaciecentraleMockMvc.perform(post("/api/demandepharmaciecentrales")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(existingDemandepharmaciecentrale)))
            .andExpect(status().isBadRequest());

        // Validate the Alice in the database
        List<Demandepharmaciecentrale> demandepharmaciecentraleList = demandepharmaciecentraleRepository.findAll();
        assertThat(demandepharmaciecentraleList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    public void getAllDemandepharmaciecentrales() throws Exception {
        // Initialize the database
        demandepharmaciecentraleRepository.save(demandepharmaciecentrale);

        // Get all the demandepharmaciecentraleList
        restDemandepharmaciecentraleMockMvc.perform(get("/api/demandepharmaciecentrales?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(demandepharmaciecentrale.getId())))
            .andExpect(jsonPath("$.[*].medicament").value(hasItem(DEFAULT_MEDICAMENT.toString())))
            .andExpect(jsonPath("$.[*].type").value(hasItem(DEFAULT_TYPE.toString())))
            .andExpect(jsonPath("$.[*].date").value(hasItem(DEFAULT_DATE.toString())))
            .andExpect(jsonPath("$.[*].nompharmacien").value(hasItem(DEFAULT_NOMPHARMACIEN.toString())))
            .andExpect(jsonPath("$.[*].mail").value(hasItem(DEFAULT_MAIL.toString())))
            .andExpect(jsonPath("$.[*].quantite").value(hasItem(DEFAULT_QUANTITE)));
    }

    @Test
    public void getDemandepharmaciecentrale() throws Exception {
        // Initialize the database
        demandepharmaciecentraleRepository.save(demandepharmaciecentrale);

        // Get the demandepharmaciecentrale
        restDemandepharmaciecentraleMockMvc.perform(get("/api/demandepharmaciecentrales/{id}", demandepharmaciecentrale.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(demandepharmaciecentrale.getId()))
            .andExpect(jsonPath("$.medicament").value(DEFAULT_MEDICAMENT.toString()))
            .andExpect(jsonPath("$.type").value(DEFAULT_TYPE.toString()))
            .andExpect(jsonPath("$.date").value(DEFAULT_DATE.toString()))
            .andExpect(jsonPath("$.nompharmacien").value(DEFAULT_NOMPHARMACIEN.toString()))
            .andExpect(jsonPath("$.mail").value(DEFAULT_MAIL.toString()))
            .andExpect(jsonPath("$.quantite").value(DEFAULT_QUANTITE));
    }

    @Test
    public void getNonExistingDemandepharmaciecentrale() throws Exception {
        // Get the demandepharmaciecentrale
        restDemandepharmaciecentraleMockMvc.perform(get("/api/demandepharmaciecentrales/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    public void updateDemandepharmaciecentrale() throws Exception {
        // Initialize the database
        demandepharmaciecentraleRepository.save(demandepharmaciecentrale);
        int databaseSizeBeforeUpdate = demandepharmaciecentraleRepository.findAll().size();

        // Update the demandepharmaciecentrale
        Demandepharmaciecentrale updatedDemandepharmaciecentrale = demandepharmaciecentraleRepository.findOne(demandepharmaciecentrale.getId());
        updatedDemandepharmaciecentrale
                .medicament(UPDATED_MEDICAMENT)
                .type(UPDATED_TYPE)
                .date(UPDATED_DATE)
                .nompharmacien(UPDATED_NOMPHARMACIEN)
                .mail(UPDATED_MAIL)
                .quantite(UPDATED_QUANTITE);

        restDemandepharmaciecentraleMockMvc.perform(put("/api/demandepharmaciecentrales")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedDemandepharmaciecentrale)))
            .andExpect(status().isOk());

        // Validate the Demandepharmaciecentrale in the database
        List<Demandepharmaciecentrale> demandepharmaciecentraleList = demandepharmaciecentraleRepository.findAll();
        assertThat(demandepharmaciecentraleList).hasSize(databaseSizeBeforeUpdate);
        Demandepharmaciecentrale testDemandepharmaciecentrale = demandepharmaciecentraleList.get(demandepharmaciecentraleList.size() - 1);
        assertThat(testDemandepharmaciecentrale.getMedicament()).isEqualTo(UPDATED_MEDICAMENT);
        assertThat(testDemandepharmaciecentrale.getType()).isEqualTo(UPDATED_TYPE);
        assertThat(testDemandepharmaciecentrale.getDate()).isEqualTo(UPDATED_DATE);
        assertThat(testDemandepharmaciecentrale.getNompharmacien()).isEqualTo(UPDATED_NOMPHARMACIEN);
        assertThat(testDemandepharmaciecentrale.getMail()).isEqualTo(UPDATED_MAIL);
        assertThat(testDemandepharmaciecentrale.getQuantite()).isEqualTo(UPDATED_QUANTITE);
    }

    @Test
    public void updateNonExistingDemandepharmaciecentrale() throws Exception {
        int databaseSizeBeforeUpdate = demandepharmaciecentraleRepository.findAll().size();

        // Create the Demandepharmaciecentrale

        // If the entity doesn't have an ID, it will be created instead of just being updated
        restDemandepharmaciecentraleMockMvc.perform(put("/api/demandepharmaciecentrales")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(demandepharmaciecentrale)))
            .andExpect(status().isCreated());

        // Validate the Demandepharmaciecentrale in the database
        List<Demandepharmaciecentrale> demandepharmaciecentraleList = demandepharmaciecentraleRepository.findAll();
        assertThat(demandepharmaciecentraleList).hasSize(databaseSizeBeforeUpdate + 1);
    }

    @Test
    public void deleteDemandepharmaciecentrale() throws Exception {
        // Initialize the database
        demandepharmaciecentraleRepository.save(demandepharmaciecentrale);
        int databaseSizeBeforeDelete = demandepharmaciecentraleRepository.findAll().size();

        // Get the demandepharmaciecentrale
        restDemandepharmaciecentraleMockMvc.perform(delete("/api/demandepharmaciecentrales/{id}", demandepharmaciecentrale.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isOk());

        // Validate the database is empty
        List<Demandepharmaciecentrale> demandepharmaciecentraleList = demandepharmaciecentraleRepository.findAll();
        assertThat(demandepharmaciecentraleList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Demandepharmaciecentrale.class);
    }
}
