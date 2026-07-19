package com.lugarsoft.order_api.DTO;

public record OrderDto(String id, String status, double amount) {
    public OrderDto withId(String id){
        return new OrderDto(id, this.status, this.amount);
    }
}
