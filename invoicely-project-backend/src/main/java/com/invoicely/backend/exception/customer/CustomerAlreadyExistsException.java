package com.invoicely.backend.exception.customer;

public class CustomerAlreadyExistsException extends RuntimeException {

    public CustomerAlreadyExistsException(String dni) {
        super("The customer already exists with a DNI " + dni);
    }

}
