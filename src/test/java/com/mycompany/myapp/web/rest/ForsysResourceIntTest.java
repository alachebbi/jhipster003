package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.AvancementApp;

import com.mycompany.myapp.domain.Forsys;
import com.mycompany.myapp.repository.ForsysRepository;

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

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Test class for the ForsysResource REST controller.
 *
 * @see ForsysResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = AvancementApp.class)
public class ForsysResourceIntTest {

    private static final String DEFAULT_MEDECINTRAITANT = "AAAAAAAAAA";
    private static final String UPDATED_MEDECINTRAITANT = "BBBBBBBBBB";

    private static final String DEFAULT_PATIENT = "AAAAAAAAAA";
    private static final String UPDATED_PATIENT = "BBBBBBBBBB";

    private static final Integer DEFAULT_AQW = 1;
    private static final Integer UPDATED_AQW = 2;

    @Autowired
    private ForsysRepository forsysRepository;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    private MockMvc restForsysMockMvc;

    private Forsys forsys;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
            ForsysResource forsysResource = new ForsysResource(forsysRepository);
        this.restForsysMockMvc = MockMvcBuilders.standaloneSetup(forsysResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setMessageConverters(jacksonMessageConverter).build();
    }

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Forsys createEntity() {
        Forsys forsys = new Forsys()
                .medecintraitant(DEFAULT_MEDECINTRAITANT)
                .patient(DEFAULT_PATIENT)
                .aqw(DEFAULT_AQW);
        return forsys;
    }

    @Before
    public void initTest() {
        forsysRepository.deleteAll();
        forsys = createEntity();
    }

    @Test
    public void createForsys() throws Exception {
        int databaseSizeBeforeCreate = forsysRepository.findAll().size();

        // Create the Forsys

        restForsysMockMvc.perform(post("/api/forsys")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(forsys)))
            .andExpect(status().isCreated());

        // Validate the Forsys in the database
        List<Forsys> forsysList = forsysRepository.findAll();
        assertThat(forsysList).hasSize(databaseSizeBeforeCreate + 1);
        Forsys testForsys = forsysList.get(forsysList.size() - 1);
        assertThat(testForsys.getMedecintraitant()).isEqualTo(DEFAULT_MEDECINTRAITANT);
        assertThat(testForsys.getPatient()).isEqualTo(DEFAULT_PATIENT);
        assertThat(testForsys.getAqw()).isEqualTo(DEFAULT_AQW);
    }

    @Test
    public void createForsysWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = forsysRepository.findAll().size();

        // Create the Forsys with an existing ID
        Forsys existingForsys = new Forsys();
        existingForsys.setId("existing_id");

        // An entity with an existing ID cannot be created, so this API call must fail
        restForsysMockMvc.perform(post("/api/forsys")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(existingForsys)))
            .andExpect(status().isBadRequest());

        // Validate the Alice in the database
        List<Forsys> forsysList = forsysRepository.findAll();
        assertThat(forsysList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    public void getAllForsys() throws Exception {
        // Initialize the database
        forsysRepository.save(forsys);

        // Get all the forsysList
        restForsysMockMvc.perform(get("/api/forsys?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(forsys.getId())))
            .andExpect(jsonPath("$.[*].medecintraitant").value(hasItem(DEFAULT_MEDECINTRAITANT.toString())))
            .andExpect(jsonPath("$.[*].patient").value(hasItem(DEFAULT_PATIENT.toString())))
            .andExpect(jsonPath("$.[*].aqw").value(hasItem(DEFAULT_AQW)));
    }

    @Test
    public void getForsys() throws Exception {
        // Initialize the database
        forsysRepository.save(forsys);

        // Get the forsys
        restForsysMockMvc.perform(get("/api/forsys/{id}", forsys.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(forsys.getId()))
            .andExpect(jsonPath("$.medecintraitant").value(DEFAULT_MEDECINTRAITANT.toString()))
            .andExpect(jsonPath("$.patient").value(DEFAULT_PATIENT.toString()))
            .andExpect(jsonPath("$.aqw").value(DEFAULT_AQW));
    }

    @Test
    public void getNonExistingForsys() throws Exception {
        // Get the forsys
        restForsysMockMvc.perform(get("/api/forsys/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    public void updateForsys() throws Exception {
        // Initialize the database
        forsysRepository.save(forsys);
        int databaseSizeBeforeUpdate = forsysRepository.findAll().size();

        // Update the forsys
        Forsys updatedForsys = forsysRepository.findOne(forsys.getId());
        updatedForsys
                .medecintraitant(UPDATED_MEDECINTRAITANT)
                .patient(UPDATED_PATIENT)
                .aqw(UPDATED_AQW);

        restForsysMockMvc.perform(put("/api/forsys")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedForsys)))
            .andExpect(status().isOk());

        // Validate the Forsys in the database
        List<Forsys> forsysList = forsysRepository.findAll();
        assertThat(forsysList).hasSize(databaseSizeBeforeUpdate);
        Forsys testForsys = forsysList.get(forsysList.size() - 1);
        assertThat(testForsys.getMedecintraitant()).isEqualTo(UPDATED_MEDECINTRAITANT);
        assertThat(testForsys.getPatient()).isEqualTo(UPDATED_PATIENT);
        assertThat(testForsys.getAqw()).isEqualTo(UPDATED_AQW);
    }

    @Test
    public void updateNonExistingForsys() throws Exception {
        int databaseSizeBeforeUpdate = forsysRepository.findAll().size();

        // Create the Forsys

        // If the entity doesn't have an ID, it will be created instead of just being updated
        restForsysMockMvc.perform(put("/api/forsys")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(forsys)))
            .andExpect(status().isCreated());

        // Validate the Forsys in the database
        List<Forsys> forsysList = forsysRepository.findAll();
        assertThat(forsysList).hasSize(databaseSizeBeforeUpdate + 1);
    }

    @Test
    public void deleteForsys() throws Exception {
        // Initialize the database
        forsysRepository.save(forsys);
        int databaseSizeBeforeDelete = forsysRepository.findAll().size();

        // Get the forsys
        restForsysMockMvc.perform(delete("/api/forsys/{id}", forsys.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isOk());

        // Validate the database is empty
        List<Forsys> forsysList = forsysRepository.findAll();
        assertThat(forsysList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Forsys.class);
    }
}
