package com.zwj.ebook.Controller;

import com.zwj.ebook.Service.CartService;
import com.zwj.ebook.Entity.Cart;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
@CrossOrigin
@RestController
@RequestMapping("/api/carts")
public class CartController {

    private static final Logger logger = LoggerFactory.getLogger(CartController.class);

    @Autowired
    private CartService bookService;


    @RequestMapping(value="/{uid}",method= RequestMethod.GET)
    public Cart getCart(@PathVariable String uid){
        logger.info("从数据中读取"+uid);
        return bookService.getCart(uid);
    }

    @RequestMapping(value="",method= RequestMethod.PUT)
    @ResponseBody
    Cart updateCart(@RequestBody Cart cart){
        logger.info("修改"+cart.id);
        bookService.updateCart(cart);
        return cart;
    }
}