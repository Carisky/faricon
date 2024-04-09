package com.org.cariski.javaserver.services;

import com.org.cariski.javaserver.models.Driver;
import com.org.cariski.javaserver.repositories.DriverRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DriverService {

    private final DriverRepository driverRepository;

    @Autowired
    public DriverService(DriverRepository driverRepository) {
        this.driverRepository = driverRepository;
    }


    public Driver findById(Long driverId) {
        return driverRepository.findById(driverId).orElse(null);
    }

    public List<Driver> findAll() {
        return driverRepository.findAll();
    }
}

