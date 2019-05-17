package com.zwj.ebook.Book;

import java.util.List;

public interface BookService {
    public Book getBook(String id);

    public Book addBook(Book book);

    public void updateBook(Book book);

    public void deleteBook(String id);

    public List<Book> searchBook(String name);

    public List<Book> getList();
}