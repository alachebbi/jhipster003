package com.mycompany.myapp.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import javax.validation.constraints.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;

/**
 * A DossierMedicalVF.
 */

@Document(collection = "dossier_medicalvf")
public class DossierMedicalVF implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @Size(min = 7)
    @Field("nomprenom")
    private String nomprenom;

    @NotNull
    @Field("datenaissance")
    private LocalDate datenaissance;

    @Field("situationfamiliale")
    private String situationfamiliale;

    @Min(value = 8)
    @Field("numerotel")
    private Integer numerotel;

    @Field("groupesanguin")
    private String groupesanguin;

    @NotNull
    @Field("antecedents")
    private byte[] antecedents;

    @Field("antecedents_content_type")
    private String antecedentsContentType;

    @Field("perscriptionsmedicamenteuses")
    private String perscriptionsmedicamenteuses;

    @Field("recommandations")
    private String recommandations;

    @Field("resultatdernierexamen")
    private byte[] resultatdernierexamen;

    @Field("resultatdernierexamen_content_type")
    private String resultatdernierexamenContentType;

    @Field("notesparamedicaux")
    private String notesparamedicaux;

    @Field("medecintraitant")
    private String medecintraitant;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNomprenom() {
        return nomprenom;
    }

    public DossierMedicalVF nomprenom(String nomprenom) {
        this.nomprenom = nomprenom;
        return this;
    }

    public void setNomprenom(String nomprenom) {
        this.nomprenom = nomprenom;
    }

    public LocalDate getDatenaissance() {
        return datenaissance;
    }

    public DossierMedicalVF datenaissance(LocalDate datenaissance) {
        this.datenaissance = datenaissance;
        return this;
    }

    public void setDatenaissance(LocalDate datenaissance) {
        this.datenaissance = datenaissance;
    }

    public String getSituationfamiliale() {
        return situationfamiliale;
    }

    public DossierMedicalVF situationfamiliale(String situationfamiliale) {
        this.situationfamiliale = situationfamiliale;
        return this;
    }

    public void setSituationfamiliale(String situationfamiliale) {
        this.situationfamiliale = situationfamiliale;
    }

    public Integer getNumerotel() {
        return numerotel;
    }

    public DossierMedicalVF numerotel(Integer numerotel) {
        this.numerotel = numerotel;
        return this;
    }

    public void setNumerotel(Integer numerotel) {
        this.numerotel = numerotel;
    }

    public String getGroupesanguin() {
        return groupesanguin;
    }

    public DossierMedicalVF groupesanguin(String groupesanguin) {
        this.groupesanguin = groupesanguin;
        return this;
    }

    public void setGroupesanguin(String groupesanguin) {
        this.groupesanguin = groupesanguin;
    }

    public byte[] getAntecedents() {
        return antecedents;
    }

    public DossierMedicalVF antecedents(byte[] antecedents) {
        this.antecedents = antecedents;
        return this;
    }

    public void setAntecedents(byte[] antecedents) {
        this.antecedents = antecedents;
    }

    public String getAntecedentsContentType() {
        return antecedentsContentType;
    }

    public DossierMedicalVF antecedentsContentType(String antecedentsContentType) {
        this.antecedentsContentType = antecedentsContentType;
        return this;
    }

    public void setAntecedentsContentType(String antecedentsContentType) {
        this.antecedentsContentType = antecedentsContentType;
    }

    public String getPerscriptionsmedicamenteuses() {
        return perscriptionsmedicamenteuses;
    }

    public DossierMedicalVF perscriptionsmedicamenteuses(String perscriptionsmedicamenteuses) {
        this.perscriptionsmedicamenteuses = perscriptionsmedicamenteuses;
        return this;
    }

    public void setPerscriptionsmedicamenteuses(String perscriptionsmedicamenteuses) {
        this.perscriptionsmedicamenteuses = perscriptionsmedicamenteuses;
    }

    public String getRecommandations() {
        return recommandations;
    }

    public DossierMedicalVF recommandations(String recommandations) {
        this.recommandations = recommandations;
        return this;
    }

    public void setRecommandations(String recommandations) {
        this.recommandations = recommandations;
    }

    public byte[] getResultatdernierexamen() {
        return resultatdernierexamen;
    }

    public DossierMedicalVF resultatdernierexamen(byte[] resultatdernierexamen) {
        this.resultatdernierexamen = resultatdernierexamen;
        return this;
    }

    public void setResultatdernierexamen(byte[] resultatdernierexamen) {
        this.resultatdernierexamen = resultatdernierexamen;
    }

    public String getResultatdernierexamenContentType() {
        return resultatdernierexamenContentType;
    }

    public DossierMedicalVF resultatdernierexamenContentType(String resultatdernierexamenContentType) {
        this.resultatdernierexamenContentType = resultatdernierexamenContentType;
        return this;
    }

    public void setResultatdernierexamenContentType(String resultatdernierexamenContentType) {
        this.resultatdernierexamenContentType = resultatdernierexamenContentType;
    }

    public String getNotesparamedicaux() {
        return notesparamedicaux;
    }

    public DossierMedicalVF notesparamedicaux(String notesparamedicaux) {
        this.notesparamedicaux = notesparamedicaux;
        return this;
    }

    public void setNotesparamedicaux(String notesparamedicaux) {
        this.notesparamedicaux = notesparamedicaux;
    }

    public String getMedecintraitant() {
        return medecintraitant;
    }

    public DossierMedicalVF medecintraitant(String medecintraitant) {
        this.medecintraitant = medecintraitant;
        return this;
    }

    public void setMedecintraitant(String medecintraitant) {
        this.medecintraitant = medecintraitant;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        DossierMedicalVF dossierMedicalVF = (DossierMedicalVF) o;
        if (dossierMedicalVF.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, dossierMedicalVF.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "DossierMedicalVF{" +
            "id=" + id +
            ", nomprenom='" + nomprenom + "'" +
            ", datenaissance='" + datenaissance + "'" +
            ", situationfamiliale='" + situationfamiliale + "'" +
            ", numerotel='" + numerotel + "'" +
            ", groupesanguin='" + groupesanguin + "'" +
            ", antecedents='" + antecedents + "'" +
            ", antecedentsContentType='" + antecedentsContentType + "'" +
            ", perscriptionsmedicamenteuses='" + perscriptionsmedicamenteuses + "'" +
            ", recommandations='" + recommandations + "'" +
            ", resultatdernierexamen='" + resultatdernierexamen + "'" +
            ", resultatdernierexamenContentType='" + resultatdernierexamenContentType + "'" +
            ", notesparamedicaux='" + notesparamedicaux + "'" +
            ", medecintraitant='" + medecintraitant + "'" +
            '}';
    }
}
