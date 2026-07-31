package com.lugarsoft.order_api.controller;

import com.lugarsoft.order_api.DTO.OrderDto;
import com.lugarsoft.order_api.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


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

    @PutMapping
    public ResponseEntity<OrderDto> updateOrder(@RequestBody OrderDto orderDto) {
        orderDto = orderService.reprocessOrder(orderDto);
        return ResponseEntity.ok(orderDto);
    }

    @GetMapping(value = "/{orderId}")
    public ResponseEntity<OrderDto> getOrderById(@PathVariable String orderId){
        OrderDto orderDto = orderService.getById(orderId);
        return ResponseEntity.ok(orderDto);
    }

    @GetMapping
    public ResponseEntity<List<OrderDto>> getAllOrders(){
        List<OrderDto> orderDtoList = orderService.getAllOrders();
        return ResponseEntity.ok(orderDtoList);
    }

    @DeleteMapping(value = "/{orderId}")
    public ResponseEntity<String> deleteOrderById(@PathVariable String orderId){
        orderService.deleteOrder(orderId);
        return ResponseEntity.ok("ok");
    }

}
