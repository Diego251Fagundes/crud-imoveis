package imoveis_crud.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import imoveis_crud.entity.Imovel;
import imoveis_crud.repository.ImovelRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ImovelService {
    @Autowired
    ImovelRepository imovelRepository;
    public List<Imovel> getAllImovsService(){
        List<Imovel> imoveis = imovelRepository.findAll();
        return imoveis;
    }

    public Optional<Imovel> getImovService(Integer id){
        return imovelRepository.findById(id);
    }

    public Imovel insertImovService(Imovel imovel){
        return imovelRepository.save(imovel);
    }

    public void deleteImovByIdService(Integer id){
        imovelRepository.deleteById(id);
    }

    public Imovel updateImovService(Imovel imovel){
        Imovel updatedImov = imovelRepository.findById(imovel.getId()).get();
        updatedImov = imovel;
        return imovelRepository.save(updatedImov);
    }
}
//produto= imovel
//produtos = imoveis
//products = imovs
//product = imov