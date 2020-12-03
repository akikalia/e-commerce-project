package com.homemoderator.commerce.repository;

import com.homemoderator.commerce.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

//possibly more feature rich implementations https://bit.ly/36Mrv8M

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
    User findByUsername(String username);
}