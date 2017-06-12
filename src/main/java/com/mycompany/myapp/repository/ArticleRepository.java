package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Article;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the Article entity.
 */
@SuppressWarnings("unused")
public interface ArticleRepository extends MongoRepository<Article,String> {

}
