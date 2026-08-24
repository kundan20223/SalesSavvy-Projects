package com.example.app.services;

import com.example.app.entities.kodusers;

public interface KodUsersService {
     
	
	public kodusers register(kodusers kodUsers);
		public boolean login(String username, String password);
	}
	
	

