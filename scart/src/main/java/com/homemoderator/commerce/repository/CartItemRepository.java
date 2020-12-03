package com.homemoderator.commerce.repository;

import com.homemoderator.commerce.model.CartItem;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository

public interface CartItemRepository extends CrudRepository<CartItem, Integer> {
}
