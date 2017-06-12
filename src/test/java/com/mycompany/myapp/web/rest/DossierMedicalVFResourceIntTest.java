package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.AvancementApp;

import com.mycompany.myapp.domain.DossierMedicalVF;
import com.mycompany.myapp.repository.DossierMedicalVFRepository;

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
 * Test class for the DossierMedicalVFResource REST controller.
 *
 * @see DossierMedicalVFResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = AvancementApp.class)
public class DossierMedicalVFResourceIntTest {

    private static final String DEFAULT_NOMPRENOM = "AAAAAAAAAA";
    private static final String UPDATED_NOMPRENOM = "BBBBBBBBBB";

    private static final LocalDate DEFAULT_DATENAISSANCE = LocalDate.ofEpochDay(0L);
    private static final LocalDate UPDATED_DATENAISSANCE = LocalDate.now(ZoneId.systemDefault());

    private static final String DEFAULT_SITUATIONFAMILIALE = "AAAAAAAAAA";
    private static final String UPDATED_SITUATIONFAMILIALE = "BBBBBBBBBB";

    private static final Integer DEFAULT_NUMEROTEL = 8;
    private static final Integer UPDATED_NUMEROTEL = 9;

    private static final String DEFAULT_GROUPESANGUIN = "AAAAAAAAAA";
    private static final String UPDATED_GROUPESANGUIN = "BBBBBBBBBB";

    private static final byte[] DEFAULT_ANTECEDENTS = TestUtil.createByteArray(1, "0");
    private static final byte[] UPDATED_ANTECEDENTS = TestUtil.createByteArray(2, "1");
    private static final String DEFAULT_ANTECEDENTS_CONTENT_TYPE = "image/jpg";
    private static final String UPDATED_ANTECEDENTS_CONTENT_TYPE = "image/png";

    private static final String DEFAULT_PERSCRIPTIONSMEDICAMENTEUSES = "AAAAAAAAAA";
    private static final String UPDATED_PERSCRIPTIONSMEDICAMENTEUSES = "BBBBBBBBBB";

    private static final String DEFAULT_RECOMMANDATIONS = "AAAAAAAAAA";
    private static final String UPDATED_RECOMMANDATIONS = "BBBBBBBBBB";

    private static final byte[] DEFAULT_RESULTATDERNIEREXAMEN = TestUtil.createByteArray(1, "0");
    private static final byte[] UPDATED_RESULTATDERNIEREXAMEN = TestUtil.createByteArray(2, "1");
    private static final String DEFAULT_RESULTATDERNIEREXAMEN_CONTENT_TYPE = "image/jpg";
    private static final String UPDATED_RESULTATDERNIEREXAMEN_CONTENT_TYPE = "image/png";

    private static final String DEFAULT_NOTESPARAMEDICAUX = "AAAAAAAAAA";
    private static final String UPDATED_NOTESPARAMEDICAUX = "BBBBBBBBBB";

    private static final String DEFAULT_MEDECINTRAITANT = "AAAAAAAAAA";
    private static final String UPDATED_MEDECINTRAITANT = "BBBBBBBBBB";

    @Autowired
    private DossierMedicalVFRepository dossierMedicalVFRepository;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    private MockMvc restDossierMedicalVFMockMvc;

    private DossierMedicalVF dossierMedicalVF;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
            DossierMedicalVFResource dossierMedicalVFResource = new DossierMedicalVFResource(dossierMedicalVFRepository);
        this.restDossierMedicalVFMockMvc = MockMvcBuilders.standaloneSetup(dossierMedicalVFResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setMessageConverters(jacksonMessageConverter).build();
    }

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static DossierMedicalVF createEntity() {
        DossierMedicalVF dossierMedicalVF = new DossierMedicalVF()
                .nomprenom(DEFAULT_NOMPRENOM)
                .datenaissance(DEFAULT_DATENAISSANCE)
                .situationfamiliale(DEFAULT_SITUATIONFAMILIALE)
                .numerotel(DEFAULT_NUMEROTEL)
                .groupesanguin(DEFAULT_GROUPESANGUIN)
                .antecedents(DEFAULT_ANTECEDENTS)
                .antecedentsContentType(DEFAULT_ANTECEDENTS_CONTENT_TYPE)
                .perscriptionsmedicamenteuses(DEFAULT_PERSCRIPTIONSMEDICAMENTEUSES)
                .recommandations(DEFAULT_RECOMMANDATIONS)
                .resultatdernierexamen(DEFAULT_RESULTATDERNIEREXAMEN)
                .resultatdernierexamenContentType(DEFAULT_RESULTATDERNIEREXAMEN_CONTENT_TYPE)
                .notesparamedicaux(DEFAULT_NOTESPARAMEDICAUX)
                .medecintraitant(DEFAULT_MEDECINTRAITANT);
        return dossierMedicalVF;
    }

    @Before
    public void initTest() {
        dossierMedicalVFRepository.deleteAll();
        dossierMedicalVF = createEntity();
    }

    @Test
    public void createDossierMedicalVF() throws Exception {
        int databaseSizeBeforeCreate = dossierMedicalVFRepository.findAll().size();

        // Create the DossierMedicalVF

        restDossierMedicalVFMockMvc.perform(post("/api/dossier-medical-vfs")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(dossierMedicalVF)))
            .andExpect(status().isCreated());

        // Validate the DossierMedicalVF in the database
        List<DossierMedicalVF> dossierMedicalVFList = dossierMedicalVFRepository.findAll();
        assertThat(dossierMedicalVFList).hasSize(databaseSizeBeforeCreate + 1);
        DossierMedicalVF testDossierMedicalVF = dossierMedicalVFList.get(dossierMedicalVFList.size() - 1);
        assertThat(testDossierMedicalVF.getNomprenom()).isEqualTo(DEFAULT_NOMPRENOM);
        assertThat(testDossierMedicalVF.getDatenaissance()).isEqualTo(DEFAULT_DATENAISSANCE);
        assertThat(testDossierMedicalVF.getSituationfamiliale()).isEqualTo(DEFAULT_SITUATIONFAMILIALE);
        assertThat(testDossierMedicalVF.getNumerotel()).isEqualTo(DEFAULT_NUMEROTEL);
        assertThat(testDossierMedicalVF.getGroupesanguin()).isEqualTo(DEFAULT_GROUPESANGUIN);
        assertThat(testDossierMedicalVF.getAntecedents()).isEqualTo(DEFAULT_ANTECEDENTS);
        assertThat(testDossierMedicalVF.getAntecedentsContentType()).isEqualTo(DEFAULT_ANTECEDENTS_CONTENT_TYPE);
        assertThat(testDossierMedicalVF.getPerscriptionsmedicamenteuses()).isEqualTo(DEFAULT_PERSCRIPTIONSMEDICAMENTEUSES);
        assertThat(testDossierMedicalVF.getRecommandations()).isEqualTo(DEFAULT_RECOMMANDATIONS);
        assertThat(testDossierMedicalVF.getResultatdernierexamen()).isEqualTo(DEFAULT_RESULTATDERNIEREXAMEN);
        assertThat(testDossierMedicalVF.getResultatdernierexamenContentType()).isEqualTo(DEFAULT_RESULTATDERNIEREXAMEN_CONTENT_TYPE);
        assertThat(testDossierMedicalVF.getNotesparamedicaux()).isEqualTo(DEFAULT_NOTESPARAMEDICAUX);
        assertThat(testDossierMedicalVF.getMedecintraitant()).isEqualTo(DEFAULT_MEDECINTRAITANT);
    }

    @Test
    public void createDossierMedicalVFWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = dossierMedicalVFRepository.findAll().size();

        // Create the DossierMedicalVF with an existing ID
        DossierMedicalVF existingDossierMedicalVF = new DossierMedicalVF();
        existingDossierMedicalVF.setId("existing_id");

        // An entity with an existing ID cannot be created, so this API call must fail
        restDossierMedicalVFMockMvc.perform(post("/api/dossier-medical-vfs")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(existingDossierMedicalVF)))
            .andExpect(status().isBadRequest());

        // Validate the Alice in the database
        List<DossierMedicalVF> dossierMedicalVFList = dossierMedicalVFRepository.findAll();
        assertThat(dossierMedicalVFList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    public void checkDatenaissanceIsRequired() throws Exception {
        int databaseSizeBeforeTest = dossierMedicalVFRepository.findAll().size();
        // set the field null
        dossierMedicalVF.setDatenaissance(null);

        // Create the DossierMedicalVF, which fails.

        restDossierMedicalVFMockMvc.perform(post("/api/dossier-medical-vfs")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(dossierMedicalVF)))
            .andExpect(status().isBadRequest());

        List<DossierMedicalVF> dossierMedicalVFList = dossierMedicalVFRepository.findAll();
        assertThat(dossierMedicalVFList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    public void checkAntecedentsIsRequired() throws Exception {
        int databaseSizeBeforeTest = dossierMedicalVFRepository.findAll().size();
        // set the field null
        dossierMedicalVF.setAntecedents(null);

        // Create the DossierMedicalVF, which fails.

        restDossierMedicalVFMockMvc.perform(post("/api/dossier-medical-vfs")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(dossierMedicalVF)))
            .andExpect(status().isBadRequest());

        List<DossierMedicalVF> dossierMedicalVFList = dossierMedicalVFRepository.findAll();
        assertThat(dossierMedicalVFList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    public void getAllDossierMedicalVFS() throws Exception {
        // Initialize the database
        dossierMedicalVFRepository.save(dossierMedicalVF);

        // Get all the dossierMedicalVFList
        restDossierMedicalVFMockMvc.perform(get("/api/dossier-medical-vfs?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(dossierMedicalVF.getId())))
            .andExpect(jsonPath("$.[*].nomprenom").value(hasItem(DEFAULT_NOMPRENOM.toString())))
            .andExpect(jsonPath("$.[*].datenaissance").value(hasItem(DEFAULT_DATENAISSANCE.toString())))
            .andExpect(jsonPath("$.[*].situationfamiliale").value(hasItem(DEFAULT_SITUATIONFAMILIALE.toString())))
            .andExpect(jsonPath("$.[*].numerotel").value(hasItem(DEFAULT_NUMEROTEL)))
            .andExpect(jsonPath("$.[*].groupesanguin").value(hasItem(DEFAULT_GROUPESANGUIN.toString())))
            .andExpect(jsonPath("$.[*].antecedentsContentType").value(hasItem(DEFAULT_ANTECEDENTS_CONTENT_TYPE)))
            .andExpect(jsonPath("$.[*].antecedents").value(hasItem(Base64Utils.encodeToString(DEFAULT_ANTECEDENTS))))
            .andExpect(jsonPath("$.[*].perscriptionsmedicamenteuses").value(hasItem(DEFAULT_PERSCRIPTIONSMEDICAMENTEUSES.toString())))
            .andExpect(jsonPath("$.[*].recommandations").value(hasItem(DEFAULT_RECOMMANDATIONS.toString())))
            .andExpect(jsonPath("$.[*].resultatdernierexamenContentType").value(hasItem(DEFAULT_RESULTATDERNIEREXAMEN_CONTENT_TYPE)))
            .andExpect(jsonPath("$.[*].resultatdernierexamen").value(hasItem(Base64Utils.encodeToString(DEFAULT_RESULTATDERNIEREXAMEN))))
            .andExpect(jsonPath("$.[*].notesparamedicaux").value(hasItem(DEFAULT_NOTESPARAMEDICAUX.toString())))
            .andExpect(jsonPath("$.[*].medecintraitant").value(hasItem(DEFAULT_MEDECINTRAITANT.toString())));
    }

    @Test
    public void getDossierMedicalVF() throws Exception {
        // Initialize the database
        dossierMedicalVFRepository.save(dossierMedicalVF);

        // Get the dossierMedicalVF
        restDossierMedicalVFMockMvc.perform(get("/api/dossier-medical-vfs/{id}", dossierMedicalVF.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(dossierMedicalVF.getId()))
            .andExpect(jsonPath("$.nomprenom").value(DEFAULT_NOMPRENOM.toString()))
            .andExpect(jsonPath("$.datenaissance").value(DEFAULT_DATENAISSANCE.toString()))
            .andExpect(jsonPath("$.situationfamiliale").value(DEFAULT_SITUATIONFAMILIALE.toString()))
            .andExpect(jsonPath("$.numerotel").value(DEFAULT_NUMEROTEL))
            .andExpect(jsonPath("$.groupesanguin").value(DEFAULT_GROUPESANGUIN.toString()))
            .andExpect(jsonPath("$.antecedentsContentType").value(DEFAULT_ANTECEDENTS_CONTENT_TYPE))
            .andExpect(jsonPath("$.antecedents").value(Base64Utils.encodeToString(DEFAULT_ANTECEDENTS)))
            .andExpect(jsonPath("$.perscriptionsmedicamenteuses").value(DEFAULT_PERSCRIPTIONSMEDICAMENTEUSES.toString()))
            .andExpect(jsonPath("$.recommandations").value(DEFAULT_RECOMMANDATIONS.toString()))
            .andExpect(jsonPath("$.resultatdernierexamenContentType").value(DEFAULT_RESULTATDERNIEREXAMEN_CONTENT_TYPE))
            .andExpect(jsonPath("$.resultatdernierexamen").value(Base64Utils.encodeToString(DEFAULT_RESULTATDERNIEREXAMEN)))
            .andExpect(jsonPath("$.notesparamedicaux").value(DEFAULT_NOTESPARAMEDICAUX.toString()))
            .andExpect(jsonPath("$.medecintraitant").value(DEFAULT_MEDECINTRAITANT.toString()));
    }

    @Test
    public void getNonExistingDossierMedicalVF() throws Exception {
        // Get the dossierMedicalVF
        restDossierMedicalVFMockMvc.perform(get("/api/dossier-medical-vfs/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    public void updateDossierMedicalVF() throws Exception {
        // Initialize the database
        dossierMedicalVFRepository.save(dossierMedicalVF);
        int databaseSizeBeforeUpdate = dossierMedicalVFRepository.findAll().size();

        // Update the dossierMedicalVF
        DossierMedicalVF updatedDossierMedicalVF = dossierMedicalVFRepository.findOne(dossierMedicalVF.getId());
        updatedDossierMedicalVF
                .nomprenom(UPDATED_NOMPRENOM)
                .datenaissance(UPDATED_DATENAISSANCE)
                .situationfamiliale(UPDATED_SITUATIONFAMILIALE)
                .numerotel(UPDATED_NUMEROTEL)
                .groupesanguin(UPDATED_GROUPESANGUIN)
                .antecedents(UPDATED_ANTECEDENTS)
                .antecedentsContentType(UPDATED_ANTECEDENTS_CONTENT_TYPE)
                .perscriptionsmedicamenteuses(UPDATED_PERSCRIPTIONSMEDICAMENTEUSES)
                .recommandations(UPDATED_RECOMMANDATIONS)
                .resultatdernierexamen(UPDATED_RESULTATDERNIEREXAMEN)
                .resultatdernierexamenContentType(UPDATED_RESULTATDERNIEREXAMEN_CONTENT_TYPE)
                .notesparamedicaux(UPDATED_NOTESPARAMEDICAUX)
                .medecintraitant(UPDATED_MEDECINTRAITANT);

        restDossierMedicalVFMockMvc.perform(put("/api/dossier-medical-vfs")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedDossierMedicalVF)))
            .andExpect(status().isOk());

        // Validate the DossierMedicalVF in the database
        List<DossierMedicalVF> dossierMedicalVFList = dossierMedicalVFRepository.findAll();
        assertThat(dossierMedicalVFList).hasSize(databaseSizeBeforeUpdate);
        DossierMedicalVF testDossierMedicalVF = dossierMedicalVFList.get(dossierMedicalVFList.size() - 1);
        assertThat(testDossierMedicalVF.getNomprenom()).isEqualTo(UPDATED_NOMPRENOM);
        assertThat(testDossierMedicalVF.getDatenaissance()).isEqualTo(UPDATED_DATENAISSANCE);
        assertThat(testDossierMedicalVF.getSituationfamiliale()).isEqualTo(UPDATED_SITUATIONFAMILIALE);
        assertThat(testDossierMedicalVF.getNumerotel()).isEqualTo(UPDATED_NUMEROTEL);
        assertThat(testDossierMedicalVF.getGroupesanguin()).isEqualTo(UPDATED_GROUPESANGUIN);
        assertThat(testDossierMedicalVF.getAntecedents()).isEqualTo(UPDATED_ANTECEDENTS);
        assertThat(testDossierMedicalVF.getAntecedentsContentType()).isEqualTo(UPDATED_ANTECEDENTS_CONTENT_TYPE);
        assertThat(testDossierMedicalVF.getPerscriptionsmedicamenteuses()).isEqualTo(UPDATED_PERSCRIPTIONSMEDICAMENTEUSES);
        assertThat(testDossierMedicalVF.getRecommandations()).isEqualTo(UPDATED_RECOMMANDATIONS);
        assertThat(testDossierMedicalVF.getResultatdernierexamen()).isEqualTo(UPDATED_RESULTATDERNIEREXAMEN);
        assertThat(testDossierMedicalVF.getResultatdernierexamenContentType()).isEqualTo(UPDATED_RESULTATDERNIEREXAMEN_CONTENT_TYPE);
        assertThat(testDossierMedicalVF.getNotesparamedicaux()).isEqualTo(UPDATED_NOTESPARAMEDICAUX);
        assertThat(testDossierMedicalVF.getMedecintraitant()).isEqualTo(UPDATED_MEDECINTRAITANT);
    }

    @Test
    public void updateNonExistingDossierMedicalVF() throws Exception {
        int databaseSizeBeforeUpdate = dossierMedicalVFRepository.findAll().size();

        // Create the DossierMedicalVF

        // If the entity doesn't have an ID, it will be created instead of just being updated
        restDossierMedicalVFMockMvc.perform(put("/api/dossier-medical-vfs")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(dossierMedicalVF)))
            .andExpect(status().isCreated());

        // Validate the DossierMedicalVF in the database
        List<DossierMedicalVF> dossierMedicalVFList = dossierMedicalVFRepository.findAll();
        assertThat(dossierMedicalVFList).hasSize(databaseSizeBeforeUpdate + 1);
    }

    @Test
    public void deleteDossierMedicalVF() throws Exception {
        // Initialize the database
        dossierMedicalVFRepository.save(dossierMedicalVF);
        int databaseSizeBeforeDelete = dossierMedicalVFRepository.findAll().size();

        // Get the dossierMedicalVF
        restDossierMedicalVFMockMvc.perform(delete("/api/dossier-medical-vfs/{id}", dossierMedicalVF.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isOk());

        // Validate the database is empty
        List<DossierMedicalVF> dossierMedicalVFList = dossierMedicalVFRepository.findAll();
        assertThat(dossierMedicalVFList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(DossierMedicalVF.class);
    }
}
