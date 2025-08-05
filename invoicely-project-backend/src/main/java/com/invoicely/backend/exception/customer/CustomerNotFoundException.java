package com.invoicely.backend.exception.customer;

public class CustomerNotFoundException extends RuntimeException {

    public CustomerNotFoundException(Long id) {
        super("Customer with id " + id + " not found");
    }

    public CustomerNotFoundException() {
        super("Customer not found");
    }

}
