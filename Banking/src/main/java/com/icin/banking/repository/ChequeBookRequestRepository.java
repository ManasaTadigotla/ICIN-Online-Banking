package com.icin.banking.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.icin.banking.model.ChequeBookRequest;

public interface ChequeBookRequestRepository extends JpaRepository<ChequeBookRequest, Long>{

}
