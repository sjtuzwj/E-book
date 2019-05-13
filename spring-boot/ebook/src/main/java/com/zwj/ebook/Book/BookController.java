package com.zwj.ebook.Book;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api/books")
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
    public Book deleteBook(@PathVariable String id){
        logger.info("从数据中删除"+id);
        bookService.deleteBook(id);
        Book book =new Book();
        book.id = id;
        return book;
    }

    @RequestMapping(value="",method= RequestMethod.POST)
    @ResponseBody
    public Book addBook(@RequestBody Book book){
        logger.info("添加"+book.id);
        return bookService.addBook(book);
    }

    @RequestMapping(value="",method= RequestMethod.PUT)
    @ResponseBody
    public Book updateBook(@RequestBody Book book){
        logger.info("修改"+book.id);
        bookService.updateBook(book);
        return book;
    }

    @RequestMapping(value="/",method= RequestMethod.GET)
    public List<Book> searchBook(String name){
        logger.info("从数据中读取"+ name);
        return bookService.searchBook(name);
    }
}