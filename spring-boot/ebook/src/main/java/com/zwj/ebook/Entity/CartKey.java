package com.zwj.ebook.Entity;

import java.io.Serializable;

public class CartKey implements Serializable{
    public String uid;
    public String id;

    CartKey(){

    }
    CartKey(CartKey c){
        this.uid=c.uid;
        this.id=c.id;
    }
    @Override
    public boolean equals(Object obj) {
        CartKey c = (CartKey) obj;
        return uid.equals(c.uid) && id.equals(c.id);
    }

    @Override
    public int hashCode() {
        return uid.hashCode()+id.hashCode();
    }
}