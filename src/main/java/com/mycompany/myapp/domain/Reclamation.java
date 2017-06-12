package com.mycompany.myapp.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;

/**
 * A Reclamation.
 */

@Document(collection = "reclamation")
public class Reclamation implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @Field("titre")
    private String titre;

    @Field("objet")
    private String objet;

    @Field("recusermail")
    private String recusermail;

    @Field("recusername")
    private String recusername;

    @Field("etat")
    private String etat;

    @Field("date")
    private LocalDate date;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitre() {
        return titre;
    }

    public Reclamation titre(String titre) {
        this.titre = titre;
        return this;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public String getObjet() {
        return objet;
    }

    public Reclamation objet(String objet) {
        this.objet = objet;
        return this;
    }

    public void setObjet(String objet) {
        this.objet = objet;
    }

    public String getRecusermail() {
        return recusermail;
    }

    public Reclamation recusermail(String recusermail) {
        this.recusermail = recusermail;
        return this;
    }

    public void setRecusermail(String recusermail) {
        this.recusermail = recusermail;
    }

    public String getRecusername() {
        return recusername;
    }

    public Reclamation recusername(String recusername) {
        this.recusername = recusername;
        return this;
    }

    public void setRecusername(String recusername) {
        this.recusername = recusername;
    }

    public String getEtat() {
        return etat;
    }

    public Reclamation etat(String etat) {
        this.etat = etat;
        return this;
    }

    public void setEtat(String etat) {
        this.etat = etat;
    }

    public LocalDate getDate() {
        return date;
    }

    public Reclamation date(LocalDate date) {
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
        Reclamation reclamation = (Reclamation) o;
        if (reclamation.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, reclamation.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "Reclamation{" +
            "id=" + id +
            ", titre='" + titre + "'" +
            ", objet='" + objet + "'" +
            ", recusermail='" + recusermail + "'" +
            ", recusername='" + recusername + "'" +
            ", etat='" + etat + "'" +
            ", date='" + date + "'" +
            '}';
    }
}
