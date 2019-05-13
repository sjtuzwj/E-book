package com.zwj.ebook.Order;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface OrderRepository extends JpaRepository<Order,String>, CrudRepository<Order, String> {
    List<Order> findAllByUid(String uid);

}