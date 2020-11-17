package com.homemoderator.commerce.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class Purchase {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;

    @ManyToOne
    private User user;

    @ManyToMany(mappedBy = "purchaseList")
    private List<Product> productList;

    @Id
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

}
