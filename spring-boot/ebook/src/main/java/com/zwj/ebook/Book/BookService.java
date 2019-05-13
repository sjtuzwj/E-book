package com.zwj.ebook.Book;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

@Service
public class BookService{

    @Autowired
    private BookRepository bookRepository;


    public Book getBook(String id){
        return bookRepository.findById(id).get();
    }

    public Book addBook(Book book){
        return bookRepository.save(book);
    }

    public void updateBook(Book book){
        bookRepository.save(book);
    }

    public void deleteBook(String id){
        bookRepository.deleteById(id);
    }


    public List<Book> searchBook(String name){
        return bookRepository.findAllByNameContaining(name);
    }

    public List<Book> getList(){
        return bookRepository.findAll();
    }
}