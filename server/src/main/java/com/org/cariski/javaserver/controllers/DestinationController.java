package com.org.cariski.javaserver.controllers;

import com.org.cariski.javaserver.controllers.response.Response;
import com.org.cariski.javaserver.models.CargoType;
import com.org.cariski.javaserver.models.Destination;
import com.org.cariski.javaserver.models.Driver;
import com.org.cariski.javaserver.services.impl.DestinationServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/Destinations")
@CrossOrigin(origins = {"http://localhost:3000"})
public class DestinationController {
    private final DestinationServiceImpl destinationService;

    @Autowired
    DestinationController(DestinationServiceImpl destinationService){this.destinationService = destinationService;}

    @GetMapping("/")
    public ResponseEntity<Object> findAll() {
        List<Destination> destinations = destinationService.findAll();
        if (destinations != null && !destinations.isEmpty()) {
            return ResponseEntity.ok().body(new Response<>(destinations, HttpStatus.OK.value(), "Destinations Types found"));
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new Response<>(null, HttpStatus.NOT_FOUND.value(), "No Destinations found"));
        }
    }
}
