package com.app.horizon.services;

import org.springframework.stereotype.Service;

import com.app.horizon.dtos.CustomerDto;
import com.app.horizon.entities.Customer;



public interface CustomerService {

	Customer getLoginDetails(CustomerDto cdto);

}
