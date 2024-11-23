package imoveis_crud.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import imoveis_crud.entity.Imovel;

import java.util.List;

public interface ImovelRepository extends JpaRepository<Imovel, Integer> {

}
