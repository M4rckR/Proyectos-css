package com.example.demo;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.example.domain.Individuo;

import lombok.extern.slf4j.Slf4j;
@Controller
@Slf4j
public class ControladorREST {

    @Value("${indice.hola2}")
    private String hola2;

    @GetMapping("/")
    public String comienzo(Model model){

        String hola = "Hola mundo con Spring boot";

        Individuo individuo = new Individuo();
        individuo.setNombre("Marcos");
        individuo.setApellido("Romero");
        individuo.setTelefono("967210241");
        individuo.setEdad("22");
        individuo.setCorreo("Marcos@gmail.com");

        model.addAttribute("saludo", hola);
        model.addAttribute("hola2",hola2);
        model.addAttribute("individuo", individuo);

        log.info("Estoy ejecutando el controlador MVC");
        return "indice";
    }
}
