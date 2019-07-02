package com.zwj.ebook.Entity;

import lombok.Setter;
import lombok.Getter;

import javax.persistence.*;

@Setter
@Getter
@Entity
@Table(name="orders")
public class Order {
    @Id
    public String id;
    public String uid;
    public String bid;
    public Integer num;
    public String time;
    public Boolean paid;
    public Boolean completed;
}
