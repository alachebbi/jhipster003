package com.mycompany.myapp.service.dto;

import java.time.LocalDate;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.Objects;

/**
 * A DTO for the Pharmacien entity.
 */
public class PharmacienDTO implements Serializable {

    private String id;

    @NotNull
    @Size(min = 8)
    private String nometprenom;

    @NotNull
    private LocalDate datedenaissance;

    @NotNull
    private String email;

    @NotNull
    private byte[] photo;
    private String photoContentType;

    @NotNull
    @Size(min = 6)
    private String login;

    private String motdepasse;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
    public String getNometprenom() {
        return nometprenom;
    }

    public void setNometprenom(String nometprenom) {
        this.nometprenom = nometprenom;
    }
    public LocalDate getDatedenaissance() {
        return datedenaissance;
    }

    public void setDatedenaissance(LocalDate datedenaissance) {
        this.datedenaissance = datedenaissance;
    }
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
    public byte[] getPhoto() {
        return photo;
    }

    public void setPhoto(byte[] photo) {
        this.photo = photo;
    }

    public String getPhotoContentType() {
        return photoContentType;
    }

    public void setPhotoContentType(String photoContentType) {
        this.photoContentType = photoContentType;
    }
    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }
    public String getMotdepasse() {
        return motdepasse;
    }

    public void setMotdepasse(String motdepasse) {
        this.motdepasse = motdepasse;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        PharmacienDTO pharmacienDTO = (PharmacienDTO) o;

        if ( ! Objects.equals(id, pharmacienDTO.id)) { return false; }

        return true;
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "PharmacienDTO{" +
            "id=" + id +
            ", nometprenom='" + nometprenom + "'" +
            ", datedenaissance='" + datedenaissance + "'" +
            ", email='" + email + "'" +
            ", photo='" + photo + "'" +
            ", login='" + login + "'" +
            ", motdepasse='" + motdepasse + "'" +
            '}';
    }
}
