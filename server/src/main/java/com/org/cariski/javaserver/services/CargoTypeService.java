package com.org.cariski.javaserver.services;
import com.org.cariski.javaserver.models.CargoType;
import com.org.cariski.javaserver.repositories.CargoTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CargoTypeService {
    private final CargoTypeRepository cargoTypeRepository;

    @Autowired
    public CargoTypeService(CargoTypeRepository cargoTypeRepository) {
        this.cargoTypeRepository = cargoTypeRepository;
    }

    public CargoType getCargoType(Long cargoTypeId) {
        return cargoTypeRepository.findById(cargoTypeId).orElse(null);
    }

    public List<CargoType> findAll(){return cargoTypeRepository.findAll();}
}
