//Limpa os campos do formulário
function clearTextFields() {
    document.getElementById("id").value = "";
    document.getElementById("tipo").value = "";
    document.getElementById("endereco").value = "";
    document.getElementById("tamanho").value = "";
    document.getElementById("quartos").value = "";
    document.getElementById("banheiros").value = "";
    document.getElementById("valor").value = "";
    document.getElementById("status").value = "";
    document.getElementById("proprietario").value = "";
    document.getElementById("observacoes").value = "";
}

//Adicionar um imóvel
async function addImov() {
    const formEl = document.querySelector("#formadd");
    const formData = new FormData(formEl);

    //objeto JSON
    const imov = {};
    formData.forEach((value, key) => {
        imov[key] = value;
    });

    console.log(imov);

    const url = "http://localhost:8080/imovel/add";
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(imov)
    };

    try {
        const result = await fetch(url, options);
        //Verificando a resposta do servidor
        if (result.status === 201) {
            clearTextFields();
            showCustomAlert('Imóvel cadastrado com sucesso', "index.html");
        } else {
            showCustomAlert('Erro ao cadastrar imóvel: ' + result.statusText);
        }
    } catch (error) {
        showCustomAlert('Erro ao conectar com o servidor');
        console.error(error);
    }
}