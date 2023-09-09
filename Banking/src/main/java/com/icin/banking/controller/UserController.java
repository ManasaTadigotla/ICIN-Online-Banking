package com.icin.banking.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.icin.banking.model.BankAccount;
import com.icin.banking.model.User;
import com.icin.banking.repository.BankAccountRepository;
import com.icin.banking.repository.UserRepository;

@RestController
@CrossOrigin
public class UserController {
	
	@Autowired
	UserRepository userRepository;
	@Autowired
	BankAccountRepository bankAccountRepo;
	
	
	@GetMapping("useraccountdetails/{userName}")
	public List<BankAccount> getAccountDetails(@PathVariable String userName)
	{
		User user=userRepository.findByUserName(userName);
		 return user.getBankAccount();
		//return bankAccountRepo.find
	}
	
	@GetMapping("user/{userName}")
	public User getUser(@PathVariable String userName)
	{
		return userRepository.findByUserName(userName);			
	}
	
	@GetMapping("checkUserName/{userName}")
	public boolean isUserNameExists(@PathVariable String userName)
	{
		if(userRepository.findByUserName(userName)!=null)
		{
			return true;
			
		}else
		{
			return false;
		}
	}
	
	@PostMapping("newuser")
	public User addNewUser(@RequestBody User user)
	{
		return userRepository.save(user);
	}
	
	@GetMapping("checkpassword/{userName}/{password}")
	public boolean checkPassword(@PathVariable String userName,@PathVariable String password)
	{
		User user=userRepository.findByUserName(userName);
		if(user.getUserName().equals(userName)&& user.getPassword().equals(password))
		{
			return true;
		}
		else
		{
			return false;
		}
	}
	
	@GetMapping("updatepassword/{userName}/{password}")
	public int updatePassword(@PathVariable String userName,@PathVariable String password )
	{
		User user=userRepository.findByUserName(userName);
		if(user!=null)
		{
			user.setPassword(password);
			User u= userRepository.save(user);
			if(u!=null)
			{
				return 1;
			}
			else
			{
				return -1;
			}
			
		}
		else
		{
			return 0;
		}
	}
	
}
