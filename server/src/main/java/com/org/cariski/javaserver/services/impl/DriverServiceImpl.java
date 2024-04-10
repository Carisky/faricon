package com.org.cariski.javaserver.services.impl;

import com.org.cariski.javaserver.models.Driver;
import com.org.cariski.javaserver.repositories.DriverRepository;
import com.org.cariski.javaserver.services.interfaces.DriverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DriverServiceImpl implements DriverService {

    private final DriverRepository driverRepository;

    @Autowired
    public DriverServiceImpl(DriverRepository driverRepository) {
        this.driverRepository = driverRepository;
    }

    @Override
    public List<Driver> findAll() {
        return driverRepository.findAll();
    }

    @Override
    public Optional<Driver> findById(Long id) {
        return driverRepository.findById(id);
    }

    @Override
    public Driver create(Driver driver) {
        return driverRepository.save(driver);
    }

    @Override
    public Optional<Driver> delete(Long id) {
        Optional<Driver> deleted = driverRepository.findById(id);
        deleted.ifPresent(driver -> driverRepository.delete(driver));
        return deleted;
    }
}
