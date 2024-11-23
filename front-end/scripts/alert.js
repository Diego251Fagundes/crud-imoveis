function showCustomAlert(message, redirectUrl = null) {
    const alertBox = document.getElementById("custom-alert");
    const alertMessage = document.getElementById("alert-message");
    const okButton = document.getElementById("alert-ok-button");

    //Mensagem no alerta
    alertMessage.textContent = message;

    alertBox.classList.remove("hidden");
    okButton.replaceWith(okButton.cloneNode(true));

    //Adiciona uma função ao botão OK
    const newOkButton = document.getElementById("alert-ok-button");
    newOkButton.addEventListener("click", () => {
        alertBox.classList.add("hidden");

        //Encaminha um URL
        if (redirectUrl) {
            window.location.href = redirectUrl;
        }
    });
}