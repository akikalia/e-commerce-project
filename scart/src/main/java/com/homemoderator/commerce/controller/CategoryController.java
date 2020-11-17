package com.homemoderator.commerce.controller;

import com.homemoderator.commerce.dao.CategoryRepository;
import com.homemoderator.commerce.model.Category;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import java.util.Optional;
@Controller
@RequestMapping("/category")
public class CategoryController {
    private CategoryRepository categories;
    @GetMapping
    ModelAndView getCategories(int id){
        ModelAndView mv = new ModelAndView();
//        if (id == null){
//            mv.setViewName("404");
//            return mv;
//        }
        Optional<Category> curr = categories.findById(id);
        if (curr.isEmpty()){
            mv.setViewName("404");
            return mv;
        }
        mv.addObject("category", curr);
        mv.setViewName("category-page");
        mv.addObject("category", id);
        mv.addObject("products", curr.get().getProductList());
        return mv;
    }
}
