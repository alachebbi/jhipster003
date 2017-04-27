package com.mycompany.myapp.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.io.Serializable;
import java.util.Objects;

/**
 * A Likes.
 */

@Document(collection = "likes")
public class Likes implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @Field("articleid")
    private String articleid;

    @Field("userid")
    private String userid;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getArticleid() {
        return articleid;
    }

    public Likes articleid(String articleid) {
        this.articleid = articleid;
        return this;
    }

    public void setArticleid(String articleid) {
        this.articleid = articleid;
    }

    public String getUserid() {
        return userid;
    }

    public Likes userid(String userid) {
        this.userid = userid;
        return this;
    }

    public void setUserid(String userid) {
        this.userid = userid;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Likes likes = (Likes) o;
        if (likes.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, likes.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "Likes{" +
            "id=" + id +
            ", articleid='" + articleid + "'" +
            ", userid='" + userid + "'" +
            '}';
    }
}
