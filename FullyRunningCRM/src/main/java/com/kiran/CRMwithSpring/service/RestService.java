package com.kiran.CRMwithSpring.service;

import java.util.List;

import com.kiran.CRMwithSpring.entity.Customer;

public interface RestService {
	
	public List<Customer> getCustomers();
	
	public Customer findById(int id);
	
	public Customer deleteOne(int id);
	
	

}
