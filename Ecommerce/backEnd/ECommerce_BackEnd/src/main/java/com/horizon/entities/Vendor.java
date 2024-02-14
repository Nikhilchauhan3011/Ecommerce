package com.horizon.entities;

import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@Entity
@Table(name = "Vendor_Table")
public class Vendor {
	private String fName;
	private String lName;
	private String mobile;
	private String email;
	private String password;
	private String gstNo;
	private String shopName;
	
	
}
