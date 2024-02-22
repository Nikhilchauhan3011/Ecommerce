package com.app.horizon.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.horizon.dtos.ProductDto;
import com.app.horizon.services.ProductService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@RequestMapping("/Product")
public class ProductController {
	
	@Autowired
	private ProductService prodServ;
	
	@PostMapping
	public ResponseEntity<?> addNewProduct(@RequestBody ProductDto prod) {
		try{
		System.out.println("in add new product " + prod);
		
		 prodServ.addNewProduct(prod);
		 return ResponseEntity.status(HttpStatus.OK).body("All Data Submitted SuccessFully.");
		}
		catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return ResponseEntity.badRequest().body("Data Submission is not Successfull.");
	}
	
	@GetMapping(value = "/{prodId}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getProduct(@PathVariable Long prodId){
		
		System.out.println("in get product ");
		
		try {
			
		return ResponseEntity.status(HttpStatus.OK).body(prodServ.getProductDetails(prodId));
		
		}catch(Exception ex) {
			ex.printStackTrace();
		}
		return ResponseEntity.badRequest().body("Failed to fetch the details.");
		
	}

	@GetMapping("/{productString}")
	public ResponseEntity<?> getListProduct(@PathVariable String productString){
		System.out.println("in getListProduct");
		
		try {
			
			return ResponseEntity.status(HttpStatus.OK).body(prodServ.getListProductDetails(productString));
			
			}catch(Exception ex) {
				ex.printStackTrace();
			}
			return ResponseEntity.badRequest().body("Failed to fetch the details.");
		
		
		
	}
	
}
