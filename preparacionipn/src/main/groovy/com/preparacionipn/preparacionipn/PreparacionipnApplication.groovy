package com.preparacionipn.preparacionipn

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.scheduling.annotation.EnableScheduling

@SpringBootApplication
@EnableScheduling
class PreparacionipnApplication {

	static void main(String[] args) {
		SpringApplication.run PreparacionipnApplication, args
	}
}
