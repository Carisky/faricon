package com.org.cariski.javaserver.services;
import com.org.cariski.javaserver.models.Car;
import com.org.cariski.javaserver.repositories.CarRrepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class CarService {
    private final CarRrepository carRepository;

    @Autowired
    public CarService(CarRrepository carRepository) {
        this.carRepository = carRepository;
    }

    public Car getCar(Long carId) {
        return carRepository.findById(carId).orElse(null);
    }
}
