package com.preparacionipn.preparacionipn.services

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.beans.factory.annotation.Qualifier
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Service

import com.preparacionipn.preparacionipn.model.Alumno
import com.preparacionipn.preparacionipn.repositorys.AlumnoRepository


@Service("servicioAlumno")
class AlumnoServiceImp{
	
	@Autowired
	@Qualifier("alumnoRepository")
	def AlumnoRepository alumnoRepository
	
	def Alumno getAlumnoById(Integer id) {
		return alumnoRepository.findById(id)
	}
	
	def List<Alumno> getAlumnoAll(){
		return alumnoRepository.findAll()
	}
	
	def Alumno addAlumno(Alumno alumno) {
		return alumnoRepository.saveAndFlush(alumno)
	}
	
	def Alumno editAlumno(Alumno alumno) {
		return alumnoRepository.saveAndFlush(alumno)
	}
	
	def deleteAlumno(Integer id) {
		alumnoRepository.deleteById(id)
	}
}
