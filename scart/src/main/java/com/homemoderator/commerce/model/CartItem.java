package com.homemoderator.commerce.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CartItemDAO {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private String id;

    @ManyToOne
    private CartDAO cart;

//    @ManyToOne
//    private Product product;

    private int quantity;

//    public CartItem() {
//    }

//    public Cart getCart() {
//        return cart;
//    }
//
//    public void setCart(Cart cart) {
//        this.cart = cart;
//    }

//    public Product getProduct() {
//        return product;
//    }
//
//    public void setProduct(Product product) {
//        this.product = product;
//    }

//    public int getQuantity() {
//        return quantity;
//    }
//
//    public void setQuantity(int quantity) {
//        this.quantity = quantity;
//    }
//
//    public void setId(String id) {
//        this.id = id;
//    }
//
//    @Id
//    public String getId() {
//        return id;
//    }
}
