package com.mycompany.myapp.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;

/**
 * A DossierMedical.
 */

@Document(collection = "dossier_medical")
public class DossierMedical implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @Field("perscreptionsmedicamenteuses")
    private String perscreptionsmedicamenteuses;

    @Field("nomdupatient")
    private String nomdupatient;

    @Field("numerotel")
    private Integer numerotel;

    @Field("datedenaissance")
    private LocalDate datedenaissance;

    @Field("antecedents")
    private String antecedents;

    @Field("ant")
    private String ant;

    @Field("groupessanguin")
    private String groupessanguin;

    @Field("recommandations")
    private String recommandations;

    @Field("resultatdudernierexamen")
    private String resultatdudernierexamen;

    @Field("resultatdudernierexamenn")
    private byte[] resultatdudernierexamenn;

    @Field("resultatdudernierexamenn_content_type")
    private String resultatdudernierexamennContentType;

    @Field("situationfamiliale")
    private String situationfamiliale;

    @Field("notesparamedicaux")
    private String notesparamedicaux;

    @DBRef
    private Doctor medecinTraitant ;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Doctor getMedecinTraitant() {
        return medecinTraitant;
    }

    public void setMedecinTraitant(Doctor medecinTraitant) {
        this.medecinTraitant = medecinTraitant;
    }

    public String getPerscreptionsmedicamenteuses() {
        return perscreptionsmedicamenteuses;
    }

    public DossierMedical perscreptionsmedicamenteuses(String perscreptionsmedicamenteuses) {
        this.perscreptionsmedicamenteuses = perscreptionsmedicamenteuses;
        return this;
    }

    public void setPerscreptionsmedicamenteuses(String perscreptionsmedicamenteuses) {
        this.perscreptionsmedicamenteuses = perscreptionsmedicamenteuses;
    }

    public String getNomdupatient() {
        return nomdupatient;
    }

    public DossierMedical nomdupatient(String nomdupatient) {
        this.nomdupatient = nomdupatient;
        return this;
    }

    public void setNomdupatient(String nomdupatient) {
        this.nomdupatient = nomdupatient;
    }

    public Integer getNumerotel() {
        return numerotel;
    }

    public DossierMedical numerotel(Integer numerotel) {
        this.numerotel = numerotel;
        return this;
    }

    public void setNumerotel(Integer numerotel) {
        this.numerotel = numerotel;
    }

    public LocalDate getDatedenaissance() {
        return datedenaissance;
    }

    public DossierMedical datedenaissance(LocalDate datedenaissance) {
        this.datedenaissance = datedenaissance;
        return this;
    }

    public void setDatedenaissance(LocalDate datedenaissance) {
        this.datedenaissance = datedenaissance;
    }

    public String getAntecedents() {
        return antecedents;
    }

    public DossierMedical antecedents(String antecedents) {
        this.antecedents = antecedents;
        return this;
    }

    public void setAntecedents(String antecedents) {
        this.antecedents = antecedents;
    }

    public String getAnt() {
        return ant;
    }

    public DossierMedical ant(String ant) {
        this.ant = ant;
        return this;
    }

    public void setAnt(String ant) {
        this.ant = ant;
    }

    public String getGroupessanguin() {
        return groupessanguin;
    }

    public DossierMedical groupessanguin(String groupessanguin) {
        this.groupessanguin = groupessanguin;
        return this;
    }

    public void setGroupessanguin(String groupessanguin) {
        this.groupessanguin = groupessanguin;
    }

    public String getRecommandations() {
        return recommandations;
    }

    public DossierMedical recommandations(String recommandations) {
        this.recommandations = recommandations;
        return this;
    }

    public void setRecommandations(String recommandations) {
        this.recommandations = recommandations;
    }

    public String getResultatdudernierexamen() {
        return resultatdudernierexamen;
    }

    public DossierMedical resultatdudernierexamen(String resultatdudernierexamen) {
        this.resultatdudernierexamen = resultatdudernierexamen;
        return this;
    }

    public void setResultatdudernierexamen(String resultatdudernierexamen) {
        this.resultatdudernierexamen = resultatdudernierexamen;
    }

    public byte[] getResultatdudernierexamenn() {
        return resultatdudernierexamenn;
    }

    public DossierMedical resultatdudernierexamenn(byte[] resultatdudernierexamenn) {
        this.resultatdudernierexamenn = resultatdudernierexamenn;
        return this;
    }

    public void setResultatdudernierexamenn(byte[] resultatdudernierexamenn) {
        this.resultatdudernierexamenn = resultatdudernierexamenn;
    }

    public String getResultatdudernierexamennContentType() {
        return resultatdudernierexamennContentType;
    }

    public DossierMedical resultatdudernierexamennContentType(String resultatdudernierexamennContentType) {
        this.resultatdudernierexamennContentType = resultatdudernierexamennContentType;
        return this;
    }

    public void setResultatdudernierexamennContentType(String resultatdudernierexamennContentType) {
        this.resultatdudernierexamennContentType = resultatdudernierexamennContentType;
    }

    public String getSituationfamiliale() {
        return situationfamiliale;
    }

    public DossierMedical situationfamiliale(String situationfamiliale) {
        this.situationfamiliale = situationfamiliale;
        return this;
    }

    public void setSituationfamiliale(String situationfamiliale) {
        this.situationfamiliale = situationfamiliale;
    }

    public String getNotesparamedicaux() {
        return notesparamedicaux;
    }

    public DossierMedical notesparamedicaux(String notesparamedicaux) {
        this.notesparamedicaux = notesparamedicaux;
        return this;
    }

    public void setNotesparamedicaux(String notesparamedicaux) {
        this.notesparamedicaux = notesparamedicaux;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        DossierMedical dossierMedical = (DossierMedical) o;
        if (dossierMedical.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, dossierMedical.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "DossierMedical{" +
            "id=" + id +
            ", perscreptionsmedicamenteuses='" + perscreptionsmedicamenteuses + "'" +
            ", nomdupatient='" + nomdupatient + "'" +
            ", numerotel='" + numerotel + "'" +
            ", datedenaissance='" + datedenaissance + "'" +
            ", antecedents='" + antecedents + "'" +
            ", ant='" + ant + "'" +
            ", groupessanguin='" + groupessanguin + "'" +
            ", recommandations='" + recommandations + "'" +
            ", resultatdudernierexamen='" + resultatdudernierexamen + "'" +
            ", resultatdudernierexamenn='" + resultatdudernierexamenn + "'" +
            ", resultatdudernierexamennContentType='" + resultatdudernierexamennContentType + "'" +
            ", situationfamiliale='" + situationfamiliale + "'" +
            ", medecin_traitant='" + medecinTraitant + "'" +
            ", notesparamedicaux='" + notesparamedicaux + "'" +
            '}';
    }
}
