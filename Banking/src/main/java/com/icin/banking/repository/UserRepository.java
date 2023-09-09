package com.icin.banking.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.GetMapping;

import com.icin.banking.model.User;

public interface UserRepository extends JpaRepository<User, Long>{
	//Optional<User> findByUserName(String userName);
	@Query("SELECT u from User u WHERE u.userName=?1")
	User findByUserName(String userName);
}
