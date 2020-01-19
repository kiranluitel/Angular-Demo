package com.kiran.CRMwithSpring.springdatarepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.kiran.CRMwithSpring.entity.Customer;

public interface MyRepository extends JpaRepository<Customer, Integer> {

}
