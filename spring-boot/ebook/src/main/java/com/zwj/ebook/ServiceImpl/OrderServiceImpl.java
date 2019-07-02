package com.zwj.ebook.ServiceImpl;

import java.util.List;

import com.zwj.ebook.Dao.OrderRepository;
import com.zwj.ebook.Entity.Order;
import com.zwj.ebook.Service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderServiceImpl implements OrderService {
    @Autowired
    private OrderRepository orderRepository;

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
    public List<Order> searchOrderB(String bid){
        return orderRepository.findAllByBid(bid);
    }

    public List<Order> getList(){
        return orderRepository.findAll();
    }
}