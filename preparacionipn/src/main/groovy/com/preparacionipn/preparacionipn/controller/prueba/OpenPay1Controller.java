package com.preparacionipn.preparacionipn.controller.prueba;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;


@Controller
public class OpenPay1Controller {
	
	@GetMapping("/pago")
    public String index() {
        return "prueba/tarjeta";
    }
	
	@PostMapping("/pago")
	public String store() {
		return "";
	}

}
