package com.invoicely.backend.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "customer")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cs_id", nullable = false, updatable = false)
    private Long id;

    @Column(name = "cs_client_type", nullable = false, updatable = false, length = 150)
    private String clientType;

    @Column(name = "cs_first_name", nullable = false, length = 150)
    private String firstName;

    @Column(name = "cs_last_name", length = 150)
    private String lastName;

    @Column(name = "cs_identification_document", length = 20)
    private String identificationDocument;

    @Column(name = "cs_identification_number", length = 50)
    private String identificationNumber;

    @Column(name = "cs_email", length = 150)
    private String email;

    @Column(name = "cs_phone_number", length = 30)
    private String phoneNumber;

    @Column(name = "cs_address", length = 255)
    private String address;

    @Column(name = "cs_zip_code", length = 20)
    private String zipCode;

    @Column(name = "cs_city", length = 100)
    private String city;

    @Column(name = "cs_country", length = 100)
    private String country;

}