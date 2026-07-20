# SQS Order Processor

A full-stack order processing system with an Angular frontend, a Spring Boot REST API, and a local SQS message queue powered by ElasticMQ.

## Architecture

```
┌──────────────┐     ┌──────────────┐     ┌─────────────────┐     ┌──────────────────┐
│  order-web   │────▶│   order-api  │────▶│  sqs-instance   │────▶│  ElasticMQ (SQS) │
│  Angular 21  │     │ Spring Boot  │     │  Spring Boot    │     │  Local emulator  │
│  Port 4200   │     │  Port 8080   │     │  Port 8084      │     │  Port 9324       │
└──────────────┘     └──────────────┘     └─────────────────┘     └──────────────────┘
```

## Modules

| Module | Description | Tech Stack | Port |
|---|---|---|---|
| `order-web` | Frontend SPA | Angular 21, Angular Material 21, TypeScript 5.9 | 4200 |
| `order-api` | REST API for order CRUD | Spring Boot 4.1, Java 21, Lombok | 8080 |
| `sqs-instance` | SQS producer/consumer service | Spring Boot 3.5, Spring Cloud AWS 3.2, Java 21 | 8084 |

## SQS Queues

Defined in `sqs-instance/elasticmq.conf`:

| Queue Name | Type | Status |
|---|---|---|
| `order-processing-queue` | Standard | Active (producer + consumer wired) |
| `payment-transactions.fifo` | FIFO | Defined (no producer/consumer yet) |

## Getting Started

### Prerequisites

- Java 21
- Node.js 20+ and npm
- Docker and Docker Compose
- Maven 3.9+

### 1. Start the local SQS emulator

```bash
cd sqs-instance
docker compose up -d
```

- SQS endpoint: http://localhost:9324
- SQS UI: http://localhost:3000

### 2. Start the SQS producer/consumer service

```bash
cd sqs-instance
./mvnw spring-boot:run
```

Available at http://localhost:8084

### 3. Start the Order API

```bash
cd order-api
./mvnw spring-boot:run
```

Available at http://localhost:8080

### 4. Start the Angular frontend

```bash
cd order-web
npm install
ng serve
```

Available at http://localhost:4200

## API Endpoints

### order-api (Port 8080)

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/orders` | Create a new order |

### sqs-instance (Port 8084)

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/orders` | Publish an order event to SQS |

## Tech Stack Details

### Frontend (order-web)

- **Angular 21** with standalone components
- **Angular Material 21** (M3 theming) for UI components
- **Reactive Forms** with validation
- **MatSnackBar** toast notifications for success/error feedback
- **Vitest** for unit testing
- **ESLint + Prettier** for code quality
- **Husky + lint-staged** for pre-commit hooks

### Backend (order-api)

- **Spring Boot 4.1** with Java 21
- **Lombok** for boilerplate reduction
- RESTful JSON API

### SQS Service (sqs-instance)

- **Spring Boot 3.5** with Java 21
- **Spring Cloud AWS 3.2** for SQS integration
- **ElasticMQ** (Docker) as a local SQS-compatible message broker
- **SqsTemplate** for sending messages
- **@SqsListener** for consuming messages

## Project Structure

```
sqs-order-processor/
├── order-web/                  # Angular frontend
│   └── src/app/
│       ├── features/
│       │   ├── nav-bar/        # Navigation bar with sidenav
│       │   ├── home/           # Home page
│       │   ├── order/          # Order creation form
│       │   ├── login/          # Login page
│       │   └── toaster/        # SnackBar toast components
│       └── directives/         # Custom directives
├── order-api/                  # Spring Boot REST API
│   └── src/main/java/
│       └── com/lugarsoft/order_api/
│           ├── controller/     # REST controllers
│           ├── service/        # Business logic
│           └── DTO/            # Data transfer objects
└── sqs-instance/               # SQS producer/consumer
    ├── docker-compose.yml      # ElasticMQ containers
    ├── elasticmq.conf          # Queue definitions
    └── src/main/java/
        └── com/lugarsoft/local_sqs/
            ├── controller/     # REST controller
            ├── producer/       # SQS message producer
            ├── consumer/       # SQS message consumer
            └── dto/            # Message DTOs
```
