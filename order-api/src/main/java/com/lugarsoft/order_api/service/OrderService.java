package com.lugarsoft.order_api.service;

import com.lugarsoft.order_api.DTO.OrderDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.UUID;

@Slf4j
@Service
public class OrderService {
    private HashMap<String, OrderDto> orders = new HashMap<>();

    public OrderDto processOrder(OrderDto orderDto){
        orderDto = orderDto.withId(UUID.randomUUID().toString());
        orders.put(orderDto.id(), orderDto);
        log.info("Order {} has been processed", orderDto.id());
        return orderDto;
    }

    public OrderDto getById(String orderId){
        return orders.get(orderId);
    }

    public List<OrderDto> getAllOrders(){
        return orders.values().stream().toList();
    }

    public void deleteOrder(String orderId){
        orders.remove(orderId);
    }

}
