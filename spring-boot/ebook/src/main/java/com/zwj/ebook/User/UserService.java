package com.zwj.ebook.User;

import java.util.List;

public interface UserService {
    public User getUser(String id);
    public void addUser(User user);

    public void updateUser(User user);

    public void deleteUser(String id);

    public List<User> getList();
}
