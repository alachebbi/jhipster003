package com.mycompany.myapp.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;

/**
 * A Demandemedicamentvff.
 */

@Document(collection = "demandemedicamentvff")
public class Demandemedicamentvff implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @Field("etat")
    private String etat;

    @Field("medicamentid")
    private String medicamentid;

    @Field("quatite")
    private Integer quatite;

    @Field("date")
    private LocalDate date;

    @Field("d")
    private String d;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getEtat() {
        return etat;
    }

    public Demandemedicamentvff etat(String etat) {
        this.etat = etat;
        return this;
    }

    public void setEtat(String etat) {
        this.etat = etat;
    }

    public String getMedicamentid() {
        return medicamentid;
    }

    public Demandemedicamentvff medicamentid(String medicamentid) {
        this.medicamentid = medicamentid;
        return this;
    }

    public void setMedicamentid(String medicamentid) {
        this.medicamentid = medicamentid;
    }

    public Integer getQuatite() {
        return quatite;
    }

    public Demandemedicamentvff quatite(Integer quatite) {
        this.quatite = quatite;
        return this;
    }

    public void setQuatite(Integer quatite) {
        this.quatite = quatite;
    }

    public LocalDate getDate() {
        return date;
    }

    public Demandemedicamentvff date(LocalDate date) {
        this.date = date;
        return this;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getD() {
        return d;
    }

    public Demandemedicamentvff d(String d) {
        this.d = d;
        return this;
    }

    public void setD(String d) {
        this.d = d;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Demandemedicamentvff demandemedicamentvff = (Demandemedicamentvff) o;
        if (demandemedicamentvff.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, demandemedicamentvff.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "Demandemedicamentvff{" +
            "id=" + id +
            ", etat='" + etat + "'" +
            ", medicamentid='" + medicamentid + "'" +
            ", quatite='" + quatite + "'" +
            ", date='" + date + "'" +
            ", d='" + d + "'" +
            '}';
    }
}
