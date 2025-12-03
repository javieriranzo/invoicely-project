package com.invoicely.backend.service;

import com.invoicely.backend.model.Customer;
import com.invoicely.backend.repository.CustomerRepository;

import java.util.List;
import java.util.Optional;

public class CustomerService {

    private final CustomerRepository customerRepository;

    public CustomerService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    public List<Customer> findAll() {
        return customerRepository.findAll();
    }

    public Optional<Customer> findById(Long id) {
        return customerRepository.findById(id);
    }

    public Customer create(Customer newCustomer) {
        return customerRepository.save(newCustomer);
    }

    public Customer update(Long id, Customer updatedCustomer) {
        return customerRepository.findById(id).map(existing -> {
            existing.setFirstName(updatedCustomer.getFirstName());
            existing.setLastName(updatedCustomer.getLastName());
            existing.setEmail(updatedCustomer.getEmail());
            existing.setPhoneNumber(updatedCustomer.getPhoneNumber());
            existing.setAddress(updatedCustomer.getAddress());
            existing.setCity(updatedCustomer.getCity());
            existing.setCountry(updatedCustomer.getCountry());
            return customerRepository.save(existing);
        }).orElseThrow(() -> new RuntimeException("Customer not found"));
    }

    public void delete(Long id) {
        customerRepository.deleteById(id);
    }

}
