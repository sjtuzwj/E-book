package com.zwj.ebook.ServiceImpl;

import java.util.ArrayList;
import java.util.List;

import com.zwj.ebook.Dao.BookNoStructRepository;
import com.zwj.ebook.Dao.BookRepository;
import com.zwj.ebook.Entity.Book;
import com.zwj.ebook.Entity.BookNoStruct;
import com.zwj.ebook.Service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookServiceImpl implements BookService {

    @Autowired
    private BookNoStructRepository bnR;
    @Autowired
    private BookRepository bookRepository;


    public Book getBook(String id){
        return bookRepository.findById(id).get();
    }

    public BookNoStruct getBookComment(String id){
        return bnR.findByNum(id);
    }

    public Book addBook(Book book) {
        BookNoStruct b= new BookNoStruct();
        b.num=book.id;
        b.comment=new ArrayList<>();
        bnR.save(b);
    return bookRepository.save(book); }

    public void addBookComment(String id,String com) {
            BookNoStruct b = bnR.findByNum(id);
            if(b==null) {
                b = new BookNoStruct();
                b.num = id;
            }
            b.comment.add(com);
            bnR.save(b);
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