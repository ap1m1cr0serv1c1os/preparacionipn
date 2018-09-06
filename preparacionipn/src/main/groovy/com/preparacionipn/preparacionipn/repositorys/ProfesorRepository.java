package com.preparacionipn.preparacionipn.repositorys;

import java.io.Serializable;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.preparacionipn.preparacionipn.model.Profesor;

@Repository("profesorRepository")
public interface ProfesorRepository extends JpaRepository<Profesor, Serializable>{

}
