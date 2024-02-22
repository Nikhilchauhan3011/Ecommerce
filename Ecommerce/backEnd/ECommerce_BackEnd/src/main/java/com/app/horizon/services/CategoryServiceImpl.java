package com.app.horizon.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.horizon.entities.Category;
import com.app.horizon.repos.CategoryRepo;

@Service
@Transactional
public class CategoryServiceImpl implements CategoryService{
	@Autowired
	CategoryRepo cRepo;
	
	public List<Category> getAllCategories() {
		return cRepo.findAll();
	}
}
