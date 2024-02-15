package com.app.horizon.entities;

import javax.persistence.Entity;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ProductImage extends BaseEntity{

	@Lob
	private Byte[] image;
	
	@ManyToOne
	@MapsId("id")
	private Product product;
	
	

}
