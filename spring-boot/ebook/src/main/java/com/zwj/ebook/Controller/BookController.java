package com.zwj.ebook.Controller;

import java.util.List;

import com.zwj.ebook.Entity.BookNoStruct;
import com.zwj.ebook.Service.BookService;
import com.zwj.ebook.Entity.Book;
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
    private BookService bookServiceImpl;

    @RequestMapping(value="",method=RequestMethod.GET)
    public List<Book> getBooks(){
        logger.info("从数据库读取Book集合");
        return bookServiceImpl.getList();
    }

    @RequestMapping(value="/{id}",method= RequestMethod.GET)
public Book getBook(@PathVariable String id){
        logger.info("从数据中读取"+id);
        return bookServiceImpl.getBook(id);
        }

        @RequestMapping(value="/{id}/comment",method= RequestMethod.GET)
        public BookNoStruct getBookC(@PathVariable String id){
            logger.info("从数据中读取评论"+id);
            return bookServiceImpl.getBookComment(id);
    }
    @RequestMapping(value="/{id}",method= RequestMethod.DELETE)
    public Book deleteBook(@PathVariable String id){
        logger.info("从数据中删除"+id);
        bookServiceImpl.deleteBook(id);
        Book book =new Book();
        book.id = id;
        return book;
    }

    @RequestMapping(value="",method= RequestMethod.POST)
    @ResponseBody
    public Book addBook(@RequestBody Book book){
        logger.info("添加"+book.id);
        return bookServiceImpl.addBook(book);
    }


    @RequestMapping(value="/{id}/comment",method= RequestMethod.POST)
    @ResponseBody
    public void addBookComment(@PathVariable String id,@RequestBody String com){
        logger.info("添加评论"+id);
        bookServiceImpl.addBookComment(id,com);
    }

    @RequestMapping(value="",method= RequestMethod.PUT)
    @ResponseBody
    public Book updateBook(@RequestBody Book book){
        logger.info("修改"+book.id);
        bookServiceImpl.updateBook(book);
        return book;
    }

    @RequestMapping(value="/",method= RequestMethod.GET)
    public List<Book> searchBook(String name){
        logger.info("从数据中读取"+ name);
        return bookServiceImpl.searchBook(name);
    }
}