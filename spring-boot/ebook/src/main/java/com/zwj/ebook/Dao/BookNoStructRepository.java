package com.zwj.ebook.Dao;

import com.zwj.ebook.Entity.BookNoStruct;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface BookNoStructRepository extends MongoRepository<BookNoStruct, String> {
    BookNoStruct findByNum(String id);
}