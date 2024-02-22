package com.app.horizon.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Data
public class CustomerDto {
	String email;
	String password;
	String firstName;
	String lastName;
	String mobileNumber;
	AddressDto homeAddress;
	
	
}
