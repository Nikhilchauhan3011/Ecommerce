package com.app.horizon.dtos;



import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


@Getter
@Setter
@ToString
public class ProductDto {
	
	@JsonProperty(access = Access.READ_ONLY)
	private Long id;
	
    private String productName;
	
	private int rating;
	
	private String description;
	
	
	
    private int stock;
	
	private String specifications;
	
	private String brand;
	
	private int price;
	

	@JsonProperty(access = Access.WRITE_ONLY)
	private MultipartFile[] image;
	
	@JsonProperty(access = Access.READ_ONLY)
	private List<byte[]> imgs;
	
	private List<String> reviews;
	
	
    private String subCategory;
	
	private String productType;
	
    
}
