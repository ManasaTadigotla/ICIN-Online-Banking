package com.icin.banking.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.icin.banking.model.ChequeBook;

public interface ChequeBookRepository extends JpaRepository<ChequeBook, Long>{

}
