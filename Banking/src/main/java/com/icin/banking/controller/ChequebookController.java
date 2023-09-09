package com.icin.banking.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.icin.banking.model.ChequeBook;
import com.icin.banking.repository.ChequeBookRepository;

@RestController
@CrossOrigin
public class ChequebookController {

	@Autowired
	ChequeBookRepository chequeBookRepository;
	
	
}
