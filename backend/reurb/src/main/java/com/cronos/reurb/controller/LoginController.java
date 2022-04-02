package com.cronos.reurb.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.cronos.reurb.model.Login;

@RestController
@RequestMapping("api/login")
public class LoginController 
{
	@RequestMapping(method = RequestMethod.GET)
	public @ResponseBody Login hello()
	{
		Login login = new Login();
		login.setId(123);
		login.setNome("Alexandre Albuquerque Florêncio Filho");
		login.setIdade(27);
		login.setEndereco("QSD 8 Casa 9 - Taguatinga Sul - DF");
		
		return login;
		
//		return "id: 123, nome: 'Alexandre Albuquerque Florêncio Filho',\r\n" + 
//				" idade: 27, endereco: 'QSD 8 Casa 9 - Taguatinga Sul - DF'}";
	}

}
