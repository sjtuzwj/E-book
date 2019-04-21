package com.zwj.ebook.User;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private UserService userService;

    @RequestMapping(value="",method=RequestMethod.GET)
    public List<User> getUsers(){
        logger.info("从数据库读取User集合");
        return userService.getList();
    }

    @RequestMapping(value="/{id}",method= RequestMethod.GET)
    public User getUser(@PathVariable String id){
        logger.info("从数据中读取"+id);
        return userService.getUser(id);
    }

    @RequestMapping(value="/{id}",method= RequestMethod.DELETE)
    public void deleteUser(@PathVariable String id){
        logger.info("从数据中删除"+id);
        userService.deleteUser(id);
    }

    @RequestMapping(value="",method= RequestMethod.POST)
    public void addUser(User user){
        logger.info("添加"+user.id);
        userService.addUser(user);
    }

    @RequestMapping(value="",method= RequestMethod.PUT)
    public void updateUser(User user){
        logger.info("修改"+user.id);
        userService.updateUser(user);
    }

}