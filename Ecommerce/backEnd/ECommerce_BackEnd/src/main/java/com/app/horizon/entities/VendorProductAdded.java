package com.app.horizon.entities;

import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class VendorProductAdded extends BaseEntity{
	int quantity;
	LocalDateTime dateOfAdding;
	
	String productName;
	
	int price;
	
	@ManyToOne
	@JsonProperty(access = Access.WRITE_ONLY)
	Vendor vendor;
}
