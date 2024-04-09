package com.org.cariski.javaserver.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Setter
@Getter
@Table(name = "Request")
public class Request {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "request_id")
    private int id;

    @ManyToOne
    @JoinColumn(name = "destination_id") // Название поля, ссылающегося на destination_id в таблице request
    private Destination destination; // Изменение типа поля на класс Destination

    @Column(name = "cargo_quantity")
    private int cargoQuantity;

    @ManyToOne
    @JoinColumn(name = "cargo_type_id")
    private CargoType cargoType;
}
