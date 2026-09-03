package com.kodnest.app.userrepositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.kodnest.app.entities.Product;


@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
    java.util.List<Product> findByCategory_CategoryId(Integer categoryId);

    @Query("SELECT p.category.categoryName FROM Product p WHERE p.productId = :productId")
    String findCategoryNameByProductId(int productId);
}