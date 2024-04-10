package com.org.cariski.javaserver.services.impl;

import com.org.cariski.javaserver.models.Car;
import com.org.cariski.javaserver.repositories.CarRepository;
import com.org.cariski.javaserver.services.interfaces.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CarServiceImpl implements CarService {

    private final CarRepository carRepository;

    @Autowired
    public CarServiceImpl(CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    @Override
    public List<Car> findAll() {
        return carRepository.findAll();
    }

    @Override
    public Optional<Car> findById(Long id) {
        return carRepository.findById(id);
    }

    @Override
    public Car create(Car car) {
        return carRepository.save(car);
    }

    @Override
    public Optional<Car> delete(Long id) {
        Optional<Car> deleted = carRepository.findById(id);
        deleted.ifPresent(car -> carRepository.delete(car));
        return deleted;
    }
}
