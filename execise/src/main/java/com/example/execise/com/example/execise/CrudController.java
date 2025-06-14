package com.example.execise;

import java.util.List;

import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("api/crud")
public class CrudController {
    
    private final CrudServices crudServices;


    public CrudController(CrudServices crudServices){
        this.crudServices = crudServices;
    }

@PostMapping("/addData")
public Crud addData(@RequestBody Crud crud){
    Crud crud2 = crudServices.addData(crud);
    return crud2;
}

@GetMapping("/getData")
public List<Crud> getData(){

    List<Crud> cruds = crudServices.getData();

    return cruds;
}

@PutMapping("/{id}")
public Crud update(@PathVariable Long id ,@RequestBody Crud crud){

    Crud crud2 = crudServices.updateData(id, crud);
    return crud2;

}

@DeleteMapping("{id}")
public String deleteById(@PathVariable Long id){
        crudServices.delete(id);
        return "Deleted successfully "+id;
}

@GetMapping("{id}")
public Crud getDataById(@PathVariable Long id){
        Crud crud = crudServices.getDataById(id);

        return crud;
}

}
