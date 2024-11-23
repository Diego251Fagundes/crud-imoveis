package imoveis_crud.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import imoveis_crud.entity.Imovel;
import imoveis_crud.service.ImovelService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/imovel")
@CrossOrigin(origins = "http://localhost:63342")
public class ImovelController {

    @Autowired
    ImovelService imovelService;
    // retorna lista de imoveis
    @GetMapping
    public ResponseEntity<List<Imovel>> getAllImovs() {
        List<Imovel> imoveis = imovelService.getAllImovsService();
        return ResponseEntity.ok(imoveis);
    }

    // retorna dados do produto como id fornece
    @GetMapping("/{id}")
    public ResponseEntity<Optional<Imovel>> getImovService(@PathVariable Integer id) {
        Optional<Imovel> imovel = imovelService.getImovService(id);
        if(imovel.isPresent()) {
            return ResponseEntity.ok(imovel);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    //Adicionar um imovel na tabela
    @PostMapping("/add")
    public ResponseEntity<Imovel> addImov(@RequestBody Imovel imovel){
        Imovel newImov = imovelService.insertImovService(imovel);
        return new ResponseEntity<>(newImov, HttpStatus.CREATED);
    }


    //Atualiza um imóvel existente
    @PutMapping("/update/{id}")
    public ResponseEntity<Imovel> updateImov(@PathVariable Integer id, @RequestBody Imovel imovel) {
        Optional<Imovel> existingImovel = imovelService.getImovService(id);

        if (existingImovel.isPresent()) {
            imovel.setId(id);
            Imovel updatedImov = imovelService.updateImovService(imovel);
            return ResponseEntity.ok(updatedImov);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    //Deleta o imovel por id
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteImov(@PathVariable Integer id){
        imovelService.deleteImovByIdService(id);
        return ResponseEntity.noContent().build();
    }
}