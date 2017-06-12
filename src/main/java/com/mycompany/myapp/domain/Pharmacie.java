package com.mycompany.myapp.domain;

import org.hibernate.validator.constraints.Email;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import javax.validation.constraints.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;

/**
 * A Pharmacie.
 */

@Document(collection = "pharmacie")
public class Pharmacie implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @NotNull
    @Size(min = 6)
    @Field("nometprenom")
    private String nometprenom;

    @NotNull
    @Field("datedenaissance")
    private LocalDate datedenaissance;

    @NotNull
    @Email
    @Field("email")
    private String email;

    @NotNull
    @Field("photo")
    private byte[] photo;

    @Field("photo_content_type")
    private String photoContentType;

    @Field("motdepasse")
    private String motdepasse;

    @NotNull
    @Size(min = 6)
    @Field("login")
    private String login;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNometprenom() {
        return nometprenom;
    }

    public Pharmacie nometprenom(String nometprenom) {
        this.nometprenom = nometprenom;
        return this;
    }

    public void setNometprenom(String nometprenom) {
        this.nometprenom = nometprenom;
    }

    public LocalDate getDatedenaissance() {
        return datedenaissance;
    }

    public Pharmacie datedenaissance(LocalDate datedenaissance) {
        this.datedenaissance = datedenaissance;
        return this;
    }

    public void setDatedenaissance(LocalDate datedenaissance) {
        this.datedenaissance = datedenaissance;
    }

    public String getEmail() {
        return email;
    }

    public Pharmacie email(String email) {
        this.email = email;
        return this;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public byte[] getPhoto() {
        return photo;
    }

    public Pharmacie photo(byte[] photo) {
        this.photo = photo;
        return this;
    }

    public void setPhoto(byte[] photo) {
        this.photo = photo;
    }

    public String getPhotoContentType() {
        return photoContentType;
    }

    public Pharmacie photoContentType(String photoContentType) {
        this.photoContentType = photoContentType;
        return this;
    }

    public void setPhotoContentType(String photoContentType) {
        this.photoContentType = photoContentType;
    }

    public String getMotdepasse() {
        return motdepasse;
    }

    public Pharmacie motdepasse(String motdepasse) {
        this.motdepasse = motdepasse;
        return this;
    }

    public void setMotdepasse(String motdepasse) {
        this.motdepasse = motdepasse;
    }

    public String getLogin() {
        return login;
    }

    public Pharmacie login(String login) {
        this.login = login;
        return this;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Pharmacie pharmacie = (Pharmacie) o;
        if (pharmacie.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, pharmacie.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "Pharmacie{" +
            "id=" + id +
            ", nometprenom='" + nometprenom + "'" +
            ", datedenaissance='" + datedenaissance + "'" +
            ", email='" + email + "'" +
            ", photo='" + photo + "'" +
            ", photoContentType='" + photoContentType + "'" +
            ", motdepasse='" + motdepasse + "'" +
            ", login='" + login + "'" +
            '}';
    }
}
