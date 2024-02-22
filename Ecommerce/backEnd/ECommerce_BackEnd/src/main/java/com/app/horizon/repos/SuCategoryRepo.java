package com.app.horizon.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.horizon.entities.SubCategory;

public interface SuCategoryRepo extends JpaRepository<SubCategory, Long>{

	List<SubCategory> findByCategoryId(long id);
}
