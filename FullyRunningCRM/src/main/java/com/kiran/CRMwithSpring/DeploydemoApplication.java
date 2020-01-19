package com.kiran.CRMwithSpring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;





@SpringBootApplication
public class DeploydemoApplication extends SpringBootServletInitializer  {
	
//	public SpringApplicationBuilder configure(SpringApplicationBuilder application) {
//		return application.sources(DeploydemoApplication.class);
//	}
 
	
	public static void main(String[] args) {
		SpringApplication.run(DeploydemoApplication.class, args);
	}
	
	
	

 
}
