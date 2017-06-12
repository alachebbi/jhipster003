package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.AvancementApp;

import com.mycompany.myapp.domain.ChefService;
import com.mycompany.myapp.repository.ChefServiceRepository;

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
 * Test class for the ChefServiceResource REST controller.
 *
 * @see ChefServiceResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = AvancementApp.class)
public class ChefServiceResourceIntTest {

    private static final String DEFAULT_NOMETPRENOM = "AAAAAAAAAA";
    private static final String UPDATED_NOMETPRENOM = "BBBBBBBBBB";

    private static final String DEFAULT_LOGIN = "AAAAAAAAAA";
    private static final String UPDATED_LOGIN = "BBBBBBBBBB";

    private static final String DEFAULT_MOTDEPASSE = "AAAAAAAAAA";
    private static final String UPDATED_MOTDEPASSE = "BBBBBBBBBB";

    private static final String DEFAULT_SERVICEMEDI = "AAAAAAAAAA";
    private static final String UPDATED_SERVICEMEDI = "BBBBBBBBBB";

    private static final byte[] DEFAULT_PHOTO = TestUtil.createByteArray(1, "0");
    private static final byte[] UPDATED_PHOTO = TestUtil.createByteArray(2, "1");
    private static final String DEFAULT_PHOTO_CONTENT_TYPE = "image/jpg";
    private static final String UPDATED_PHOTO_CONTENT_TYPE = "image/png";

    private static final String DEFAULT_SPECIALITE = "AAAAAAAAAA";
    private static final String UPDATED_SPECIALITE = "BBBBBBBBBB";

    private static final LocalDate DEFAULT_DATEDENAISSANCE = LocalDate.ofEpochDay(0L);
    private static final LocalDate UPDATED_DATEDENAISSANCE = LocalDate.now(ZoneId.systemDefault());

    private static final String DEFAULT_EMAIL = "AAAAAAAAAA";
    private static final String UPDATED_EMAIL = "BBBBBBBBBB";

    @Autowired
    private ChefServiceRepository chefServiceRepository;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    private MockMvc restChefServiceMockMvc;

    private ChefService chefService;

   /* @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
            ChefServiceResource chefServiceResource = new ChefServiceResource(chefServiceRepository);
        this.restChefServiceMockMvc = MockMvcBuilders.standaloneSetup(chefServiceResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setMessageConverters(jacksonMessageConverter).build();
    }*/

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static ChefService createEntity() {
        ChefService chefService = new ChefService()
                .nometprenom(DEFAULT_NOMETPRENOM)
                .login(DEFAULT_LOGIN)
                .motdepasse(DEFAULT_MOTDEPASSE)
                .servicemedi(DEFAULT_SERVICEMEDI)
                .photo(DEFAULT_PHOTO)
                .photoContentType(DEFAULT_PHOTO_CONTENT_TYPE)
                .specialite(DEFAULT_SPECIALITE)
                .datedenaissance(DEFAULT_DATEDENAISSANCE)
                .email(DEFAULT_EMAIL);
        return chefService;
    }

    @Before
    public void initTest() {
        chefServiceRepository.deleteAll();
        chefService = createEntity();
    }

    @Test
    public void createChefService() throws Exception {
        int databaseSizeBeforeCreate = chefServiceRepository.findAll().size();

        // Create the ChefService

        restChefServiceMockMvc.perform(post("/api/chef-services")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(chefService)))
            .andExpect(status().isCreated());

        // Validate the ChefService in the database
        List<ChefService> chefServiceList = chefServiceRepository.findAll();
        assertThat(chefServiceList).hasSize(databaseSizeBeforeCreate + 1);
        ChefService testChefService = chefServiceList.get(chefServiceList.size() - 1);
        assertThat(testChefService.getNometprenom()).isEqualTo(DEFAULT_NOMETPRENOM);
        assertThat(testChefService.getLogin()).isEqualTo(DEFAULT_LOGIN);
        assertThat(testChefService.getMotdepasse()).isEqualTo(DEFAULT_MOTDEPASSE);
        assertThat(testChefService.getServicemedi()).isEqualTo(DEFAULT_SERVICEMEDI);
        assertThat(testChefService.getPhoto()).isEqualTo(DEFAULT_PHOTO);
        assertThat(testChefService.getPhotoContentType()).isEqualTo(DEFAULT_PHOTO_CONTENT_TYPE);
        assertThat(testChefService.getSpecialite()).isEqualTo(DEFAULT_SPECIALITE);
        assertThat(testChefService.getDatedenaissance()).isEqualTo(DEFAULT_DATEDENAISSANCE);
        assertThat(testChefService.getEmail()).isEqualTo(DEFAULT_EMAIL);
    }

    @Test
    public void createChefServiceWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = chefServiceRepository.findAll().size();

        // Create the ChefService with an existing ID
        ChefService existingChefService = new ChefService();
        existingChefService.setId("existing_id");

        // An entity with an existing ID cannot be created, so this API call must fail
        restChefServiceMockMvc.perform(post("/api/chef-services")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(existingChefService)))
            .andExpect(status().isBadRequest());

        // Validate the Alice in the database
        List<ChefService> chefServiceList = chefServiceRepository.findAll();
        assertThat(chefServiceList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    public void getAllChefServices() throws Exception {
        // Initialize the database
        chefServiceRepository.save(chefService);

        // Get all the chefServiceList
        restChefServiceMockMvc.perform(get("/api/chef-services?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(chefService.getId())))
            .andExpect(jsonPath("$.[*].nometprenom").value(hasItem(DEFAULT_NOMETPRENOM.toString())))
            .andExpect(jsonPath("$.[*].login").value(hasItem(DEFAULT_LOGIN.toString())))
            .andExpect(jsonPath("$.[*].motdepasse").value(hasItem(DEFAULT_MOTDEPASSE.toString())))
            .andExpect(jsonPath("$.[*].servicemedi").value(hasItem(DEFAULT_SERVICEMEDI.toString())))
            .andExpect(jsonPath("$.[*].photoContentType").value(hasItem(DEFAULT_PHOTO_CONTENT_TYPE)))
            .andExpect(jsonPath("$.[*].photo").value(hasItem(Base64Utils.encodeToString(DEFAULT_PHOTO))))
            .andExpect(jsonPath("$.[*].specialite").value(hasItem(DEFAULT_SPECIALITE.toString())))
            .andExpect(jsonPath("$.[*].datedenaissance").value(hasItem(DEFAULT_DATEDENAISSANCE.toString())))
            .andExpect(jsonPath("$.[*].email").value(hasItem(DEFAULT_EMAIL.toString())));
    }

    @Test
    public void getChefService() throws Exception {
        // Initialize the database
        chefServiceRepository.save(chefService);

        // Get the chefService
        restChefServiceMockMvc.perform(get("/api/chef-services/{id}", chefService.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(chefService.getId()))
            .andExpect(jsonPath("$.nometprenom").value(DEFAULT_NOMETPRENOM.toString()))
            .andExpect(jsonPath("$.login").value(DEFAULT_LOGIN.toString()))
            .andExpect(jsonPath("$.motdepasse").value(DEFAULT_MOTDEPASSE.toString()))
            .andExpect(jsonPath("$.servicemedi").value(DEFAULT_SERVICEMEDI.toString()))
            .andExpect(jsonPath("$.photoContentType").value(DEFAULT_PHOTO_CONTENT_TYPE))
            .andExpect(jsonPath("$.photo").value(Base64Utils.encodeToString(DEFAULT_PHOTO)))
            .andExpect(jsonPath("$.specialite").value(DEFAULT_SPECIALITE.toString()))
            .andExpect(jsonPath("$.datedenaissance").value(DEFAULT_DATEDENAISSANCE.toString()))
            .andExpect(jsonPath("$.email").value(DEFAULT_EMAIL.toString()));
    }

    @Test
    public void getNonExistingChefService() throws Exception {
        // Get the chefService
        restChefServiceMockMvc.perform(get("/api/chef-services/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    public void updateChefService() throws Exception {
        // Initialize the database
        chefServiceRepository.save(chefService);
        int databaseSizeBeforeUpdate = chefServiceRepository.findAll().size();

        // Update the chefService
        ChefService updatedChefService = chefServiceRepository.findOne(chefService.getId());
        updatedChefService
                .nometprenom(UPDATED_NOMETPRENOM)
                .login(UPDATED_LOGIN)
                .motdepasse(UPDATED_MOTDEPASSE)
                .servicemedi(UPDATED_SERVICEMEDI)
                .photo(UPDATED_PHOTO)
                .photoContentType(UPDATED_PHOTO_CONTENT_TYPE)
                .specialite(UPDATED_SPECIALITE)
                .datedenaissance(UPDATED_DATEDENAISSANCE)
                .email(UPDATED_EMAIL);

        restChefServiceMockMvc.perform(put("/api/chef-services")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedChefService)))
            .andExpect(status().isOk());

        // Validate the ChefService in the database
        List<ChefService> chefServiceList = chefServiceRepository.findAll();
        assertThat(chefServiceList).hasSize(databaseSizeBeforeUpdate);
        ChefService testChefService = chefServiceList.get(chefServiceList.size() - 1);
        assertThat(testChefService.getNometprenom()).isEqualTo(UPDATED_NOMETPRENOM);
        assertThat(testChefService.getLogin()).isEqualTo(UPDATED_LOGIN);
        assertThat(testChefService.getMotdepasse()).isEqualTo(UPDATED_MOTDEPASSE);
        assertThat(testChefService.getServicemedi()).isEqualTo(UPDATED_SERVICEMEDI);
        assertThat(testChefService.getPhoto()).isEqualTo(UPDATED_PHOTO);
        assertThat(testChefService.getPhotoContentType()).isEqualTo(UPDATED_PHOTO_CONTENT_TYPE);
        assertThat(testChefService.getSpecialite()).isEqualTo(UPDATED_SPECIALITE);
        assertThat(testChefService.getDatedenaissance()).isEqualTo(UPDATED_DATEDENAISSANCE);
        assertThat(testChefService.getEmail()).isEqualTo(UPDATED_EMAIL);
    }

    @Test
    public void updateNonExistingChefService() throws Exception {
        int databaseSizeBeforeUpdate = chefServiceRepository.findAll().size();

        // Create the ChefService

        // If the entity doesn't have an ID, it will be created instead of just being updated
        restChefServiceMockMvc.perform(put("/api/chef-services")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(chefService)))
            .andExpect(status().isCreated());

        // Validate the ChefService in the database
        List<ChefService> chefServiceList = chefServiceRepository.findAll();
        assertThat(chefServiceList).hasSize(databaseSizeBeforeUpdate + 1);
    }

    @Test
    public void deleteChefService() throws Exception {
        // Initialize the database
        chefServiceRepository.save(chefService);
        int databaseSizeBeforeDelete = chefServiceRepository.findAll().size();

        // Get the chefService
        restChefServiceMockMvc.perform(delete("/api/chef-services/{id}", chefService.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isOk());

        // Validate the database is empty
        List<ChefService> chefServiceList = chefServiceRepository.findAll();
        assertThat(chefServiceList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(ChefService.class);
    }
}
