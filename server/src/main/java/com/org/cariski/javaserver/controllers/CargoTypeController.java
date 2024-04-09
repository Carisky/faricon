package com.org.cariski.javaserver.controllers;


import com.org.cariski.javaserver.controllers.response.Response;
import com.org.cariski.javaserver.models.CargoType;
import com.org.cariski.javaserver.services.CargoTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/CargoTypes")
@CrossOrigin(origins = {"http://localhost:3000"})
public class CargoTypeController {
    private final CargoTypeService cargoTypeService;

    @Autowired
    public CargoTypeController(CargoTypeService cargoTypeService){
        this.cargoTypeService = cargoTypeService;
    }
    @GetMapping("/")
    public ResponseEntity<Object> getCargoTypes(){
        List<CargoType> cargoTypes = cargoTypeService.findAll();
        if (cargoTypes != null && !cargoTypes.isEmpty()) {
            return ResponseEntity.ok().body(new Response<>(cargoTypes, HttpStatus.OK.value(), "Cargo Types found"));
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new Response<>(null, HttpStatus.NOT_FOUND.value(), "No Cargo Types found"));
        }
    }

}
