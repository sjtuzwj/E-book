package com.zwj.ebook.Service;


import com.zwj.ebook.Entity.Cart;
import org.springframework.stereotype.Service;

public interface CartService {

    public Cart getCart(String uid);

    public void updateCart(Cart cart);
}