package com.app.horizon.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.horizon.entities.VendorProductAdded;
@Repository
public interface VendorProductsRepo extends JpaRepository<VendorProductAdded, Long>{
	@Query("SELECT vpa FROM VendorProductAdded vpa WHERE vpa.vendor.id = :vendorId ORDER BY vpa.dateOfAdding DESC")
    List<VendorProductAdded> findByCustomerIdSortedByInsertionDate(@Param("vendorId") Long customerId);
}
		