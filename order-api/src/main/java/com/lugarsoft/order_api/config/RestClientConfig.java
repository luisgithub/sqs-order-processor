package com.lugarsoft.order_api.config;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestClient;

@Slf4j
@Configuration
public class RestClientConfig {

    @Bean
    public RestClient restClient(@Value("${app.sqs-order-queue.url}") String baseUrl) {
        log.info("baseUrl: {}", baseUrl);
        return RestClient.builder()
                .defaultHeader("Content-Type", "application/json") // Optional global header
                .baseUrl(baseUrl)
                .build();
    }
}
