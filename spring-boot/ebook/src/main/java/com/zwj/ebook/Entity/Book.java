package com.zwj.ebook.Entity;

import lombok.Setter;
import lombok.Getter;

import javax.persistence.*;

@Setter
@Getter
@Entity
@Table(name="books")
public class Book {
    @Id
    public String id;
    public String name;
    public String author;
    public Integer storage;
    public Integer price;
    public String imageurl;
    public String tag;
}
