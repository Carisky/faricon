package com.org.cariski.javaserver.controllers;

import com.org.cariski.javaserver.controllers.response.Response;
import com.org.cariski.javaserver.models.Request;
import com.org.cariski.javaserver.services.impl.RequestServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/Requests")
@CrossOrigin(origins = {"http://localhost:3000"})
public class RequestController {
    private final RequestServiceImpl requestService;
    @Autowired
    public RequestController (RequestServiceImpl requestService){
        this.requestService = requestService;
    }

    @GetMapping("/")
    public ResponseEntity<Object> findAll() {
        List<Request> requests = requestService.findAll();
        if (requests != null && !requests.isEmpty()) {
            return ResponseEntity.ok().body(new Response<>(requests, HttpStatus.OK.value(), "Requests found"));
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new Response<>(null, HttpStatus.NOT_FOUND.value(), "No Requests found"));
        }
    }
}
