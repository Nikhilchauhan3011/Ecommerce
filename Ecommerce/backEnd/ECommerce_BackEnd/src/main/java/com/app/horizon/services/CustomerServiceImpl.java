package com.app.horizon.services;

import java.io.IOException;

import javax.transaction.Transactional;

import org.apache.tomcat.jni.Address;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.ModelMap;
import org.springframework.web.multipart.MultipartFile;

import com.app.horizon.dtos.CustomerDto;
import com.app.horizon.dtos.myResponse;
import com.app.horizon.entities.Customer;
import com.app.horizon.entities.CustomerAddress;
import com.app.horizon.repos.CustomerRepository;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService{

	@Autowired
	CustomerRepository cRepo;
	
	@Autowired
	ModelMapper modelMapper;
	
	
	@Override
	public Customer getCustomerDetails(CustomerDto cDto){
		Customer customer = cRepo.getByEmail(cDto.getEmail());
//		System.out.print(customer);
//		customer.getCart();
//		customer.getOrder();
//		customer.getAddress();
		return customer;
	}

	@Override
	public Customer registerCustomer(CustomerDto cDto) {
		Customer customer = new Customer();
		customer.setFirstName(cDto.getFirstName());
		customer.setLastName(cDto.getLastName());
		customer.setEmail(cDto.getEmail());
		customer.setPassword(cDto.getPassword());
		customer.setCoins(0);
		CustomerAddress customerAddress = new CustomerAddress();
		customerAddress.setCity(cDto.getHomeAddress().getCity());
		customerAddress.setPincode(cDto.getHomeAddress().getPincode());
		customerAddress.setState(cDto.getHomeAddress().getState());
		customerAddress.setFullAddress(cDto.getHomeAddress().getFullAddress());
		customerAddress.setCustomer(customer);
		customer.getAddress().add(customerAddress);
		customer.setIsExclusive(false);
		customer.setMobile(cDto.getMobileNumber());
		
		return cRepo.save(customer);
	}

	@Override
	public Customer uploadImage(MultipartFile file, Long id) throws IOException {
		// TODO Auto-generated method stub
		Customer customer = cRepo.findById(id).orElseThrow();
        customer.setCustomerImage(file.getBytes());
        return cRepo.save(customer);
        
		
	}

	@Override
	public myResponse getLoginDetails(String email, String password) {
		myResponse response = new myResponse();
		Customer customer = cRepo.getByEmail(email);
		if(customer!=null) {
			if(customer.getPassword().equals(password)) {
				response.setId(customer.getId());
				response.setStatus(true);
				return response;
			}
		}
		response.setStatus(false);
		response.setId(-1);
		return response;
	}

}
