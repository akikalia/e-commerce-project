package com.homemoderator.commerce.model;

import javax.persistence.*;

@Entity
public class PurchaseItem {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)

    private String id;

    @ManyToOne
    private Purchase purchase;

    @ManyToOne
    private Product product;

    private int quantity;


    public Purchase getPurchase() {
        return purchase;
    }

    public void setPurchase(Purchase purchase) {
        this.purchase = purchase;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public void setId(String id) {
        this.id = id;
    }

    @Id
    public String getId() {
        return id;
    }
}
