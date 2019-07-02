package com.zwj.ebook.Entity;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import javax.persistence.Column;
import javax.persistence.Id;
import java.util.ArrayList;

@Setter
@Getter
@Document(collection = "book")
public class BookNoStruct{
    @Id
    String _id;
    @Field("num")
    public String num;
    //只存非结构化数据，头像和封面都是一对一，不想存这里
    public ArrayList<String> comment;
}