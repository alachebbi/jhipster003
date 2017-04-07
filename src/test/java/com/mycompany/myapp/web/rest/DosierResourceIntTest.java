package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.AvancementApp;

import com.mycompany.myapp.domain.Dosier;
import com.mycompany.myapp.repository.DosierRepository;

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

import com.mycompany.myapp.domain.enumeration.Antecedents;
/**
 * Test class for the DosierResource REST controller.
 *
 * @see DosierResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = AvancementApp.class)
public class DosierResourceIntTest {

    private static final byte[] DEFAULT_PERSCREPTIONSMEDICAMENTEUSES = TestUtil.createByteArray(1, "0");
    private static final byte[] UPDATED_PERSCREPTIONSMEDICAMENTEUSES = TestUtil.createByteArray(2, "1");
    private static final String DEFAULT_PERSCREPTIONSMEDICAMENTEUSES_CONTENT_TYPE = "image/jpg";
    private static final String UPDATED_PERSCREPTIONSMEDICAMENTEUSES_CONTENT_TYPE = "image/png";

    private static final String DEFAULT_NOM = "AAAAAAAAAA";
    private static final String UPDATED_NOM = "BBBBBBBBBB";

    private static final Integer DEFAULT_NUMERO = 1;
    private static final Integer UPDATED_NUMERO = 2;

    private static final LocalDate DEFAULT_DATE = LocalDate.ofEpochDay(0L);
    private static final LocalDate UPDATED_DATE = LocalDate.now(ZoneId.systemDefault());

    private static final Antecedents DEFAULT_ANTECEDENTS = Antecedents.Hypertension;
    private static final Antecedents UPDATED_ANTECEDENTS = Antecedents.Hypotension;

    private static final String DEFAULT_GROUPESANGUIN = "AAAAAAAAAA";
    private static final String UPDATED_GROUPESANGUIN = "BBBBBBBBBB";

    private static final byte[] DEFAULT_RECOMMANDATIONS = TestUtil.createByteArray(1, "0");
    private static final byte[] UPDATED_RECOMMANDATIONS = TestUtil.createByteArray(2, "1");
    private static final String DEFAULT_RECOMMANDATIONS_CONTENT_TYPE = "image/jpg";
    private static final String UPDATED_RECOMMANDATIONS_CONTENT_TYPE = "image/png";

    private static final byte[] DEFAULT_RESULTATDERNIEREXAMEN = TestUtil.createByteArray(1, "0");
    private static final byte[] UPDATED_RESULTATDERNIEREXAMEN = TestUtil.createByteArray(2, "1");
    private static final String DEFAULT_RESULTATDERNIEREXAMEN_CONTENT_TYPE = "image/jpg";
    private static final String UPDATED_RESULTATDERNIEREXAMEN_CONTENT_TYPE = "image/png";

    private static final String DEFAULT_CITUATIONFAMILIALE = "AAAAAAAAAA";
    private static final String UPDATED_CITUATIONFAMILIALE = "BBBBBBBBBB";

    @Autowired
    private DosierRepository dosierRepository;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    private MockMvc restDosierMockMvc;

    private Dosier dosier;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
            DosierResource dosierResource = new DosierResource(dosierRepository);
        this.restDosierMockMvc = MockMvcBuilders.standaloneSetup(dosierResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setMessageConverters(jacksonMessageConverter).build();
    }

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Dosier createEntity() {
        Dosier dosier = new Dosier()
                .perscreptionsmedicamenteuses(DEFAULT_PERSCREPTIONSMEDICAMENTEUSES)
                .perscreptionsmedicamenteusesContentType(DEFAULT_PERSCREPTIONSMEDICAMENTEUSES_CONTENT_TYPE)
                .nom(DEFAULT_NOM)
                .numero(DEFAULT_NUMERO)
                .date(DEFAULT_DATE)
                .antecedents(DEFAULT_ANTECEDENTS)
                .groupesanguin(DEFAULT_GROUPESANGUIN)
                .recommandations(DEFAULT_RECOMMANDATIONS)
                .recommandationsContentType(DEFAULT_RECOMMANDATIONS_CONTENT_TYPE)
                .resultatdernierexamen(DEFAULT_RESULTATDERNIEREXAMEN)
                .resultatdernierexamenContentType(DEFAULT_RESULTATDERNIEREXAMEN_CONTENT_TYPE)
                .cituationfamiliale(DEFAULT_CITUATIONFAMILIALE);
        return dosier;
    }

    @Before
    public void initTest() {
        dosierRepository.deleteAll();
        dosier = createEntity();
    }

    @Test
    public void createDosier() throws Exception {
        int databaseSizeBeforeCreate = dosierRepository.findAll().size();

        // Create the Dosier

        restDosierMockMvc.perform(post("/api/dosiers")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(dosier)))
            .andExpect(status().isCreated());

        // Validate the Dosier in the database
        List<Dosier> dosierList = dosierRepository.findAll();
        assertThat(dosierList).hasSize(databaseSizeBeforeCreate + 1);
        Dosier testDosier = dosierList.get(dosierList.size() - 1);
        assertThat(testDosier.getPerscreptionsmedicamenteuses()).isEqualTo(DEFAULT_PERSCREPTIONSMEDICAMENTEUSES);
        assertThat(testDosier.getPerscreptionsmedicamenteusesContentType()).isEqualTo(DEFAULT_PERSCREPTIONSMEDICAMENTEUSES_CONTENT_TYPE);
        assertThat(testDosier.getNom()).isEqualTo(DEFAULT_NOM);
        assertThat(testDosier.getNumero()).isEqualTo(DEFAULT_NUMERO);
        assertThat(testDosier.getDate()).isEqualTo(DEFAULT_DATE);
        assertThat(testDosier.getAntecedents()).isEqualTo(DEFAULT_ANTECEDENTS);
        assertThat(testDosier.getGroupesanguin()).isEqualTo(DEFAULT_GROUPESANGUIN);
        assertThat(testDosier.getRecommandations()).isEqualTo(DEFAULT_RECOMMANDATIONS);
        assertThat(testDosier.getRecommandationsContentType()).isEqualTo(DEFAULT_RECOMMANDATIONS_CONTENT_TYPE);
        assertThat(testDosier.getResultatdernierexamen()).isEqualTo(DEFAULT_RESULTATDERNIEREXAMEN);
        assertThat(testDosier.getResultatdernierexamenContentType()).isEqualTo(DEFAULT_RESULTATDERNIEREXAMEN_CONTENT_TYPE);
        assertThat(testDosier.getCituationfamiliale()).isEqualTo(DEFAULT_CITUATIONFAMILIALE);
    }

    @Test
    public void createDosierWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = dosierRepository.findAll().size();

        // Create the Dosier with an existing ID
        Dosier existingDosier = new Dosier();
        existingDosier.setId("existing_id");

        // An entity with an existing ID cannot be created, so this API call must fail
        restDosierMockMvc.perform(post("/api/dosiers")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(existingDosier)))
            .andExpect(status().isBadRequest());

        // Validate the Alice in the database
        List<Dosier> dosierList = dosierRepository.findAll();
        assertThat(dosierList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    public void getAllDosiers() throws Exception {
        // Initialize the database
        dosierRepository.save(dosier);

        // Get all the dosierList
        restDosierMockMvc.perform(get("/api/dosiers?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(dosier.getId())))
            .andExpect(jsonPath("$.[*].perscreptionsmedicamenteusesContentType").value(hasItem(DEFAULT_PERSCREPTIONSMEDICAMENTEUSES_CONTENT_TYPE)))
            .andExpect(jsonPath("$.[*].perscreptionsmedicamenteuses").value(hasItem(Base64Utils.encodeToString(DEFAULT_PERSCREPTIONSMEDICAMENTEUSES))))
            .andExpect(jsonPath("$.[*].nom").value(hasItem(DEFAULT_NOM.toString())))
            .andExpect(jsonPath("$.[*].numero").value(hasItem(DEFAULT_NUMERO)))
            .andExpect(jsonPath("$.[*].date").value(hasItem(DEFAULT_DATE.toString())))
            .andExpect(jsonPath("$.[*].antecedents").value(hasItem(DEFAULT_ANTECEDENTS.toString())))
            .andExpect(jsonPath("$.[*].groupesanguin").value(hasItem(DEFAULT_GROUPESANGUIN.toString())))
            .andExpect(jsonPath("$.[*].recommandationsContentType").value(hasItem(DEFAULT_RECOMMANDATIONS_CONTENT_TYPE)))
            .andExpect(jsonPath("$.[*].recommandations").value(hasItem(Base64Utils.encodeToString(DEFAULT_RECOMMANDATIONS))))
            .andExpect(jsonPath("$.[*].resultatdernierexamenContentType").value(hasItem(DEFAULT_RESULTATDERNIEREXAMEN_CONTENT_TYPE)))
            .andExpect(jsonPath("$.[*].resultatdernierexamen").value(hasItem(Base64Utils.encodeToString(DEFAULT_RESULTATDERNIEREXAMEN))))
            .andExpect(jsonPath("$.[*].cituationfamiliale").value(hasItem(DEFAULT_CITUATIONFAMILIALE.toString())));
    }

    @Test
    public void getDosier() throws Exception {
        // Initialize the database
        dosierRepository.save(dosier);

        // Get the dosier
        restDosierMockMvc.perform(get("/api/dosiers/{id}", dosier.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(dosier.getId()))
            .andExpect(jsonPath("$.perscreptionsmedicamenteusesContentType").value(DEFAULT_PERSCREPTIONSMEDICAMENTEUSES_CONTENT_TYPE))
            .andExpect(jsonPath("$.perscreptionsmedicamenteuses").value(Base64Utils.encodeToString(DEFAULT_PERSCREPTIONSMEDICAMENTEUSES)))
            .andExpect(jsonPath("$.nom").value(DEFAULT_NOM.toString()))
            .andExpect(jsonPath("$.numero").value(DEFAULT_NUMERO))
            .andExpect(jsonPath("$.date").value(DEFAULT_DATE.toString()))
            .andExpect(jsonPath("$.antecedents").value(DEFAULT_ANTECEDENTS.toString()))
            .andExpect(jsonPath("$.groupesanguin").value(DEFAULT_GROUPESANGUIN.toString()))
            .andExpect(jsonPath("$.recommandationsContentType").value(DEFAULT_RECOMMANDATIONS_CONTENT_TYPE))
            .andExpect(jsonPath("$.recommandations").value(Base64Utils.encodeToString(DEFAULT_RECOMMANDATIONS)))
            .andExpect(jsonPath("$.resultatdernierexamenContentType").value(DEFAULT_RESULTATDERNIEREXAMEN_CONTENT_TYPE))
            .andExpect(jsonPath("$.resultatdernierexamen").value(Base64Utils.encodeToString(DEFAULT_RESULTATDERNIEREXAMEN)))
            .andExpect(jsonPath("$.cituationfamiliale").value(DEFAULT_CITUATIONFAMILIALE.toString()));
    }

    @Test
    public void getNonExistingDosier() throws Exception {
        // Get the dosier
        restDosierMockMvc.perform(get("/api/dosiers/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    public void updateDosier() throws Exception {
        // Initialize the database
        dosierRepository.save(dosier);
        int databaseSizeBeforeUpdate = dosierRepository.findAll().size();

        // Update the dosier
        Dosier updatedDosier = dosierRepository.findOne(dosier.getId());
        updatedDosier
                .perscreptionsmedicamenteuses(UPDATED_PERSCREPTIONSMEDICAMENTEUSES)
                .perscreptionsmedicamenteusesContentType(UPDATED_PERSCREPTIONSMEDICAMENTEUSES_CONTENT_TYPE)
                .nom(UPDATED_NOM)
                .numero(UPDATED_NUMERO)
                .date(UPDATED_DATE)
                .antecedents(UPDATED_ANTECEDENTS)
                .groupesanguin(UPDATED_GROUPESANGUIN)
                .recommandations(UPDATED_RECOMMANDATIONS)
                .recommandationsContentType(UPDATED_RECOMMANDATIONS_CONTENT_TYPE)
                .resultatdernierexamen(UPDATED_RESULTATDERNIEREXAMEN)
                .resultatdernierexamenContentType(UPDATED_RESULTATDERNIEREXAMEN_CONTENT_TYPE)
                .cituationfamiliale(UPDATED_CITUATIONFAMILIALE);

        restDosierMockMvc.perform(put("/api/dosiers")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedDosier)))
            .andExpect(status().isOk());

        // Validate the Dosier in the database
        List<Dosier> dosierList = dosierRepository.findAll();
        assertThat(dosierList).hasSize(databaseSizeBeforeUpdate);
        Dosier testDosier = dosierList.get(dosierList.size() - 1);
        assertThat(testDosier.getPerscreptionsmedicamenteuses()).isEqualTo(UPDATED_PERSCREPTIONSMEDICAMENTEUSES);
        assertThat(testDosier.getPerscreptionsmedicamenteusesContentType()).isEqualTo(UPDATED_PERSCREPTIONSMEDICAMENTEUSES_CONTENT_TYPE);
        assertThat(testDosier.getNom()).isEqualTo(UPDATED_NOM);
        assertThat(testDosier.getNumero()).isEqualTo(UPDATED_NUMERO);
        assertThat(testDosier.getDate()).isEqualTo(UPDATED_DATE);
        assertThat(testDosier.getAntecedents()).isEqualTo(UPDATED_ANTECEDENTS);
        assertThat(testDosier.getGroupesanguin()).isEqualTo(UPDATED_GROUPESANGUIN);
        assertThat(testDosier.getRecommandations()).isEqualTo(UPDATED_RECOMMANDATIONS);
        assertThat(testDosier.getRecommandationsContentType()).isEqualTo(UPDATED_RECOMMANDATIONS_CONTENT_TYPE);
        assertThat(testDosier.getResultatdernierexamen()).isEqualTo(UPDATED_RESULTATDERNIEREXAMEN);
        assertThat(testDosier.getResultatdernierexamenContentType()).isEqualTo(UPDATED_RESULTATDERNIEREXAMEN_CONTENT_TYPE);
        assertThat(testDosier.getCituationfamiliale()).isEqualTo(UPDATED_CITUATIONFAMILIALE);
    }

    @Test
    public void updateNonExistingDosier() throws Exception {
        int databaseSizeBeforeUpdate = dosierRepository.findAll().size();

        // Create the Dosier

        // If the entity doesn't have an ID, it will be created instead of just being updated
        restDosierMockMvc.perform(put("/api/dosiers")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(dosier)))
            .andExpect(status().isCreated());

        // Validate the Dosier in the database
        List<Dosier> dosierList = dosierRepository.findAll();
        assertThat(dosierList).hasSize(databaseSizeBeforeUpdate + 1);
    }

    @Test
    public void deleteDosier() throws Exception {
        // Initialize the database
        dosierRepository.save(dosier);
        int databaseSizeBeforeDelete = dosierRepository.findAll().size();

        // Get the dosier
        restDosierMockMvc.perform(delete("/api/dosiers/{id}", dosier.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isOk());

        // Validate the database is empty
        List<Dosier> dosierList = dosierRepository.findAll();
        assertThat(dosierList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Dosier.class);
    }
}
