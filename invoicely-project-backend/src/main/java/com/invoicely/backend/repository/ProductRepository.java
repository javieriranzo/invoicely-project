package com.invoicely.backend.repository;

import com.invoicely.backend.model.OrdersDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<OrdersDetails, Long> {
}
