package com.invoicely.backend.exception.customer;

public class EmailAlreadyExistsException extends RuntimeException {

    public EmailAlreadyExistsException(String phone) {
        super("The phone is already registered: " + phone);
    }

}
