package com.org.cariski.javaserver.controllers;

import com.org.cariski.javaserver.controllers.response.Response;
import com.org.cariski.javaserver.models.Request;
import com.org.cariski.javaserver.services.impl.RequestServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Requests")
@CrossOrigin(origins = {"http://localhost:3000"})
public class RequestController {
    private final RequestServiceImpl requestService;

    @Autowired
    public RequestController(RequestServiceImpl requestService) {
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

    @PostMapping("/")
    public ResponseEntity<Object> create(@RequestBody Request request) {
        Request created = requestService.create(request);
        if (created != null) {
            return ResponseEntity.ok().body(new Response<>(created, HttpStatus.OK.value(), "Request created"));
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new Response<>(null, HttpStatus.INTERNAL_SERVER_ERROR.value(), "Error during Request creating"));
        }
    }
}
