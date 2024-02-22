package com.app.horizon.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.horizon.services.SubCategoryService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/SubCategory")
public class SubCategoryController {
	
	@Autowired
	SubCategoryService subCategoryServivce;
	
	
	@GetMapping("/GetOneCategory")
	public ResponseEntity<?> getSubCategoryById(@RequestParam long categoryId) {
		return ResponseEntity.ok(subCategoryServivce.findById(categoryId));
	}
}
