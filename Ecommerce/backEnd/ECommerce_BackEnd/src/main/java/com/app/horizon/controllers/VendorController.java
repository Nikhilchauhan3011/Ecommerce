package com.app.horizon.controllers;

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

import com.app.horizon.dtos.VendorDtos;
import com.app.horizon.services.VendorService;

@RestController
@RequestMapping("/Vendor")
@CrossOrigin(origins = "http://localhost:3000")
public class VendorController {
	
	@Autowired
	VendorService vendorService;
	
	@PostMapping("/SignUp")
	public ResponseEntity<?> addVendor(@RequestBody VendorDtos vdto) {
		return ResponseEntity.status(HttpStatus.OK).body(vendorService.addVendor(vdto));
	}
	
	@GetMapping("/Login")
	public ResponseEntity<?> checkVendor(@RequestParam String email, @RequestParam String password){
		System.out.print(email +" " +password);
		return ResponseEntity.status(HttpStatus.OK).body(vendorService.checkVendor(email,password));
	}
	
//	public ResponseEntity<?> add
	
	
}
