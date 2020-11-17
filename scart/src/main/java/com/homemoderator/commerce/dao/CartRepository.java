package com.homemoderator.commerce.dao;

import com.homemoderator.commerce.model.Cart;
import org.springframework.data.repository.CrudRepository;

public interface CartRepository extends CrudRepository<Cart, Integer> {
}
