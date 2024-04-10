package com.org.cariski.javaserver.services.interfaces;

import com.org.cariski.javaserver.models.Request;

import java.util.List;
import java.util.Optional;

public interface RequestService {
    List<Request> findAll();
    Optional<Request> findById(long id);
    Request create(Request request);
    Optional<Request> delete(long id);
}
