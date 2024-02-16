package com.app.horizon.entities;



import javax.persistence.Entity;
import javax.persistence.ManyToOne;

import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

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
	@JsonProperty(access=Access.WRITE_ONLY)
	private Customer customer;
	private int quantity;


}
