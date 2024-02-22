package com.app.horizon.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.horizon.entities.SubCategory;
import com.app.horizon.repos.SuCategoryRepo;

@Service
@Transactional
public class SubCategoryServiceImpl implements SubCategoryService{
	@Autowired
	SuCategoryRepo sRepo;

	@Override
	public List<SubCategory> findById(long id) {
	 	return sRepo.findByCategoryId(id);
	}
	
	
}
