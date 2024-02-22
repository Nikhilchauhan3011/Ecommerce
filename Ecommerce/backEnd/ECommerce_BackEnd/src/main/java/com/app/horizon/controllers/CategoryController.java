package com.app.horizon.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.horizon.services.CategoryService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/Category")
public class CategoryController {
	@Autowired
	CategoryService categoryService;
	
	
	@GetMapping("/AllCategories")
	public ResponseEntity<?> getAllCategopries(){
		return ResponseEntity.ok(categoryService.getAllCategories());
	}
}
