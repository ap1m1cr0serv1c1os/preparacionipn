package com.preparacionipn.preparacionipn.controller.admin

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.beans.factory.annotation.Qualifier
import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.ModelAttribute
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam

import com.preparacionipn.preparacionipn.model.Greeting
import com.preparacionipn.preparacionipn.model.Profesor
import com.preparacionipn.preparacionipn.services.ProfesorServiceImp

@Controller
@RequestMapping( path="/admin/profesores")
class ProfesorController {
	
	@Autowired
	@Qualifier("servicioProfesor")
	def ProfesorServiceImp servicioProfesor;
	
	@GetMapping("/")
	def String getProfesores(
		@RequestParam(value="_", required=false) String clave, 
		Model model) {
		List<Profesor> lstProfesor = servicioProfesor.getProfesorAll()
		model.addAttribute("lstProfesor", lstProfesor)
        return "administrador/componentes/profesores/index"
    }
	
	@GetMapping("/edit/{id}")
	def String getProfesorById(
    		@RequestParam(value="_", required=false) String clave, 
    		@PathVariable(name = "id") int id, Model model) {
		if(id != 0) {
			Profesor profesor = servicioProfesor.getProfesorById(id).get()
			model.addAttribute("profesor", profesor)
			model.addAttribute("accion", "Editar")
			model.addAttribute("method", "put")
		}else {
			model.addAttribute("profesor", new Profesor())
			model.addAttribute("accion", "Agregar")
			model.addAttribute("method", "post")
		}
        return "administrador/componentes/profesores/crud"
    }
	
	@PostMapping("/add" )
	def Profesor addProfesor(@ModelAttribute("profesor") Profesor profesor) {
		return servicioProfesor.addProfesor(profesor)
	}
	
	@PutMapping( path="/edit", produces="application/json" )
	def Profesor editProfesor(@ModelAttribute("profesor") Profesor profesor) {
		return servicioProfesor.editProfesor(profesor)
	}
	
	@DeleteMapping("/delete/{id}")
	def deleteProfesor( @PathVariable(name = "id") int id ) {
		servicioProfesor.deleteProfesor(id)
	}
	
}
