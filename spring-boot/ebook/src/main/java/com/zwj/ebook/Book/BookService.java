package com.zwj.ebook.Book;

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

    public void addBook(Book book){
        String sql= "insert into books values(\"%s\",\"%s\",\"%s\",%d,%d,\"%s\",\"%s\")".
                format(book.id,book.name,book.author,book.price,book.storage,book.imageurl,book.tag);
        jdbcTemplate.execute(sql);
    }

    public void updateBook(Book book){
        String sql= String.format("update books set name=\"%s\",author=\"%s\", price=%d, strorage=%d,imageurl=\"%s\",tag=\"%s\" where id=\"%s\""
                ,book.name,book.author,book.price,book.storage,book.imageurl,book.tag,book.id);
        jdbcTemplate.execute(sql);
    }

    public void deleteBook(String id){
        String sql= "DELETE FROM books Where ID=\""+id+"\"";
        jdbcTemplate.execute(sql);
    }


    public List<Book> searchBook(String name){
        String sql= "SELECT * FROM books Where name=\"% "+name+" %\"";
        return jdbcTemplate.query(sql, rowmapper);
    }

    public List<Book> getList(){
        String sql = "SELECT * FROM books";
        return jdbcTemplate.query(sql,rowmapper);
    }
}