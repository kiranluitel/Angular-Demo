package com.kiran.CRMwithSpring.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class BasicAuthController {

	
	@GetMapping("/basicAuth")
	public AuthenticationBean basicAuth() {
		return new AuthenticationBean("Authenticated");
	}
}
