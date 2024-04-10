package com.org.cariski.javaserver.services.impl;

import com.org.cariski.javaserver.models.Destination;
import com.org.cariski.javaserver.repositories.DestinationRepository;
import com.org.cariski.javaserver.services.interfaces.DestinationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DestinationServiceImpl implements DestinationService {

    private final DestinationRepository destinationRepository;

    @Autowired
    public DestinationServiceImpl(DestinationRepository destinationRepository) {
        this.destinationRepository = destinationRepository;
    }

    @Override
    public List<Destination> findAll() {
        return destinationRepository.findAll();
    }

    @Override
    public Optional<Destination> findById(Long id) {
        return destinationRepository.findById(id);
    }

    @Override
    public Destination create(Destination destination) {
        return destinationRepository.save(destination);
    }

    @Override
    public Optional<Destination> delete(Long id) {
        Optional<Destination> deleted = destinationRepository.findById(id);
        deleted.ifPresent(destination -> destinationRepository.delete(destination));
        return deleted;
    }
}
