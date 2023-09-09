package com.icin.banking.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.icin.banking.model.ChequeBookRequest;
import com.icin.banking.repository.ChequeBookRequestRepository;

@RestController
@CrossOrigin
public class ChequeBookRequestController {
	@Autowired
	ChequeBookRequestRepository requestRepo;
	
	@PostMapping("checkbookrequest")
	public  ChequeBookRequest SaveChequeBookRequest(@RequestBody ChequeBookRequest chequeBookRequest)
	{
		return requestRepo.save(chequeBookRequest);
	}
	

}
