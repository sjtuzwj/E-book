package com.zwj.ebook.Order;

import java.util.List;

        import org.slf4j.Logger;
        import org.slf4j.LoggerFactory;
        import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/orders")
public class OrderController {

    private static final Logger logger = LoggerFactory.getLogger(OrderController.class);

    @Autowired
    private OrderService orderService;

    @RequestMapping(value="",method=RequestMethod.GET)
    public List<Order> getOrders(){
        logger.info("从数据库读取Order集合");
        return orderService.getList();
    }

    @RequestMapping(value="/{id}",method= RequestMethod.GET)
    public List<Order> getOrder(@PathVariable String id){
        logger.info("从数据中读取"+id);
        return orderService.getOrder(id);
    }

    @RequestMapping(value="/{id}",method= RequestMethod.DELETE)
    public void deleteOrder(@PathVariable String id){
        logger.info("从数据中删除"+id);
        orderService.deleteOrder(id);
    }

    @RequestMapping(value="",method= RequestMethod.POST)
    public void addOrder(Order order){
        logger.info("添加"+order.id);
        orderService.addOrder(order);
    }

    @RequestMapping(value="",method= RequestMethod.PUT)
    public void updateOrder(Order order){
        logger.info("修改"+order.id);
        orderService.updateOrder(order);
    }

    @RequestMapping(value="/",method= RequestMethod.GET)
    public List<Order> searchOrder(String uid){
        logger.info("从数据中读取"+ uid);
        return orderService.searchOrder(uid);
    }
}