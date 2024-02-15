package com.app.horizon.entities;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@Entity
public class Vendor extends BaseEntity{
	
	private String firstName;
	
	private String lastName;
	
	private String mobile;
	
	private String email;
	
	private String password;
	
	private String gstNo;
	
	private String shopName;
	
	@OneToOne(mappedBy = "vendor",cascade = CascadeType.ALL, orphanRemoval = true)
	private VendorAddress vendorAddress;
}	
