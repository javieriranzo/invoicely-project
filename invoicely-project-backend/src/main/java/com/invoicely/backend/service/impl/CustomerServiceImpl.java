package com.invoicely.backend.service.impl;

import com.invoicely.backend.exception.customer.CustomerAlreadyExistsException;
import com.invoicely.backend.exception.customer.EmailAlreadyExistsException;
import com.invoicely.backend.exception.customer.PhoneAlreadyExistsException;
import com.invoicely.backend.model.Customer;
import com.invoicely.backend.repository.CustomerRepository;
import com.invoicely.backend.service.CustomerService;

import java.util.List;
import java.util.Optional;

public class CustomerServiceImpl implements CustomerService {

    private final CustomerRepository customerRepository;

    public CustomerServiceImpl(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    @Override
    public Customer save(Customer customer) {
        checkCustomerExists(customer);
        return customerRepository.save(customer);
    }

    @Override
    public Customer update(Long id, Customer updateCustomer) {
        Customer existing = customerRepository.findById(id);

        existing.setFirstName(updateCustomer.getFirstName());
        existing.setLastName(updateCustomer.getLastName());
        existing.setEmail(updateCustomer.getEmail());
        existing.setAddress(updateCustomer.getAddress());
        existing.setCity(updateCustomer.getCity());
        existing.setState(updateCustomer.getState());
        existing.setCountry(updateCustomer.getCountry());
        existing.setPostalCode(updateCustomer.getPostalCode());
        existing.setPhoneNumber(updateCustomer.getPhoneNumber());

        return customerRepository.save(existing);
    }

    @Override
    public void delete(Long id) {

    }

    @Override
    public Optional<Customer> findById(Long id) {
        return Optional.empty();
    }

    @Override
    public List<Customer> findAll() {
        return List.of();
    }

    private void checkCustomerExists(Customer customer) {
        if (customerRepository.existsByDni(customer.getDni())) {
            throw new CustomerAlreadyExistsException(customer.getDni());
        }
        if (customerRepository.existsByPhone(customer.getPhoneNumber())) {
            throw new PhoneAlreadyExistsException(customer.getPhoneNumber());
        }
        if (customerRepository.existsByEmail(customer.getEmail())) {
            throw new EmailAlreadyExistsException(customer.getEmail());
        }
    }

}

