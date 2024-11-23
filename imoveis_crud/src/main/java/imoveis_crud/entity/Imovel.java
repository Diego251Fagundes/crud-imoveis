package imoveis_crud.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="imovel")
public class Imovel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "tipo")
    private String tipo;

    @Column(name = "endereco")
    private String endereco;

    @Column(name = "tamanho")
    private String tamanho;

    @Column(name = "quartos")
    private int quartos;

    @Column(name = "banheiros")
    private int banheiros;

    @Column(name = "valor")
    private double valor;

    @Column(name = "status")
    private String status;

    @Column(name = "proprietario")
    private String proprietario;

    @Column(name = "observacoes")
    private String observacoes;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}