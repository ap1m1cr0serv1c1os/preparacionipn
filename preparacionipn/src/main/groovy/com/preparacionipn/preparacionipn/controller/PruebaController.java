package com.preparacionipn.preparacionipn.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import com.preparacionipn.preparacionipn.model.Greeting;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class PruebaController {

	@GetMapping("/")
    public String index(Model model) {
        return "alumno/index";
    }
	
	@GetMapping("/login")
    public String getLogin(Model model) {
        return "alumno/login";
    }
	
	@GetMapping("/contacto")
    public String getContacto(Model model) {
        return "alumno/contacto";
    }
	
	@GetMapping("/nosotros")
    public String getNosotros(Model model) {
        return "alumno/nosotros";
    }
	
	@GetMapping("/curso")
    public String getItemCurso(Model model) {
        return "alumno/item-curso";
    }
	
	@GetMapping("/cursos")
    public String getCursos(Model model) {
        return "alumno/cursos";
    }
	
	@GetMapping("/detalles")
    public String getDetallesPago(Model model) {
        return "alumno/detalles-pago";
    }
	
	@GetMapping("/mis-cursos")
    public String getMisCursos(Model model) {
        return "alumno/mis-cursos";
    }
	
	@GetMapping("/mis-pagos")
    public String getMisPagos(Model model) {
        return "alumno/mis-pagos";
    }
	
	@GetMapping("/perfil")
    public String getPerfil(Model model) {
        return "alumno/perfil";
    }
	
	@PostMapping("/greeting")
    public String greetingSubmit(@ModelAttribute Greeting greeting) {
        return "result";
    }
}

//Edit 1 ¿Ya me puedo ir?
