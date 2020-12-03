package com.homemoderator.commerce.controller;


import com.homemoderator.commerce.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/cart")
public class CartController {
    @Autowired
    private UserRepository users;
    @GetMapping
    ModelAndView getCart(){
        ModelAndView mv = new ModelAndView();
        mv.setViewName("404");
//        if (id == null){
//            mv.setViewName("404");
//            return mv;
//        }

//        todo: get spring session stuff in order
//        Optional<Category> curr = categories.findById(id);
//        if (curr.isEmpty()){
//            mv.setViewName("404");
//            return mv;
//        }
//        mv.addObject("category", curr);
//        mv.setViewName("category-page");
//        mv.addObject("category", id);
//        mv.addObject("products", curr.get().getProductList());
        return mv;
    }
}
