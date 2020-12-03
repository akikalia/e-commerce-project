package com.homemoderator.commerce.repository;

import com.homemoderator.commerce.model.PurchaseItem;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository

public interface PurchaseItemRepository extends CrudRepository<PurchaseItem, Integer> {
}
