package com.invoicely.backend.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "orders_details")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class OrdersDetails  {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ordt_id", nullable = false, updatable = false)
    private Long id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "ordt_or_id", referencedColumnName = "or_id")
    private Orders orders;

    @ManyToOne(optional = false)
    @JoinColumn(name = "ordt_pd_id", referencedColumnName = "pd_id")
    private Product product;

    @Column(name = "ordt_quantity", nullable = false)
    private Integer quantity;

    @Column(name = "ordt_unit_price", precision = 10, scale = 2)
    private Double unitPrice;

    @Column(name = "ordt_line_total", precision = 10, scale = 2)
    private Double lineTotal;

}