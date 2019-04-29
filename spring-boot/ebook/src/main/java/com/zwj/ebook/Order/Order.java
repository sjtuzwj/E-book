package com.zwj.ebook.Order;

import lombok.Setter;
import lombok.Getter;
@Setter
@Getter
public class Order {
    public String id;
    public String uid;
    public String bid;
    public Integer num;
    public String time;
    public Boolean paid;
    public Boolean completed;
}
