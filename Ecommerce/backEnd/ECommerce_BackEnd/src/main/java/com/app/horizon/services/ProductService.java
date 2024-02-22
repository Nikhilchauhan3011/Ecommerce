package com.app.horizon.services;

import java.io.IOException;
import java.util.List;

import com.app.horizon.dtos.ProductDto;


public interface ProductService {

	String addNewProduct(ProductDto prod) throws IOException;

	ProductDto getProductDetails(Long prodId);

	List<ProductDto> getListProductDetails(String productString);

}
