package com.homemoderator.commerce.dao;

import com.homemoderator.commerce.model.Purchase;
import org.springframework.data.repository.CrudRepository;
// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface PurchaseRepository extends CrudRepository<Purchase, Integer> {

}