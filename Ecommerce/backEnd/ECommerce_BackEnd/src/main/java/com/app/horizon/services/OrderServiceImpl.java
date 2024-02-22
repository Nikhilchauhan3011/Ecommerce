package com.app.horizon.services;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.horizon.dtos.OrderDto;
import com.app.horizon.entities.Customer;
import com.app.horizon.entities.OrderProductQuantity;
import com.app.horizon.entities.Product;
import com.app.horizon.repos.CustomerReposiratory;
import com.app.horizon.repos.OrderRepository;
import com.app.horizon.repos.ProductRepository;

@Service
@Transactional
public class OrderServiceImpl implements OrderService {
	
	
	
	@Autowired
	OrderRepository orderDao;
	
	@Autowired
	CustomerReposiratory customerDao;
	
	@Autowired
	ProductRepository prodDao;

	@Override
	public String addProductTOCart(OrderDto orderDto) {
		String msg = "Product failed to add in cart.";
		
		
		Optional<Customer> persistantCustomer = customerDao.findById(orderDto.getCustomerId());
		Optional<Product> persistantProduct = prodDao.findById(orderDto.getProductId());
		
		Customer customer;
		Product product;
		
		if(persistantCustomer.isEmpty()) {
			return "Customer with this ID doesn't exist.";
		}else {
			customer = persistantCustomer.get();
			product  = persistantProduct.get();
		}
		
		
		OrderProductQuantity order =  new OrderProductQuantity();
		
		order.setOrderDate(LocalDateTime.now());
		order.setDeliverDate(LocalDateTime.now().plus(3,ChronoUnit.DAYS));
		order.setCustomer(customer);
		order.setProduct(product);
		
		
		if(product.getStock() >= orderDto.getQuantity()) {
		order.setQuantity(orderDto.getQuantity());
		}else {
			return "Product is Out of Stock";
		}
		
		product.setStock(product.getStock() - orderDto.getQuantity());
		
		customer.getOrder().add(order);
		
		prodDao.save(product);
		
		customerDao.save(customer);
		
	    
		return msg;
	}

	
}
