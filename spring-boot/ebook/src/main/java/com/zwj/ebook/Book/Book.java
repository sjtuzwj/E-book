package com.zwj.ebook.Book;

import lombok.Setter;
import lombok.Getter;

import javax.persistence.*;

@Setter
@Getter
@Entity
@Table(name="books")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    public String id;
    public String name;
    public String author;
    public Integer storage;
    public Integer price;
    public String imageurl;
    public String tag;
}
