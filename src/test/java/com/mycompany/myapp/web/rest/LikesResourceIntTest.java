package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.AvancementApp;

import com.mycompany.myapp.domain.Likes;
import com.mycompany.myapp.repository.LikesRepository;
import com.mycompany.myapp.service.LikesService;

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
 * Test class for the LikesResource REST controller.
 *
 * @see LikesResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = AvancementApp.class)
public class LikesResourceIntTest {

    private static final String DEFAULT_ARTICLEID = "AAAAAAAAAA";
    private static final String UPDATED_ARTICLEID = "BBBBBBBBBB";

    private static final String DEFAULT_USERID = "AAAAAAAAAA";
    private static final String UPDATED_USERID = "BBBBBBBBBB";

    @Autowired
    private LikesRepository likesRepository;

    @Autowired
    private LikesService likesService;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    private MockMvc restLikesMockMvc;

    private Likes likes;

    @Before
    public void setup() {
        /*MockitoAnnotations.initMocks(this);
        LikesResource likesResource = new LikesResource(likesService);
        this.restLikesMockMvc = MockMvcBuilders.standaloneSetup(likesResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setMessageConverters(jacksonMessageConverter).build();*/
    }

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Likes createEntity() {
        Likes likes = new Likes()
                .articleid(DEFAULT_ARTICLEID)
                .userid(DEFAULT_USERID);
        return likes;
    }

    @Before
    public void initTest() {
        likesRepository.deleteAll();
        likes = createEntity();
    }

    @Test
    public void createLikes() throws Exception {
        int databaseSizeBeforeCreate = likesRepository.findAll().size();

        // Create the Likes

        restLikesMockMvc.perform(post("/api/likes")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(likes)))
            .andExpect(status().isCreated());

        // Validate the Likes in the database
        List<Likes> likesList = likesRepository.findAll();
        assertThat(likesList).hasSize(databaseSizeBeforeCreate + 1);
        Likes testLikes = likesList.get(likesList.size() - 1);
        assertThat(testLikes.getArticleid()).isEqualTo(DEFAULT_ARTICLEID);
        assertThat(testLikes.getUserid()).isEqualTo(DEFAULT_USERID);
    }

    @Test
    public void createLikesWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = likesRepository.findAll().size();

        // Create the Likes with an existing ID
        Likes existingLikes = new Likes();
        existingLikes.setId("existing_id");

        // An entity with an existing ID cannot be created, so this API call must fail
        restLikesMockMvc.perform(post("/api/likes")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(existingLikes)))
            .andExpect(status().isBadRequest());

        // Validate the Alice in the database
        List<Likes> likesList = likesRepository.findAll();
        assertThat(likesList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    public void getAllLikes() throws Exception {
        // Initialize the database
        likesRepository.save(likes);

        // Get all the likesList
        restLikesMockMvc.perform(get("/api/likes?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(likes.getId())))
            .andExpect(jsonPath("$.[*].articleid").value(hasItem(DEFAULT_ARTICLEID.toString())))
            .andExpect(jsonPath("$.[*].userid").value(hasItem(DEFAULT_USERID.toString())));
    }

    @Test
    public void getLikes() throws Exception {
        // Initialize the database
        likesRepository.save(likes);

        // Get the likes
        restLikesMockMvc.perform(get("/api/likes/{id}", likes.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(likes.getId()))
            .andExpect(jsonPath("$.articleid").value(DEFAULT_ARTICLEID.toString()))
            .andExpect(jsonPath("$.userid").value(DEFAULT_USERID.toString()));
    }

    @Test
    public void getNonExistingLikes() throws Exception {
        // Get the likes
        restLikesMockMvc.perform(get("/api/likes/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    public void updateLikes() throws Exception {
        // Initialize the database
        likesService.save(likes);

        int databaseSizeBeforeUpdate = likesRepository.findAll().size();

        // Update the likes
        Likes updatedLikes = likesRepository.findOne(likes.getId());
        updatedLikes
                .articleid(UPDATED_ARTICLEID)
                .userid(UPDATED_USERID);

        restLikesMockMvc.perform(put("/api/likes")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedLikes)))
            .andExpect(status().isOk());

        // Validate the Likes in the database
        List<Likes> likesList = likesRepository.findAll();
        assertThat(likesList).hasSize(databaseSizeBeforeUpdate);
        Likes testLikes = likesList.get(likesList.size() - 1);
        assertThat(testLikes.getArticleid()).isEqualTo(UPDATED_ARTICLEID);
        assertThat(testLikes.getUserid()).isEqualTo(UPDATED_USERID);
    }

    @Test
    public void updateNonExistingLikes() throws Exception {
        int databaseSizeBeforeUpdate = likesRepository.findAll().size();

        // Create the Likes

        // If the entity doesn't have an ID, it will be created instead of just being updated
        restLikesMockMvc.perform(put("/api/likes")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(likes)))
            .andExpect(status().isCreated());

        // Validate the Likes in the database
        List<Likes> likesList = likesRepository.findAll();
        assertThat(likesList).hasSize(databaseSizeBeforeUpdate + 1);
    }

    @Test
    public void deleteLikes() throws Exception {
        // Initialize the database
        likesService.save(likes);

        int databaseSizeBeforeDelete = likesRepository.findAll().size();

        // Get the likes
        restLikesMockMvc.perform(delete("/api/likes/{id}", likes.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isOk());

        // Validate the database is empty
        List<Likes> likesList = likesRepository.findAll();
        assertThat(likesList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Likes.class);
    }
}
