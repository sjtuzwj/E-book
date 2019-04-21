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
        cart.uid=uid;
        String sql= "SELECT carts.id,carts.num,books.price FROM carts,books Where carts.uid=\""+uid+"\" and carts.id=books.id";
        cart.items= jdbcTemplate.query(sql, rowmapper);
        return cart;
    }


    public void updateCart(Cart cart){
        //困难之处在于要把之前的购物车里的也删了。所以先做删+插的简易版本。
        String sql="Delete from cartitems where uid=\"%s\"".format(cart.uid);
        jdbcTemplate.execute(sql);
        for(CartItem item: cart.items){
            String itemsql=String.format("insert into cartitems values( %s,%s, %d)",cart.uid,item.id,item.num,item.prc);
            jdbcTemplate.execute(itemsql);
        }
}
}