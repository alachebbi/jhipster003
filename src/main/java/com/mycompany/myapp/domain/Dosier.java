package com.mycompany.myapp.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;

import com.mycompany.myapp.domain.enumeration.Antecedents;

/**
 * A Dosier.
 */

@Document(collection = "dosier")
public class Dosier implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @Field("perscreptionsmedicamenteuses")
    private byte[] perscreptionsmedicamenteuses;

    @Field("perscreptionsmedicamenteuses_content_type")
    private String perscreptionsmedicamenteusesContentType;

    @Field("nom")
    private String nom;

    @Field("numero")
    private Integer numero;

    @Field("date")
    private LocalDate date;

    @Field("antecedents")
    private Antecedents antecedents;

    @Field("groupesanguin")
    private String groupesanguin;

    @Field("recommandations")
    private byte[] recommandations;

    @Field("recommandations_content_type")
    private String recommandationsContentType;

    @Field("resultatdernierexamen")
    private byte[] resultatdernierexamen;

    @Field("resultatdernierexamen_content_type")
    private String resultatdernierexamenContentType;

    @Field("cituationfamiliale")
    private String cituationfamiliale;

    @Field("cnss")
    private String cnss;

    @Field("notesparamedicaux")
    private String notesparamedicaux;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public byte[] getPerscreptionsmedicamenteuses() {
        return perscreptionsmedicamenteuses;
    }

    public Dosier perscreptionsmedicamenteuses(byte[] perscreptionsmedicamenteuses) {
        this.perscreptionsmedicamenteuses = perscreptionsmedicamenteuses;
        return this;
    }

    public void setPerscreptionsmedicamenteuses(byte[] perscreptionsmedicamenteuses) {
        this.perscreptionsmedicamenteuses = perscreptionsmedicamenteuses;
    }

    public String getPerscreptionsmedicamenteusesContentType() {
        return perscreptionsmedicamenteusesContentType;
    }

    public Dosier perscreptionsmedicamenteusesContentType(String perscreptionsmedicamenteusesContentType) {
        this.perscreptionsmedicamenteusesContentType = perscreptionsmedicamenteusesContentType;
        return this;
    }

    public void setPerscreptionsmedicamenteusesContentType(String perscreptionsmedicamenteusesContentType) {
        this.perscreptionsmedicamenteusesContentType = perscreptionsmedicamenteusesContentType;
    }

    public String getNom() {
        return nom;
    }

    public Dosier nom(String nom) {
        this.nom = nom;
        return this;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public Integer getNumero() {
        return numero;
    }

    public Dosier numero(Integer numero) {
        this.numero = numero;
        return this;
    }

    public void setNumero(Integer numero) {
        this.numero = numero;
    }

    public LocalDate getDate() {
        return date;
    }

    public Dosier date(LocalDate date) {
        this.date = date;
        return this;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public Antecedents getAntecedents() {
        return antecedents;
    }

    public Dosier antecedents(Antecedents antecedents) {
        this.antecedents = antecedents;
        return this;
    }

    public void setAntecedents(Antecedents antecedents) {
        this.antecedents = antecedents;
    }

    public String getGroupesanguin() {
        return groupesanguin;
    }

    public Dosier groupesanguin(String groupesanguin) {
        this.groupesanguin = groupesanguin;
        return this;
    }

    public void setGroupesanguin(String groupesanguin) {
        this.groupesanguin = groupesanguin;
    }

    public byte[] getRecommandations() {
        return recommandations;
    }

    public Dosier recommandations(byte[] recommandations) {
        this.recommandations = recommandations;
        return this;
    }

    public void setRecommandations(byte[] recommandations) {
        this.recommandations = recommandations;
    }

    public String getRecommandationsContentType() {
        return recommandationsContentType;
    }

    public Dosier recommandationsContentType(String recommandationsContentType) {
        this.recommandationsContentType = recommandationsContentType;
        return this;
    }

    public void setRecommandationsContentType(String recommandationsContentType) {
        this.recommandationsContentType = recommandationsContentType;
    }

    public byte[] getResultatdernierexamen() {
        return resultatdernierexamen;
    }

    public Dosier resultatdernierexamen(byte[] resultatdernierexamen) {
        this.resultatdernierexamen = resultatdernierexamen;
        return this;
    }

    public void setResultatdernierexamen(byte[] resultatdernierexamen) {
        this.resultatdernierexamen = resultatdernierexamen;
    }

    public String getResultatdernierexamenContentType() {
        return resultatdernierexamenContentType;
    }

    public Dosier resultatdernierexamenContentType(String resultatdernierexamenContentType) {
        this.resultatdernierexamenContentType = resultatdernierexamenContentType;
        return this;
    }

    public void setResultatdernierexamenContentType(String resultatdernierexamenContentType) {
        this.resultatdernierexamenContentType = resultatdernierexamenContentType;
    }

    public String getCituationfamiliale() {
        return cituationfamiliale;
    }

    public Dosier cituationfamiliale(String cituationfamiliale) {
        this.cituationfamiliale = cituationfamiliale;
        return this;
    }

    public void setCituationfamiliale(String cituationfamiliale) {
        this.cituationfamiliale = cituationfamiliale;
    }

    public String getCnss() {
        return cnss;
    }

    public Dosier cnss(String cnss) {
        this.cnss = cnss;
        return this;
    }

    public void setCnss(String cnss) {
        this.cnss = cnss;
    }

    public String getNotesparamedicaux() {
        return notesparamedicaux;
    }

    public Dosier notesparamedicaux(String notesparamedicaux) {
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
        Dosier dosier = (Dosier) o;
        if (dosier.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, dosier.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "Dosier{" +
            "id=" + id +
            ", perscreptionsmedicamenteuses='" + perscreptionsmedicamenteuses + "'" +
            ", perscreptionsmedicamenteusesContentType='" + perscreptionsmedicamenteusesContentType + "'" +
            ", nom='" + nom + "'" +
            ", numero='" + numero + "'" +
            ", date='" + date + "'" +
            ", antecedents='" + antecedents + "'" +
            ", groupesanguin='" + groupesanguin + "'" +
            ", recommandations='" + recommandations + "'" +
            ", recommandationsContentType='" + recommandationsContentType + "'" +
            ", resultatdernierexamen='" + resultatdernierexamen + "'" +
            ", resultatdernierexamenContentType='" + resultatdernierexamenContentType + "'" +
            ", cituationfamiliale='" + cituationfamiliale + "'" +
            ", cnss='" + cnss + "'" +
            ", notesparamedicaux='" + notesparamedicaux + "'" +
            '}';
    }
}
