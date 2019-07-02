package com.zwj.ebook.Entity;

import lombok.Setter;
import lombok.Getter;

import javax.persistence.*;

@Setter
@Getter
@Entity
@Table(name="users")
public class User {
    @Id
    public String id;
    public String mail;
    public Boolean forbid;
    public String password;
    public Boolean admin;
}
