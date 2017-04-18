package com.mycompany.myapp.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.io.Serializable;
import java.util.Objects;

/**
 * A Forsys.
 */

@Document(collection = "forsys")
public class Forsys implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @Field("medecintraitant")
    private String medecintraitant;

    @Field("patient")
    private String patient;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getMedecintraitant() {
        return medecintraitant;
    }

    public Forsys medecintraitant(String medecintraitant) {
        this.medecintraitant = medecintraitant;
        return this;
    }

    public void setMedecintraitant(String medecintraitant) {
        this.medecintraitant = medecintraitant;
    }

    public String getPatient() {
        return patient;
    }

    public Forsys patient(String patient) {
        this.patient = patient;
        return this;
    }

    public void setPatient(String patient) {
        this.patient = patient;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Forsys forsys = (Forsys) o;
        if (forsys.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, forsys.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "Forsys{" +
            "id=" + id +
            ", medecintraitant='" + medecintraitant + "'" +
            ", patient='" + patient + "'" +
            '}';
    }
}
