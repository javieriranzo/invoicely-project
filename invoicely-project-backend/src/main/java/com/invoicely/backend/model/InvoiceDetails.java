package com.invoicely.backend.model;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

@Entity
@Table(name = "invoice_details")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class InvoiceDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ivdt_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "ivdt_iv_id", nullable = false)
    private Invoice invoice;

    @ManyToOne
    @JoinColumn(name = "ivdt_pd_id", nullable = false)
    private Product product;

    @Column(name = "ivdt_quantity", nullable = false)
    private Integer quantity;

    @Column(name = "ivdt_unit_price", nullable = false)
    private BigDecimal unitPrice;

    @Column(name = "ivdt_line_total", nullable = false)
    private BigDecimal lineTotal;

}
