//package com.homemoderator.commerce.model;
//
//import javax.persistence.*;
//import java.util.List;
//
//@Entity
//public class Purchase {
//
//    @Id
//    @GeneratedValue(strategy= GenerationType.AUTO)
//    private Integer id;
//
//    @ManyToOne
//    private User user;
//
//    @OneToMany(mappedBy = "purchase")
//    private List<PurchaseItem> PurchaseItemList;
//
//    @Id
//    public Integer getId() {
//        return id;
//    }
//
//    public void setId(Integer id) {
//        this.id = id;
//    }
//
//    public User getUser() {
//        return user;
//    }
//
//    public void setUser(User user) {
//        this.user = user;
//    }
//
//    public List<PurchaseItem> getPurchaseItemList() {
//        return PurchaseItemList;
//    }
//
//    public void setPurchaseItemList(List<PurchaseItem> purchaseItemList) {
//        PurchaseItemList = purchaseItemList;
//    }
//
//}
