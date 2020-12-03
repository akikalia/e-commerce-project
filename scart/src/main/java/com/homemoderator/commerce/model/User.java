package com.homemoderator.commerce.model;

import javax.persistence.*;
import java.util.List;
//TODO: set relationship attribute to fetch = FetchType.LAZY, on all POJOs, or else everything gets fetched(probably)
//      Example:  @OneToMany(fetch = FetchType.LAZY, mappedBy = "employee")
//TODO: learn more about @JoinColumn annotation

@Entity
public class User {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;


    private String username;

    private String password;

    private String email;

    private int balance;

    @OneToOne
    private Cart cart;

    @OneToMany(mappedBy = "user")
    private List<Purchase> purchaseList;

    @Id
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public int getBalance() {
        return balance;
    }

    public void setBalance(int balance) {
        this.balance = balance;
    }

    public Cart getCart() {
        return cart;
    }

    public void setCart(Cart cart) {
        this.cart = cart;
    }

    public List<Purchase> getPurchaseList() {
        return purchaseList;
    }

    public void setPurchaseList(List<Purchase> purchaseList) {
        this.purchaseList = purchaseList;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
