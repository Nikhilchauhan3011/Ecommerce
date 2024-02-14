package com.horizon.entities;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;




//challenge one
@Getter
@Setter
@AllArgsConstructor
@ToString
@Entity
public class ProductQyantity extends BaseEntity{
	@OneToOne
	private Product product;
	private LocalDateTime purchaseTime;
	@OneToMany
	private Customer customer;
	private int quantity;
	
	
}
