package com.mycompany.myapp.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;

/**
 * A Demande.
 */

@Document(collection = "demande")
public class Demande implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @Field("etat")
    private String etat;

    @Field("medicamentid")
    private String medicamentid;

    @Field("date")
    private LocalDate date;

    @Field("quatity")
    private Integer quatity;

    @Field("a")
    private String a;

    @Field("ze")
    private String ze;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getEtat() {
        return etat;
    }

    public Demande etat(String etat) {
        this.etat = etat;
        return this;
    }

    public void setEtat(String etat) {
        this.etat = etat;
    }

    public String getMedicamentid() {
        return medicamentid;
    }

    public Demande medicamentid(String medicamentid) {
        this.medicamentid = medicamentid;
        return this;
    }

    public void setMedicamentid(String medicamentid) {
        this.medicamentid = medicamentid;
    }

    public LocalDate getDate() {
        return date;
    }

    public Demande date(LocalDate date) {
        this.date = date;
        return this;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public Integer getQuatity() {
        return quatity;
    }

    public Demande quatity(Integer quatity) {
        this.quatity = quatity;
        return this;
    }

    public void setQuatity(Integer quatity) {
        this.quatity = quatity;
    }

    public String getA() {
        return a;
    }

    public Demande a(String a) {
        this.a = a;
        return this;
    }

    public void setA(String a) {
        this.a = a;
    }

    public String getZe() {
        return ze;
    }

    public Demande ze(String ze) {
        this.ze = ze;
        return this;
    }

    public void setZe(String ze) {
        this.ze = ze;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Demande demande = (Demande) o;
        if (demande.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, demande.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "Demande{" +
            "id=" + id +
            ", etat='" + etat + "'" +
            ", medicamentid='" + medicamentid + "'" +
            ", date='" + date + "'" +
            ", quatity='" + quatity + "'" +
            ", a='" + a + "'" +
            ", ze='" + ze + "'" +
            '}';
    }
}
