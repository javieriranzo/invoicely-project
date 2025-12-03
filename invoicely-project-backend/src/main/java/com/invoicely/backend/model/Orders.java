package com.invoicely.backend.model;

import jakarta.persistence.*;
import lombok.*;

import java.sql.Date;
import java.util.List;

@Entity
@Table(name = "orders")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Orders {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "or_id", nullable = false, updatable = false)
    private Long id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "or_cs_id", referencedColumnName = "cs_id")
    private Customer customer;

    @Column(name = "or_start_date")
    private Date startDate;

    @Column(name = "or_delivery_date")
    private Date deliveryDate;

    @Column(name = "or_status", length = 30)
    private String status;

    @Column(name = "or_total", precision = 10, scale = 2)
    private Double total;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<OrdersDetails> items;

}