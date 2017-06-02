package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.AvancementApp;

import com.mycompany.myapp.domain.Demandemedi;
import com.mycompany.myapp.repository.DemandemediRepository;

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
 * Test class for the DemandemediResource REST controller.
 *
 * @see DemandemediResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = AvancementApp.class)
public class DemandemediResourceIntTest {

    private static final String DEFAULT_ETAT = "AAAAAAAAAA";
    private static final String UPDATED_ETAT = "BBBBBBBBBB";

    private static final String DEFAULT_MEDICAMENTID = "AAAAAAAAAA";
    private static final String UPDATED_MEDICAMENTID = "BBBBBBBBBB";

    private static final Integer DEFAULT_QUANTITE = 1;
    private static final Integer UPDATED_QUANTITE = 2;

    private static final LocalDate DEFAULT_DATE = LocalDate.ofEpochDay(0L);
    private static final LocalDate UPDATED_DATE = LocalDate.now(ZoneId.systemDefault());

    @Autowired
    private DemandemediRepository demandemediRepository;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    private MockMvc restDemandemediMockMvc;

    private Demandemedi demandemedi;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
            DemandemediResource demandemediResource = new DemandemediResource(demandemediRepository);
        this.restDemandemediMockMvc = MockMvcBuilders.standaloneSetup(demandemediResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setMessageConverters(jacksonMessageConverter).build();
    }

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Demandemedi createEntity() {
        Demandemedi demandemedi = new Demandemedi()
                .etat(DEFAULT_ETAT)
                .medicamentid(DEFAULT_MEDICAMENTID)
                .quantite(DEFAULT_QUANTITE)
                .date(DEFAULT_DATE);
        return demandemedi;
    }

    @Before
    public void initTest() {
        demandemediRepository.deleteAll();
        demandemedi = createEntity();
    }

    @Test
    public void createDemandemedi() throws Exception {
        int databaseSizeBeforeCreate = demandemediRepository.findAll().size();

        // Create the Demandemedi

        restDemandemediMockMvc.perform(post("/api/demandemedis")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(demandemedi)))
            .andExpect(status().isCreated());

        // Validate the Demandemedi in the database
        List<Demandemedi> demandemediList = demandemediRepository.findAll();
        assertThat(demandemediList).hasSize(databaseSizeBeforeCreate + 1);
        Demandemedi testDemandemedi = demandemediList.get(demandemediList.size() - 1);
        assertThat(testDemandemedi.getEtat()).isEqualTo(DEFAULT_ETAT);
        assertThat(testDemandemedi.getMedicamentid()).isEqualTo(DEFAULT_MEDICAMENTID);
        assertThat(testDemandemedi.getQuantite()).isEqualTo(DEFAULT_QUANTITE);
        assertThat(testDemandemedi.getDate()).isEqualTo(DEFAULT_DATE);
    }

    @Test
    public void createDemandemediWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = demandemediRepository.findAll().size();

        // Create the Demandemedi with an existing ID
        Demandemedi existingDemandemedi = new Demandemedi();
        existingDemandemedi.setId("existing_id");

        // An entity with an existing ID cannot be created, so this API call must fail
        restDemandemediMockMvc.perform(post("/api/demandemedis")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(existingDemandemedi)))
            .andExpect(status().isBadRequest());

        // Validate the Alice in the database
        List<Demandemedi> demandemediList = demandemediRepository.findAll();
        assertThat(demandemediList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    public void getAllDemandemedis() throws Exception {
        // Initialize the database
        demandemediRepository.save(demandemedi);

        // Get all the demandemediList
        restDemandemediMockMvc.perform(get("/api/demandemedis?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(demandemedi.getId())))
            .andExpect(jsonPath("$.[*].etat").value(hasItem(DEFAULT_ETAT.toString())))
            .andExpect(jsonPath("$.[*].medicamentid").value(hasItem(DEFAULT_MEDICAMENTID.toString())))
            .andExpect(jsonPath("$.[*].quantite").value(hasItem(DEFAULT_QUANTITE)))
            .andExpect(jsonPath("$.[*].date").value(hasItem(DEFAULT_DATE.toString())));
    }

    @Test
    public void getDemandemedi() throws Exception {
        // Initialize the database
        demandemediRepository.save(demandemedi);

        // Get the demandemedi
        restDemandemediMockMvc.perform(get("/api/demandemedis/{id}", demandemedi.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(demandemedi.getId()))
            .andExpect(jsonPath("$.etat").value(DEFAULT_ETAT.toString()))
            .andExpect(jsonPath("$.medicamentid").value(DEFAULT_MEDICAMENTID.toString()))
            .andExpect(jsonPath("$.quantite").value(DEFAULT_QUANTITE))
            .andExpect(jsonPath("$.date").value(DEFAULT_DATE.toString()));
    }

    @Test
    public void getNonExistingDemandemedi() throws Exception {
        // Get the demandemedi
        restDemandemediMockMvc.perform(get("/api/demandemedis/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    public void updateDemandemedi() throws Exception {
        // Initialize the database
        demandemediRepository.save(demandemedi);
        int databaseSizeBeforeUpdate = demandemediRepository.findAll().size();

        // Update the demandemedi
        Demandemedi updatedDemandemedi = demandemediRepository.findOne(demandemedi.getId());
        updatedDemandemedi
                .etat(UPDATED_ETAT)
                .medicamentid(UPDATED_MEDICAMENTID)
                .quantite(UPDATED_QUANTITE)
                .date(UPDATED_DATE);

        restDemandemediMockMvc.perform(put("/api/demandemedis")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedDemandemedi)))
            .andExpect(status().isOk());

        // Validate the Demandemedi in the database
        List<Demandemedi> demandemediList = demandemediRepository.findAll();
        assertThat(demandemediList).hasSize(databaseSizeBeforeUpdate);
        Demandemedi testDemandemedi = demandemediList.get(demandemediList.size() - 1);
        assertThat(testDemandemedi.getEtat()).isEqualTo(UPDATED_ETAT);
        assertThat(testDemandemedi.getMedicamentid()).isEqualTo(UPDATED_MEDICAMENTID);
        assertThat(testDemandemedi.getQuantite()).isEqualTo(UPDATED_QUANTITE);
        assertThat(testDemandemedi.getDate()).isEqualTo(UPDATED_DATE);
    }

    @Test
    public void updateNonExistingDemandemedi() throws Exception {
        int databaseSizeBeforeUpdate = demandemediRepository.findAll().size();

        // Create the Demandemedi

        // If the entity doesn't have an ID, it will be created instead of just being updated
        restDemandemediMockMvc.perform(put("/api/demandemedis")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(demandemedi)))
            .andExpect(status().isCreated());

        // Validate the Demandemedi in the database
        List<Demandemedi> demandemediList = demandemediRepository.findAll();
        assertThat(demandemediList).hasSize(databaseSizeBeforeUpdate + 1);
    }

    @Test
    public void deleteDemandemedi() throws Exception {
        // Initialize the database
        demandemediRepository.save(demandemedi);
        int databaseSizeBeforeDelete = demandemediRepository.findAll().size();

        // Get the demandemedi
        restDemandemediMockMvc.perform(delete("/api/demandemedis/{id}", demandemedi.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isOk());

        // Validate the database is empty
        List<Demandemedi> demandemediList = demandemediRepository.findAll();
        assertThat(demandemediList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Demandemedi.class);
    }
}
