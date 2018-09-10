package com.preparacionipn.preparacionipn.services

import com.preparacionipn.preparacionipn.model.Profesor
import com.preparacionipn.preparacionipn.repositorys.ProfesorRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.beans.factory.annotation.Qualifier
import org.springframework.stereotype.Service

@Service("servicioProfesor")
class ProfesorServiceImp {
	
	@Autowired
	@Qualifier("profesorRepository")
	def ProfesorRepository profesorRepository
	
	def Optional<Profesor> getProfesorById(Integer id) {
		return profesorRepository.findById(id)
	}
	
	def List<Profesor> getProfesorAll(){
		return profesorRepository.findAll()
	}
	
	def List<Profesor> getProfesorAllLike(Object value){
		return profesorRepository.findAll()
	}
	
	def Profesor addProfesor(Profesor profesor) {
		return profesorRepository.save(profesor)
	}
	
	def Profesor editProfesor(Profesor profesor) {
		return profesorRepository.save(profesor)
	}
	
	def deleteProfesor(Integer id) {
		profesorRepository.deleteById(id)
	}
}
