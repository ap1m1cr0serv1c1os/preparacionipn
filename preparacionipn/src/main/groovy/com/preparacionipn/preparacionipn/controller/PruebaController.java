package com.preparacionipn.preparacionipn.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;

import com.preparacionipn.preparacionipn.model.Administrador;
import com.preparacionipn.preparacionipn.model.Alumno;
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
	
	@GetMapping("/admin/pagos")
	public String getPagosAdmin(@RequestParam(value="_", required=false) String clave, Model model) {
        return "administrador/componentes/pagos/index";
    }
	
	@GetMapping("/admin/estudiantes")
	public String getEstudiantesAdmin(@RequestParam(value="_", required=false) String clave, Model model) {
        return "administrador/componentes/estudiantes/index";
    }
	
	@GetMapping("/admin/estudiantes/edit/{id}")
    public String getEstudianteAdmin(
    		@RequestParam(value="_", required=false) String clave, 
    		@PathVariable(name = "id") int id, Model model) {
	    Alumno alumno = new Alumno();
	    alumno.setIdAlumno( id );
	    alumno.setNombre("Alfonso");
	    alumno.setApellidoPaterno("Vásquez");
	    alumno.setApellidoMaterno("Cortes");
	    alumno.setEmail("alvaco93@gmail.com");
	    alumno.setDireccion("Av. Juarez 93");
	    alumno.setTelefono("5550824884");
	    alumno.setIdFacebook("56464645865425");
	    alumno.setTutor("Andrea Cortes Martinez");
	    alumno.setTelefonoTutor("7351234775");
	    alumno.setCiudad("Morelos");
	    alumno.setCodigoPostal(62920);
	    alumno.setMunicipio("Tepalcingo");
	    model.addAttribute("alumno", alumno);
        return "administrador/componentes/estudiantes/detalles";
    }
	
	@GetMapping("/admin/profesores")
	public String getProfesoresAdmin(@RequestParam(value="_", required=false) String clave, Model model) {
        return "administrador/componentes/profesores/index";
    }
	
	@GetMapping("/admin/profesores/edit/{id}")
    public String getProfesorAdmin(
    		@RequestParam(value="_", required=false) String clave, 
    		@PathVariable(name = "id") int id, Model model) {
	    Greeting greet = new Greeting();
	    greet.setId( id );
	    greet.setContent("Un titulo");
	    model.addAttribute("greet", greet);
        return "administrador/componentes/profesores/crud";
    }
	
	@GetMapping("/admin/platicas")
	public String getPlaticasAdmin(@RequestParam(value="_", required=false) String clave, Model model) {
        return "administrador/componentes/platicas/index";
    }
	
	@GetMapping("/admin/cursos")
	public String getCursosAdmin(@RequestParam(value="_", required=false) String clave, Model model) {
        return "administrador/componentes/cursos/index";
    }
	
	@GetMapping("/admin/cursos/edit/{id}")
	public String getCursosAdmin( @RequestParam(value="_", required=false) String clave, @PathVariable(name = "id") int id, Model model) {
        return "administrador/componentes/cursos/crud";
    }
	
	@GetMapping("/admin/clases")
	public String getClasesAdmin(@RequestParam(value="_", required=false) String clave, Model model) {
        return "administrador/componentes/clases/index";
    }
	
	@GetMapping("/admin/asesorias")
	public String getAsesoriasAdmin(@RequestParam(value="_", required=false) String clave, Model model) {
        return "administrador/componentes/asesorias/index";
    }
	
	@GetMapping("/admin/examenes")
	public String getExamenesAdmin(@RequestParam(value="_", required=false) String clave, Model model) {
        return "administrador/componentes/examenes/index";
    }
	
	@GetMapping("/admin/bolsa")
	public String getBolsaAdmin(@RequestParam(value="_", required=false) String clave, Model model) {
        return "administrador/componentes/bolsa/index";
    }
	
	@GetMapping("/admin/perfil")
	public String getPerfilAdmin(@RequestParam(value="_", required=false) String clave, Model model) {
        return "administrador/componentes/perfil/index";
    }
	
	@GetMapping("/admin/config")
	public String getConfigAdmin(@RequestParam(value="_", required=false) String clave, Model model) {
        return "administrador/componentes/config/index";
    }
	
	@GetMapping("/admin")
    public String getAdmin(Model model) {
        return "administrador/index";
    }
	
	@GetMapping("/admin/index")
    public String getIndexAdmin(@RequestParam(value="_", required=false) String clave, Model model) {
        return "administrador/componentes/admins/index";
    }
	
	@GetMapping("/admin/crud/{id}")
    public String getCursoAdmin(
    		@RequestParam(value="_", required=false) String clave, 
    		@PathVariable(name = "id") int id, Model model) {
	    Greeting greet = new Greeting();
	    greet.setId( id );
	    greet.setContent("Un titulo");
	    model.addAttribute("greet", greet);
        return "administrador/componentes/admins/crud";
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

//Edit 1 Â¿Ya me puedo ir?
