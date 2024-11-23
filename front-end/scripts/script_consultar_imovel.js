document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    if (id) {
        document.getElementById("searchId").value = id;
        consultarImovelPorID();
    }
});

async function consultarImovelPorID() {
    const id = document.getElementById("searchId").value;
    const singleImovelContainer = document.getElementById("single-imovel");
    singleImovelContainer.innerHTML = '';

    if (id) {
        try {
            const response = await fetch(`http://localhost:8080/imovel/${id}`);
            if (response.ok) {
                const imovel = await response.json();
                const card = document.createElement("div");
                card.classList.add("card");

                //Preenche o card com os dados do imóvel
                card.innerHTML = `
                    <h3><strong>Tipo:</strong> ${imovel.tipo}</h3>
                    <p><strong>ID:</strong> ${imovel.id}</p>
                    <p><strong>Endereço:</strong> ${imovel.endereco}</p>
                    <p><strong>Tamanho:</strong> ${imovel.tamanho}</p>
                    <p><strong>Quartos:</strong> ${imovel.quartos}</p>
                    <p><strong>Banheiros:</strong> ${imovel.banheiros}</p>
                    <p><strong>Preço:</strong> R$ ${imovel.valor.toFixed(2)}</p>
                    <p><strong>Status:</strong> ${imovel.status}</p>
                    <p><strong>Proprietário:</strong> ${imovel.proprietario}</p>
                    <p><strong>Observações:</strong> ${imovel.observacoes}</p>
                `;

                singleImovelContainer.appendChild(card);
            } else {
                alert("Imóvel com o ID fornecido não foi encontrado, insira um ID válido.");
                singleImovelContainer.innerHTML = '<p>Imóvel não encontrado.</p>';
            }
        } catch (error) {
            console.error("Erro ao buscar imóvel:", error);
            alert("Erro ao tentar buscar o imóvel. Tente novamente mais tarde.");

        }
    } else {
        alert("Por favor, insira um ID válido.");
        singleImovelContainer.innerHTML = '<p>Por favor, insira um ID válido.</p>';
    }
}