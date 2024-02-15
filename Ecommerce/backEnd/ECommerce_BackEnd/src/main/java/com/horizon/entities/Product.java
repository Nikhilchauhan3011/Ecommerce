package com.horizon.entities;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import lombok.extern.jbosslog.JBossLog;

@Getter
@Setter
@AllArgsConstructor
@ToString
@Entity
public class Product extends BaseEntity{
	private String productName;
	private int rating;
	private String description;
	private long numberRating;
	

	private byte[] image;
	private int stock;
	private String specifications;
	private String brand;
	private int price;
	
	@OneToMany
	private SubCategory subCategory;
	
	private boolean isAvailable;
	
	@OneToOne
	private ProductQyantity productQyantity;
	
}
