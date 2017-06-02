package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.AvancementApp;

import com.mycompany.myapp.domain.Dislike;
import com.mycompany.myapp.repository.DislikeRepository;

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
 * Test class for the DislikeResource REST controller.
 *
 * @see DislikeResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = AvancementApp.class)
public class DislikeResourceIntTest {

    private static final String DEFAULT_ARTICLE = "AAAAAAAAAA";
    private static final String UPDATED_ARTICLE = "BBBBBBBBBB";

    private static final String DEFAULT_UTILISATEUR = "AAAAAAAAAA";
    private static final String UPDATED_UTILISATEUR = "BBBBBBBBBB";

    private static final Integer DEFAULT_C = 1;
    private static final Integer UPDATED_C = 2;

    @Autowired
    private DislikeRepository dislikeRepository;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    private MockMvc restDislikeMockMvc;

    private Dislike dislike;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
            DislikeResource dislikeResource = new DislikeResource(dislikeRepository);
        this.restDislikeMockMvc = MockMvcBuilders.standaloneSetup(dislikeResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setMessageConverters(jacksonMessageConverter).build();
    }

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Dislike createEntity() {
        Dislike dislike = new Dislike()
                .article(DEFAULT_ARTICLE)
                .utilisateur(DEFAULT_UTILISATEUR)
                .c(DEFAULT_C);
        return dislike;
    }

    @Before
    public void initTest() {
        dislikeRepository.deleteAll();
        dislike = createEntity();
    }

    @Test
    public void createDislike() throws Exception {
        int databaseSizeBeforeCreate = dislikeRepository.findAll().size();

        // Create the Dislike

        restDislikeMockMvc.perform(post("/api/dislikes")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(dislike)))
            .andExpect(status().isCreated());

        // Validate the Dislike in the database
        List<Dislike> dislikeList = dislikeRepository.findAll();
        assertThat(dislikeList).hasSize(databaseSizeBeforeCreate + 1);
        Dislike testDislike = dislikeList.get(dislikeList.size() - 1);
        assertThat(testDislike.getArticle()).isEqualTo(DEFAULT_ARTICLE);
        assertThat(testDislike.getUtilisateur()).isEqualTo(DEFAULT_UTILISATEUR);
        assertThat(testDislike.getC()).isEqualTo(DEFAULT_C);
    }

    @Test
    public void createDislikeWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = dislikeRepository.findAll().size();

        // Create the Dislike with an existing ID
        Dislike existingDislike = new Dislike();
        existingDislike.setId("existing_id");

        // An entity with an existing ID cannot be created, so this API call must fail
        restDislikeMockMvc.perform(post("/api/dislikes")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(existingDislike)))
            .andExpect(status().isBadRequest());

        // Validate the Alice in the database
        List<Dislike> dislikeList = dislikeRepository.findAll();
        assertThat(dislikeList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    public void getAllDislikes() throws Exception {
        // Initialize the database
        dislikeRepository.save(dislike);

        // Get all the dislikeList
        restDislikeMockMvc.perform(get("/api/dislikes?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(dislike.getId())))
            .andExpect(jsonPath("$.[*].article").value(hasItem(DEFAULT_ARTICLE.toString())))
            .andExpect(jsonPath("$.[*].utilisateur").value(hasItem(DEFAULT_UTILISATEUR.toString())))
            .andExpect(jsonPath("$.[*].c").value(hasItem(DEFAULT_C)));
    }

    @Test
    public void getDislike() throws Exception {
        // Initialize the database
        dislikeRepository.save(dislike);

        // Get the dislike
        restDislikeMockMvc.perform(get("/api/dislikes/{id}", dislike.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(dislike.getId()))
            .andExpect(jsonPath("$.article").value(DEFAULT_ARTICLE.toString()))
            .andExpect(jsonPath("$.utilisateur").value(DEFAULT_UTILISATEUR.toString()))
            .andExpect(jsonPath("$.c").value(DEFAULT_C));
    }

    @Test
    public void getNonExistingDislike() throws Exception {
        // Get the dislike
        restDislikeMockMvc.perform(get("/api/dislikes/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    public void updateDislike() throws Exception {
        // Initialize the database
        dislikeRepository.save(dislike);
        int databaseSizeBeforeUpdate = dislikeRepository.findAll().size();

        // Update the dislike
        Dislike updatedDislike = dislikeRepository.findOne(dislike.getId());
        updatedDislike
                .article(UPDATED_ARTICLE)
                .utilisateur(UPDATED_UTILISATEUR)
                .c(UPDATED_C);

        restDislikeMockMvc.perform(put("/api/dislikes")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedDislike)))
            .andExpect(status().isOk());

        // Validate the Dislike in the database
        List<Dislike> dislikeList = dislikeRepository.findAll();
        assertThat(dislikeList).hasSize(databaseSizeBeforeUpdate);
        Dislike testDislike = dislikeList.get(dislikeList.size() - 1);
        assertThat(testDislike.getArticle()).isEqualTo(UPDATED_ARTICLE);
        assertThat(testDislike.getUtilisateur()).isEqualTo(UPDATED_UTILISATEUR);
        assertThat(testDislike.getC()).isEqualTo(UPDATED_C);
    }

    @Test
    public void updateNonExistingDislike() throws Exception {
        int databaseSizeBeforeUpdate = dislikeRepository.findAll().size();

        // Create the Dislike

        // If the entity doesn't have an ID, it will be created instead of just being updated
        restDislikeMockMvc.perform(put("/api/dislikes")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(dislike)))
            .andExpect(status().isCreated());

        // Validate the Dislike in the database
        List<Dislike> dislikeList = dislikeRepository.findAll();
        assertThat(dislikeList).hasSize(databaseSizeBeforeUpdate + 1);
    }

    @Test
    public void deleteDislike() throws Exception {
        // Initialize the database
        dislikeRepository.save(dislike);
        int databaseSizeBeforeDelete = dislikeRepository.findAll().size();

        // Get the dislike
        restDislikeMockMvc.perform(delete("/api/dislikes/{id}", dislike.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isOk());

        // Validate the database is empty
        List<Dislike> dislikeList = dislikeRepository.findAll();
        assertThat(dislikeList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Dislike.class);
    }
}
