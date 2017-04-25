package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.AvancementApp;

import com.mycompany.myapp.domain.Demandemedicamentvff;
import com.mycompany.myapp.repository.DemandemedicamentvffRepository;
import com.mycompany.myapp.service.DemandemedicamentvffService;

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
 * Test class for the DemandemedicamentvffResource REST controller.
 *
 * @see DemandemedicamentvffResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = AvancementApp.class)
public class DemandemedicamentvffResourceIntTest {

    private static final String DEFAULT_ETAT = "AAAAAAAAAA";
    private static final String UPDATED_ETAT = "BBBBBBBBBB";

    private static final String DEFAULT_MEDICAMENTID = "AAAAAAAAAA";
    private static final String UPDATED_MEDICAMENTID = "BBBBBBBBBB";

    private static final Integer DEFAULT_QUATITE = 1;
    private static final Integer UPDATED_QUATITE = 2;

    private static final LocalDate DEFAULT_DATE = LocalDate.ofEpochDay(0L);
    private static final LocalDate UPDATED_DATE = LocalDate.now(ZoneId.systemDefault());

    private static final String DEFAULT_D = "AAAAAAAAAA";
    private static final String UPDATED_D = "BBBBBBBBBB";

    @Autowired
    private DemandemedicamentvffRepository demandemedicamentvffRepository;

    @Autowired
    private DemandemedicamentvffService demandemedicamentvffService;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    private MockMvc restDemandemedicamentvffMockMvc;

    private Demandemedicamentvff demandemedicamentvff;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
        DemandemedicamentvffResource demandemedicamentvffResource = new DemandemedicamentvffResource(demandemedicamentvffService);
        this.restDemandemedicamentvffMockMvc = MockMvcBuilders.standaloneSetup(demandemedicamentvffResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setMessageConverters(jacksonMessageConverter).build();
    }

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Demandemedicamentvff createEntity() {
        Demandemedicamentvff demandemedicamentvff = new Demandemedicamentvff()
                .etat(DEFAULT_ETAT)
                .medicamentid(DEFAULT_MEDICAMENTID)
                .quatite(DEFAULT_QUATITE)
                .date(DEFAULT_DATE)
                .d(DEFAULT_D);
        return demandemedicamentvff;
    }

    @Before
    public void initTest() {
        demandemedicamentvffRepository.deleteAll();
        demandemedicamentvff = createEntity();
    }

    @Test
    public void createDemandemedicamentvff() throws Exception {
        int databaseSizeBeforeCreate = demandemedicamentvffRepository.findAll().size();

        // Create the Demandemedicamentvff

        restDemandemedicamentvffMockMvc.perform(post("/api/demandemedicamentvffs")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(demandemedicamentvff)))
            .andExpect(status().isCreated());

        // Validate the Demandemedicamentvff in the database
        List<Demandemedicamentvff> demandemedicamentvffList = demandemedicamentvffRepository.findAll();
        assertThat(demandemedicamentvffList).hasSize(databaseSizeBeforeCreate + 1);
        Demandemedicamentvff testDemandemedicamentvff = demandemedicamentvffList.get(demandemedicamentvffList.size() - 1);
        assertThat(testDemandemedicamentvff.getEtat()).isEqualTo(DEFAULT_ETAT);
        assertThat(testDemandemedicamentvff.getMedicamentid()).isEqualTo(DEFAULT_MEDICAMENTID);
        assertThat(testDemandemedicamentvff.getQuatite()).isEqualTo(DEFAULT_QUATITE);
        assertThat(testDemandemedicamentvff.getDate()).isEqualTo(DEFAULT_DATE);
        assertThat(testDemandemedicamentvff.getD()).isEqualTo(DEFAULT_D);
    }

    @Test
    public void createDemandemedicamentvffWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = demandemedicamentvffRepository.findAll().size();

        // Create the Demandemedicamentvff with an existing ID
        Demandemedicamentvff existingDemandemedicamentvff = new Demandemedicamentvff();
        existingDemandemedicamentvff.setId("existing_id");

        // An entity with an existing ID cannot be created, so this API call must fail
        restDemandemedicamentvffMockMvc.perform(post("/api/demandemedicamentvffs")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(existingDemandemedicamentvff)))
            .andExpect(status().isBadRequest());

        // Validate the Alice in the database
        List<Demandemedicamentvff> demandemedicamentvffList = demandemedicamentvffRepository.findAll();
        assertThat(demandemedicamentvffList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    public void getAllDemandemedicamentvffs() throws Exception {
        // Initialize the database
        demandemedicamentvffRepository.save(demandemedicamentvff);

        // Get all the demandemedicamentvffList
        restDemandemedicamentvffMockMvc.perform(get("/api/demandemedicamentvffs?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(demandemedicamentvff.getId())))
            .andExpect(jsonPath("$.[*].etat").value(hasItem(DEFAULT_ETAT.toString())))
            .andExpect(jsonPath("$.[*].medicamentid").value(hasItem(DEFAULT_MEDICAMENTID.toString())))
            .andExpect(jsonPath("$.[*].quatite").value(hasItem(DEFAULT_QUATITE)))
            .andExpect(jsonPath("$.[*].date").value(hasItem(DEFAULT_DATE.toString())))
            .andExpect(jsonPath("$.[*].d").value(hasItem(DEFAULT_D.toString())));
    }

    @Test
    public void getDemandemedicamentvff() throws Exception {
        // Initialize the database
        demandemedicamentvffRepository.save(demandemedicamentvff);

        // Get the demandemedicamentvff
        restDemandemedicamentvffMockMvc.perform(get("/api/demandemedicamentvffs/{id}", demandemedicamentvff.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(demandemedicamentvff.getId()))
            .andExpect(jsonPath("$.etat").value(DEFAULT_ETAT.toString()))
            .andExpect(jsonPath("$.medicamentid").value(DEFAULT_MEDICAMENTID.toString()))
            .andExpect(jsonPath("$.quatite").value(DEFAULT_QUATITE))
            .andExpect(jsonPath("$.date").value(DEFAULT_DATE.toString()))
            .andExpect(jsonPath("$.d").value(DEFAULT_D.toString()));
    }

    @Test
    public void getNonExistingDemandemedicamentvff() throws Exception {
        // Get the demandemedicamentvff
        restDemandemedicamentvffMockMvc.perform(get("/api/demandemedicamentvffs/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    public void updateDemandemedicamentvff() throws Exception {
        // Initialize the database
        demandemedicamentvffService.save(demandemedicamentvff);

        int databaseSizeBeforeUpdate = demandemedicamentvffRepository.findAll().size();

        // Update the demandemedicamentvff
        Demandemedicamentvff updatedDemandemedicamentvff = demandemedicamentvffRepository.findOne(demandemedicamentvff.getId());
        updatedDemandemedicamentvff
                .etat(UPDATED_ETAT)
                .medicamentid(UPDATED_MEDICAMENTID)
                .quatite(UPDATED_QUATITE)
                .date(UPDATED_DATE)
                .d(UPDATED_D);

        restDemandemedicamentvffMockMvc.perform(put("/api/demandemedicamentvffs")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedDemandemedicamentvff)))
            .andExpect(status().isOk());

        // Validate the Demandemedicamentvff in the database
        List<Demandemedicamentvff> demandemedicamentvffList = demandemedicamentvffRepository.findAll();
        assertThat(demandemedicamentvffList).hasSize(databaseSizeBeforeUpdate);
        Demandemedicamentvff testDemandemedicamentvff = demandemedicamentvffList.get(demandemedicamentvffList.size() - 1);
        assertThat(testDemandemedicamentvff.getEtat()).isEqualTo(UPDATED_ETAT);
        assertThat(testDemandemedicamentvff.getMedicamentid()).isEqualTo(UPDATED_MEDICAMENTID);
        assertThat(testDemandemedicamentvff.getQuatite()).isEqualTo(UPDATED_QUATITE);
        assertThat(testDemandemedicamentvff.getDate()).isEqualTo(UPDATED_DATE);
        assertThat(testDemandemedicamentvff.getD()).isEqualTo(UPDATED_D);
    }

    @Test
    public void updateNonExistingDemandemedicamentvff() throws Exception {
        int databaseSizeBeforeUpdate = demandemedicamentvffRepository.findAll().size();

        // Create the Demandemedicamentvff

        // If the entity doesn't have an ID, it will be created instead of just being updated
        restDemandemedicamentvffMockMvc.perform(put("/api/demandemedicamentvffs")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(demandemedicamentvff)))
            .andExpect(status().isCreated());

        // Validate the Demandemedicamentvff in the database
        List<Demandemedicamentvff> demandemedicamentvffList = demandemedicamentvffRepository.findAll();
        assertThat(demandemedicamentvffList).hasSize(databaseSizeBeforeUpdate + 1);
    }

    @Test
    public void deleteDemandemedicamentvff() throws Exception {
        // Initialize the database
        demandemedicamentvffService.save(demandemedicamentvff);

        int databaseSizeBeforeDelete = demandemedicamentvffRepository.findAll().size();

        // Get the demandemedicamentvff
        restDemandemedicamentvffMockMvc.perform(delete("/api/demandemedicamentvffs/{id}", demandemedicamentvff.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isOk());

        // Validate the database is empty
        List<Demandemedicamentvff> demandemedicamentvffList = demandemedicamentvffRepository.findAll();
        assertThat(demandemedicamentvffList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Demandemedicamentvff.class);
    }
}
