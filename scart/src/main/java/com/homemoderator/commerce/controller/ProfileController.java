package com.homemoderator.commerce.controller;

import com.homemoderator.commerce.dao.UserRepository;
import com.homemoderator.commerce.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import java.util.Optional;

@Controller
@RequestMapping("/profile")
public class ProfileController {
    @Autowired
    private UserRepository users;

    @GetMapping
    ModelAndView getProfile(int id){
        ModelAndView mv = new ModelAndView();
//        if (id == null){
//            mv.setViewName("404");
//            return mv;
//        }
        Optional<User> curr = users.findById(id);
        if (curr.isEmpty()){
            mv.setViewName("404");
            return mv;
        }
        mv.setViewName("user-page");
        mv.addObject("user", id);
        return mv;
    }
}
