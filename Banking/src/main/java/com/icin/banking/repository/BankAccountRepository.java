package com.icin.banking.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.icin.banking.model.BankAccount;

public interface BankAccountRepository extends JpaRepository<BankAccount, Long>{
}
