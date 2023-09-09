package com.icin.banking.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;

@Entity
public class HomeBranch {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long brancId;
	private String branchName;
	private String ifscCode;
	private Address address;
	//private Long Pincode;
	@JsonIgnore
	@OneToMany(mappedBy = "homeBranch")
	private List<BankAccount> bankAccounts;
	
	
	
	public Long getBrancId() {
		return brancId;
	}
	public void setBrancId(Long brancId) {
		this.brancId = brancId;
	}
	public String getBranchName() {
		return branchName;
	}
	public void setBranchName(String branchName) {
		this.branchName = branchName;
	}
	public String getIfscCode() {
		return ifscCode;
	}
	public void setIfscCode(String ifscCode) {
		this.ifscCode = ifscCode;
	}
	public Address getAddress() {
		return address;
	}
	public void setAddress(Address address) {
		this.address = address;
	}
	
	
	
	public List<BankAccount> getBankAccounts() {
		return bankAccounts;
	}
	public void setBankAccounts(List<BankAccount> bankAccounts) {
		this.bankAccounts = bankAccounts;
	}
	public HomeBranch() {
		super();
		// TODO Auto-generated constructor stub
	}	

}
