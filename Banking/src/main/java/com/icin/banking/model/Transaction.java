package com.icin.banking.model;

import java.time.LocalDate;
import java.util.Date;

import org.hibernate.annotations.ColumnDefault;
import org.hibernate.mapping.Value;
import org.springframework.data.annotation.CreatedDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Transaction {
@Id
@GeneratedValue	(strategy = GenerationType.IDENTITY)
private Long id;
@Enumerated(EnumType.STRING)
private TransactionType type;
private Long fromAccountNumber;
private Long toAccountNumber;
private String description;
@CreatedDate
@Column(name="dateOfTransaction")
private LocalDate dateOfTransaction;
private Double amount;
private Double currentBalance;



public Long getId() {
	return id;
}

public void setId(Long id) {
	this.id = id;
}

public TransactionType getType() {
	return type;
}



public void setType(TransactionType type) {
	this.type = type;
}



public Long getFromAccountNumber() {
	return fromAccountNumber;
}



public void setFromAccountNumber(Long fromAccountNumber) {
	this.fromAccountNumber = fromAccountNumber;
}



public Long getToAccountNumber() {
	return toAccountNumber;
}



public void setToAccountNumber(Long toAccountNumber) {
	this.toAccountNumber = toAccountNumber;
}



public LocalDate getDateOfTransaction() {
	return dateOfTransaction;
}



public void setDateOfTransaction(LocalDate dateOfTransaction) {
	this.dateOfTransaction = dateOfTransaction;
}



public Double getAmount() {
	return amount;
}



public void setAmount(Double amount) {
	this.amount = amount;
}



public Double getCurrentBalance() {
	return currentBalance;
}



public void setCurrentBalance(Double currentBalance) {
	this.currentBalance = currentBalance;
}



public String getDescription() {
	return description;
}

public void setDescription(String description) {
	this.description = description;
}

public Transaction() {
	super();
	// TODO Auto-generated constructor stub
}

}
