package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.AvancementApp;

import com.mycompany.myapp.domain.Pharmacie;
import com.mycompany.myapp.repository.PharmacieRepository;

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
 * Test class for the PharmacieResource REST controller.
 *
 * @see PharmacieResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = AvancementApp.class)
public class PharmacieResourceIntTest {

    private static final String DEFAULT_NOMETPRENOM = "AAAAAAAAAA";
    private static final String UPDATED_NOMETPRENOM = "BBBBBBBBBB";

    private static final LocalDate DEFAULT_DATEDENAISSANCE = LocalDate.ofEpochDay(0L);
    private static final LocalDate UPDATED_DATEDENAISSANCE = LocalDate.now(ZoneId.systemDefault());

    private static final String DEFAULT_EMAIL = "AAAAAAAAAA";
    private static final String UPDATED_EMAIL = "BBBBBBBBBB";

    private static final byte[] DEFAULT_PHOTO = TestUtil.createByteArray(1, "0");
    private static final byte[] UPDATED_PHOTO = TestUtil.createByteArray(2, "1");
    private static final String DEFAULT_PHOTO_CONTENT_TYPE = "image/jpg";
    private static final String UPDATED_PHOTO_CONTENT_TYPE = "image/png";

    private static final String DEFAULT_MOTDEPASSE = "AAAAAAAAAA";
    private static final String UPDATED_MOTDEPASSE = "BBBBBBBBBB";

    private static final String DEFAULT_LOGIN = "AAAAAAAAAA";
    private static final String UPDATED_LOGIN = "BBBBBBBBBB";

    @Autowired
    private PharmacieRepository pharmacieRepository;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    private MockMvc restPharmacieMockMvc;

    private Pharmacie pharmacie;

    @Before
   /* public void setup() {
        MockitoAnnotations.initMocks(this);
            PharmacieResource pharmacieResource = new PharmacieResource(pharmacieRepository);
        this.restPharmacieMockMvc = MockMvcBuilders.standaloneSetup(pharmacieResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setMessageConverters(jacksonMessageConverter).build();
    }*/

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Pharmacie createEntity() {
        Pharmacie pharmacie = new Pharmacie()
                .nometprenom(DEFAULT_NOMETPRENOM)
                .datedenaissance(DEFAULT_DATEDENAISSANCE)
                .email(DEFAULT_EMAIL)
                .photo(DEFAULT_PHOTO)
                .photoContentType(DEFAULT_PHOTO_CONTENT_TYPE)
                .motdepasse(DEFAULT_MOTDEPASSE)
                .login(DEFAULT_LOGIN);
        return pharmacie;
    }

    @Before
    public void initTest() {
        pharmacieRepository.deleteAll();
        pharmacie = createEntity();
    }

    @Test
    public void createPharmacie() throws Exception {
        int databaseSizeBeforeCreate = pharmacieRepository.findAll().size();

        // Create the Pharmacie

        restPharmacieMockMvc.perform(post("/api/pharmacies")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(pharmacie)))
            .andExpect(status().isCreated());

        // Validate the Pharmacie in the database
        List<Pharmacie> pharmacieList = pharmacieRepository.findAll();
        assertThat(pharmacieList).hasSize(databaseSizeBeforeCreate + 1);
        Pharmacie testPharmacie = pharmacieList.get(pharmacieList.size() - 1);
        assertThat(testPharmacie.getNometprenom()).isEqualTo(DEFAULT_NOMETPRENOM);
        assertThat(testPharmacie.getDatedenaissance()).isEqualTo(DEFAULT_DATEDENAISSANCE);
        assertThat(testPharmacie.getEmail()).isEqualTo(DEFAULT_EMAIL);
        assertThat(testPharmacie.getPhoto()).isEqualTo(DEFAULT_PHOTO);
        assertThat(testPharmacie.getPhotoContentType()).isEqualTo(DEFAULT_PHOTO_CONTENT_TYPE);
        assertThat(testPharmacie.getMotdepasse()).isEqualTo(DEFAULT_MOTDEPASSE);
        assertThat(testPharmacie.getLogin()).isEqualTo(DEFAULT_LOGIN);
    }

    @Test
    public void createPharmacieWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = pharmacieRepository.findAll().size();

        // Create the Pharmacie with an existing ID
        Pharmacie existingPharmacie = new Pharmacie();
        existingPharmacie.setId("existing_id");

        // An entity with an existing ID cannot be created, so this API call must fail
        restPharmacieMockMvc.perform(post("/api/pharmacies")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(existingPharmacie)))
            .andExpect(status().isBadRequest());

        // Validate the Alice in the database
        List<Pharmacie> pharmacieList = pharmacieRepository.findAll();
        assertThat(pharmacieList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    public void checkNometprenomIsRequired() throws Exception {
        int databaseSizeBeforeTest = pharmacieRepository.findAll().size();
        // set the field null
        pharmacie.setNometprenom(null);

        // Create the Pharmacie, which fails.

        restPharmacieMockMvc.perform(post("/api/pharmacies")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(pharmacie)))
            .andExpect(status().isBadRequest());

        List<Pharmacie> pharmacieList = pharmacieRepository.findAll();
        assertThat(pharmacieList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    public void checkDatedenaissanceIsRequired() throws Exception {
        int databaseSizeBeforeTest = pharmacieRepository.findAll().size();
        // set the field null
        pharmacie.setDatedenaissance(null);

        // Create the Pharmacie, which fails.

        restPharmacieMockMvc.perform(post("/api/pharmacies")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(pharmacie)))
            .andExpect(status().isBadRequest());

        List<Pharmacie> pharmacieList = pharmacieRepository.findAll();
        assertThat(pharmacieList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    public void checkEmailIsRequired() throws Exception {
        int databaseSizeBeforeTest = pharmacieRepository.findAll().size();
        // set the field null
        pharmacie.setEmail(null);

        // Create the Pharmacie, which fails.

        restPharmacieMockMvc.perform(post("/api/pharmacies")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(pharmacie)))
            .andExpect(status().isBadRequest());

        List<Pharmacie> pharmacieList = pharmacieRepository.findAll();
        assertThat(pharmacieList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    public void checkPhotoIsRequired() throws Exception {
        int databaseSizeBeforeTest = pharmacieRepository.findAll().size();
        // set the field null
        pharmacie.setPhoto(null);

        // Create the Pharmacie, which fails.

        restPharmacieMockMvc.perform(post("/api/pharmacies")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(pharmacie)))
            .andExpect(status().isBadRequest());

        List<Pharmacie> pharmacieList = pharmacieRepository.findAll();
        assertThat(pharmacieList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    public void checkLoginIsRequired() throws Exception {
        int databaseSizeBeforeTest = pharmacieRepository.findAll().size();
        // set the field null
        pharmacie.setLogin(null);

        // Create the Pharmacie, which fails.

        restPharmacieMockMvc.perform(post("/api/pharmacies")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(pharmacie)))
            .andExpect(status().isBadRequest());

        List<Pharmacie> pharmacieList = pharmacieRepository.findAll();
        assertThat(pharmacieList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    public void getAllPharmacies() throws Exception {
        // Initialize the database
        pharmacieRepository.save(pharmacie);

        // Get all the pharmacieList
        restPharmacieMockMvc.perform(get("/api/pharmacies?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(pharmacie.getId())))
            .andExpect(jsonPath("$.[*].nometprenom").value(hasItem(DEFAULT_NOMETPRENOM.toString())))
            .andExpect(jsonPath("$.[*].datedenaissance").value(hasItem(DEFAULT_DATEDENAISSANCE.toString())))
            .andExpect(jsonPath("$.[*].email").value(hasItem(DEFAULT_EMAIL.toString())))
            .andExpect(jsonPath("$.[*].photoContentType").value(hasItem(DEFAULT_PHOTO_CONTENT_TYPE)))
            .andExpect(jsonPath("$.[*].photo").value(hasItem(Base64Utils.encodeToString(DEFAULT_PHOTO))))
            .andExpect(jsonPath("$.[*].motdepasse").value(hasItem(DEFAULT_MOTDEPASSE.toString())))
            .andExpect(jsonPath("$.[*].login").value(hasItem(DEFAULT_LOGIN.toString())));
    }

    @Test
    public void getPharmacie() throws Exception {
        // Initialize the database
        pharmacieRepository.save(pharmacie);

        // Get the pharmacie
        restPharmacieMockMvc.perform(get("/api/pharmacies/{id}", pharmacie.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(pharmacie.getId()))
            .andExpect(jsonPath("$.nometprenom").value(DEFAULT_NOMETPRENOM.toString()))
            .andExpect(jsonPath("$.datedenaissance").value(DEFAULT_DATEDENAISSANCE.toString()))
            .andExpect(jsonPath("$.email").value(DEFAULT_EMAIL.toString()))
            .andExpect(jsonPath("$.photoContentType").value(DEFAULT_PHOTO_CONTENT_TYPE))
            .andExpect(jsonPath("$.photo").value(Base64Utils.encodeToString(DEFAULT_PHOTO)))
            .andExpect(jsonPath("$.motdepasse").value(DEFAULT_MOTDEPASSE.toString()))
            .andExpect(jsonPath("$.login").value(DEFAULT_LOGIN.toString()));
    }

    @Test
    public void getNonExistingPharmacie() throws Exception {
        // Get the pharmacie
        restPharmacieMockMvc.perform(get("/api/pharmacies/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    public void updatePharmacie() throws Exception {
        // Initialize the database
        pharmacieRepository.save(pharmacie);
        int databaseSizeBeforeUpdate = pharmacieRepository.findAll().size();

        // Update the pharmacie
        Pharmacie updatedPharmacie = pharmacieRepository.findOne(pharmacie.getId());
        updatedPharmacie
                .nometprenom(UPDATED_NOMETPRENOM)
                .datedenaissance(UPDATED_DATEDENAISSANCE)
                .email(UPDATED_EMAIL)
                .photo(UPDATED_PHOTO)
                .photoContentType(UPDATED_PHOTO_CONTENT_TYPE)
                .motdepasse(UPDATED_MOTDEPASSE)
                .login(UPDATED_LOGIN);

        restPharmacieMockMvc.perform(put("/api/pharmacies")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedPharmacie)))
            .andExpect(status().isOk());

        // Validate the Pharmacie in the database
        List<Pharmacie> pharmacieList = pharmacieRepository.findAll();
        assertThat(pharmacieList).hasSize(databaseSizeBeforeUpdate);
        Pharmacie testPharmacie = pharmacieList.get(pharmacieList.size() - 1);
        assertThat(testPharmacie.getNometprenom()).isEqualTo(UPDATED_NOMETPRENOM);
        assertThat(testPharmacie.getDatedenaissance()).isEqualTo(UPDATED_DATEDENAISSANCE);
        assertThat(testPharmacie.getEmail()).isEqualTo(UPDATED_EMAIL);
        assertThat(testPharmacie.getPhoto()).isEqualTo(UPDATED_PHOTO);
        assertThat(testPharmacie.getPhotoContentType()).isEqualTo(UPDATED_PHOTO_CONTENT_TYPE);
        assertThat(testPharmacie.getMotdepasse()).isEqualTo(UPDATED_MOTDEPASSE);
        assertThat(testPharmacie.getLogin()).isEqualTo(UPDATED_LOGIN);
    }

    @Test
    public void updateNonExistingPharmacie() throws Exception {
        int databaseSizeBeforeUpdate = pharmacieRepository.findAll().size();

        // Create the Pharmacie

        // If the entity doesn't have an ID, it will be created instead of just being updated
        restPharmacieMockMvc.perform(put("/api/pharmacies")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(pharmacie)))
            .andExpect(status().isCreated());

        // Validate the Pharmacie in the database
        List<Pharmacie> pharmacieList = pharmacieRepository.findAll();
        assertThat(pharmacieList).hasSize(databaseSizeBeforeUpdate + 1);
    }

    @Test
    public void deletePharmacie() throws Exception {
        // Initialize the database
        pharmacieRepository.save(pharmacie);
        int databaseSizeBeforeDelete = pharmacieRepository.findAll().size();

        // Get the pharmacie
        restPharmacieMockMvc.perform(delete("/api/pharmacies/{id}", pharmacie.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isOk());

        // Validate the database is empty
        List<Pharmacie> pharmacieList = pharmacieRepository.findAll();
        assertThat(pharmacieList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Pharmacie.class);
    }
}
