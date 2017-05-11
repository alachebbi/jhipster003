package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.AvancementApp;

import com.mycompany.myapp.domain.Participation;
import com.mycompany.myapp.repository.ParticipationRepository;

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
 * Test class for the ParticipationResource REST controller.
 *
 * @see ParticipationResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = AvancementApp.class)
public class ParticipationResourceIntTest {

    private static final String DEFAULT_EVENEMENT = "AAAAAAAAAA";
    private static final String UPDATED_EVENEMENT = "BBBBBBBBBB";

    private static final String DEFAULT_PARTICIPANT = "AAAAAAAAAA";
    private static final String UPDATED_PARTICIPANT = "BBBBBBBBBB";

    @Autowired
    private ParticipationRepository participationRepository;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    private MockMvc restParticipationMockMvc;

    private Participation participation;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
            ParticipationResource participationResource = new ParticipationResource(participationRepository);
        this.restParticipationMockMvc = MockMvcBuilders.standaloneSetup(participationResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setMessageConverters(jacksonMessageConverter).build();
    }

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Participation createEntity() {
        Participation participation = new Participation()
                .evenement(DEFAULT_EVENEMENT)
                .participant(DEFAULT_PARTICIPANT);
        return participation;
    }

    @Before
    public void initTest() {
        participationRepository.deleteAll();
        participation = createEntity();
    }

    @Test
    public void createParticipation() throws Exception {
        int databaseSizeBeforeCreate = participationRepository.findAll().size();

        // Create the Participation

        restParticipationMockMvc.perform(post("/api/participations")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(participation)))
            .andExpect(status().isCreated());

        // Validate the Participation in the database
        List<Participation> participationList = participationRepository.findAll();
        assertThat(participationList).hasSize(databaseSizeBeforeCreate + 1);
        Participation testParticipation = participationList.get(participationList.size() - 1);
        assertThat(testParticipation.getEvenement()).isEqualTo(DEFAULT_EVENEMENT);
        assertThat(testParticipation.getParticipant()).isEqualTo(DEFAULT_PARTICIPANT);
    }

    @Test
    public void createParticipationWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = participationRepository.findAll().size();

        // Create the Participation with an existing ID
        Participation existingParticipation = new Participation();
        existingParticipation.setId("existing_id");

        // An entity with an existing ID cannot be created, so this API call must fail
        restParticipationMockMvc.perform(post("/api/participations")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(existingParticipation)))
            .andExpect(status().isBadRequest());

        // Validate the Alice in the database
        List<Participation> participationList = participationRepository.findAll();
        assertThat(participationList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    public void getAllParticipations() throws Exception {
        // Initialize the database
        participationRepository.save(participation);

        // Get all the participationList
        restParticipationMockMvc.perform(get("/api/participations?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(participation.getId())))
            .andExpect(jsonPath("$.[*].evenement").value(hasItem(DEFAULT_EVENEMENT.toString())))
            .andExpect(jsonPath("$.[*].participant").value(hasItem(DEFAULT_PARTICIPANT.toString())));
    }

    @Test
    public void getParticipation() throws Exception {
        // Initialize the database
        participationRepository.save(participation);

        // Get the participation
        restParticipationMockMvc.perform(get("/api/participations/{id}", participation.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(participation.getId()))
            .andExpect(jsonPath("$.evenement").value(DEFAULT_EVENEMENT.toString()))
            .andExpect(jsonPath("$.participant").value(DEFAULT_PARTICIPANT.toString()));
    }

    @Test
    public void getNonExistingParticipation() throws Exception {
        // Get the participation
        restParticipationMockMvc.perform(get("/api/participations/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    public void updateParticipation() throws Exception {
        // Initialize the database
        participationRepository.save(participation);
        int databaseSizeBeforeUpdate = participationRepository.findAll().size();

        // Update the participation
        Participation updatedParticipation = participationRepository.findOne(participation.getId());
        updatedParticipation
                .evenement(UPDATED_EVENEMENT)
                .participant(UPDATED_PARTICIPANT);

        restParticipationMockMvc.perform(put("/api/participations")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedParticipation)))
            .andExpect(status().isOk());

        // Validate the Participation in the database
        List<Participation> participationList = participationRepository.findAll();
        assertThat(participationList).hasSize(databaseSizeBeforeUpdate);
        Participation testParticipation = participationList.get(participationList.size() - 1);
        assertThat(testParticipation.getEvenement()).isEqualTo(UPDATED_EVENEMENT);
        assertThat(testParticipation.getParticipant()).isEqualTo(UPDATED_PARTICIPANT);
    }

    @Test
    public void updateNonExistingParticipation() throws Exception {
        int databaseSizeBeforeUpdate = participationRepository.findAll().size();

        // Create the Participation

        // If the entity doesn't have an ID, it will be created instead of just being updated
        restParticipationMockMvc.perform(put("/api/participations")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(participation)))
            .andExpect(status().isCreated());

        // Validate the Participation in the database
        List<Participation> participationList = participationRepository.findAll();
        assertThat(participationList).hasSize(databaseSizeBeforeUpdate + 1);
    }

    @Test
    public void deleteParticipation() throws Exception {
        // Initialize the database
        participationRepository.save(participation);
        int databaseSizeBeforeDelete = participationRepository.findAll().size();

        // Get the participation
        restParticipationMockMvc.perform(delete("/api/participations/{id}", participation.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isOk());

        // Validate the database is empty
        List<Participation> participationList = participationRepository.findAll();
        assertThat(participationList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Participation.class);
    }
}
