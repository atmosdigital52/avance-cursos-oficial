document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('successModal');
    const closeModal = document.getElementById('closeModal');
    const form = document.querySelector('form');

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const jsonData = {};
        formData.forEach((value, key) => { jsonData[key] = value; });

        fetch('https://api.sheetmonkey.io/form/itc5r1soZ3UP2AeTdXhzYG', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(jsonData)
        })
        .then(response => {
            if (!response.ok) throw new Error('Erro no envio');
            return response.json();
        })
        .then(() => {
            modal.style.display = 'flex';
            form.reset();
        })
        .catch(error => {
            console.error(error);
            modal.style.display = 'flex';
            form.reset();
        });
    };

    form.addEventListener('submit', handleSubmit);
    closeModal.addEventListener('click', () => modal.style.display = 'none');
});
