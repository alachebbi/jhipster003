package com.mycompany.myapp.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;

/**
 * A ChefService.
 */

@Document(collection = "chef_service")
public class ChefService implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @Field("nometprenom")
    private String nometprenom;

    @Field("login")
    private String login;

    @Field("motdepasse")
    private String motdepasse;

    @Field("servicemedi")
    private String servicemedi;

    @Field("photo")
    private byte[] photo;

    @Field("photo_content_type")
    private String photoContentType;

    @Field("specialite")
    private String specialite;

    @Field("datedenaissance")
    private LocalDate datedenaissance;

    @Field("email")
    private String email;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNometprenom() {
        return nometprenom;
    }

    public ChefService nometprenom(String nometprenom) {
        this.nometprenom = nometprenom;
        return this;
    }

    public void setNometprenom(String nometprenom) {
        this.nometprenom = nometprenom;
    }

    public String getLogin() {
        return login;
    }

    public ChefService login(String login) {
        this.login = login;
        return this;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getMotdepasse() {
        return motdepasse;
    }

    public ChefService motdepasse(String motdepasse) {
        this.motdepasse = motdepasse;
        return this;
    }

    public void setMotdepasse(String motdepasse) {
        this.motdepasse = motdepasse;
    }

    public String getServicemedi() {
        return servicemedi;
    }

    public ChefService servicemedi(String servicemedi) {
        this.servicemedi = servicemedi;
        return this;
    }

    public void setServicemedi(String servicemedi) {
        this.servicemedi = servicemedi;
    }

    public byte[] getPhoto() {
        return photo;
    }

    public ChefService photo(byte[] photo) {
        this.photo = photo;
        return this;
    }

    public void setPhoto(byte[] photo) {
        this.photo = photo;
    }

    public String getPhotoContentType() {
        return photoContentType;
    }

    public ChefService photoContentType(String photoContentType) {
        this.photoContentType = photoContentType;
        return this;
    }

    public void setPhotoContentType(String photoContentType) {
        this.photoContentType = photoContentType;
    }

    public String getSpecialite() {
        return specialite;
    }

    public ChefService specialite(String specialite) {
        this.specialite = specialite;
        return this;
    }

    public void setSpecialite(String specialite) {
        this.specialite = specialite;
    }

    public LocalDate getDatedenaissance() {
        return datedenaissance;
    }

    public ChefService datedenaissance(LocalDate datedenaissance) {
        this.datedenaissance = datedenaissance;
        return this;
    }

    public void setDatedenaissance(LocalDate datedenaissance) {
        this.datedenaissance = datedenaissance;
    }

    public String getEmail() {
        return email;
    }

    public ChefService email(String email) {
        this.email = email;
        return this;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        ChefService chefService = (ChefService) o;
        if (chefService.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, chefService.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "ChefService{" +
            "id=" + id +
            ", nometprenom='" + nometprenom + "'" +
            ", login='" + login + "'" +
            ", motdepasse='" + motdepasse + "'" +
            ", servicemedi='" + servicemedi + "'" +
            ", photo='" + photo + "'" +
            ", photoContentType='" + photoContentType + "'" +
            ", specialite='" + specialite + "'" +
            ", datedenaissance='" + datedenaissance + "'" +
            ", email='" + email + "'" +
            '}';
    }
}
