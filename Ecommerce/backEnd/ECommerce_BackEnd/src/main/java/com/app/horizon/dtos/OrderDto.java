package com.app.horizon.dtos;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class OrderDto {
 
	 private Long customerId;
	 
	 private Long productId;
	 
	 private int quantity;
	
}
