package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.AvancementApp;

import com.mycompany.myapp.domain.Article;
import com.mycompany.myapp.repository.ArticleRepository;
import com.mycompany.myapp.service.ArticleService;

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
 * Test class for the ArticleResource REST controller.
 *
 * @see ArticleResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = AvancementApp.class)
public class ArticleResourceIntTest {

    private static final String DEFAULT_TITRE = "AAAAAAAAAA";
    private static final String UPDATED_TITRE = "BBBBBBBBBB";

    private static final String DEFAULT_TEXT = "AAAAAAAAAA";
    private static final String UPDATED_TEXT = "BBBBBBBBBB";

    private static final String DEFAULT_UTILISATEUR = "AAAAAAAAAA";
    private static final String UPDATED_UTILISATEUR = "BBBBBBBBBB";

    private static final Integer DEFAULT_VOTE = 0;
    private static final Integer UPDATED_VOTE = 1;

    private static final LocalDate DEFAULT_DATE = LocalDate.ofEpochDay(0L);
    private static final LocalDate UPDATED_DATE = LocalDate.now(ZoneId.systemDefault());

    private static final byte[] DEFAULT_DOC = TestUtil.createByteArray(1, "0");
    private static final byte[] UPDATED_DOC = TestUtil.createByteArray(2, "1");
    private static final String DEFAULT_DOC_CONTENT_TYPE = "image/jpg";
    private static final String UPDATED_DOC_CONTENT_TYPE = "image/png";

    private static final Boolean DEFAULT_ISPUSHED = false;
    private static final Boolean UPDATED_ISPUSHED = true;

    @Autowired
    private ArticleRepository articleRepository;

    @Autowired
    private ArticleService articleService;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    private MockMvc restArticleMockMvc;

    private Article article;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
        ArticleResource articleResource = new ArticleResource(articleService);
        this.restArticleMockMvc = MockMvcBuilders.standaloneSetup(articleResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setMessageConverters(jacksonMessageConverter).build();
    }

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Article createEntity() {
        Article article = new Article()
                .titre(DEFAULT_TITRE)
                .text(DEFAULT_TEXT)
                .utilisateur(DEFAULT_UTILISATEUR)
                .vote(DEFAULT_VOTE)
                .date(DEFAULT_DATE)
                .doc(DEFAULT_DOC)
                .docContentType(DEFAULT_DOC_CONTENT_TYPE)
                .ispushed(DEFAULT_ISPUSHED);
        return article;
    }

    @Before
    public void initTest() {
        articleRepository.deleteAll();
        article = createEntity();
    }

    @Test
    public void createArticle() throws Exception {
        int databaseSizeBeforeCreate = articleRepository.findAll().size();

        // Create the Article

        restArticleMockMvc.perform(post("/api/articles")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(article)))
            .andExpect(status().isCreated());

        // Validate the Article in the database
        List<Article> articleList = articleRepository.findAll();
        assertThat(articleList).hasSize(databaseSizeBeforeCreate + 1);
        Article testArticle = articleList.get(articleList.size() - 1);
        assertThat(testArticle.getTitre()).isEqualTo(DEFAULT_TITRE);
        assertThat(testArticle.getText()).isEqualTo(DEFAULT_TEXT);
        assertThat(testArticle.getUtilisateur()).isEqualTo(DEFAULT_UTILISATEUR);
        assertThat(testArticle.getVote()).isEqualTo(DEFAULT_VOTE);
        assertThat(testArticle.getDate()).isEqualTo(DEFAULT_DATE);
        assertThat(testArticle.getDoc()).isEqualTo(DEFAULT_DOC);
        assertThat(testArticle.getDocContentType()).isEqualTo(DEFAULT_DOC_CONTENT_TYPE);
        assertThat(testArticle.isIspushed()).isEqualTo(DEFAULT_ISPUSHED);
    }

    @Test
    public void createArticleWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = articleRepository.findAll().size();

        // Create the Article with an existing ID
        Article existingArticle = new Article();
        existingArticle.setId("existing_id");

        // An entity with an existing ID cannot be created, so this API call must fail
        restArticleMockMvc.perform(post("/api/articles")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(existingArticle)))
            .andExpect(status().isBadRequest());

        // Validate the Alice in the database
        List<Article> articleList = articleRepository.findAll();
        assertThat(articleList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    public void checkTitreIsRequired() throws Exception {
        int databaseSizeBeforeTest = articleRepository.findAll().size();
        // set the field null
        article.setTitre(null);

        // Create the Article, which fails.

        restArticleMockMvc.perform(post("/api/articles")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(article)))
            .andExpect(status().isBadRequest());

        List<Article> articleList = articleRepository.findAll();
        assertThat(articleList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    public void checkTextIsRequired() throws Exception {
        int databaseSizeBeforeTest = articleRepository.findAll().size();
        // set the field null
        article.setText(null);

        // Create the Article, which fails.

        restArticleMockMvc.perform(post("/api/articles")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(article)))
            .andExpect(status().isBadRequest());

        List<Article> articleList = articleRepository.findAll();
        assertThat(articleList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    public void getAllArticles() throws Exception {
        // Initialize the database
        articleRepository.save(article);

        // Get all the articleList
        restArticleMockMvc.perform(get("/api/articles?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(article.getId())))
            .andExpect(jsonPath("$.[*].titre").value(hasItem(DEFAULT_TITRE.toString())))
            .andExpect(jsonPath("$.[*].text").value(hasItem(DEFAULT_TEXT.toString())))
            .andExpect(jsonPath("$.[*].utilisateur").value(hasItem(DEFAULT_UTILISATEUR.toString())))
            .andExpect(jsonPath("$.[*].vote").value(hasItem(DEFAULT_VOTE)))
            .andExpect(jsonPath("$.[*].date").value(hasItem(DEFAULT_DATE.toString())))
            .andExpect(jsonPath("$.[*].docContentType").value(hasItem(DEFAULT_DOC_CONTENT_TYPE)))
            .andExpect(jsonPath("$.[*].doc").value(hasItem(Base64Utils.encodeToString(DEFAULT_DOC))))
            .andExpect(jsonPath("$.[*].ispushed").value(hasItem(DEFAULT_ISPUSHED.booleanValue())));
    }

    @Test
    public void getArticle() throws Exception {
        // Initialize the database
        articleRepository.save(article);

        // Get the article
        restArticleMockMvc.perform(get("/api/articles/{id}", article.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(article.getId()))
            .andExpect(jsonPath("$.titre").value(DEFAULT_TITRE.toString()))
            .andExpect(jsonPath("$.text").value(DEFAULT_TEXT.toString()))
            .andExpect(jsonPath("$.utilisateur").value(DEFAULT_UTILISATEUR.toString()))
            .andExpect(jsonPath("$.vote").value(DEFAULT_VOTE))
            .andExpect(jsonPath("$.date").value(DEFAULT_DATE.toString()))
            .andExpect(jsonPath("$.docContentType").value(DEFAULT_DOC_CONTENT_TYPE))
            .andExpect(jsonPath("$.doc").value(Base64Utils.encodeToString(DEFAULT_DOC)))
            .andExpect(jsonPath("$.ispushed").value(DEFAULT_ISPUSHED.booleanValue()));
    }

    @Test
    public void getNonExistingArticle() throws Exception {
        // Get the article
        restArticleMockMvc.perform(get("/api/articles/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    public void updateArticle() throws Exception {
        // Initialize the database
        articleService.save(article);

        int databaseSizeBeforeUpdate = articleRepository.findAll().size();

        // Update the article
        Article updatedArticle = articleRepository.findOne(article.getId());
        updatedArticle
                .titre(UPDATED_TITRE)
                .text(UPDATED_TEXT)
                .utilisateur(UPDATED_UTILISATEUR)
                .vote(UPDATED_VOTE)
                .date(UPDATED_DATE)
                .doc(UPDATED_DOC)
                .docContentType(UPDATED_DOC_CONTENT_TYPE)
                .ispushed(UPDATED_ISPUSHED);

        restArticleMockMvc.perform(put("/api/articles")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedArticle)))
            .andExpect(status().isOk());

        // Validate the Article in the database
        List<Article> articleList = articleRepository.findAll();
        assertThat(articleList).hasSize(databaseSizeBeforeUpdate);
        Article testArticle = articleList.get(articleList.size() - 1);
        assertThat(testArticle.getTitre()).isEqualTo(UPDATED_TITRE);
        assertThat(testArticle.getText()).isEqualTo(UPDATED_TEXT);
        assertThat(testArticle.getUtilisateur()).isEqualTo(UPDATED_UTILISATEUR);
        assertThat(testArticle.getVote()).isEqualTo(UPDATED_VOTE);
        assertThat(testArticle.getDate()).isEqualTo(UPDATED_DATE);
        assertThat(testArticle.getDoc()).isEqualTo(UPDATED_DOC);
        assertThat(testArticle.getDocContentType()).isEqualTo(UPDATED_DOC_CONTENT_TYPE);
        assertThat(testArticle.isIspushed()).isEqualTo(UPDATED_ISPUSHED);
    }

    @Test
    public void updateNonExistingArticle() throws Exception {
        int databaseSizeBeforeUpdate = articleRepository.findAll().size();

        // Create the Article

        // If the entity doesn't have an ID, it will be created instead of just being updated
        restArticleMockMvc.perform(put("/api/articles")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(article)))
            .andExpect(status().isCreated());

        // Validate the Article in the database
        List<Article> articleList = articleRepository.findAll();
        assertThat(articleList).hasSize(databaseSizeBeforeUpdate + 1);
    }

    @Test
    public void deleteArticle() throws Exception {
        // Initialize the database
        articleService.save(article);

        int databaseSizeBeforeDelete = articleRepository.findAll().size();

        // Get the article
        restArticleMockMvc.perform(delete("/api/articles/{id}", article.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isOk());

        // Validate the database is empty
        List<Article> articleList = articleRepository.findAll();
        assertThat(articleList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Article.class);
    }
}
