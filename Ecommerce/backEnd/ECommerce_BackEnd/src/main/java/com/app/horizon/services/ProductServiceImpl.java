package com.app.horizon.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;


import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.app.horizon.dtos.ProductDto;
import com.app.horizon.entities.Product;
import com.app.horizon.entities.ProductImage;
import com.app.horizon.entities.Reviews;
import com.app.horizon.repos.ProductRepository;

@Service
@Transactional
public class ProductServiceImpl implements ProductService{
	
	@Autowired
	ModelMapper mapper;
	
	@Autowired
	private ProductRepository prodDao;
	
	@Override
	public String addNewProduct(ProductDto prod) {
		
		String message = "Product failed to added";
		Product product = new Product();
		
		product.setProductName(prod.getProductName().toUpperCase());
		product.setRating(prod.getRating());
		product.setDescription(prod.getDescription());
		product.setStock(prod.getStock());
		product.setSpecifications(prod.getSpecifications());
		product.setBrand(prod.getBrand().toUpperCase());
		product.setPrice(prod.getPrice());
		
		product.setReviews(null);
		
		product.setNumberOfPeopleRated(0L);
		
		product.setAvailable(true);
	
		
		
		product.setImages(prod.getImage());
		
		product.setSubCategory(null);
		
		product.setProductType(prod.getProductType().toUpperCase());
		
		
	    try {
	    	
	   	Product persistProduct = prodDao.findByProductNameAndProductTypeAndBrand(prod.getProductName(), prod.getProductType(), prod.getBrand());
	    if(persistProduct == null) {		
		prodDao.save(product);
		message = "Product successfully added";
	    }else
	    {
	    	
	    	int stock = persistProduct.getStock() + product.getStock();
	    	persistProduct.setStock(stock);
	    	
	    	prodDao.save(persistProduct);
	    	
	    }
		
	    } catch(Exception ex) {
	    	ex.printStackTrace();
	    }
		
		return message;
	}

	@Override
	public ProductDto getProductDetails(Long prodId) {
		
		Optional<Product> optionalProd = prodDao.findById(prodId);
		ProductDto prodDto = null;
		Product product;
        
		if(!optionalProd.isEmpty()) {
			product = optionalProd.get();
			prodDto = new ProductDto();
			
			
			prodDto.setProductName(product.getProductName());
			prodDto.setRating(product.getRating());
			prodDto.setDescription(product.getDescription());
			prodDto.setStock(product.getStock());
			prodDto.setSpecifications(product.getSpecifications());
			prodDto.setBrand(product.getBrand());
			prodDto.setPrice(product.getPrice());

			
			List<ProductImage> images = product.getImages();
			List<byte[]> dtoimag = new ArrayList<>();
			
			for(ProductImage img : images) {
				dtoimag.add(img.getImage());
			}
			
			prodDto.setImgs(dtoimag);
			
			List<Reviews> reviews = product.getReviews();
			List<String> dtoreview = new ArrayList<>();
			
			for(Reviews rev : reviews) {
				dtoreview.add(rev.getReview());
			}
			
			prodDto.setReviews(dtoreview);
			
			prodDto.setSubCategory(product.getSubCategory().getSubCategoryName());
			prodDto.setProductType(product.getProductType());
			
		}
		
		return prodDto;
	}

	@Override
	public List<ProductDto> getListProductDetails(String productString) {
		
		  List<Product> products = prodDao.findByProductNameStartsWith(productString);
		  List<ProductDto> resultList = new ArrayList<>();
		  
		  for(Product product : products) {
			  
			  
			  //******************************************************************//
			  
			  ProductDto prodDto = new ProductDto();
			  
			  
			    prodDto.setProductName(product.getProductName());
				prodDto.setRating(product.getRating());
				prodDto.setDescription(product.getDescription());
				prodDto.setStock(product.getStock());
				prodDto.setSpecifications(product.getSpecifications());
				prodDto.setBrand(product.getBrand());
				prodDto.setPrice(product.getPrice());

				
				List<ProductImage> images = product.getImages();
				List<byte[]> dtoimag = new ArrayList<>();
				
				for(ProductImage img : images) {
					dtoimag.add(img.getImage());
				}
				
				prodDto.setImgs(dtoimag);
				
				List<Reviews> reviews = product.getReviews();
				List<String> dtoreview = new ArrayList<>();
				
				for(Reviews rev : reviews) {
					dtoreview.add(rev.getReview());
				}
				
				prodDto.setReviews(dtoreview);
				
				prodDto.setSubCategory("Laptop");
				prodDto.setProductType("Laptop");
				
			  
			  
			  
			  //******************************************************************//
			  
			  resultList.add(prodDto);
				
		  }
		   
		  
		return resultList;
	}

}
