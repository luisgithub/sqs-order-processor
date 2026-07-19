package com.lugarsoft.order_api.controller;

import com.lugarsoft.order_api.DTO.OrderDto;
import com.lugarsoft.order_api.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor
public class OrderController {
    private final OrderService orderService;

    @PostMapping
    public ResponseEntity<OrderDto> createOrder(@RequestBody OrderDto orderDto){
        orderDto = orderService.processOrder(orderDto);
        return ResponseEntity.ok(orderDto);
    }
}
