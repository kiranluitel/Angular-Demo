package com.kiran.CRMwithSpring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kiran.CRMwithSpring.entity.Customer;
import com.kiran.CRMwithSpring.service.RestServiceImpl;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:4200")
public class MyRestController {
	
	@Autowired
	private RestServiceImpl restService;
	
	@GetMapping("/customers")
	public List<Customer> getCustomers(){
		
		return restService.getCustomers();
	}
	
	@GetMapping("/customers/{id}")
	public Customer getOne(@PathVariable int id) {
		return restService.findById(id);
	}
	
	@DeleteMapping("/customers/{id}")
	public ResponseEntity<Void> deleteOne(@PathVariable int id) {
		
		 
		 Customer customer = restService.deleteOne(id);
		 if (customer!=null) return ResponseEntity.noContent().build();
		 return ResponseEntity.notFound().build();
		 
		 
		 
	}

	@PutMapping("/customers/{id}")
	public void updateOne(@PathVariable int id, @RequestBody Customer customer){
		
		restService.updateOne(customer);
	}

}
