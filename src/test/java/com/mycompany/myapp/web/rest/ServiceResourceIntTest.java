package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.AvancementApp;

import com.mycompany.myapp.domain.Service;
import com.mycompany.myapp.repository.ServiceRepository;

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
 * Test class for the ServiceResource REST controller.
 *
 * @see ServiceResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = AvancementApp.class)
public class ServiceResourceIntTest {

    private static final String DEFAULT_NOM = "AAAAAAAAAA";
    private static final String UPDATED_NOM = "BBBBBBBBBB";

    private static final String DEFAULT_CHEF = "AAAAAAAAAA";
    private static final String UPDATED_CHEF = "BBBBBBBBBB";

    private static final String DEFAULT_MEDICAMENTS = "AAAAAAAAAA";
    private static final String UPDATED_MEDICAMENTS = "BBBBBBBBBB";

    private static final String DEFAULT_MATERIEL = "AAAAAAAAAA";
    private static final String UPDATED_MATERIEL = "BBBBBBBBBB";

    @Autowired
    private ServiceRepository serviceRepository;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    private MockMvc restServiceMockMvc;

    private Service service;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
            ServiceResource serviceResource = new ServiceResource(serviceRepository);
        this.restServiceMockMvc = MockMvcBuilders.standaloneSetup(serviceResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setMessageConverters(jacksonMessageConverter).build();
    }

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Service createEntity() {
        Service service = new Service()
                .nom(DEFAULT_NOM)
                .chef(DEFAULT_CHEF)
                .medicaments(DEFAULT_MEDICAMENTS)
                .materiel(DEFAULT_MATERIEL);
        return service;
    }

    @Before
    public void initTest() {
        serviceRepository.deleteAll();
        service = createEntity();
    }

    @Test
    public void createService() throws Exception {
        int databaseSizeBeforeCreate = serviceRepository.findAll().size();

        // Create the Service

        restServiceMockMvc.perform(post("/api/services")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(service)))
            .andExpect(status().isCreated());

        // Validate the Service in the database
        List<Service> serviceList = serviceRepository.findAll();
        assertThat(serviceList).hasSize(databaseSizeBeforeCreate + 1);
        Service testService = serviceList.get(serviceList.size() - 1);
        assertThat(testService.getNom()).isEqualTo(DEFAULT_NOM);
        assertThat(testService.getChef()).isEqualTo(DEFAULT_CHEF);
        assertThat(testService.getMedicaments()).isEqualTo(DEFAULT_MEDICAMENTS);
        assertThat(testService.getMateriel()).isEqualTo(DEFAULT_MATERIEL);
    }

    @Test
    public void createServiceWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = serviceRepository.findAll().size();

        // Create the Service with an existing ID
        Service existingService = new Service();
        existingService.setId("existing_id");

        // An entity with an existing ID cannot be created, so this API call must fail
        restServiceMockMvc.perform(post("/api/services")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(existingService)))
            .andExpect(status().isBadRequest());

        // Validate the Alice in the database
        List<Service> serviceList = serviceRepository.findAll();
        assertThat(serviceList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    public void getAllServices() throws Exception {
        // Initialize the database
        serviceRepository.save(service);

        // Get all the serviceList
        restServiceMockMvc.perform(get("/api/services?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(service.getId())))
            .andExpect(jsonPath("$.[*].nom").value(hasItem(DEFAULT_NOM.toString())))
            .andExpect(jsonPath("$.[*].chef").value(hasItem(DEFAULT_CHEF.toString())))
            .andExpect(jsonPath("$.[*].medicaments").value(hasItem(DEFAULT_MEDICAMENTS.toString())))
            .andExpect(jsonPath("$.[*].materiel").value(hasItem(DEFAULT_MATERIEL.toString())));
    }

    @Test
    public void getService() throws Exception {
        // Initialize the database
        serviceRepository.save(service);

        // Get the service
        restServiceMockMvc.perform(get("/api/services/{id}", service.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(service.getId()))
            .andExpect(jsonPath("$.nom").value(DEFAULT_NOM.toString()))
            .andExpect(jsonPath("$.chef").value(DEFAULT_CHEF.toString()))
            .andExpect(jsonPath("$.medicaments").value(DEFAULT_MEDICAMENTS.toString()))
            .andExpect(jsonPath("$.materiel").value(DEFAULT_MATERIEL.toString()));
    }

    @Test
    public void getNonExistingService() throws Exception {
        // Get the service
        restServiceMockMvc.perform(get("/api/services/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    public void updateService() throws Exception {
        // Initialize the database
        serviceRepository.save(service);
        int databaseSizeBeforeUpdate = serviceRepository.findAll().size();

        // Update the service
        Service updatedService = serviceRepository.findOne(service.getId());
        updatedService
                .nom(UPDATED_NOM)
                .chef(UPDATED_CHEF)
                .medicaments(UPDATED_MEDICAMENTS)
                .materiel(UPDATED_MATERIEL);

        restServiceMockMvc.perform(put("/api/services")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedService)))
            .andExpect(status().isOk());

        // Validate the Service in the database
        List<Service> serviceList = serviceRepository.findAll();
        assertThat(serviceList).hasSize(databaseSizeBeforeUpdate);
        Service testService = serviceList.get(serviceList.size() - 1);
        assertThat(testService.getNom()).isEqualTo(UPDATED_NOM);
        assertThat(testService.getChef()).isEqualTo(UPDATED_CHEF);
        assertThat(testService.getMedicaments()).isEqualTo(UPDATED_MEDICAMENTS);
        assertThat(testService.getMateriel()).isEqualTo(UPDATED_MATERIEL);
    }

    @Test
    public void updateNonExistingService() throws Exception {
        int databaseSizeBeforeUpdate = serviceRepository.findAll().size();

        // Create the Service

        // If the entity doesn't have an ID, it will be created instead of just being updated
        restServiceMockMvc.perform(put("/api/services")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(service)))
            .andExpect(status().isCreated());

        // Validate the Service in the database
        List<Service> serviceList = serviceRepository.findAll();
        assertThat(serviceList).hasSize(databaseSizeBeforeUpdate + 1);
    }

    @Test
    public void deleteService() throws Exception {
        // Initialize the database
        serviceRepository.save(service);
        int databaseSizeBeforeDelete = serviceRepository.findAll().size();

        // Get the service
        restServiceMockMvc.perform(delete("/api/services/{id}", service.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isOk());

        // Validate the database is empty
        List<Service> serviceList = serviceRepository.findAll();
        assertThat(serviceList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Service.class);
    }
}
