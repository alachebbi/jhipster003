package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.AvancementApp;

import com.mycompany.myapp.domain.DemandeMedicamentVf;
import com.mycompany.myapp.repository.DemandeMedicamentVfRepository;

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

import java.time.Instant;
import java.time.ZonedDateTime;
import java.time.ZoneOffset;
import java.time.ZoneId;
import java.util.List;

import static com.mycompany.myapp.web.rest.TestUtil.sameInstant;
import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Test class for the DemandeMedicamentVfResource REST controller.
 *
 * @see DemandeMedicamentVfResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = AvancementApp.class)
public class DemandeMedicamentVfResourceIntTest {

    private static final String DEFAULT_MEDICAMENTID = "AAAAAAAAAA";
    private static final String UPDATED_MEDICAMENTID = "BBBBBBBBBB";

    private static final ZonedDateTime DEFAULT_DATE = ZonedDateTime.ofInstant(Instant.ofEpochMilli(0L), ZoneOffset.UTC);
    private static final ZonedDateTime UPDATED_DATE = ZonedDateTime.now(ZoneId.systemDefault()).withNano(0);

    private static final String DEFAULT_TYPEDEMANDE = "AAAAAAAAAA";
    private static final String UPDATED_TYPEDEMANDE = "BBBBBBBBBB";

    private static final Integer DEFAULT_QUANTITY = 1;
    private static final Integer UPDATED_QUANTITY = 2;

    private static final Integer DEFAULT_ETAT = 1;
    private static final Integer UPDATED_ETAT = 2;

    private static final String DEFAULT_SIGNATURE = "AAAAAAAAAA";
    private static final String UPDATED_SIGNATURE = "BBBBBBBBBB";

    @Autowired
    private DemandeMedicamentVfRepository demandeMedicamentVfRepository;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    private MockMvc restDemandeMedicamentVfMockMvc;

    private DemandeMedicamentVf demandeMedicamentVf;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
            DemandeMedicamentVfResource demandeMedicamentVfResource = new DemandeMedicamentVfResource(demandeMedicamentVfRepository);
        this.restDemandeMedicamentVfMockMvc = MockMvcBuilders.standaloneSetup(demandeMedicamentVfResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setMessageConverters(jacksonMessageConverter).build();
    }

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static DemandeMedicamentVf createEntity() {
        DemandeMedicamentVf demandeMedicamentVf = new DemandeMedicamentVf()
                .medicamentid(DEFAULT_MEDICAMENTID)
                .date(DEFAULT_DATE)
                .typedemande(DEFAULT_TYPEDEMANDE)
                .quantity(DEFAULT_QUANTITY)
                .etat(DEFAULT_ETAT)
                .signature(DEFAULT_SIGNATURE);
        return demandeMedicamentVf;
    }

    @Before
    public void initTest() {
        demandeMedicamentVfRepository.deleteAll();
        demandeMedicamentVf = createEntity();
    }

    @Test
    public void createDemandeMedicamentVf() throws Exception {
        int databaseSizeBeforeCreate = demandeMedicamentVfRepository.findAll().size();

        // Create the DemandeMedicamentVf

        restDemandeMedicamentVfMockMvc.perform(post("/api/demande-medicament-vfs")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(demandeMedicamentVf)))
            .andExpect(status().isCreated());

        // Validate the DemandeMedicamentVf in the database
        List<DemandeMedicamentVf> demandeMedicamentVfList = demandeMedicamentVfRepository.findAll();
        assertThat(demandeMedicamentVfList).hasSize(databaseSizeBeforeCreate + 1);
        DemandeMedicamentVf testDemandeMedicamentVf = demandeMedicamentVfList.get(demandeMedicamentVfList.size() - 1);
        assertThat(testDemandeMedicamentVf.getMedicamentid()).isEqualTo(DEFAULT_MEDICAMENTID);
        assertThat(testDemandeMedicamentVf.getDate()).isEqualTo(DEFAULT_DATE);
        assertThat(testDemandeMedicamentVf.getTypedemande()).isEqualTo(DEFAULT_TYPEDEMANDE);
        assertThat(testDemandeMedicamentVf.getQuantity()).isEqualTo(DEFAULT_QUANTITY);
        assertThat(testDemandeMedicamentVf.getEtat()).isEqualTo(DEFAULT_ETAT);
        assertThat(testDemandeMedicamentVf.getSignature()).isEqualTo(DEFAULT_SIGNATURE);
    }

    @Test
    public void createDemandeMedicamentVfWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = demandeMedicamentVfRepository.findAll().size();

        // Create the DemandeMedicamentVf with an existing ID
        DemandeMedicamentVf existingDemandeMedicamentVf = new DemandeMedicamentVf();
        existingDemandeMedicamentVf.setId("existing_id");

        // An entity with an existing ID cannot be created, so this API call must fail
        restDemandeMedicamentVfMockMvc.perform(post("/api/demande-medicament-vfs")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(existingDemandeMedicamentVf)))
            .andExpect(status().isBadRequest());

        // Validate the Alice in the database
        List<DemandeMedicamentVf> demandeMedicamentVfList = demandeMedicamentVfRepository.findAll();
        assertThat(demandeMedicamentVfList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    public void getAllDemandeMedicamentVfs() throws Exception {
        // Initialize the database
        demandeMedicamentVfRepository.save(demandeMedicamentVf);

        // Get all the demandeMedicamentVfList
        restDemandeMedicamentVfMockMvc.perform(get("/api/demande-medicament-vfs?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(demandeMedicamentVf.getId())))
            .andExpect(jsonPath("$.[*].medicamentid").value(hasItem(DEFAULT_MEDICAMENTID.toString())))
            .andExpect(jsonPath("$.[*].date").value(hasItem(sameInstant(DEFAULT_DATE))))
            .andExpect(jsonPath("$.[*].typedemande").value(hasItem(DEFAULT_TYPEDEMANDE.toString())))
            .andExpect(jsonPath("$.[*].quantity").value(hasItem(DEFAULT_QUANTITY)))
            .andExpect(jsonPath("$.[*].etat").value(hasItem(DEFAULT_ETAT)))
            .andExpect(jsonPath("$.[*].signature").value(hasItem(DEFAULT_SIGNATURE.toString())));
    }

    @Test
    public void getDemandeMedicamentVf() throws Exception {
        // Initialize the database
        demandeMedicamentVfRepository.save(demandeMedicamentVf);

        // Get the demandeMedicamentVf
        restDemandeMedicamentVfMockMvc.perform(get("/api/demande-medicament-vfs/{id}", demandeMedicamentVf.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(demandeMedicamentVf.getId()))
            .andExpect(jsonPath("$.medicamentid").value(DEFAULT_MEDICAMENTID.toString()))
            .andExpect(jsonPath("$.date").value(sameInstant(DEFAULT_DATE)))
            .andExpect(jsonPath("$.typedemande").value(DEFAULT_TYPEDEMANDE.toString()))
            .andExpect(jsonPath("$.quantity").value(DEFAULT_QUANTITY))
            .andExpect(jsonPath("$.etat").value(DEFAULT_ETAT))
            .andExpect(jsonPath("$.signature").value(DEFAULT_SIGNATURE.toString()));
    }

    @Test
    public void getNonExistingDemandeMedicamentVf() throws Exception {
        // Get the demandeMedicamentVf
        restDemandeMedicamentVfMockMvc.perform(get("/api/demande-medicament-vfs/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    public void updateDemandeMedicamentVf() throws Exception {
        // Initialize the database
        demandeMedicamentVfRepository.save(demandeMedicamentVf);
        int databaseSizeBeforeUpdate = demandeMedicamentVfRepository.findAll().size();

        // Update the demandeMedicamentVf
        DemandeMedicamentVf updatedDemandeMedicamentVf = demandeMedicamentVfRepository.findOne(demandeMedicamentVf.getId());
        updatedDemandeMedicamentVf
                .medicamentid(UPDATED_MEDICAMENTID)
                .date(UPDATED_DATE)
                .typedemande(UPDATED_TYPEDEMANDE)
                .quantity(UPDATED_QUANTITY)
                .etat(UPDATED_ETAT)
                .signature(UPDATED_SIGNATURE);

        restDemandeMedicamentVfMockMvc.perform(put("/api/demande-medicament-vfs")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedDemandeMedicamentVf)))
            .andExpect(status().isOk());

        // Validate the DemandeMedicamentVf in the database
        List<DemandeMedicamentVf> demandeMedicamentVfList = demandeMedicamentVfRepository.findAll();
        assertThat(demandeMedicamentVfList).hasSize(databaseSizeBeforeUpdate);
        DemandeMedicamentVf testDemandeMedicamentVf = demandeMedicamentVfList.get(demandeMedicamentVfList.size() - 1);
        assertThat(testDemandeMedicamentVf.getMedicamentid()).isEqualTo(UPDATED_MEDICAMENTID);
        assertThat(testDemandeMedicamentVf.getDate()).isEqualTo(UPDATED_DATE);
        assertThat(testDemandeMedicamentVf.getTypedemande()).isEqualTo(UPDATED_TYPEDEMANDE);
        assertThat(testDemandeMedicamentVf.getQuantity()).isEqualTo(UPDATED_QUANTITY);
        assertThat(testDemandeMedicamentVf.getEtat()).isEqualTo(UPDATED_ETAT);
        assertThat(testDemandeMedicamentVf.getSignature()).isEqualTo(UPDATED_SIGNATURE);
    }

    @Test
    public void updateNonExistingDemandeMedicamentVf() throws Exception {
        int databaseSizeBeforeUpdate = demandeMedicamentVfRepository.findAll().size();

        // Create the DemandeMedicamentVf

        // If the entity doesn't have an ID, it will be created instead of just being updated
        restDemandeMedicamentVfMockMvc.perform(put("/api/demande-medicament-vfs")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(demandeMedicamentVf)))
            .andExpect(status().isCreated());

        // Validate the DemandeMedicamentVf in the database
        List<DemandeMedicamentVf> demandeMedicamentVfList = demandeMedicamentVfRepository.findAll();
        assertThat(demandeMedicamentVfList).hasSize(databaseSizeBeforeUpdate + 1);
    }

    @Test
    public void deleteDemandeMedicamentVf() throws Exception {
        // Initialize the database
        demandeMedicamentVfRepository.save(demandeMedicamentVf);
        int databaseSizeBeforeDelete = demandeMedicamentVfRepository.findAll().size();

        // Get the demandeMedicamentVf
        restDemandeMedicamentVfMockMvc.perform(delete("/api/demande-medicament-vfs/{id}", demandeMedicamentVf.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isOk());

        // Validate the database is empty
        List<DemandeMedicamentVf> demandeMedicamentVfList = demandeMedicamentVfRepository.findAll();
        assertThat(demandeMedicamentVfList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(DemandeMedicamentVf.class);
    }
}
