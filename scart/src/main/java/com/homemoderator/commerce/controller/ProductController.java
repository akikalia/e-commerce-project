package com.homemoderator.commerce.controller;

import com.homemoderator.commerce.dao.ProductRepository;
import com.homemoderator.commerce.model.Product;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import java.util.Optional;

@Controller
@RequestMapping("/product")
public class ProductController {

    private ProductRepository products;
    @GetMapping
    ModelAndView getProduct(int id){
        ModelAndView mv = new ModelAndView();
        //        if (id == null){
//            mv.setViewName("404");
//            return mv;
//        }
        Optional<Product> curr = products.findById(id);
        if (curr.isEmpty()){
            mv.setViewName("404");
            return mv;
        }
        mv.addObject("category", curr);
        mv.setViewName("product-page");
        mv.addObject("product", curr.get());
        return mv;
    }
}