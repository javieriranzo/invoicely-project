package com.invoicely.backend.repository;

import com.invoicely.backend.model.Invoice;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InvoiceRepositoryDetails extends JpaRepository<Invoice, Long> {
}
