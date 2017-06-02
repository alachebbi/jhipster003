package com.mycompany.myapp.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;

/**
 * A Demandepharmaciecentrale.
 */

@Document(collection = "demandepharmaciecentrale")
public class Demandepharmaciecentrale implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @Field("medicament")
    private String medicament;

    @Field("type")
    private String type;

    @Field("date")
    private LocalDate date;

    @Field("nompharmacien")
    private String nompharmacien;

    @Field("mail")
    private String mail;

    @Field("quantite")
    private Integer quantite;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getMedicament() {
        return medicament;
    }

    public Demandepharmaciecentrale medicament(String medicament) {
        this.medicament = medicament;
        return this;
    }

    public void setMedicament(String medicament) {
        this.medicament = medicament;
    }

    public String getType() {
        return type;
    }

    public Demandepharmaciecentrale type(String type) {
        this.type = type;
        return this;
    }

    public void setType(String type) {
        this.type = type;
    }

    public LocalDate getDate() {
        return date;
    }

    public Demandepharmaciecentrale date(LocalDate date) {
        this.date = date;
        return this;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getNompharmacien() {
        return nompharmacien;
    }

    public Demandepharmaciecentrale nompharmacien(String nompharmacien) {
        this.nompharmacien = nompharmacien;
        return this;
    }

    public void setNompharmacien(String nompharmacien) {
        this.nompharmacien = nompharmacien;
    }

    public String getMail() {
        return mail;
    }

    public Demandepharmaciecentrale mail(String mail) {
        this.mail = mail;
        return this;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public Integer getQuantite() {
        return quantite;
    }

    public Demandepharmaciecentrale quantite(Integer quantite) {
        this.quantite = quantite;
        return this;
    }

    public void setQuantite(Integer quantite) {
        this.quantite = quantite;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Demandepharmaciecentrale demandepharmaciecentrale = (Demandepharmaciecentrale) o;
        if (demandepharmaciecentrale.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, demandepharmaciecentrale.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "Demandepharmaciecentrale{" +
            "id=" + id +
            ", medicament='" + medicament + "'" +
            ", type='" + type + "'" +
            ", date='" + date + "'" +
            ", nompharmacien='" + nompharmacien + "'" +
            ", mail='" + mail + "'" +
            ", quantite='" + quantite + "'" +
            '}';
    }
}
