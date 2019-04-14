package com.zwj.ebook;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

@Service
public class BookService {
    private RowMapper<Book> rowmapper=new RowMapper<Book>(){
    @Override
    public Book mapRow(ResultSet rs, int rowNum) throws SQLException {
        Book book = new Book();
        book.id=rs.getString("ID");
        book.name=rs.getString("name");
        book.storage=rs.getInt("storage");
        book.author=rs.getString("author");
        book.imageurl=rs.getString("imageurl");
        book.price=rs.getInt("price");
        book.tag=rs.getString("tag");
        return book;
    }
};
    @Autowired
    private JdbcTemplate jdbcTemplate;

    public Book getBook(String id){
        String sql= "SELECT * FROM books Where ID=\""+id+"\"";
        return jdbcTemplate.queryForObject(sql, rowmapper);
    }

    public List<Book> getList(){
        String sql = "SELECT * FROM books";
        return jdbcTemplate.query(sql,rowmapper);
    }
}