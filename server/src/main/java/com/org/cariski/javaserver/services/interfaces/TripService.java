package com.org.cariski.javaserver.services.interfaces;

import com.org.cariski.javaserver.models.Trip;

import java.util.List;
import java.util.Optional;

public interface TripService {
    List<Trip> findAll();
    Optional<Trip> delete(long id);

    Optional<Trip> findById(long id);

    Trip create(Trip trip);
}
