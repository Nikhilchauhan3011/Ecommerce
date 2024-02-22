package com.app.horizon.dtos;

import javax.persistence.OneToOne;

import com.app.horizon.entities.Vendor;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Data
public class VendorDtos {
	String firstName;
	
	String lastName;
	
	String email;
	
	String password;
	
	String shopName;
	
	String adharNumber;
	
	String gstNumber;
	
	String mobileNumber;
	
	AddressDto homeAddress;
	
	AddressDto shopAddress;

	
}
