package com.zwj.ebook.Dao;

import com.zwj.ebook.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends JpaRepository<User,String>, CrudRepository<User, String> {
}