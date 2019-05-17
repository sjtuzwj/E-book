package com.zwj.ebook.Order;

import java.util.List;

public interface OrderService {
    public Order getOrder(String id);

    public void addOrder(Order order);

    public void updateOrder(Order order);

    public void deleteOrder(String id);

    public List<Order> searchOrder(String uid);
    public List<Order> getList();
}
