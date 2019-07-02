package com.zwj.ebook.Entity;

import java.util.List;

import lombok.Setter;
import lombok.Getter;

@Setter
@Getter
public class Cart {
    public String id;
    public List<CartItem> items;
}