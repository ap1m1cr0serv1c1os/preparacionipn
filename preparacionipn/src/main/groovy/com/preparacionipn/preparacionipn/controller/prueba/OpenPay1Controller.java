package com.preparacionipn.preparacionipn.controller.prueba;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;



@Controller
public class OpenPay1Controller {
	
	@GetMapping("/pago")
    public String index() {
        
        return "prueba/tarjeta";
    }

}
