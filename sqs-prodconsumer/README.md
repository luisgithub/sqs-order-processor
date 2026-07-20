# SQS Instance

Local SQS message broker and producer/consumer service.

## Stack

- Spring Boot 3.5 / Java 21
- Spring Cloud AWS 3.2
- ElasticMQ (Docker) as local SQS emulator

## Quick Start

### Start ElasticMQ (Docker)

```bash
docker compose up -d
```

| Service | URL |
|---|---|
| SQS Endpoint | http://localhost:9324 |
| SQS Management UI | http://localhost:3000 |

### Start the Spring Boot service

```bash
./mvnw spring-boot:run
```

Available at http://localhost:8084

## Queues

| Queue | Type | FIFO | Deduplication |
|---|---|---|---|
| `order-processing-queue` | Standard | No | N/A |
| `payment-transactions.fifo` | FIFO | Yes | Content-based |

## API

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/orders` | Publish an order event to SQS |

**Request body:**

```json
{
  "orderId": "ORD-001",
  "status": "PENDING",
  "amount": 99.99
}
```

## Configuration

Key properties in `src/main/resources/application.yaml`:

```yaml
server:
  port: 8084
spring:
  cloud:
    aws:
      sqs:
        endpoint: http://localhost:9324
      region:
        static: us-east-1
      credentials:
        access-key: noop
        secret-key: noop
app:
  queues:
    order-processing-queue: "my-order-queue"
```

## Project Structure

```
src/main/java/com/lugarsoft/local_sqs/
├── controller/OrderController.java   # REST endpoint
├── producer/OrderProducer.java       # Sends messages to SQS
├── consumer/OrderConsumer.java       # Listens for SQS messages
├── dto/OrderEvent.java               # Message payload record
└── LocalSqsApplication.java          # Main application class
```
