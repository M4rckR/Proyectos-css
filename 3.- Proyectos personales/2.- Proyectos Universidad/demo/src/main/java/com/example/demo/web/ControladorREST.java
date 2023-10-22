package com.example.demo.web;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.example.demo.domain.Individuo;

import lombok.extern.slf4j.Slf4j;
@Controller
@Slf4j
public class ControladorREST {


    @GetMapping("/")
    public String comienzo(Model model){

        String hola = "Hola mundo con Spring boot";

        Individuo individuo = new Individuo();
        Individuo individuo2 = new Individuo();

        individuo.setNombre("Marcos");
        individuo.setApellido("Romero");
        individuo.setTelefono("967210241");
        individuo.setEdad("22");
        individuo.setCorreo("Marcos@gmail.com");

        individuo2.setNombre("Roberto");
        individuo2.setApellido("Ramirez");
        individuo2.setTelefono("789456132");
        individuo2.setEdad("12");
        individuo2.setCorreo("Roberto@gmail.com");

        // List<Individuo> individuos = new ArrayList();
        // individuos.add(individuo);
        // individuos.add(individuo2);

        List individuos = Arrays.asList(individuo,individuo2);

        model.addAttribute("saludo", hola);
        model.addAttribute("individuo", individuo);
        model.addAttribute("individuos", individuos);



        log.info("Estoy ejecutando el controlador MVC");
        return "indice";
    }
}
