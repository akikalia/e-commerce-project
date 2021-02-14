//package com.homemoderator.commerce.controller;
//
//import com.homemoderator.commerce.repository.CategoryRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.servlet.ModelAndView;
//
//
//@Controller
//@RequestMapping("/categories")
//public class CategoryListController {
//    @Autowired
//    private CategoryRepository categories;
//    @GetMapping
//    ModelAndView getCategories(){
//        ModelAndView mv = new ModelAndView();
//        mv.setViewName("categories-page");
//        mv.addObject("categories",categories.findAll());
//        return mv;
//    }
//}
