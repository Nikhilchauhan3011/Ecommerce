package com.app.horizon.services;

import java.util.List;

import com.app.horizon.entities.SubCategory;

public interface SubCategoryService {
	public List<SubCategory> findById(long id);
}
