package com.horizon.entities;

import javax.persistence.Entity;

import org.hibernate.internal.build.AllowPrintStacktrace;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@ToString
@Entity
public class SubCategory {
	String SubCategoryName;
	
	
}
