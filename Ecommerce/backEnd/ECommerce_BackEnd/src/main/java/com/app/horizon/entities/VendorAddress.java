package com.app.horizon.entities;

import javax.persistence.Entity;
import javax.persistence.OneToOne;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@AllArgsConstructor
@ToString
public class VendorAddress extends BaseEntity{
	
	private int pincode;
	
	private String city;
	
	private String state;
	
	private String fullAddress;
	
	@OneToOne
	private Vendor vendor;
	
	
}
