package com.invoicely.backend.service;

import com.invoicely.backend.model.Customer;

import java.util.List;
import java.util.Optional;

public interface CustomerService {

    Customer save(Customer customer);
    Customer update(Long id, Customer updateCustomer);
    void delete(Long id);
    Optional<Customer> findById(Long id);
    List<Customer> findAll();

}
