package com.org.cariski.javaserver.services.interfaces;

import com.org.cariski.javaserver.models.CargoType;

import java.util.List;
import java.util.Optional;

public interface CargoTypeService {
    List<CargoType> findAll();
    Optional<CargoType> findById(Long id);
    CargoType create(CargoType cargoType);
    Optional<CargoType> delete(Long id);
}
