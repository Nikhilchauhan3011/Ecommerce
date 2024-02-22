package com.app.horizon.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import com.app.horizon.dtos.OrderDto;
import com.app.horizon.services.OrderService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@RequestMapping("/order")
public class OrderController {
	
	@Autowired
	private OrderService orderServ;
	
	
	@PostMapping
	public ResponseEntity<?> addProductTOCart(@RequestBody OrderDto orderDto){
		
		System.out.println("in Add Product To Cart");	
		
		try {
			return ResponseEntity.status(HttpStatus.OK).body(orderServ.addProductTOCart(orderDto));
		}catch(Exception ex) {
			ex.printStackTrace();
		}
		
		
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Something is fishy.");
	}

}
