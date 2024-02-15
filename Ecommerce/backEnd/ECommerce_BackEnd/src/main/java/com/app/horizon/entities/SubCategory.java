package com.app.horizon.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;


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
public class SubCategory extends BaseEntity{
	
	private String SubCategoryName;
	
	@ManyToOne
	private Category category;
	
	@OneToMany(mappedBy = "subCategory",cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Product> product;
	
}
