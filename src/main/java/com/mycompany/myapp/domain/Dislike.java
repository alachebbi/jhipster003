package com.mycompany.myapp.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.io.Serializable;
import java.util.Objects;

/**
 * A Dislike.
 */

@Document(collection = "dislike")
public class Dislike implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @Field("article")
    private String article;

    @Field("utilisateur")
    private String utilisateur;

    @Field("c")
    private Integer c;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getArticle() {
        return article;
    }

    public Dislike article(String article) {
        this.article = article;
        return this;
    }

    public void setArticle(String article) {
        this.article = article;
    }

    public String getUtilisateur() {
        return utilisateur;
    }

    public Dislike utilisateur(String utilisateur) {
        this.utilisateur = utilisateur;
        return this;
    }

    public void setUtilisateur(String utilisateur) {
        this.utilisateur = utilisateur;
    }

    public Integer getC() {
        return c;
    }

    public Dislike c(Integer c) {
        this.c = c;
        return this;
    }

    public void setC(Integer c) {
        this.c = c;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Dislike dislike = (Dislike) o;
        if (dislike.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, dislike.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "Dislike{" +
            "id=" + id +
            ", article='" + article + "'" +
            ", utilisateur='" + utilisateur + "'" +
            ", c='" + c + "'" +
            '}';
    }
}
