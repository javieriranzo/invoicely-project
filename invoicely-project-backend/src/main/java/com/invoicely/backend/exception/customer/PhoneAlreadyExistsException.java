package com.invoicely.backend.exception.customer;

public class PhoneAlreadyExistsException extends RuntimeException {

    public PhoneAlreadyExistsException(String phone) {
        super("The phone is already registered: " + phone);
    }
}
