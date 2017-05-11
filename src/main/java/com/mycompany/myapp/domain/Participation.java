package com.mycompany.myapp.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.io.Serializable;
import java.util.Objects;

/**
 * A Participation.
 */

@Document(collection = "participation")
public class Participation implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @Field("evenement")
    private String evenement;

    @Field("participant")
    private String participant;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getEvenement() {
        return evenement;
    }

    public Participation evenement(String evenement) {
        this.evenement = evenement;
        return this;
    }

    public void setEvenement(String evenement) {
        this.evenement = evenement;
    }

    public String getParticipant() {
        return participant;
    }

    public Participation participant(String participant) {
        this.participant = participant;
        return this;
    }

    public void setParticipant(String participant) {
        this.participant = participant;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Participation participation = (Participation) o;
        if (participation.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, participation.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "Participation{" +
            "id=" + id +
            ", evenement='" + evenement + "'" +
            ", participant='" + participant + "'" +
            '}';
    }
}
