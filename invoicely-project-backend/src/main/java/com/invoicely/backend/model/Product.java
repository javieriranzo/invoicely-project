package com.invoicely.backend.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "product")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "pd_id", nullable = false, updatable = false)
    private Long id;

    @Column(name = "pd_name", nullable = false, length = 200)
    private String name;

    @Column(name = "pd_description", columnDefinition = "TEXT")
    private String description;

    @Column(name = "pd_price", nullable = false, precision = 10, scale = 2)
    private Double price;

    @Column(name = "pd_stock", nullable = false)
    private Integer stock;

    @Column(name = "pd_category", length = 100)
    private String category;

}