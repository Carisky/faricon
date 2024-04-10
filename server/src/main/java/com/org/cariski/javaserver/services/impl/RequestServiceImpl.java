package com.org.cariski.javaserver.services.impl;

import com.org.cariski.javaserver.models.Request;
import com.org.cariski.javaserver.models.Trip;
import com.org.cariski.javaserver.repositories.RequestRepository;
import com.org.cariski.javaserver.services.interfaces.RequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RequestServiceImpl implements RequestService {
    private final RequestRepository requestRepository;

    @Autowired
    public RequestServiceImpl(RequestRepository requestRepository) {
        this.requestRepository = requestRepository;
    }

    @Override
    public List<Request> findAll() {
        return requestRepository.findAll();
    }

    @Override
    public Optional<Request> findById(long id) {
        return requestRepository.findById(id);
    }

    @Override
    public Request create(Request request) {
        return requestRepository.save(request);
    }

    @Override
    public Optional<Request> delete(long id) {
        Optional<Request> deleted = requestRepository.findById(id);
        deleted.ifPresent(request -> requestRepository.delete(request));
        return deleted;
    }
}
