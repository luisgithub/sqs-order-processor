package com.lugarsoft.local_sqs.consumer;

import com.lugarsoft.local_sqs.dto.OrderEvent;
import io.awspring.cloud.sqs.annotation.SqsListener;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class OrderConsumer {

    // Spawns message listeners that poll your SQS queue automatically
    @SqsListener("${app.queues.order-processing-queue}")
    public void receiveOrderEvent(OrderEvent event) {
        log.info("Received order event from SQS: {}", event);

        // Add business logic here (e.g., updating databases, triggering emails)

        // By default, if this method exits cleanly, the message is acknowledged and deleted from SQS.
        // If an exception is thrown, the message returns to the queue based on visibility settings.
    }
}
