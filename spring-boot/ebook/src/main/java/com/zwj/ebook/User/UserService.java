package com.zwj.ebook.User;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private RowMapper<User> rowmapper=new RowMapper<User>(){
        @Override
        public User mapRow(ResultSet rs, int rowNum) throws SQLException {
            User user = new User();
            user.id=rs.getString("ID");
            user.admin=rs.getBoolean("admin");
            user.forbid=rs.getBoolean("forbid");
            user.password=rs.getString("password");
            user.mail=rs.getString("mail");
            return user;
        }
    };
    @Autowired
    private JdbcTemplate jdbcTemplate;

    public User getUser(String id){
        String sql= "SELECT * FROM users Where ID=\""+id+"\"";
        return jdbcTemplate.queryForObject(sql, rowmapper);
    }

    public void addUser(User user){
        String sql= String.format("insert into users values(\"%s\",\"%s\",%b, \"%s\",%b)",user.id,user.mail,user.forbid,user.password,user.admin);
        jdbcTemplate.execute(sql);
    }

    public void updateUser(User user){
        String sql= String.format("update users set mail=\"%s\",forbid=%b, password=\"%s\",admin=%b where id=\"%s\"",user.mail,user.forbid,user.password,user.admin,user.id);
        jdbcTemplate.execute(sql);
    }

    public void deleteUser(String id){
        String sql= "DELETE FROM users Where ID=\""+id+"\"";
        jdbcTemplate.execute(sql);
    }

    public List<User> getList(){
        String sql = "SELECT * FROM users";
        return jdbcTemplate.query(sql,rowmapper);
    }
}