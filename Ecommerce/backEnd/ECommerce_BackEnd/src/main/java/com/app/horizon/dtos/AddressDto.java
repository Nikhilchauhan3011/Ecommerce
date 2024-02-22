package com.app.horizon.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Data
public class AddressDto {
	int pincode;
	
	String city;
	
	String state;
	
	String fullAddress;
	
	boolean type; //1 for shop and 0 for home
	
	public boolean getType() {
		return type;
	}
}
