package com.mycompany.myapp.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;

/**
 * A Doctor.
 */

@Document(collection = "doctor")
public class Doctor implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @Field("motdepasse")
    private String motdepasse;

    @Field("login")
    private String login;

    @Field("servicemedi")
    private String servicemedi;

    @Field("photo")
    private byte[] photo;

    @Field("photo_content_type")
    private String photoContentType;

    @Field("specialite")
    private String specialite;

    @Field("nometprenom")
    private String nometprenom;

    @Field("datenaissance")
    private LocalDate datenaissance;

    @Field("daten")
    private LocalDate daten;

    @Field("email")
    private String email;

    @Field("date")
    private LocalDate date;

    @DBRef
    private User user ;

    public User getUser() {
        return user;
    }



    public void setUser(User user) {
        this.user = user;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getMotdepasse() {
        return motdepasse;
    }

    public Doctor motdepasse(String motdepasse) {
        this.motdepasse = motdepasse;
        return this;
    }

    public void setMotdepasse(String motdepasse) {
        this.motdepasse = motdepasse;
    }

    public String getLogin() {
        return login;
    }

    public Doctor login(String login) {
        this.login = login;
        return this;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getServicemedi() {
        return servicemedi;
    }

    public Doctor servicemedi(String servicemedi) {
        this.servicemedi = servicemedi;
        return this;
    }

    public void setServicemedi(String servicemedi) {
        this.servicemedi = servicemedi;
    }

    public byte[] getPhoto() {
        return photo;
    }

    public Doctor photo(byte[] photo) {
        this.photo = photo;
        return this;
    }

    public void setPhoto(byte[] photo) {
        this.photo = photo;
    }

    public String getPhotoContentType() {
        return photoContentType;
    }

    public Doctor photoContentType(String photoContentType) {
        this.photoContentType = photoContentType;
        return this;
    }

    public void setPhotoContentType(String photoContentType) {
        this.photoContentType = photoContentType;
    }

    public String getSpecialite() {
        return specialite;
    }

    public Doctor specialite(String specialite) {
        this.specialite = specialite;
        return this;
    }

    public void setSpecialite(String specialite) {
        this.specialite = specialite;
    }

    public String getNometprenom() {
        return nometprenom;
    }

    public Doctor nometprenom(String nometprenom) {
        this.nometprenom = nometprenom;
        return this;
    }

    public void setNometprenom(String nometprenom) {
        this.nometprenom = nometprenom;
    }

    public LocalDate getDatenaissance() {
        return datenaissance;
    }

    public Doctor datenaissance(LocalDate datenaissance) {
        this.datenaissance = datenaissance;
        return this;
    }

    public void setDatenaissance(LocalDate datenaissance) {
        this.datenaissance = datenaissance;
    }

    public LocalDate getDaten() {
        return daten;
    }

    public Doctor daten(LocalDate daten) {
        this.daten = daten;
        return this;
    }

    public void setDaten(LocalDate daten) {
        this.daten = daten;
    }

    public String getEmail() {
        return email;
    }

    public Doctor email(String email) {
        this.email = email;
        return this;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public LocalDate getDate() {
        return date;
    }

    public Doctor date(LocalDate date) {
        this.date = date;
        return this;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Doctor doctor = (Doctor) o;
        if (doctor.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, doctor.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "Doctor{" +
            "id=" + id +
            ", motdepasse='" + motdepasse + "'" +
            ", login='" + login + "'" +
            ", servicemedi='" + servicemedi + "'" +
            ", photo='" + photo + "'" +
            ", photoContentType='" + photoContentType + "'" +
            ", specialite='" + specialite + "'" +
            ", nometprenom='" + nometprenom + "'" +
            ", datenaissance='" + datenaissance + "'" +
            ", daten='" + daten + "'" +
            ", email='" + email + "'" +
            ", date='" + date + "'" +
            '}';
    }
}
