// src/main/java/com/example/gstapp/dto/RegisterRequestDTO.java
package com.example.gstapp.dto;

import jakarta.validation.Valid;
import jakarta.validation.constraints.Pattern;


import com.example.gstapp.model.User.Role;

public class RegisterRequestDTO {
    private String username;
    private String email;
    @Pattern(regexp = "^[+]?\\d{10,15}$", message = "Invalid phone number")
    private String phoneNumber;
    private String password;
    private Role role;
    private String businessName;

    public RegisterRequestDTO() {}

    @Valid
    public RegisterRequestDTO(String username, String email, String password, Role role, String businessName) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;
        this.businessName = businessName;
        this.phoneNumber = phoneNumber;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
    
    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public String getBusinessName() {
        return businessName;
    }

    public void setBusinessName(String businessName) {
        this.businessName = businessName;
    }
}
