package com.zwj.ebook.Dao;

import com.zwj.ebook.Entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book,String>, CrudRepository<Book, String> {
    List<Book> findAllByNameContaining(String name);
}