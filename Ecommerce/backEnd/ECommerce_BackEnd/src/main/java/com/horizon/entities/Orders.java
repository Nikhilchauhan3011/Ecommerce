package com.horizon.entities;

import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.OneToMany;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
@AllArgsConstructor
@Entity
public class Orders extends BaseEntity{
	
	private LocalDateTime orderDate ;
	
	private LocalDateTime deliverDate;
	
	@OneToMany
	private List<ProductQuantity> productQuantity;
}
