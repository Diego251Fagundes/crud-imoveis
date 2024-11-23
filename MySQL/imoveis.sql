create database imoveis;
use imoveis;

create table imovel(
    id serial,
    tipo varchar(50),
    endereco varchar(200),
    tamanho varchar(50),
    quartos int,
    banheiros int,
    valor double,
    `status` varchar(50),
    proprietario varchar(100),
    observacoes varchar(200)
);

-- Exemplos de imoveis para serem cadastrados
INSERT INTO imovel (id, tipo, endereco, tamanho, quartos, banheiros, valor, `status`, proprietario, observacoes)
VALUES
(1, 'Casa', 'Rua das Flores, 123, Bairro Jardim, São Paulo, SP', '120 m²', 3, 2, 450000.00, 'Disponível', 'João Silva', 'Casa recém-reformada, com quintal e área de churrasqueira.'),
(2, 'Apartamento', 'Avenida Paulista, 1500, Apto 203, Bela Vista, São Paulo, SP', '80 m²', 2, 1, 650000.00, 'Disponível', 'Maria Oliveira', 'Condomínio com piscina e academia.'),
(3, 'Chácara', 'Estrada das Palmeiras, Km 5, Zona Rural, Campinas, SP', '1500 m²', 4, 3, 1200000.00, 'Vendido', 'Carlos Medeiros', 'Chácara com pomar e piscina.'),
(4, 'Casa', 'Rua do Sol, 45, Centro, Florianópolis, SC', '90 m²', 2, 2, 350000.00, 'Disponível', 'Ana Souza', 'Localização central, próxima a escolas e comércios.'),
(5, 'Apartamento', 'Rua das Acácias, 500, Apto 505, Bairro Lagoa, Porto Alegre, RS', '110 m²', 3, 2, 700000.00, 'Disponível', 'Lucas Ferreira', 'Vista para o lago, com vaga de garagem dupla.'),
(6, 'Sobrado', 'Avenida das Palmeiras, 800, Bairro Novo Horizonte, Curitiba, PR', '200 m²', 4, 3, 850000.00, 'Disponível', 'Daniela Costa', 'Sobrado com varanda e espaço gourmet.'),
(7, 'Casa de Praia', 'Rua do Mar, 10, Praia Grande, Ubatuba, SP', '140 m²', 3, 2, 980000.00, 'Disponível', 'Roberto Lima', 'Casa a 100 metros da praia.'),
(8, 'Apartamento', 'Rua do Comércio, 220, Apto 701, Centro, Belo Horizonte, MG', '95 m²', 2, 1, 550000.00, 'Disponível', 'Fernanda Alves', 'Apartamento mobiliado, com ar condicionado.'),
(9, 'Terreno', 'Avenida Principal, Lote 15, Bairro Industrial, Salvador, BA', '500 m²', 0, 0, 250000.00, 'Disponível', 'Pedro Araújo', 'Terreno plano, pronto para construir.'),
(10, 'Cobertura', 'Rua das Estrelas, 400, Cobertura 01, Ipanema, Rio de Janeiro, RJ', '300 m²', 4, 4, 3200000.00, 'Disponível', 'Marcos Tavares', 'Cobertura de alto padrão, com piscina e vista para o mar.');