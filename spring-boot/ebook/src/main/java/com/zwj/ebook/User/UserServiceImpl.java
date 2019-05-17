package com.zwj.ebook.User;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements  UserService {
    @Autowired
    private  UserRepository userRepository;

    public User getUser(String id){
        return userRepository.findById(id).get();
    }

    public void addUser(User user){
        userRepository.save(user);
    }

    public void updateUser(User user){
        userRepository.save(user);
    }

    public void deleteUser(String id){
        userRepository.deleteById(id);
    }

    public List<User> getList(){
        return userRepository.findAll();
    }
}