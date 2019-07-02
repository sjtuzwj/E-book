package com.zwj.ebook.Service;

import com.zwj.ebook.Entity.Book;
import com.zwj.ebook.Entity.Order;

import java.util.List;

public interface OrderService {
    Order getOrder(String id);

    void addOrder(Order order);

    void updateOrder(Order order);

    void deleteOrder(String id);

    List<Order> searchOrder(String uid);

    List<Order> getList();
}
