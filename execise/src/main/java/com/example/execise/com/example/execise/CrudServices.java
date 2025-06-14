package com.example.execise;
import java.util.*;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CrudServices {
   @Autowired
     private final CrudRepository crudRepository;

     public CrudServices(CrudRepository crudRepository){
        this.crudRepository = crudRepository;
     }
// Add Data 
     public Crud addData(Crud crud){
       Crud crud2 = crudRepository.save(crud);
       return crud2;
     }

   //   Get Data 
   public List<Crud> getData(){
      List<Crud> cruds = crudRepository.findAll();
      return cruds;
   }

   // Detele Data 

   public void delete(Long id){
         if(crudRepository.existsById(id)){
            crudRepository.deleteById(id);
         }else{
          throw new RuntimeException("this id is not found");
         }
   }

   // Update Data 
    public Crud updateData(Long id ,Crud update_crud){
         Optional<Crud> optional_crud = crudRepository.findById(id);

         if(optional_crud.isPresent()){
            Crud existing_crud = optional_crud.get();
            existing_crud.setCrud_id(update_crud.getCrud_id());
            existing_crud.setFull_name(update_crud.getFull_name());
            existing_crud.setGender(update_crud.getGender());
            existing_crud.setDob(update_crud.getDob());
            existing_crud.setAddress(update_crud.getAddress());
            return crudRepository.save(existing_crud);

         }else{
            throw new RuntimeException("this id not founded"+id);
         }
    }

   //  Get Data By Id 

   public Crud getDataById(Long id){

      Crud crud = crudRepository.findById(id).orElseThrow(()-> new RuntimeException("id not found"+id));
      return crud;
   }
}
