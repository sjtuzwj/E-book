package com.zwj.ebook.Controller;

import java.util.List;

import com.zwj.ebook.Entity.User;
import com.zwj.ebook.ServiceImpl.UserServiceImpl;
import org.apache.tomcat.util.codec.binary.Base64;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
@CrossOrigin
@RestController
@RequestMapping("/api/users")
public class UserController {

    private static final Logger logger = LoggerFactory.getLogger(UserController.class);
    final Base64 base64 = new Base64();

    @Autowired
    private UserServiceImpl userService;

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
    public User deleteUser(@PathVariable String id){
        logger.info("从数据中删除"+id);
        userService.deleteUser(id);
        User u = new User();
        u.id = id;
        return u;
    }

    @RequestMapping(value="",method= RequestMethod.POST)
    @ResponseBody
    public User addUser(@RequestBody User user){
        logger.info("添加"+user.id);
        userService.addUser(user);
        return user;
    }

    @RequestMapping(value="",method= RequestMethod.PUT)
    @ResponseBody
    public User updateUser(@RequestBody User user){
        logger.info("修改"+user.id);
        userService.updateUser(user);
        return user;
    }

}