package com.homemoderator.commerce.dao;

import com.homemoderator.commerce.model.CartItem;
import org.springframework.data.repository.CrudRepository;

public interface CartItemRepository extends CrudRepository<CartItem, Integer> {
}
