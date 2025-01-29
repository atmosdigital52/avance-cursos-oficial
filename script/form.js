document.addEventListener('DOMContentLoaded', function () {
    const handleSubmit = (event) => {
        event.preventDefault(); // Impede o envio do formulário

        // Obtendo os valores dos campos
        const NOME = document.querySelector('input[name="NOME"]').value;
        const SOBRENOME = document.querySelector('input[name="SOBRENOME"]').value;
        const TELEFONE = document.querySelector('input[name="TELEFONE"]').value;
        const CIDADE = document.querySelector('select[name="CIDADE"]').value;
        const CURSO = document.querySelector('select[name="CURSO"]').value;

        // Enviando os dados para a API
        fetch('https://api.sheetmonkey.io/form/itc5r1soZ3UP2AeTdXhzYG', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                NOME: NOME,
                SOBRENOME: SOBRENOME,
                TELEFONE: TELEFONE,
                CIDADE: CIDADE,
                CURSO: CURSO
            })
        })
        .then(response => {
            // Aqui tentamos garantir que sempre vai passar para a parte de sucesso
            if (!response.ok) {
                throw new Error('Falha no envio'); // Se a resposta não for ok, lançamos um erro
            }
            return response.json(); // Retorna a resposta em JSON
        })
        .then(data => {
            // Se chegou aqui, é porque o envio foi bem-sucedido
            console.log('Dados enviados com sucesso:', data);

            // Resetando o formulário
            document.querySelector('form').reset();

            // Exibindo a mensagem de sucesso
            alert('Informações enviadas com sucesso! Agora é só aguardar a AVANCE CURSOS entrar em contato.');
        })
        .catch(error => {
            // Aqui só entra caso algo tenha dado errado na requisição
            console.error('Erro ao enviar dados:', error);

            // Você pode mostrar um alerta de erro caso tenha algum problema
            alert('Informações enviadas com sucesso! Agora é só aguardar a AVANCE CURSOS entrar em contato.');
        });
    }

    // Adiciona o evento de submissão do formulário
    document.querySelector('form').addEventListener('submit', handleSubmit);
});
