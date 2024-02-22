package com.app.horizon.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Vendor extends BaseEntity{
	
	private String firstName;
	
	private String lastName;
	
	private String mobile;
	
	private String email;
	
	private String password;
	
	private String gstNo;
	
	private String shopName;
	
	private String adharNumber;
	
	@OneToMany(mappedBy = "vendor",cascade = CascadeType.ALL, orphanRemoval = true)
	@LazyCollection(LazyCollectionOption.FALSE)
	private List<VendorAddress> vendorAddress = new ArrayList<VendorAddress>();
	
	@OneToMany(mappedBy = "vendor", cascade = CascadeType.ALL, orphanRemoval = true)
	@LazyCollection(LazyCollectionOption.FALSE)
	private List<VendorProductAdded> vendorProductAdded;
}	
