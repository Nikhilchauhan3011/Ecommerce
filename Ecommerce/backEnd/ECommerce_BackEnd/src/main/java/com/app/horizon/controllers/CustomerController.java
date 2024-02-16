package com.app.horizon.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.horizon.dtos.CustomerDto;
import com.app.horizon.services.CustomerService;


@RestController
@RequestMapping("/Customer")
public class CustomerController {
	
	@Autowired
	CustomerService customerService;
	
	@PostMapping("/Login")
	public ResponseEntity<?> checkLogin(@RequestBody CustomerDto cDto) {
		return ResponseEntity.status(HttpStatus.OK).body(customerService.getLoginDetails(cDto));
	}
}
