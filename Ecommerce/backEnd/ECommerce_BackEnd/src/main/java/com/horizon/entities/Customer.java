package com.horizon.entities;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@AllArgsConstructor
@ToString
@NoArgsConstructor
public class Customer extends BaseEntity {
  
	private String firstName;
	
	private String lastName;
	
	private Integer coins;
	
	private String email;
	
	private String password;
	
	private String mobile;
	
	@OneToOne
	private Cart cart;
	
	private Boolean isExclusive;
	
	private byte[] image;
	
	@OneToMany
	private List<Orders> orders;
	
	@OneToOne
	private WishList list;
	
	@OneToOne
	private CustomerAddress address;
	
	
}
