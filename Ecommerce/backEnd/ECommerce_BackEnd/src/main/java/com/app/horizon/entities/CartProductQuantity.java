package com.app.horizon.entities;



import javax.persistence.Entity;
import javax.persistence.ManyToOne;

import javax.persistence.OneToOne;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Setter
@Getter
@ToString
@AllArgsConstructor
@Entity
@NoArgsConstructor
public class CartProductQuantity extends BaseEntity{
	
	@OneToOne
	private Product product;
	
	private Double price;

	@ManyToOne
	private Customer customer;
	private int quantity;


}
