document.addEventListener('DOMContentLoaded', function () {
    const handleSubmit = (event) => {
        event.preventDefault(); // Impede o envio do formulário

        console.log('Formulário enviado');
        alert('Enviando formulário...');
    }

    document.querySelector('form').addEventListener('submit', handleSubmit);
});