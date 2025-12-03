package com.invoicely.backend.model;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.sql.Date;
import java.util.List;

@Entity
@Table(name = "invoice")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Invoice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "iv_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "iv_cs_id", nullable = false)
    private Customer customer;

    @Column(name = "iv_issue_date", nullable = false)
    private Date issueDate;

    @Column(name = "iv_payment_date")
    private Date paymentDate;

    @Column(name = "iv_payment_method", length = 50)
    private String paymentMethod;

    @Column(name = "iv_subtotal", nullable = false)
    private BigDecimal subtotal;

    @Column(name = "iv_tax", nullable = false)
    private BigDecimal tax;

    @Column(name = "iv_total", nullable = false)
    private BigDecimal total;

    @OneToMany(mappedBy = "invoice", cascade = CascadeType.ALL)
    private List<InvoiceDetails> details;

}
