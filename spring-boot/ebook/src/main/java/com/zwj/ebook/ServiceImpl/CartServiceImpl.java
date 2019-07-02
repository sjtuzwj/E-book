package com.zwj.ebook.ServiceImpl;

import com.zwj.ebook.Dao.CartItemRepository;
import com.zwj.ebook.Entity.Cart;
import com.zwj.ebook.Entity.CartItem;
import com.zwj.ebook.Service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CartServiceImpl implements CartService {

    @Autowired
    private CartItemRepository ciRepository;

    public Cart getCart(String uid){
        Cart cart=new Cart();
        cart.id=uid;
        cart.items=ciRepository.findAllByUid(uid);
        return cart;
    }


    public void updateCart(Cart cart){
        ciRepository.deleteByUid(cart.id);
        for(CartItem item: cart.items){
            ciRepository.save(item);
        }
    }
}
