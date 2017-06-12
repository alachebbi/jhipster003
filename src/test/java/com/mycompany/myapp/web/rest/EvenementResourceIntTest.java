package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.AvancementApp;

import com.mycompany.myapp.domain.Evenement;
import com.mycompany.myapp.repository.EvenementRepository;

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
import org.springframework.util.Base64Utils;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Test class for the EvenementResource REST controller.
 *
 * @see EvenementResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = AvancementApp.class)
public class EvenementResourceIntTest {

    private static final String DEFAULT_NOM = "AAAAAAAAAA";
    private static final String UPDATED_NOM = "BBBBBBBBBB";

    private static final String DEFAULT_DESCRIPTION = "AAAAAAAAAA";
    private static final String UPDATED_DESCRIPTION = "BBBBBBBBBB";

    private static final Integer DEFAULT_NOMBREPARTICIPANTS = 1;
    private static final Integer UPDATED_NOMBREPARTICIPANTS = 2;

    private static final String DEFAULT_LIEU = "AAAAAAAAAA";
    private static final String UPDATED_LIEU = "BBBBBBBBBB";

    private static final LocalDate DEFAULT_DATE = LocalDate.ofEpochDay(0L);
    private static final LocalDate UPDATED_DATE = LocalDate.now(ZoneId.systemDefault());

    private static final byte[] DEFAULT_IMAGE = TestUtil.createByteArray(1, "0");
    private static final byte[] UPDATED_IMAGE = TestUtil.createByteArray(2, "1");
    private static final String DEFAULT_IMAGE_CONTENT_TYPE = "image/jpg";
    private static final String UPDATED_IMAGE_CONTENT_TYPE = "image/png";

    private static final String DEFAULT_PART = "AAAAAAAAAA";
    private static final String UPDATED_PART = "BBBBBBBBBB";

    @Autowired
    private EvenementRepository evenementRepository;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    private MockMvc restEvenementMockMvc;

    private Evenement evenement;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
            EvenementResource evenementResource = new EvenementResource(evenementRepository);
        this.restEvenementMockMvc = MockMvcBuilders.standaloneSetup(evenementResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setMessageConverters(jacksonMessageConverter).build();
    }

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Evenement createEntity() {
        Evenement evenement = new Evenement()
                .nom(DEFAULT_NOM)
                .description(DEFAULT_DESCRIPTION)
                .nombreparticipants(DEFAULT_NOMBREPARTICIPANTS)
                .lieu(DEFAULT_LIEU)
                .date(DEFAULT_DATE)
                .image(DEFAULT_IMAGE)
                .imageContentType(DEFAULT_IMAGE_CONTENT_TYPE)
                .part(DEFAULT_PART);
        return evenement;
    }

    @Before
    public void initTest() {
        evenementRepository.deleteAll();
        evenement = createEntity();
    }

    @Test
    public void createEvenement() throws Exception {
        int databaseSizeBeforeCreate = evenementRepository.findAll().size();

        // Create the Evenement

        restEvenementMockMvc.perform(post("/api/evenements")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(evenement)))
            .andExpect(status().isCreated());

        // Validate the Evenement in the database
        List<Evenement> evenementList = evenementRepository.findAll();
        assertThat(evenementList).hasSize(databaseSizeBeforeCreate + 1);
        Evenement testEvenement = evenementList.get(evenementList.size() - 1);
        assertThat(testEvenement.getNom()).isEqualTo(DEFAULT_NOM);
        assertThat(testEvenement.getDescription()).isEqualTo(DEFAULT_DESCRIPTION);
        assertThat(testEvenement.getNombreparticipants()).isEqualTo(DEFAULT_NOMBREPARTICIPANTS);
        assertThat(testEvenement.getLieu()).isEqualTo(DEFAULT_LIEU);
        assertThat(testEvenement.getDate()).isEqualTo(DEFAULT_DATE);
        assertThat(testEvenement.getImage()).isEqualTo(DEFAULT_IMAGE);
        assertThat(testEvenement.getImageContentType()).isEqualTo(DEFAULT_IMAGE_CONTENT_TYPE);
        assertThat(testEvenement.getPart()).isEqualTo(DEFAULT_PART);
    }

    @Test
    public void createEvenementWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = evenementRepository.findAll().size();

        // Create the Evenement with an existing ID
        Evenement existingEvenement = new Evenement();
        existingEvenement.setId("existing_id");

        // An entity with an existing ID cannot be created, so this API call must fail
        restEvenementMockMvc.perform(post("/api/evenements")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(existingEvenement)))
            .andExpect(status().isBadRequest());

        // Validate the Alice in the database
        List<Evenement> evenementList = evenementRepository.findAll();
        assertThat(evenementList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    public void getAllEvenements() throws Exception {
        // Initialize the database
        evenementRepository.save(evenement);

        // Get all the evenementList
        restEvenementMockMvc.perform(get("/api/evenements?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(evenement.getId())))
            .andExpect(jsonPath("$.[*].nom").value(hasItem(DEFAULT_NOM.toString())))
            .andExpect(jsonPath("$.[*].description").value(hasItem(DEFAULT_DESCRIPTION.toString())))
            .andExpect(jsonPath("$.[*].nombreparticipants").value(hasItem(DEFAULT_NOMBREPARTICIPANTS)))
            .andExpect(jsonPath("$.[*].lieu").value(hasItem(DEFAULT_LIEU.toString())))
            .andExpect(jsonPath("$.[*].date").value(hasItem(DEFAULT_DATE.toString())))
            .andExpect(jsonPath("$.[*].imageContentType").value(hasItem(DEFAULT_IMAGE_CONTENT_TYPE)))
            .andExpect(jsonPath("$.[*].image").value(hasItem(Base64Utils.encodeToString(DEFAULT_IMAGE))))
            .andExpect(jsonPath("$.[*].part").value(hasItem(DEFAULT_PART.toString())));
    }

    @Test
    public void getEvenement() throws Exception {
        // Initialize the database
        evenementRepository.save(evenement);

        // Get the evenement
        restEvenementMockMvc.perform(get("/api/evenements/{id}", evenement.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(evenement.getId()))
            .andExpect(jsonPath("$.nom").value(DEFAULT_NOM.toString()))
            .andExpect(jsonPath("$.description").value(DEFAULT_DESCRIPTION.toString()))
            .andExpect(jsonPath("$.nombreparticipants").value(DEFAULT_NOMBREPARTICIPANTS))
            .andExpect(jsonPath("$.lieu").value(DEFAULT_LIEU.toString()))
            .andExpect(jsonPath("$.date").value(DEFAULT_DATE.toString()))
            .andExpect(jsonPath("$.imageContentType").value(DEFAULT_IMAGE_CONTENT_TYPE))
            .andExpect(jsonPath("$.image").value(Base64Utils.encodeToString(DEFAULT_IMAGE)))
            .andExpect(jsonPath("$.part").value(DEFAULT_PART.toString()));
    }

    @Test
    public void getNonExistingEvenement() throws Exception {
        // Get the evenement
        restEvenementMockMvc.perform(get("/api/evenements/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    public void updateEvenement() throws Exception {
        // Initialize the database
        evenementRepository.save(evenement);
        int databaseSizeBeforeUpdate = evenementRepository.findAll().size();

        // Update the evenement
        Evenement updatedEvenement = evenementRepository.findOne(evenement.getId());
        updatedEvenement
                .nom(UPDATED_NOM)
                .description(UPDATED_DESCRIPTION)
                .nombreparticipants(UPDATED_NOMBREPARTICIPANTS)
                .lieu(UPDATED_LIEU)
                .date(UPDATED_DATE)
                .image(UPDATED_IMAGE)
                .imageContentType(UPDATED_IMAGE_CONTENT_TYPE)
                .part(UPDATED_PART);

        restEvenementMockMvc.perform(put("/api/evenements")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedEvenement)))
            .andExpect(status().isOk());

        // Validate the Evenement in the database
        List<Evenement> evenementList = evenementRepository.findAll();
        assertThat(evenementList).hasSize(databaseSizeBeforeUpdate);
        Evenement testEvenement = evenementList.get(evenementList.size() - 1);
        assertThat(testEvenement.getNom()).isEqualTo(UPDATED_NOM);
        assertThat(testEvenement.getDescription()).isEqualTo(UPDATED_DESCRIPTION);
        assertThat(testEvenement.getNombreparticipants()).isEqualTo(UPDATED_NOMBREPARTICIPANTS);
        assertThat(testEvenement.getLieu()).isEqualTo(UPDATED_LIEU);
        assertThat(testEvenement.getDate()).isEqualTo(UPDATED_DATE);
        assertThat(testEvenement.getImage()).isEqualTo(UPDATED_IMAGE);
        assertThat(testEvenement.getImageContentType()).isEqualTo(UPDATED_IMAGE_CONTENT_TYPE);
        assertThat(testEvenement.getPart()).isEqualTo(UPDATED_PART);
    }

    @Test
    public void updateNonExistingEvenement() throws Exception {
        int databaseSizeBeforeUpdate = evenementRepository.findAll().size();

        // Create the Evenement

        // If the entity doesn't have an ID, it will be created instead of just being updated
        restEvenementMockMvc.perform(put("/api/evenements")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(evenement)))
            .andExpect(status().isCreated());

        // Validate the Evenement in the database
        List<Evenement> evenementList = evenementRepository.findAll();
        assertThat(evenementList).hasSize(databaseSizeBeforeUpdate + 1);
    }

    @Test
    public void deleteEvenement() throws Exception {
        // Initialize the database
        evenementRepository.save(evenement);
        int databaseSizeBeforeDelete = evenementRepository.findAll().size();

        // Get the evenement
        restEvenementMockMvc.perform(delete("/api/evenements/{id}", evenement.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isOk());

        // Validate the database is empty
        List<Evenement> evenementList = evenementRepository.findAll();
        assertThat(evenementList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Evenement.class);
    }
}
