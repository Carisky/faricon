package com.org.cariski.javaserver.controllers;

import com.org.cariski.javaserver.models.Driver;
import com.org.cariski.javaserver.services.DriverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.org.cariski.javaserver.controllers.response.*;

import java.util.List;

@RestController
@RequestMapping("/Drivers")
@CrossOrigin(origins = {"http://172.17.0.2:3000"})
public class DriverController {

    private final DriverService driverService;

    @Autowired
    public DriverController(DriverService driverService) {
        this.driverService = driverService;
    }

    @GetMapping("/{driverId}")
    public ResponseEntity<Object> getDriver(@PathVariable Long driverId) {
        Driver driver = driverService.findById(driverId);
        if (driver != null) {
            return ResponseEntity.ok().body(new Response<>(driver, HttpStatus.OK.value(), "Driver found"));
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new Response<>(null, HttpStatus.NOT_FOUND.value(), "Driver not found"));
        }
    }

    @GetMapping("/")
    public ResponseEntity<Object> getDrivers() {
        List<Driver> drivers = driverService.findAll();
        if (drivers != null && !drivers.isEmpty()) {
            return ResponseEntity.ok().body(new Response<>(drivers, HttpStatus.OK.value(), "Drivers found"));
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new Response<>(null, HttpStatus.NOT_FOUND.value(), "No drivers found"));
        }
    }
}
