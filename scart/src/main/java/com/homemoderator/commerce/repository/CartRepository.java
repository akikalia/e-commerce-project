package com.homemoderator.commerce.repository;

import com.homemoderator.commerce.model.Cart;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository

public interface CartRepository extends CrudRepository<Cart, Integer> {
}
