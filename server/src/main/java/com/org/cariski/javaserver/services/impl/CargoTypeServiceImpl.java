package com.org.cariski.javaserver.services.impl;

import com.org.cariski.javaserver.models.CargoType;
import com.org.cariski.javaserver.repositories.CargoTypeRepository;
import com.org.cariski.javaserver.services.interfaces.CargoTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CargoTypeServiceImpl implements CargoTypeService {

    private final CargoTypeRepository cargoTypeRepository;

    @Autowired
    public CargoTypeServiceImpl(CargoTypeRepository cargoTypeRepository) {
        this.cargoTypeRepository = cargoTypeRepository;
    }

    @Override
    public List<CargoType> findAll() {
        return cargoTypeRepository.findAll();
    }

    @Override
    public Optional<CargoType> findById(Long id) {
        return cargoTypeRepository.findById(id);
    }

    @Override
    public CargoType create(CargoType cargoType) {
        return cargoTypeRepository.save(cargoType);
    }

    @Override
    public Optional<CargoType> delete(Long id) {
        Optional<CargoType> deleted = cargoTypeRepository.findById(id);
        deleted.ifPresent(cargoType -> cargoTypeRepository.delete(cargoType));
        return deleted;
    }
}
