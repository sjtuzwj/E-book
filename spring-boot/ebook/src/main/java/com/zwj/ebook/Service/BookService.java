package com.zwj.ebook.Service;

import com.zwj.ebook.Entity.Book;
import com.zwj.ebook.Entity.BookNoStruct;

import java.util.List;

public interface BookService {
    public Book getBook(String id);

    //可以单独获取
    public BookNoStruct getBookComment(String id);

    //必须一起在创建书同时创建评论记录，因此不单独作为借口
    public Book addBook(Book book);

    public void addBookComment(String id, String com);

    public void updateBook(Book book);

    public void deleteBook(String id);

    public List<Book> searchBook(String name);

    public List<Book> getList();
}