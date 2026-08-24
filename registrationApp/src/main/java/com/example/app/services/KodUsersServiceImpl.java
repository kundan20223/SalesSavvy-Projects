package com.example.app.services;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.app.entities.kodusers;
import com.example.app.repositories.KodUsersRepo;


@Service
public class KodUsersServiceImpl implements KodUsersService{
   
	private KodUsersRepo kodUsersRepo;
	private BCryptPasswordEncoder cryptPasswordEncoder;
	
	
	
	
	
	 public KodUsersServiceImpl(KodUsersRepo kodUsersRepo) {
		super();
		this.kodUsersRepo = kodUsersRepo;
		cryptPasswordEncoder = new BCryptPasswordEncoder();
	}






	 @Override
	 public kodusers register(kodusers kodUsers) {
		 String password = kodUsers.getPassword();
		String encodedPassword =  cryptPasswordEncoder.encode(password);
		kodUsers.setPassword(encodedPassword);
		 
		 
		 
		 
		  return kodUsersRepo.save(kodUsers);
		  
	 }
	 
	 @Override
	 public boolean login(String username, String password) {
		kodusers user= kodUsersRepo.findByUsername(username);
		if(user!=null && cryptPasswordEncoder.matches(password, user.getPassword())) {
			return true;
		}
		 return false;
	 }
}
