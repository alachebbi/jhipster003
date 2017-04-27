package com.mycompany.myapp.service;

import com.mycompany.myapp.domain.Likes;
import com.mycompany.myapp.repository.LikesRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Service Implementation for managing Likes.
 */
@Service
public class LikesService {

    private final Logger log = LoggerFactory.getLogger(LikesService.class);
    
    private final LikesRepository likesRepository;

    public LikesService(LikesRepository likesRepository) {
        this.likesRepository = likesRepository;
    }

    /**
     * Save a likes.
     *
     * @param likes the entity to save
     * @return the persisted entity
     */
    public Likes save(Likes likes) {
        log.debug("Request to save Likes : {}", likes);
        Likes result = likesRepository.save(likes);
        return result;
    }

    /**
     *  Get all the likes.
     *  
     *  @param pageable the pagination information
     *  @return the list of entities
     */
    public Page<Likes> findAll(Pageable pageable) {
        log.debug("Request to get all Likes");
        Page<Likes> result = likesRepository.findAll(pageable);
        return result;
    }

    /**
     *  Get one likes by id.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    public Likes findOne(String id) {
        log.debug("Request to get Likes : {}", id);
        Likes likes = likesRepository.findOne(id);
        return likes;
    }

    /**
     *  Delete the  likes by id.
     *
     *  @param id the id of the entity
     */
    public void delete(String id) {
        log.debug("Request to delete Likes : {}", id);
        likesRepository.delete(id);
    }
}
