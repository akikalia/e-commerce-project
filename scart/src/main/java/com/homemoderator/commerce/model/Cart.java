package com.homemoderator.commerce.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CartDAO {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private String id;

//    @OneToOne(mappedBy = "cart")
//    private User user;

//    @OneToMany(mappedBy = "cart")
//    private List<CartItem> cartItemList;


//    public User getUser() {
//        return user;
//    }

//    public void setUser(User user) {
//        this.user = user;
//    }

//    public void setId(String id) {
//        this.id = id;
//    }
//
//    @Id
//    public String getId() {
//        return id;
//    }
}
