package com.mycompany.myapp.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;

/**
 * A Demandemedi.
 */

@Document(collection = "demandemedi")
public class Demandemedi implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @Field("etat")
    private String etat;

    @Field("medicamentid")
    private String medicamentid;

    @Field("quantite")
    private Integer quantite;

    @Field("date")
    private LocalDate date;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getEtat() {
        return etat;
    }

    public Demandemedi etat(String etat) {
        this.etat = etat;
        return this;
    }

    public void setEtat(String etat) {
        this.etat = etat;
    }

    public String getMedicamentid() {
        return medicamentid;
    }

    public Demandemedi medicamentid(String medicamentid) {
        this.medicamentid = medicamentid;
        return this;
    }

    public void setMedicamentid(String medicamentid) {
        this.medicamentid = medicamentid;
    }

    public Integer getQuantite() {
        return quantite;
    }

    public Demandemedi quantite(Integer quantite) {
        this.quantite = quantite;
        return this;
    }

    public void setQuantite(Integer quantite) {
        this.quantite = quantite;
    }

    public LocalDate getDate() {
        return date;
    }

    public Demandemedi date(LocalDate date) {
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
        Demandemedi demandemedi = (Demandemedi) o;
        if (demandemedi.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, demandemedi.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "Demandemedi{" +
            "id=" + id +
            ", etat='" + etat + "'" +
            ", medicamentid='" + medicamentid + "'" +
            ", quantite='" + quantite + "'" +
            ", date='" + date + "'" +
            '}';
    }
}
