package com.zwj.ebook.Order;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

@Service
public class OrderService {
    @Autowired
    private  OrderRepository orderRepository;

    public Order getOrder(String id){
        return orderRepository.findById(id).get();
    }

    public void addOrder(Order order){
        orderRepository.save(order);
    }

    public void updateOrder(Order order){
        orderRepository.save(order);
    }

    public void deleteOrder(String id){
        orderRepository.deleteById(id);
    }

    public List<Order> searchOrder(String uid){
        return orderRepository.findAllByUid(uid);
    }

    public List<Order> getList(){
        return orderRepository.findAll();
    }
}