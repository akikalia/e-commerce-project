package com.scart.commerce.controller;

import com.scart.commerce.dao.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HomeController {

    @Autowired
    ProductRepository products;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public ModelAndView home(){
        ModelAndView mv = new ModelAndView();
        mv.addObject("products", products);
        mv.setViewName("main-page");
        return mv;
    }
}
