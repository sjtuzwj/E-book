package com.zwj.ebook.Cart;

import java.util.List;

import lombok.Setter;
import lombok.Getter;

import javax.persistence.*;

@Setter
@Getter
public class Cart {
    public String id;
    public List<CartItem> items;
}