package com.org.cariski.javaserver.services;

import com.org.cariski.javaserver.models.Trip;
import com.org.cariski.javaserver.repositories.TripRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TripService {
    private final TripRepository tripRepository;

    @Autowired
    public TripService(TripRepository tripRepository) {
        this.tripRepository = tripRepository;
    }

    public List<Trip> getAllTrips() {
        return tripRepository.findAll();
    }

    public Optional<Trip> getTripById(long id) {
        return tripRepository.findById(id);
    }

    public Trip saveOrUpdateTrip(Trip trip) {
        return tripRepository.save(trip);
    }

    public void deleteTrip(long id) {
        tripRepository.deleteById(id);
    }
}
