package com.org.cariski.javaserver.services;

import com.org.cariski.javaserver.models.Driver;
import com.org.cariski.javaserver.models.Request;

import com.org.cariski.javaserver.repositories.RequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RequestService {
    private final RequestRepository requestRepository;

    @Autowired
    public RequestService(RequestRepository requestRepository) {
        this.requestRepository = requestRepository;
    }

    public List<Request> getAllRequests() {
        return requestRepository.findAll();
    }

    public Optional<Request> getRequestById(long id) {
        return requestRepository.findById(id);
    }

    public Request saveOrUpdateRequest(Request request) {
        return requestRepository.save(request);
    }

    public void deleteRequest(long id) {
        requestRepository.deleteById(id);
    }

    public List<Request> findAll() {
        return requestRepository.findAll();
    }
}
