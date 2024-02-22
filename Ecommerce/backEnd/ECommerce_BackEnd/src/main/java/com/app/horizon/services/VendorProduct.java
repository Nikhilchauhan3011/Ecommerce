package com.app.horizon.services;

import java.util.List;

import com.app.horizon.dtos.VendorProductDto;
import com.app.horizon.entities.VendorProductAdded;

public interface VendorProduct {

	List<VendorProductAdded> getData(long id);

	VendorProductAdded addVendorProduct(VendorProductDto vpdto);

}
