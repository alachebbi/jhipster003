package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.AvancementApp;

import com.mycompany.myapp.domain.DossierMedical;
import com.mycompany.myapp.repository.DossierMedicalRepository;

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
 * Test class for the DossierMedicalResource REST controller.
 *
 * @see DossierMedicalResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = AvancementApp.class)
public class DossierMedicalResourceIntTest {

    private static final String DEFAULT_PERSCREPTIONSMEDICAMENTEUSES = "AAAAAAAAAA";
    private static final String UPDATED_PERSCREPTIONSMEDICAMENTEUSES = "BBBBBBBBBB";

    private static final String DEFAULT_NOMDUPATIENT = "AAAAAAAAAA";
    private static final String UPDATED_NOMDUPATIENT = "BBBBBBBBBB";

    private static final Integer DEFAULT_NUMEROTEL = 1;
    private static final Integer UPDATED_NUMEROTEL = 2;

    private static final LocalDate DEFAULT_DATEDENAISSANCE = LocalDate.ofEpochDay(0L);
    private static final LocalDate UPDATED_DATEDENAISSANCE = LocalDate.now(ZoneId.systemDefault());

    private static final String DEFAULT_ANTECEDENTS = "AAAAAAAAAA";
    private static final String UPDATED_ANTECEDENTS = "BBBBBBBBBB";

    private static final String DEFAULT_ANT = "AAAAAAAAAA";
    private static final String UPDATED_ANT = "BBBBBBBBBB";

    private static final String DEFAULT_GROUPESSANGUIN = "AAAAAAAAAA";
    private static final String UPDATED_GROUPESSANGUIN = "BBBBBBBBBB";

    private static final String DEFAULT_RECOMMANDATIONS = "AAAAAAAAAA";
    private static final String UPDATED_RECOMMANDATIONS = "BBBBBBBBBB";

    private static final String DEFAULT_RESULTATDUDERNIEREXAMEN = "AAAAAAAAAA";
    private static final String UPDATED_RESULTATDUDERNIEREXAMEN = "BBBBBBBBBB";

    private static final byte[] DEFAULT_RESULTATDUDERNIEREXAMENN = TestUtil.createByteArray(1, "0");
    private static final byte[] UPDATED_RESULTATDUDERNIEREXAMENN = TestUtil.createByteArray(2, "1");
    private static final String DEFAULT_RESULTATDUDERNIEREXAMENN_CONTENT_TYPE = "image/jpg";
    private static final String UPDATED_RESULTATDUDERNIEREXAMENN_CONTENT_TYPE = "image/png";

    private static final String DEFAULT_SITUATIONFAMILIALE = "AAAAAAAAAA";
    private static final String UPDATED_SITUATIONFAMILIALE = "BBBBBBBBBB";

    private static final String DEFAULT_NOTESPARAMEDICAUX = "AAAAAAAAAA";
    private static final String UPDATED_NOTESPARAMEDICAUX = "BBBBBBBBBB";

    @Autowired
    private DossierMedicalRepository dossierMedicalRepository;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    private MockMvc restDossierMedicalMockMvc;

    private DossierMedical dossierMedical;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
            DossierMedicalResource dossierMedicalResource = new DossierMedicalResource(dossierMedicalRepository);
        this.restDossierMedicalMockMvc = MockMvcBuilders.standaloneSetup(dossierMedicalResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setMessageConverters(jacksonMessageConverter).build();
    }

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static DossierMedical createEntity() {
        DossierMedical dossierMedical = new DossierMedical()
                .perscreptionsmedicamenteuses(DEFAULT_PERSCREPTIONSMEDICAMENTEUSES)
                .nomdupatient(DEFAULT_NOMDUPATIENT)
                .numerotel(DEFAULT_NUMEROTEL)
                .datedenaissance(DEFAULT_DATEDENAISSANCE)
                .antecedents(DEFAULT_ANTECEDENTS)
                .ant(DEFAULT_ANT)
                .groupessanguin(DEFAULT_GROUPESSANGUIN)
                .recommandations(DEFAULT_RECOMMANDATIONS)
                .resultatdudernierexamen(DEFAULT_RESULTATDUDERNIEREXAMEN)
                .resultatdudernierexamenn(DEFAULT_RESULTATDUDERNIEREXAMENN)
                .resultatdudernierexamennContentType(DEFAULT_RESULTATDUDERNIEREXAMENN_CONTENT_TYPE)
                .situationfamiliale(DEFAULT_SITUATIONFAMILIALE)
                .notesparamedicaux(DEFAULT_NOTESPARAMEDICAUX);
        return dossierMedical;
    }

    @Before
    public void initTest() {
        dossierMedicalRepository.deleteAll();
        dossierMedical = createEntity();
    }

    @Test
    public void createDossierMedical() throws Exception {
        int databaseSizeBeforeCreate = dossierMedicalRepository.findAll().size();

        // Create the DossierMedical

        restDossierMedicalMockMvc.perform(post("/api/dossier-medicals")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(dossierMedical)))
            .andExpect(status().isCreated());

        // Validate the DossierMedical in the database
        List<DossierMedical> dossierMedicalList = dossierMedicalRepository.findAll();
        assertThat(dossierMedicalList).hasSize(databaseSizeBeforeCreate + 1);
        DossierMedical testDossierMedical = dossierMedicalList.get(dossierMedicalList.size() - 1);
        assertThat(testDossierMedical.getPerscreptionsmedicamenteuses()).isEqualTo(DEFAULT_PERSCREPTIONSMEDICAMENTEUSES);
        assertThat(testDossierMedical.getNomdupatient()).isEqualTo(DEFAULT_NOMDUPATIENT);
        assertThat(testDossierMedical.getNumerotel()).isEqualTo(DEFAULT_NUMEROTEL);
        assertThat(testDossierMedical.getDatedenaissance()).isEqualTo(DEFAULT_DATEDENAISSANCE);
        assertThat(testDossierMedical.getAntecedents()).isEqualTo(DEFAULT_ANTECEDENTS);
        assertThat(testDossierMedical.getAnt()).isEqualTo(DEFAULT_ANT);
        assertThat(testDossierMedical.getGroupessanguin()).isEqualTo(DEFAULT_GROUPESSANGUIN);
        assertThat(testDossierMedical.getRecommandations()).isEqualTo(DEFAULT_RECOMMANDATIONS);
        assertThat(testDossierMedical.getResultatdudernierexamen()).isEqualTo(DEFAULT_RESULTATDUDERNIEREXAMEN);
        assertThat(testDossierMedical.getResultatdudernierexamenn()).isEqualTo(DEFAULT_RESULTATDUDERNIEREXAMENN);
        assertThat(testDossierMedical.getResultatdudernierexamennContentType()).isEqualTo(DEFAULT_RESULTATDUDERNIEREXAMENN_CONTENT_TYPE);
        assertThat(testDossierMedical.getSituationfamiliale()).isEqualTo(DEFAULT_SITUATIONFAMILIALE);
        assertThat(testDossierMedical.getNotesparamedicaux()).isEqualTo(DEFAULT_NOTESPARAMEDICAUX);
    }

    @Test
    public void createDossierMedicalWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = dossierMedicalRepository.findAll().size();

        // Create the DossierMedical with an existing ID
        DossierMedical existingDossierMedical = new DossierMedical();
        existingDossierMedical.setId("existing_id");

        // An entity with an existing ID cannot be created, so this API call must fail
        restDossierMedicalMockMvc.perform(post("/api/dossier-medicals")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(existingDossierMedical)))
            .andExpect(status().isBadRequest());

        // Validate the Alice in the database
        List<DossierMedical> dossierMedicalList = dossierMedicalRepository.findAll();
        assertThat(dossierMedicalList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    public void getAllDossierMedicals() throws Exception {
        // Initialize the database
        dossierMedicalRepository.save(dossierMedical);

        // Get all the dossierMedicalList
        restDossierMedicalMockMvc.perform(get("/api/dossier-medicals?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(dossierMedical.getId())))
            .andExpect(jsonPath("$.[*].perscreptionsmedicamenteuses").value(hasItem(DEFAULT_PERSCREPTIONSMEDICAMENTEUSES.toString())))
            .andExpect(jsonPath("$.[*].nomdupatient").value(hasItem(DEFAULT_NOMDUPATIENT.toString())))
            .andExpect(jsonPath("$.[*].numerotel").value(hasItem(DEFAULT_NUMEROTEL)))
            .andExpect(jsonPath("$.[*].datedenaissance").value(hasItem(DEFAULT_DATEDENAISSANCE.toString())))
            .andExpect(jsonPath("$.[*].antecedents").value(hasItem(DEFAULT_ANTECEDENTS.toString())))
            .andExpect(jsonPath("$.[*].ant").value(hasItem(DEFAULT_ANT.toString())))
            .andExpect(jsonPath("$.[*].groupessanguin").value(hasItem(DEFAULT_GROUPESSANGUIN.toString())))
            .andExpect(jsonPath("$.[*].recommandations").value(hasItem(DEFAULT_RECOMMANDATIONS.toString())))
            .andExpect(jsonPath("$.[*].resultatdudernierexamen").value(hasItem(DEFAULT_RESULTATDUDERNIEREXAMEN.toString())))
            .andExpect(jsonPath("$.[*].resultatdudernierexamennContentType").value(hasItem(DEFAULT_RESULTATDUDERNIEREXAMENN_CONTENT_TYPE)))
            .andExpect(jsonPath("$.[*].resultatdudernierexamenn").value(hasItem(Base64Utils.encodeToString(DEFAULT_RESULTATDUDERNIEREXAMENN))))
            .andExpect(jsonPath("$.[*].situationfamiliale").value(hasItem(DEFAULT_SITUATIONFAMILIALE.toString())))
            .andExpect(jsonPath("$.[*].notesparamedicaux").value(hasItem(DEFAULT_NOTESPARAMEDICAUX.toString())));
    }

    @Test
    public void getDossierMedical() throws Exception {
        // Initialize the database
        dossierMedicalRepository.save(dossierMedical);

        // Get the dossierMedical
        restDossierMedicalMockMvc.perform(get("/api/dossier-medicals/{id}", dossierMedical.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(dossierMedical.getId()))
            .andExpect(jsonPath("$.perscreptionsmedicamenteuses").value(DEFAULT_PERSCREPTIONSMEDICAMENTEUSES.toString()))
            .andExpect(jsonPath("$.nomdupatient").value(DEFAULT_NOMDUPATIENT.toString()))
            .andExpect(jsonPath("$.numerotel").value(DEFAULT_NUMEROTEL))
            .andExpect(jsonPath("$.datedenaissance").value(DEFAULT_DATEDENAISSANCE.toString()))
            .andExpect(jsonPath("$.antecedents").value(DEFAULT_ANTECEDENTS.toString()))
            .andExpect(jsonPath("$.ant").value(DEFAULT_ANT.toString()))
            .andExpect(jsonPath("$.groupessanguin").value(DEFAULT_GROUPESSANGUIN.toString()))
            .andExpect(jsonPath("$.recommandations").value(DEFAULT_RECOMMANDATIONS.toString()))
            .andExpect(jsonPath("$.resultatdudernierexamen").value(DEFAULT_RESULTATDUDERNIEREXAMEN.toString()))
            .andExpect(jsonPath("$.resultatdudernierexamennContentType").value(DEFAULT_RESULTATDUDERNIEREXAMENN_CONTENT_TYPE))
            .andExpect(jsonPath("$.resultatdudernierexamenn").value(Base64Utils.encodeToString(DEFAULT_RESULTATDUDERNIEREXAMENN)))
            .andExpect(jsonPath("$.situationfamiliale").value(DEFAULT_SITUATIONFAMILIALE.toString()))
            .andExpect(jsonPath("$.notesparamedicaux").value(DEFAULT_NOTESPARAMEDICAUX.toString()));
    }

    @Test
    public void getNonExistingDossierMedical() throws Exception {
        // Get the dossierMedical
        restDossierMedicalMockMvc.perform(get("/api/dossier-medicals/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    public void updateDossierMedical() throws Exception {
        // Initialize the database
        dossierMedicalRepository.save(dossierMedical);
        int databaseSizeBeforeUpdate = dossierMedicalRepository.findAll().size();

        // Update the dossierMedical
        DossierMedical updatedDossierMedical = dossierMedicalRepository.findOne(dossierMedical.getId());
        updatedDossierMedical
                .perscreptionsmedicamenteuses(UPDATED_PERSCREPTIONSMEDICAMENTEUSES)
                .nomdupatient(UPDATED_NOMDUPATIENT)
                .numerotel(UPDATED_NUMEROTEL)
                .datedenaissance(UPDATED_DATEDENAISSANCE)
                .antecedents(UPDATED_ANTECEDENTS)
                .ant(UPDATED_ANT)
                .groupessanguin(UPDATED_GROUPESSANGUIN)
                .recommandations(UPDATED_RECOMMANDATIONS)
                .resultatdudernierexamen(UPDATED_RESULTATDUDERNIEREXAMEN)
                .resultatdudernierexamenn(UPDATED_RESULTATDUDERNIEREXAMENN)
                .resultatdudernierexamennContentType(UPDATED_RESULTATDUDERNIEREXAMENN_CONTENT_TYPE)
                .situationfamiliale(UPDATED_SITUATIONFAMILIALE)
                .notesparamedicaux(UPDATED_NOTESPARAMEDICAUX);

        restDossierMedicalMockMvc.perform(put("/api/dossier-medicals")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedDossierMedical)))
            .andExpect(status().isOk());

        // Validate the DossierMedical in the database
        List<DossierMedical> dossierMedicalList = dossierMedicalRepository.findAll();
        assertThat(dossierMedicalList).hasSize(databaseSizeBeforeUpdate);
        DossierMedical testDossierMedical = dossierMedicalList.get(dossierMedicalList.size() - 1);
        assertThat(testDossierMedical.getPerscreptionsmedicamenteuses()).isEqualTo(UPDATED_PERSCREPTIONSMEDICAMENTEUSES);
        assertThat(testDossierMedical.getNomdupatient()).isEqualTo(UPDATED_NOMDUPATIENT);
        assertThat(testDossierMedical.getNumerotel()).isEqualTo(UPDATED_NUMEROTEL);
        assertThat(testDossierMedical.getDatedenaissance()).isEqualTo(UPDATED_DATEDENAISSANCE);
        assertThat(testDossierMedical.getAntecedents()).isEqualTo(UPDATED_ANTECEDENTS);
        assertThat(testDossierMedical.getAnt()).isEqualTo(UPDATED_ANT);
        assertThat(testDossierMedical.getGroupessanguin()).isEqualTo(UPDATED_GROUPESSANGUIN);
        assertThat(testDossierMedical.getRecommandations()).isEqualTo(UPDATED_RECOMMANDATIONS);
        assertThat(testDossierMedical.getResultatdudernierexamen()).isEqualTo(UPDATED_RESULTATDUDERNIEREXAMEN);
        assertThat(testDossierMedical.getResultatdudernierexamenn()).isEqualTo(UPDATED_RESULTATDUDERNIEREXAMENN);
        assertThat(testDossierMedical.getResultatdudernierexamennContentType()).isEqualTo(UPDATED_RESULTATDUDERNIEREXAMENN_CONTENT_TYPE);
        assertThat(testDossierMedical.getSituationfamiliale()).isEqualTo(UPDATED_SITUATIONFAMILIALE);
        assertThat(testDossierMedical.getNotesparamedicaux()).isEqualTo(UPDATED_NOTESPARAMEDICAUX);
    }

    @Test
    public void updateNonExistingDossierMedical() throws Exception {
        int databaseSizeBeforeUpdate = dossierMedicalRepository.findAll().size();

        // Create the DossierMedical

        // If the entity doesn't have an ID, it will be created instead of just being updated
        restDossierMedicalMockMvc.perform(put("/api/dossier-medicals")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(dossierMedical)))
            .andExpect(status().isCreated());

        // Validate the DossierMedical in the database
        List<DossierMedical> dossierMedicalList = dossierMedicalRepository.findAll();
        assertThat(dossierMedicalList).hasSize(databaseSizeBeforeUpdate + 1);
    }

    @Test
    public void deleteDossierMedical() throws Exception {
        // Initialize the database
        dossierMedicalRepository.save(dossierMedical);
        int databaseSizeBeforeDelete = dossierMedicalRepository.findAll().size();

        // Get the dossierMedical
        restDossierMedicalMockMvc.perform(delete("/api/dossier-medicals/{id}", dossierMedical.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isOk());

        // Validate the database is empty
        List<DossierMedical> dossierMedicalList = dossierMedicalRepository.findAll();
        assertThat(dossierMedicalList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(DossierMedical.class);
    }
}
