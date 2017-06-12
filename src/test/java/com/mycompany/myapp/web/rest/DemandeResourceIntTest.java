package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.AvancementApp;

import com.mycompany.myapp.domain.Demande;
import com.mycompany.myapp.repository.DemandeRepository;
import com.mycompany.myapp.service.DemandeService;

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
 * Test class for the DemandeResource REST controller.
 *
 * @see DemandeResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = AvancementApp.class)
public class DemandeResourceIntTest {

    private static final String DEFAULT_ETAT = "AAAAAAAAAA";
    private static final String UPDATED_ETAT = "BBBBBBBBBB";

    private static final String DEFAULT_MEDICAMENTID = "AAAAAAAAAA";
    private static final String UPDATED_MEDICAMENTID = "BBBBBBBBBB";

    private static final LocalDate DEFAULT_DATE = LocalDate.ofEpochDay(0L);
    private static final LocalDate UPDATED_DATE = LocalDate.now(ZoneId.systemDefault());

    private static final Integer DEFAULT_QUATITY = 1;
    private static final Integer UPDATED_QUATITY = 2;

    private static final String DEFAULT_A = "AAAAAAAAAA";
    private static final String UPDATED_A = "BBBBBBBBBB";

    private static final String DEFAULT_ZE = "AAAAAAAAAA";
    private static final String UPDATED_ZE = "BBBBBBBBBB";

    @Autowired
    private DemandeRepository demandeRepository;

    @Autowired
    private DemandeService demandeService;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    private MockMvc restDemandeMockMvc;

    private Demande demande;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
        DemandeResource demandeResource = new DemandeResource(demandeService);
        this.restDemandeMockMvc = MockMvcBuilders.standaloneSetup(demandeResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setMessageConverters(jacksonMessageConverter).build();
    }

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Demande createEntity() {
        Demande demande = new Demande()
                .etat(DEFAULT_ETAT)
                .medicamentid(DEFAULT_MEDICAMENTID)
                .date(DEFAULT_DATE)
                .quatity(DEFAULT_QUATITY)
                .a(DEFAULT_A)
                .ze(DEFAULT_ZE);
        return demande;
    }

    @Before
    public void initTest() {
        demandeRepository.deleteAll();
        demande = createEntity();
    }

    @Test
    public void createDemande() throws Exception {
        int databaseSizeBeforeCreate = demandeRepository.findAll().size();

        // Create the Demande

        restDemandeMockMvc.perform(post("/api/demandes")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(demande)))
            .andExpect(status().isCreated());

        // Validate the Demande in the database
        List<Demande> demandeList = demandeRepository.findAll();
        assertThat(demandeList).hasSize(databaseSizeBeforeCreate + 1);
        Demande testDemande = demandeList.get(demandeList.size() - 1);
        assertThat(testDemande.getEtat()).isEqualTo(DEFAULT_ETAT);
        assertThat(testDemande.getMedicamentid()).isEqualTo(DEFAULT_MEDICAMENTID);
        assertThat(testDemande.getDate()).isEqualTo(DEFAULT_DATE);
        assertThat(testDemande.getQuatity()).isEqualTo(DEFAULT_QUATITY);
        assertThat(testDemande.getA()).isEqualTo(DEFAULT_A);
        assertThat(testDemande.getZe()).isEqualTo(DEFAULT_ZE);
    }

    @Test
    public void createDemandeWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = demandeRepository.findAll().size();

        // Create the Demande with an existing ID
        Demande existingDemande = new Demande();
        existingDemande.setId("existing_id");

        // An entity with an existing ID cannot be created, so this API call must fail
        restDemandeMockMvc.perform(post("/api/demandes")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(existingDemande)))
            .andExpect(status().isBadRequest());

        // Validate the Alice in the database
        List<Demande> demandeList = demandeRepository.findAll();
        assertThat(demandeList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    public void getAllDemandes() throws Exception {
        // Initialize the database
        demandeRepository.save(demande);

        // Get all the demandeList
        restDemandeMockMvc.perform(get("/api/demandes?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(demande.getId())))
            .andExpect(jsonPath("$.[*].etat").value(hasItem(DEFAULT_ETAT.toString())))
            .andExpect(jsonPath("$.[*].medicamentid").value(hasItem(DEFAULT_MEDICAMENTID.toString())))
            .andExpect(jsonPath("$.[*].date").value(hasItem(DEFAULT_DATE.toString())))
            .andExpect(jsonPath("$.[*].quatity").value(hasItem(DEFAULT_QUATITY)))
            .andExpect(jsonPath("$.[*].a").value(hasItem(DEFAULT_A.toString())))
            .andExpect(jsonPath("$.[*].ze").value(hasItem(DEFAULT_ZE.toString())));
    }

    @Test
    public void getDemande() throws Exception {
        // Initialize the database
        demandeRepository.save(demande);

        // Get the demande
        restDemandeMockMvc.perform(get("/api/demandes/{id}", demande.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(demande.getId()))
            .andExpect(jsonPath("$.etat").value(DEFAULT_ETAT.toString()))
            .andExpect(jsonPath("$.medicamentid").value(DEFAULT_MEDICAMENTID.toString()))
            .andExpect(jsonPath("$.date").value(DEFAULT_DATE.toString()))
            .andExpect(jsonPath("$.quatity").value(DEFAULT_QUATITY))
            .andExpect(jsonPath("$.a").value(DEFAULT_A.toString()))
            .andExpect(jsonPath("$.ze").value(DEFAULT_ZE.toString()));
    }

    @Test
    public void getNonExistingDemande() throws Exception {
        // Get the demande
        restDemandeMockMvc.perform(get("/api/demandes/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    public void updateDemande() throws Exception {
        // Initialize the database
        demandeService.save(demande);

        int databaseSizeBeforeUpdate = demandeRepository.findAll().size();

        // Update the demande
        Demande updatedDemande = demandeRepository.findOne(demande.getId());
        updatedDemande
                .etat(UPDATED_ETAT)
                .medicamentid(UPDATED_MEDICAMENTID)
                .date(UPDATED_DATE)
                .quatity(UPDATED_QUATITY)
                .a(UPDATED_A)
                .ze(UPDATED_ZE);

        restDemandeMockMvc.perform(put("/api/demandes")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedDemande)))
            .andExpect(status().isOk());

        // Validate the Demande in the database
        List<Demande> demandeList = demandeRepository.findAll();
        assertThat(demandeList).hasSize(databaseSizeBeforeUpdate);
        Demande testDemande = demandeList.get(demandeList.size() - 1);
        assertThat(testDemande.getEtat()).isEqualTo(UPDATED_ETAT);
        assertThat(testDemande.getMedicamentid()).isEqualTo(UPDATED_MEDICAMENTID);
        assertThat(testDemande.getDate()).isEqualTo(UPDATED_DATE);
        assertThat(testDemande.getQuatity()).isEqualTo(UPDATED_QUATITY);
        assertThat(testDemande.getA()).isEqualTo(UPDATED_A);
        assertThat(testDemande.getZe()).isEqualTo(UPDATED_ZE);
    }

    @Test
    public void updateNonExistingDemande() throws Exception {
        int databaseSizeBeforeUpdate = demandeRepository.findAll().size();

        // Create the Demande

        // If the entity doesn't have an ID, it will be created instead of just being updated
        restDemandeMockMvc.perform(put("/api/demandes")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(demande)))
            .andExpect(status().isCreated());

        // Validate the Demande in the database
        List<Demande> demandeList = demandeRepository.findAll();
        assertThat(demandeList).hasSize(databaseSizeBeforeUpdate + 1);
    }

    @Test
    public void deleteDemande() throws Exception {
        // Initialize the database
        demandeService.save(demande);

        int databaseSizeBeforeDelete = demandeRepository.findAll().size();

        // Get the demande
        restDemandeMockMvc.perform(delete("/api/demandes/{id}", demande.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isOk());

        // Validate the database is empty
        List<Demande> demandeList = demandeRepository.findAll();
        assertThat(demandeList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Demande.class);
    }
}
