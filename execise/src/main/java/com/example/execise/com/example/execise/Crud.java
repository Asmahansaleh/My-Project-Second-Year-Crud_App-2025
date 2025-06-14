package com.example.execise;

import java.time.LocalDate;

import jakarta.persistence.*;

import lombok.Data;
@Data
@Entity
@Table(name="crud_table")
public class Crud {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int crud_id;
    private String full_name;
    private String gender;
    private LocalDate dob;
    private String address;
    
    // public int getCrud_id(){
    //     return this.crud_id;
    // }
    // public String getName() {
    //     return name;
    // }
    // public void setName(String name) {
    //     this.name = name;
    // }
    // public void setCrud_id(int crud_id){
    //     this.crud_id = crud_id;
        
    // }

}
