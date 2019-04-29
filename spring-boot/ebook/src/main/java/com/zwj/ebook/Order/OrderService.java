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
    private RowMapper<Order> rowmapper=new RowMapper<Order>(){
        @Override
        public Order mapRow(ResultSet rs, int rowNum) throws SQLException {
            Order order = new Order();
            order.id=rs.getString("ID");
            order.uid=rs.getString("uid");
            order.bid=rs.getString("bid");
            order.num=rs.getInt("num");
            order.time=rs.getString("time");
            order.paid=rs.getBoolean("paid");
            order.completed=rs.getBoolean("completed");
            return order;
        }
    };
    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<Order> getOrder(String id){
        String sql= "SELECT * FROM orders Where ID='"+id+"'";
        return jdbcTemplate.query(sql, rowmapper);
    }

    public void addOrder(Order order){
        String sql= String.format("insert into orders values(\"%s\",\"%s\",\"%s\",%d,%s,%b,%b)",order.id,order.uid,order.bid,order.num,order.time,order.paid,order.completed);
        jdbcTemplate.execute(sql);
    }

    public void updateOrder(Order order){
        String sql= String.format("update orders set uid=\"%s\",bid=\"%s\", num=%d, time=%s,paid=%b,completed=%b where id='%s'",order.uid,order.bid,order.num,order.time,order.paid,order.completed,order.id);
        jdbcTemplate.execute(sql);
    }

    public void deleteOrder(String id){
        String sql= "DELETE FROM orders Where ID=\""+id+"\"";
        jdbcTemplate.execute(sql);
    }


    public List<Order> searchOrder(String uid){
        String sql= "SELECT * FROM orders Where uid ='"+uid+"'";
        return jdbcTemplate.query(sql, rowmapper);
    }

    public List<Order> getList(){
        String sql = "SELECT * FROM orders";
        return jdbcTemplate.query(sql,rowmapper);
    }
}