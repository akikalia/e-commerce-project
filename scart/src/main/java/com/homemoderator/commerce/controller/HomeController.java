package com.homemoderator.commerce.controller;

import com.homemoderator.commerce.repository.CategoryRepository;
import com.homemoderator.commerce.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HomeController {

    @Autowired
    ProductRepository products;
    @Autowired
    CategoryRepository categories;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public ModelAndView home(){
        ModelAndView mv = new ModelAndView();
        mv.addObject("categories", categories.findAll());
        mv.addObject("products", products.findAll());
        mv.setViewName("home-page");
        return mv;
    }
}
