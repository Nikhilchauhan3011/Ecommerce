package com.app.horizon.entities;



import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
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
	
	@OneToMany(mappedBy = "customer",cascade = CascadeType.ALL, orphanRemoval = true)
	private List<CartProductQuantity> cart = new ArrayList<CartProductQuantity>();
	
	@OneToMany(mappedBy = "customer",cascade = CascadeType.ALL, orphanRemoval = true)
	private List<OrderProductQuantity> order = new ArrayList<OrderProductQuantity>();
	
	private Boolean isExclusive;
	
	private byte[] customerImage;
	
	
	@OneToOne(mappedBy = "customer",cascade = CascadeType.ALL, orphanRemoval = true)
	private WishList wishlist;
	
	@OneToMany(mappedBy = "customer", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<CustomerAddress> address = new ArrayList<CustomerAddress>();
	
	
}
