package com.mycompany.myapp.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.io.Serializable;
import java.time.ZonedDateTime;
import java.util.Objects;

/**
 * A DemandeMedicamentVf.
 */

@Document(collection = "demande_medicament_vf")
public class DemandeMedicamentVf implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @Field("medicamentid")
    private String medicamentid;

    @Field("date")
    private ZonedDateTime date;

    @Field("typedemande")
    private String typedemande;

    @Field("quantity")
    private Integer quantity;

    @Field("etat")
    private Integer etat;

    @Field("signature")
    private String signature;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getMedicamentid() {
        return medicamentid;
    }

    public DemandeMedicamentVf medicamentid(String medicamentid) {
        this.medicamentid = medicamentid;
        return this;
    }

    public void setMedicamentid(String medicamentid) {
        this.medicamentid = medicamentid;
    }

    public ZonedDateTime getDate() {
        return date;
    }

    public DemandeMedicamentVf date(ZonedDateTime date) {
        this.date = date;
        return this;
    }

    public void setDate(ZonedDateTime date) {
        this.date = date;
    }

    public String getTypedemande() {
        return typedemande;
    }

    public DemandeMedicamentVf typedemande(String typedemande) {
        this.typedemande = typedemande;
        return this;
    }

    public void setTypedemande(String typedemande) {
        this.typedemande = typedemande;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public DemandeMedicamentVf quantity(Integer quantity) {
        this.quantity = quantity;
        return this;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Integer getEtat() {
        return etat;
    }

    public DemandeMedicamentVf etat(Integer etat) {
        this.etat = etat;
        return this;
    }

    public void setEtat(Integer etat) {
        this.etat = etat;
    }

    public String getSignature() {
        return signature;
    }

    public DemandeMedicamentVf signature(String signature) {
        this.signature = signature;
        return this;
    }

    public void setSignature(String signature) {
        this.signature = signature;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        DemandeMedicamentVf demandeMedicamentVf = (DemandeMedicamentVf) o;
        if (demandeMedicamentVf.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, demandeMedicamentVf.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "DemandeMedicamentVf{" +
            "id=" + id +
            ", medicamentid='" + medicamentid + "'" +
            ", date='" + date + "'" +
            ", typedemande='" + typedemande + "'" +
            ", quantity='" + quantity + "'" +
            ", etat='" + etat + "'" +
            ", signature='" + signature + "'" +
            '}';
    }
}
