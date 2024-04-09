package com.org.cariski.javaserver.repositories;

import com.org.cariski.javaserver.models.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CarRrepository extends JpaRepository<Car,Long> {
}
