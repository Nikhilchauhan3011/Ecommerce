package com.app.horizon.services;

import javax.transaction.Transactional;
import javax.validation.constraints.Email;import org.hibernate.cfg.ImprovedNamingStrategy;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.horizon.dtos.VendorDtos;
import com.app.horizon.dtos.myResponse;
import com.app.horizon.entities.Vendor;
import com.app.horizon.entities.VendorAddress;
import com.app.horizon.repos.VendorRepo;

@Service
@Transactional
public class VendorServiceImpl implements VendorService{
	@Autowired
	VendorRepo vRepo;
	
	@Autowired
	ModelMapper mapper;
	

	@Override
	public Vendor addVendor(VendorDtos vDto) {
		//copying all properties of vdto to vendor
		Vendor vendor = new Vendor();
		vendor.setFirstName(vDto.getFirstName());
		vendor.setLastName(vDto.getLastName());
		vendor.setEmail(vDto.getEmail());
		vendor.setPassword(vDto.getPassword());
		vendor.setGstNo(vDto.getGstNumber());
		vendor.setAdharNumber(vDto.getAdharNumber());
		vendor.setMobile(vDto.getMobileNumber());
		vendor.setShopName(vDto.getShopName());
		VendorAddress vendorAddress = new VendorAddress();
		//copying vdto home address to vendor address
		vendorAddress.setCity(vDto.getHomeAddress().getCity());
		vendorAddress.setFullAddress(vDto.getHomeAddress().getFullAddress());
		vendorAddress.setPincode(vDto.getHomeAddress().getPincode());
		vendorAddress.setState(vDto.getHomeAddress().getState());
		vendorAddress.setType(vDto.getHomeAddress().getType());
		vendorAddress.setVendor(vendor);

		vendor.getVendorAddress().add(vendorAddress);
		
		
		//copying vdto shop address to vendor address
		VendorAddress vendorAddress2 = new VendorAddress();
		vendorAddress2.setCity(vDto.getShopAddress().getCity());
		vendorAddress2.setFullAddress(vDto.getShopAddress().getFullAddress());
		vendorAddress2.setPincode(vDto.getShopAddress().getPincode());
		vendorAddress2.setState(vDto.getShopAddress().getState());
		vendorAddress2.setType(vDto.getShopAddress().getType());
		vendorAddress2.setVendor(vendor);
		
		vendor.getVendorAddress().add(vendorAddress2);
		
		return vRepo.save(vendor);
		
	}

	@Override
	public myResponse checkVendor(String email, String password) {
		// TODO Auto-generated method stub
		myResponse response = new myResponse();
		Vendor vendor = vRepo.getByEmail(email);
		if(vendor!=null) {
			if(vendor.getPassword().equals(password)) {
				response.setId(vendor.getId());
				response.setStatus(true);
				response.setName(vendor.getFirstName());
				return response;
			}
		}
		response.setId(-1);
		response.setStatus(false);
		return response;
	}
	
}
