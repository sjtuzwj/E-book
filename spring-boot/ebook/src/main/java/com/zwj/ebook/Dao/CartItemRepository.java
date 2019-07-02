package com.zwj.ebook.Dao;

import com.zwj.ebook.Entity.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;


@Repository
public interface CartItemRepository extends JpaRepository<CartItem,String>, CrudRepository<CartItem, String> {
    @Query(value ="SELECT cartitems.uid,cartitems.id,cartitems.num FROM cartitems Where cartitems.uid= ?1"
            ,nativeQuery = true)
    List<CartItem> findAllByUid(String uid);

    @Transactional
    @Modifying
    @Query(value="Delete from cartitems where cartitems.uid=?1",nativeQuery=true)
    void deleteByUid(String uid);
}