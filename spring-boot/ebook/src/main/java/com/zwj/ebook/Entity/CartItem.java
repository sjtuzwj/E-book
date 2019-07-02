package com.zwj.ebook.Entity;

import com.zwj.ebook.Entity.CartKey;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Setter
@Getter
@Entity
@IdClass(CartKey.class)
@Table(name="cartitems")
public class  CartItem {
    @Id
    @Column(name = "uid")
    public String uid;
    @Id
    @Column(name = "id")
    public String id;
    @Column(name="num")
    public Integer num;
}
