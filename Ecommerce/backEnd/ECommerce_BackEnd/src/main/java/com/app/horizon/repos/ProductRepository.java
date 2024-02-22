package com.app.horizon.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.horizon.entities.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{

	List<Product> findByProductNameStartsWith(String productString);
	
	Product findByProductNameAndProductTypeAndBrand(String productName,String productType,String brand);

	
}
