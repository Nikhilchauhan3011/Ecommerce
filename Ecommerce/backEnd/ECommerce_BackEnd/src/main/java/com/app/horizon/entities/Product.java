package com.app.horizon.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
public class Product extends BaseEntity{
	
	private String productName;
	
	private int rating;
	
	private String description;
	
	private Long numberOfPeopleRated;
	

	@OneToMany(mappedBy = "product",cascade = CascadeType.ALL, orphanRemoval = true)
	private List<ProductImage> images;
	
	private int stock;
	
	private String specifications;
	
	private String brand;
	
	private int price;
	
	@OneToMany(mappedBy = "product",cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Reviews> reviews;
	
	@ManyToOne
	private SubCategory subCategory;
	
	private boolean isAvailable;
	
	private String productType;
	
	
}
