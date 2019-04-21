package com.zwj.ebook.Book;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/books")
public class BookController {

    private static final Logger logger = LoggerFactory.getLogger(BookController.class);

    @Autowired
    private BookService bookService;

    @RequestMapping(value="",method=RequestMethod.GET)
    public List<Book> getBooks(){
        logger.info("从数据库读取Book集合");
        return bookService.getList();
    }

    @RequestMapping(value="/{id}",method= RequestMethod.GET)
public Book getBook(@PathVariable String id){
        logger.info("从数据中读取"+id);
        return bookService.getBook(id);
        }

    @RequestMapping(value="/{id}",method= RequestMethod.DELETE)
    public void deleteBook(@PathVariable String id){
        logger.info("从数据中删除"+id);
        bookService.deleteBook(id);
    }

    @RequestMapping(value="",method= RequestMethod.POST)
    public void addBook(Book book){
        logger.info("添加"+book.id);
        bookService.addBook(book);
    }

    @RequestMapping(value="",method= RequestMethod.PUT)
    public void updateBook(Book book){
        logger.info("修改"+book.id);
        bookService.updateBook(book);
    }

    @RequestMapping(value="/",method= RequestMethod.GET)
    public List<Book> searchBook(String name){
        logger.info("从数据中读取"+ name);
        return bookService.searchBook(name);
    }
}