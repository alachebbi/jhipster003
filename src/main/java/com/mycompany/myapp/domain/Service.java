package com.mycompany.myapp.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.io.Serializable;
import java.util.Objects;

/**
 * A Service.
 */

@Document(collection = "service")
public class Service implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @Field("nom")
    private String nom;

    @Field("chef")
    private String chef;

    @Field("medicaments")
    private String medicaments;

    @Field("materiel")
    private String materiel;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public Service nom(String nom) {
        this.nom = nom;
        return this;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getChef() {
        return chef;
    }

    public Service chef(String chef) {
        this.chef = chef;
        return this;
    }

    public void setChef(String chef) {
        this.chef = chef;
    }

    public String getMedicaments() {
        return medicaments;
    }

    public Service medicaments(String medicaments) {
        this.medicaments = medicaments;
        return this;
    }

    public void setMedicaments(String medicaments) {
        this.medicaments = medicaments;
    }

    public String getMateriel() {
        return materiel;
    }

    public Service materiel(String materiel) {
        this.materiel = materiel;
        return this;
    }

    public void setMateriel(String materiel) {
        this.materiel = materiel;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Service service = (Service) o;
        if (service.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, service.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "Service{" +
            "id=" + id +
            ", nom='" + nom + "'" +
            ", chef='" + chef + "'" +
            ", medicaments='" + medicaments + "'" +
            ", materiel='" + materiel + "'" +
            '}';
    }
}
