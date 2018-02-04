package com.todo.todoapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@EnableAutoConfiguration
@ComponentScan(basePackages = {"com.todo"})
@EntityScan("com.todo.entity")
public class TodoSpringbootAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(TodoSpringbootAppApplication.class, args);
	}
}
