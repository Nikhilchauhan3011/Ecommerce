package com.app.horizon.controllers;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.horizon.dtos.CustomerDto;
import com.app.horizon.services.CustomerService;


@RestController
@RequestMapping("/Customer")
@CrossOrigin(origins = "http://localhost:3000")
public class CustomerController {
	
	@Autowired
	CustomerService customerService;
	
	@GetMapping("/getCustomer")
	public ResponseEntity<?> getCustomer(@RequestParam String email) {
		CustomerDto cDto = new CustomerDto();
		cDto.setEmail(email);
		return ResponseEntity.status(HttpStatus.OK).body(customerService.getCustomerDetails(cDto));
	}
	
	@GetMapping("/Login")
	public ResponseEntity<?> customerLogin(@RequestParam String email, @RequestParam String password){
		System.out.print(password);
		return ResponseEntity.ok(customerService.getLoginDetails(email,password));
	}
	
	@PostMapping("/SignUp")
	public ResponseEntity<?> registerCustomer(@RequestBody CustomerDto cDto){
		return ResponseEntity.status(HttpStatus.OK).body(customerService.registerCustomer(cDto));
	}
	
	
	@PostMapping("/upload")
    public ResponseEntity<?> uploadImage(@RequestParam("file") MultipartFile file, @RequestParam("id") Long id) throws IOException {
        return ResponseEntity.status(HttpStatus.OK).body(customerService.uploadImage(file, id));
    }
}
