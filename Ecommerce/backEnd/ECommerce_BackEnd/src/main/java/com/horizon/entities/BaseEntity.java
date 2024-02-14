package com.horizon.entities;

import javax.annotation.Generated;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
@Entity
public class BaseEntity {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
}
