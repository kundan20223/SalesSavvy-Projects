package com.kodnest.app.userservices;

import com.kodnest.app.entities.User;

public interface CartServiceContract {
       
	public void addToCart(User user, int productId, int quantity);
}
