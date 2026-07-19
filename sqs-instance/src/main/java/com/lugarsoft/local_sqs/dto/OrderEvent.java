package com.lugarsoft.local_sqs.dto;

public record OrderEvent(String orderId, String status, double amount) {
}
