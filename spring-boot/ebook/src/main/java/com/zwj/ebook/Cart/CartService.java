package com.zwj.ebook.Cart;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

@Service
public class CartService {
    private RowMapper<CartItem> rowmapper=new RowMapper<CartItem>(){
        @Override
        public CartItem mapRow(ResultSet rs, int rowNum) throws SQLException {
            CartItem cartitem = new CartItem();
            cartitem.id=rs.getString("ID");
            cartitem.num=rs.getInt("num");
            cartitem.prc=rs.getInt("price");
            cartitem.amt=cartitem.num* cartitem.prc;
            return cartitem;
        }
    };
    @Autowired
    private JdbcTemplate jdbcTemplate;

    public Cart getCart(String uid){
        Cart cart=new Cart();
        cart.id=uid;
        String sql= "SELECT cartitems.id,cartitems.num,books.price FROM cartitems,books Where cartitems.uid=\""+uid+"\" and cartitems.id=books.id";
        cart.items= jdbcTemplate.query(sql, rowmapper);
        return cart;
    }


    public void updateCart(Cart cart){
        //困难之处在于要把之前的购物车里的也删了。所以先做删+插的简易版本。
        String sql=String.format("Delete from cartitems where uid='%s'",cart.id);
        jdbcTemplate.execute(sql);
        for(CartItem item: cart.items){
            String itemsql=String.format("insert into cartitems values( '%s','%s', %d)",cart.id,item.id,item.num);
            jdbcTemplate.execute(itemsql);
        }
}
}