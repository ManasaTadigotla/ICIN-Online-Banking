package com.icin.banking.controller;

import java.time.LocalDate;
import java.util.List;
//import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.icin.banking.model.BankAccount;
import com.icin.banking.model.Transaction;
import com.icin.banking.model.TransactionStatus;
import com.icin.banking.model.TransactionType;
import com.icin.banking.repository.BankAccountRepository;
import com.icin.banking.repository.TransactionRepository;

@RestController
@CrossOrigin
public class TransactionController {

	@Autowired
	TransactionRepository transactionRepo;
	
	@Autowired
	BankAccountRepository bankAccountRepo;
	
	@GetMapping("alltransactions/{accountNumber}")
	public List<Transaction> getTransactionsByAccount(@PathVariable Long accountNumber)
	{
		return transactionRepo.findAll().stream().filter(trans->trans.getFromAccountNumber().equals(accountNumber))
				.collect(Collectors.toList());
	}
	
	@GetMapping("toptransactions/{accountNumber}/{noOfTransactions}")
	public List<Transaction> getTopTransactions(@PathVariable Long accountNumber,@PathVariable int noOfTransactions)
	{
		return transactionRepo.getTopTransactions(accountNumber, noOfTransactions);
	}
	
	@GetMapping("Transactions/{accountNumber}/{fromDate}/{toDate}")
	public List<Transaction> getTransactionsByDate(@PathVariable Long accountNumber,@PathVariable LocalDate fromDate,@PathVariable LocalDate toDate)
	{
		
		return null;
	}
	
	@PostMapping("savetransaction")
	public Transaction saveNewTransaction(@RequestBody Transaction userTransaction)
	{
		return transactionRepo.save(userTransaction);
	}
	
	@GetMapping("maketransaction/{fromAccountNumber}/{toAccountNumber}/{amount}")
	public TransactionStatus DoTransaction(@PathVariable Long fromAccountNumber,@PathVariable Long toAccountNumber,@PathVariable Double amount)
	{
		try
		{
			Transaction transaction=new Transaction();
			BankAccount fromAccount=bankAccountRepo.findById(fromAccountNumber).get();
			BankAccount toAccount=bankAccountRepo.findById(toAccountNumber).get();
			if(fromAccount.getBalance().compareTo(amount)>0)
			{
				Double toBalance;
				fromAccount.setBalance(fromAccount.getBalance()-amount);
				toAccount.setBalance(toAccount.getBalance()+amount);
				transaction.setDateOfTransaction(LocalDate.now());
				transaction.setFromAccountNumber(fromAccountNumber);
				transaction.setToAccountNumber(toAccountNumber);
				transaction.setAmount(amount);
				transaction.setCurrentBalance(fromAccount.getBalance());
				transaction.setType(TransactionType.DEBIT);
				bankAccountRepo.save(fromAccount);
				bankAccountRepo.save(toAccount);
				transactionRepo.save(transaction);
				return TransactionStatus.SUCCESS;
			}
			else
			{
				return TransactionStatus.INSUFFICIENTFUNDS;
			}
		}
		catch(Exception ex)
		{			
			return TransactionStatus.FAILURE;
		}
		
		
		
	}
	
}
