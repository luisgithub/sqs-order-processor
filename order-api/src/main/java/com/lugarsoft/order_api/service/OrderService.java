package com.lugarsoft.order_api.service;

import com.lugarsoft.order_api.DTO.OrderDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Slf4j
@Service
public class OrderService {

    public OrderDto processOrder(OrderDto orderDto){
        orderDto = orderDto.withId(UUID.randomUUID().toString());
        log.info("Order {} has been processed", orderDto.id());
        return orderDto;
    }

}
