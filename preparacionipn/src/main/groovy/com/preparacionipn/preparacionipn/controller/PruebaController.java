package com.preparacionipn.preparacionipn.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;

import com.preparacionipn.preparacionipn.model.Administrador;
import com.preparacionipn.preparacionipn.model.Greeting;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

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
	
	@GetMapping("/admin/index")
    public String getIndexAdmin(@RequestParam(value="_", required=false) String clave, Model model) {
        return "administrador/index";
    }
	
	@GetMapping("/admin/crud/{id}")
    public String getCursoAdmin(
    		@RequestParam(value="_", required=false) String clave, 
    		@PathVariable(name = "id") int id, Model model) {
	    Greeting greet = new Greeting();
	    greet.setId( id );
	    greet.setContent("Un titulo");
	    model.addAttribute("greet", greet);
        return "administrador/secciones/admins/crud";
    }
	
	@PostMapping("/admin/crud")
	public String postCursoAdmin(@ModelAttribute("administrador") Administrador administrador) {
		System.out.println(administrador.toString());
		return "redirect: /admin/index";
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
