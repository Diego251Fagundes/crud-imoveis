async function loadImovelData() {

    const urlParams = new URLSearchParams(window.location.search);
    const imovelId = urlParams.get('id');

    if (imovelId) {
        try {

            const response = await fetch(`http://localhost:8080/imovel/${imovelId}`);
            if (!response.ok) {
                throw new Error("Erro ao buscar os dados do imóvel.");
            }
            const imovel = await response.json();

            document.getElementById('id').value = imovel.id;
            document.getElementById('tipo').value = imovel.tipo;
            document.getElementById('endereco').value = imovel.endereco;
            document.getElementById('tamanho').value = imovel.tamanho;
            document.getElementById('quartos').value = imovel.quartos;
            document.getElementById('banheiros').value = imovel.banheiros;
            document.getElementById('valor').value = imovel.valor;
            document.getElementById('status').value = imovel.status;
            document.getElementById('proprietario').value = imovel.proprietario;
            document.getElementById('observacoes').value = imovel.observacoes;
        } catch (error) {
            console.error("Erro ao carregar dados do imóvel:", error);
            showCustomAlert("Não foi possível carregar os dados do imóvel.");
        }
    }
}

//Carrega os dados do imóvel quando a página é carregada
document.addEventListener("DOMContentLoaded", loadImovelData);

async function editImovel() {
    const id = document.getElementById("id").value;
    const tipo = document.getElementById("tipo").value;
    const endereco = document.getElementById("endereco").value;
    const tamanho = document.getElementById("tamanho").value;
    const quartos = document.getElementById("quartos").value;
    const banheiros = document.getElementById("banheiros").value;
    const valor = document.getElementById("valor").value;
    const status = document.getElementById("status").value;
    const proprietario = document.getElementById("proprietario").value;
    const observacoes = document.getElementById("observacoes").value;

    const imovel = {
        tipo,
        endereco,
        tamanho,
        quartos,
        banheiros,
        valor,
        status,
        proprietario,
        observacoes
    };

    try {
        const response = await fetch(`http://localhost:8080/imovel/update/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(imovel),
        });

        if (!response.ok) {
            throw new Error("Erro ao salvar as alterações.");
        }
        const data = await response.json();

        showCustomAlert("Imóvel atualizado com sucesso!", "catalog.html");

    } catch (error) {
        console.error("Erro ao atualizar o imóvel:", error);
        showCustomAlert("Erro ao salvar as alterações.");
    }
}

// Adiciona um event listener para o botão de salvar
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    editImovel();
});