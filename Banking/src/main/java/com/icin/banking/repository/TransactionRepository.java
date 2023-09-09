package com.icin.banking.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.icin.banking.model.Transaction;

public interface TransactionRepository extends JpaRepository<Transaction, Long>{
	@Query("SELECT t FROM Transaction t WHERE t.fromAccountNumber=?1 ORDER By dateOfTransaction LIMIT ?2")
	public List<Transaction> getTopTransactions(Long accountNumber, int noOfRows);	
	
}
