package com.app.horizon.entities;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import org.hibernate.annotations.ManyToAny;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CustomerAddress extends BaseEntity{
	
	private int pincode;
	
	private String city;
	
	private String state;
	
	private String fullAddress;
 
	@ManyToOne
	@JsonProperty(access=Access.WRITE_ONLY)
	private Customer customer;
}
