package com.zwj.ebook.Order;

import lombok.Setter;
import lombok.Getter;

import javax.persistence.*;

@Setter
@Getter
@Entity
@Table(name="orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    public String id;
    public String uid;
    public String bid;
    public Integer num;
    public String time;
    public Boolean paid;
    public Boolean completed;
}
