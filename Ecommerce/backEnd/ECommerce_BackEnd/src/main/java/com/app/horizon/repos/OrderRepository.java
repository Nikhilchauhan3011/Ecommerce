package com.app.horizon.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.horizon.entities.OrderProductQuantity;

public interface OrderRepository extends JpaRepository<OrderProductQuantity, Long>{

}
