package com.org.cariski.javaserver.services.interfaces;

import com.org.cariski.javaserver.models.Car;

import java.util.List;
import java.util.Optional;

public interface CarService {
    List<Car> findAll();
    Optional<Car> findById(Long id);
    Car create(Car car);
    Optional<Car> delete(Long id);
}
