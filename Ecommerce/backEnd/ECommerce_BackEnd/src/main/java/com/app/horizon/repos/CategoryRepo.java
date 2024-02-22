package com.app.horizon.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.horizon.entities.Category;

public interface CategoryRepo extends JpaRepository<Category, Long>{
	
}
