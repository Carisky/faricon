package com.org.cariski.javaserver.repositories;

import com.org.cariski.javaserver.models.CargoType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CargoTypeRepository extends JpaRepository<CargoType,Long> {
}
