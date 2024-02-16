package com.app.horizon.services;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.horizon.dtos.CustomerDto;
import com.app.horizon.entities.Customer;
import com.app.horizon.repos.CustomerReposiratory;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService{

	@Autowired
	CustomerReposiratory cRepo;
	
	@Override
	public Customer getLoginDetails(CustomerDto cDto){
		Customer customer = cRepo.getByEmail(cDto.getEmail());
//		System.out.print(customer);
		customer.getCart();
		customer.getOrder();
		customer.getAddress();
		return customer;
	}

}
