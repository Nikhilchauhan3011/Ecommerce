package com.app.horizon.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.horizon.services.VendorProduct;

@RestController
@RequestMapping("/VendorProduct")
@CrossOrigin(origins = "http://localhost:3000")

public class VendorProductController {
	
	@Autowired
	VendorProduct vendorProduct;
	
	@GetMapping("/AllProducts")
	public ResponseEntity<?> getVendorProductData(@RequestParam int Vendorid){
		System.out.println();
		System.out.println();
		System.out.println();
		System.out.println();
		System.out.print(vendorProduct.getData(Vendorid));
		System.out.println();
		System.out.println();
		System.out.println();
		System.out.println();
		return ResponseEntity.ok(vendorProduct.getData(Vendorid));
	}
	
}
