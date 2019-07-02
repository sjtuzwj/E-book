package com.zwj.ebook.Service;

import com.zwj.ebook.Entity.User;

import java.util.List;

public interface UserService {
    public User getUser(String id);
    public void addUser(User user);

    public void updateUser(User user);

    public void deleteUser(String id);

    public List<User> getList();
}
