async function loadImoveis() {
    try {
        const response = await fetch('http://localhost:8080/imovel');
        const imoveis = await response.json();

        const catalog = document.getElementById('catalog');
        catalog.innerHTML = '';

        imoveis.forEach(imovel => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.id = `imovel-${imovel.id}`;

            card.innerHTML = `
                <div class="icon-container">
                    <a href="edit.html?id=${imovel.id}">
                        <img src="styles/images/edit.png" class="edit-icon" alt="Editar">
                    </a>
                    <img src="styles/images/delete.png" class="delete-icon" alt="Excluir" onclick="deleteImovel(${imovel.id})">
                </div>
                <h3><strong>Tipo: </strong>${imovel.tipo}</h3>
                <p><strong>ID:</strong> ${imovel.id}</p>
                <p><strong>Endereco:</strong> ${imovel.endereco}</p>
                <p><strong>Tamanho:</strong> ${imovel.tamanho}</p>
                <p><strong>Quartos:</strong> ${imovel.quartos}</p>
                <p><strong>Banheiros:</strong> ${imovel.banheiros}</p>
                <p><strong>Preço:</strong> R$${imovel.valor.toFixed(2)}</p>
                <p><strong>Status:</strong> ${imovel.status}</p>
                <p><strong>Proprietario:</strong> ${imovel.proprietario}</p>
                <p><strong>Observações:</strong> ${imovel.observacoes}</p>
            `;

            catalog.appendChild(card);
        });
    } catch (error) {
        console.error("Erro ao carregar imóveis:", error);
    }
}

function showCustomConfirm(message, onConfirm) {
    const confirmBox = document.getElementById("custom-confirm");
    const confirmMessage = document.getElementById("confirm-message");
    const yesButton = document.getElementById("confirm-yes-button");
    const noButton = document.getElementById("confirm-no-button");

    confirmMessage.textContent = message;

    confirmBox.classList.remove("hidden");

    //Remove eventos anteriores
    yesButton.replaceWith(yesButton.cloneNode(true));
    noButton.replaceWith(noButton.cloneNode(true));

    document.getElementById("confirm-yes-button").addEventListener("click", () => {
        confirmBox.classList.add("hidden");
        onConfirm();
    });

    document.getElementById("confirm-no-button").addEventListener("click", () => {
        confirmBox.classList.add("hidden");
    });
}

function showCustomAlert(message) {
    const alertBox = document.createElement('div');
    alertBox.className = 'custom-alert';
    alertBox.textContent = message;

    document.body.appendChild(alertBox);

    //Remove o alerta após 3 segundos
    setTimeout(() => {
        alertBox.remove();
    }, 3000);
}

async function deleteImovel(id) {
    showCustomConfirm("Tem certeza que deseja excluir este imóvel?", async () => {
        try {
            const response = await fetch(`http://localhost:8080/imovel/delete/${id}`, {
                method: "DELETE",
            });

            if (response.ok) {
                const cardToDelete = document.getElementById(`imovel-${id}`);
                if (cardToDelete) {
                    cardToDelete.remove();
                }
                showCustomAlert("Imóvel excluído com sucesso!");
            } else {
                showCustomAlert("Erro ao excluir o imóvel. Tente novamente.");
            }
        } catch (error) {
            console.error("Erro ao excluir imóvel:", error);
            showCustomAlert("Ocorreu um erro ao tentar excluir o imóvel.");
        }
    });
}

//Carrega os imóveis quando a página termina de carregar
document.addEventListener("DOMContentLoaded", loadImoveis);