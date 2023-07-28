package com.ats.security.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ats.security.entity.Product;

public interface ProductRepository extends JpaRepository<Product,Integer> {

	List<Product> findByType(String type);

}
