package com.mycompany.myapp.service;

import com.mycompany.myapp.domain.Article;
import com.mycompany.myapp.repository.ArticleRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Service Implementation for managing Article.
 */
@Service
public class ArticleService {

    private final Logger log = LoggerFactory.getLogger(ArticleService.class);
    
    private final ArticleRepository articleRepository;

    public ArticleService(ArticleRepository articleRepository) {
        this.articleRepository = articleRepository;
    }

    /**
     * Save a article.
     *
     * @param article the entity to save
     * @return the persisted entity
     */
    public Article save(Article article) {
        log.debug("Request to save Article : {}", article);
        Article result = articleRepository.save(article);
        return result;
    }

    /**
     *  Get all the articles.
     *  
     *  @param pageable the pagination information
     *  @return the list of entities
     */
    public Page<Article> findAll(Pageable pageable) {
        log.debug("Request to get all Articles");
        Page<Article> result = articleRepository.findAll(pageable);
        return result;
    }

    /**
     *  Get one article by id.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    public Article findOne(String id) {
        log.debug("Request to get Article : {}", id);
        Article article = articleRepository.findOne(id);
        return article;
    }

    /**
     *  Delete the  article by id.
     *
     *  @param id the id of the entity
     */
    public void delete(String id) {
        log.debug("Request to delete Article : {}", id);
        articleRepository.delete(id);
    }
}
