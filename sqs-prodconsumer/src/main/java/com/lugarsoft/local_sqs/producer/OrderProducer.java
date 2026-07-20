package com.lugarsoft.local_sqs.producer;

import com.lugarsoft.local_sqs.dto.OrderEvent;
import io.awspring.cloud.sqs.operations.SqsTemplate;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class OrderProducer {
    private final SqsTemplate sqsTemplate;
    private final String queueName;

    public OrderProducer(SqsTemplate sqsTemplate,
                         @Value("${app.queues.order-processing-queue}") String queueName) {
        this.sqsTemplate = sqsTemplate;
        this.queueName = queueName;
    }

    public void publishOrderEvent(OrderEvent event) {
        // Automatically serializes the record to JSON and sends it to SQS
        sqsTemplate.send(to -> to
                .queue(queueName)
                .payload(event));
        log.info("Evant sent to a queue: {}", event);
    }
}
