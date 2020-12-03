package com.homemoderator.commerce.repository;

import com.homemoderator.commerce.model.Product;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete


@Repository

public interface ProductRepository extends CrudRepository<Product, Integer> {

}