package com.horizon.entities;

import javax.persistence.Entity;
import javax.persistence.OneToOne;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CustomerAddress extends BaseEntity{
	
	private int pincode;
	
	private String city;
	
	private String state;
	
	private String fullAddress;
 
	@OneToOne
	private Customer customer;
}
