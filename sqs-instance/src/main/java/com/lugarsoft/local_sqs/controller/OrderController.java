package com.lugarsoft.local_sqs.controller;

import com.lugarsoft.local_sqs.dto.OrderEvent;
import com.lugarsoft.local_sqs.producer.OrderProducer;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    private final OrderProducer orderProducer;

    public OrderController(OrderProducer orderProducer) {
        this.orderProducer = orderProducer;
    }

    @PostMapping
    public ResponseEntity<String> createOrder(@RequestBody OrderEvent event) {
        orderProducer.publishOrderEvent(event);
        return ResponseEntity.ok("Order event published to SQS successfully!");
    }
}
