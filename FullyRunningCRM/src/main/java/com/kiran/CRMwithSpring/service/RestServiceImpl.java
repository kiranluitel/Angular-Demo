package com.kiran.CRMwithSpring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.kiran.CRMwithSpring.dao.CustomerDAO;
import com.kiran.CRMwithSpring.entity.Customer;
import com.kiran.CRMwithSpring.springdatarepository.MyRepository;

@Service
@Transactional
public class RestServiceImpl implements RestService{
	
	@Autowired
	private MyRepository myRepo;
	
	@Autowired
	private CustomerDAO customerDAO;

	
	public List<Customer> getCustomers() {
		
		return myRepo.findAll();
		
	}


	@Override
	public Customer findById(int id) {
		
		
		
		return customerDAO.getCustomer(id);
	}


	public Customer deleteOne(int id) {
		
		Customer customer =customerDAO.getCustomer(id);
		customerDAO.deleteCustomer(id);
		return customer;
		
		
	}


	public void updateOne(Customer customer) {
		
		customerDAO.saveCustomer(customer);
		
	}


	
	
	

}
