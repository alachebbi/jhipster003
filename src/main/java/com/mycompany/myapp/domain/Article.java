package com.mycompany.myapp.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import javax.validation.constraints.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;

/**
 * A Article.
 */

@Document(collection = "article")
public class Article implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @NotNull
    @Field("titre")
    private String titre;

    @NotNull
    @Field("text")
    private String text;

    @Field("utilisateur")
    private String utilisateur;

    @Min(value = 0)
    @Field("vote")
    private Integer vote;

    @Field("date")
    private LocalDate date;

    @Field("doc")
    private byte[] doc;

    @Field("doc_content_type")
    private String docContentType;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitre() {
        return titre;
    }

    public Article titre(String titre) {
        this.titre = titre;
        return this;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public String getText() {
        return text;
    }

    public Article text(String text) {
        this.text = text;
        return this;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getUtilisateur() {
        return utilisateur;
    }

    public Article utilisateur(String utilisateur) {
        this.utilisateur = utilisateur;
        return this;
    }

    public void setUtilisateur(String utilisateur) {
        this.utilisateur = utilisateur;
    }

    public Integer getVote() {
        return vote;
    }

    public Article vote(Integer vote) {
        this.vote = vote;
        return this;
    }

    public void setVote(Integer vote) {
        this.vote = vote;
    }

    public LocalDate getDate() {
        return date;
    }

    public Article date(LocalDate date) {
        this.date = date;
        return this;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public byte[] getDoc() {
        return doc;
    }

    public Article doc(byte[] doc) {
        this.doc = doc;
        return this;
    }

    public void setDoc(byte[] doc) {
        this.doc = doc;
    }

    public String getDocContentType() {
        return docContentType;
    }

    public Article docContentType(String docContentType) {
        this.docContentType = docContentType;
        return this;
    }

    public void setDocContentType(String docContentType) {
        this.docContentType = docContentType;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Article article = (Article) o;
        if (article.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, article.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "Article{" +
            "id=" + id +
            ", titre='" + titre + "'" +
            ", text='" + text + "'" +
            ", utilisateur='" + utilisateur + "'" +
            ", vote='" + vote + "'" +
            ", date='" + date + "'" +
            ", doc='" + doc + "'" +
            ", docContentType='" + docContentType + "'" +
            '}';
    }
}
