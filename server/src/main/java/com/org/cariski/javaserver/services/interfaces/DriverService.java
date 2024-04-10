package com.org.cariski.javaserver.services.interfaces;

import com.org.cariski.javaserver.models.Driver;

import java.util.List;
import java.util.Optional;

public interface DriverService {
    List<Driver> findAll();
    Optional<Driver> findById(Long id);
    Driver create(Driver driver);
    Optional<Driver> delete(Long id);
}
