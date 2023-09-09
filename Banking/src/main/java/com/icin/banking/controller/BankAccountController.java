package com.icin.banking.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.icin.banking.model.AccountStatus;
import com.icin.banking.model.BankAccount;
import com.icin.banking.repository.BankAccountRepository;

@RestController
@CrossOrigin
public class BankAccountController {

	@Autowired
	BankAccountRepository bankAccountRepo;
	
	@GetMapping("checkuseraccount/{accountNumber}/{ifscCode}")
	public AccountStatus getAccountDetails(@PathVariable Long accountNumber,@PathVariable String ifscCode)
	{
		if(bankAccountRepo.findById(accountNumber).isPresent())
		{
			if(bankAccountRepo.findById(accountNumber).get().getHomeBranch().getIfscCode().equals(ifscCode))
			{
				return AccountStatus.AVAILABLE;
		
			}
			else
			{
				return AccountStatus.INVALID;
			}
		}
		else
		{
			return AccountStatus.INVALID;
		}

	
	}

}
