package com.app.horizon.services;

import com.app.horizon.dtos.VendorDtos;
import com.app.horizon.dtos.myResponse;
import com.app.horizon.entities.Vendor;

public interface VendorService {

	Vendor addVendor(VendorDtos vDto);

	myResponse checkVendor(String email, String password);

}
