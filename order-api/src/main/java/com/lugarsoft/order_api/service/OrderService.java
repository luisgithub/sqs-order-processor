package com.lugarsoft.order_api.service;

import com.lugarsoft.order_api.DTO.OrderDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import java.util.UUID;

@Slf4j
@Service
@RequiredArgsConstructor
public class OrderService {

    private final RestClient restClient;

    public OrderDto processOrder(OrderDto orderDto){
        orderDto = orderDto.withId(UUID.randomUUID().toString());
        log.info("Order {} has been processed", orderDto.id());
        try {
            restClient.post()
                    .uri("localhost:8088/api/orders")
                    .body(orderDto)
                    .retrieve()
                    .toBodilessEntity();
            return orderDto;
        } catch (Exception ex) {
            log.error("Error while trying send order to SQS Service", ex);
        }
        return null;
    }

}
