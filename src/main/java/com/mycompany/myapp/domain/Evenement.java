package com.mycompany.myapp.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;

/**
 * A Evenement.
 */

@Document(collection = "evenement")
public class Evenement implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @Field("nom")
    private String nom;

    @Field("description")
    private String description;

    @Field("nombreparticipants")
    private Integer nombreparticipants;

    @Field("lieu")
    private String lieu;

    @Field("date")
    private LocalDate date;

    @Field("image")
    private byte[] image;

    @Field("image_content_type")
    private String imageContentType;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public Evenement nom(String nom) {
        this.nom = nom;
        return this;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getDescription() {
        return description;
    }

    public Evenement description(String description) {
        this.description = description;
        return this;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getNombreparticipants() {
        return nombreparticipants;
    }

    public Evenement nombreparticipants(Integer nombreparticipants) {
        this.nombreparticipants = nombreparticipants;
        return this;
    }

    public void setNombreparticipants(Integer nombreparticipants) {
        this.nombreparticipants = nombreparticipants;
    }

    public String getLieu() {
        return lieu;
    }

    public Evenement lieu(String lieu) {
        this.lieu = lieu;
        return this;
    }

    public void setLieu(String lieu) {
        this.lieu = lieu;
    }

    public LocalDate getDate() {
        return date;
    }

    public Evenement date(LocalDate date) {
        this.date = date;
        return this;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public byte[] getImage() {
        return image;
    }

    public Evenement image(byte[] image) {
        this.image = image;
        return this;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

    public String getImageContentType() {
        return imageContentType;
    }

    public Evenement imageContentType(String imageContentType) {
        this.imageContentType = imageContentType;
        return this;
    }

    public void setImageContentType(String imageContentType) {
        this.imageContentType = imageContentType;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Evenement evenement = (Evenement) o;
        if (evenement.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, evenement.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "Evenement{" +
            "id=" + id +
            ", nom='" + nom + "'" +
            ", description='" + description + "'" +
            ", nombreparticipants='" + nombreparticipants + "'" +
            ", lieu='" + lieu + "'" +
            ", date='" + date + "'" +
            ", image='" + image + "'" +
            ", imageContentType='" + imageContentType + "'" +
            '}';
    }
}
