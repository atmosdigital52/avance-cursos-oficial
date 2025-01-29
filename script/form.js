document.addEventListener('DOMContentLoaded', function () {
    const handleSubmit = (event) => {
        event.preventDefault(); // Impede o envio do formulário

        console.log('Formulário enviado');
        alert('Formulário enviado!');
    }

    document.querySelector('form').addEventListener('submit', handleSubmit);
});