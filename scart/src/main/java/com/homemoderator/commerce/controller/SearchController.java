package com.homemoderator.commerce.controller;


import com.homemoderator.commerce.dao.ProductRepository;
import com.homemoderator.commerce.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("search")
public class SearchController {

    @Autowired
    ProductRepository products;

    @GetMapping
    ModelAndView search(String search){
        ModelAndView mv = new ModelAndView();
        mv.setViewName("search");
//        todo: implement search system / add category search too...
        Iterable<Product> res = products.findAll();
        mv.addObject("isEmpty", res.iterator().hasNext());
        mv.addObject("products", res);
        return mv;
    }
}
