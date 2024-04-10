package com.org.cariski.javaserver.services.interfaces;

import com.org.cariski.javaserver.models.Destination;

import java.util.List;
import java.util.Optional;

public interface DestinationService {
    List<Destination> findAll();
    Optional<Destination> findById(Long id);
    Destination create(Destination destination);
    Optional<Destination> delete(Long id);
}
