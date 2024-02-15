package com.app.horizon.entities;



import java.util.List;

import javax.persistence.CascadeType;
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
	
	@OneToMany(mappedBy = "customer",cascade = CascadeType.ALL, orphanRemoval = true)
	private List<CartProductQuantity> cart;
	
	@OneToMany(mappedBy = "customer",cascade = CascadeType.ALL, orphanRemoval = true)
	private List<OrderProductQuantity> order;
	
	private Boolean isExclusive;
	
	private byte[] customerImage;
	
	
	@OneToOne(mappedBy = "customer",cascade = CascadeType.ALL, orphanRemoval = true)
	private WishList wishlist;
	
	@OneToOne
	private CustomerAddress address;
	
	
}
