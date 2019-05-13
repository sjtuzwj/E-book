package com.zwj.ebook.User;

import lombok.Setter;
import lombok.Getter;

import javax.persistence.*;

@Setter
@Getter
@Entity
@Table(name="users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    public String id;
    public String mail;
    public Boolean forbid;
    public String password;
    public Boolean admin;
}
