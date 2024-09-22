document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o recarregamento da página

    // Obtendo os valores do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    // Calculando o IMC
    const imc = (weight / (height * height)).toFixed(2);
    let classification = '';

    // Classificando o IMC
    if (imc < 18.5) {
        classification = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        classification = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        classification = 'Sobrepeso';
    } else {
        classification = 'Obesidade';
    }

    // Adicionando uma nova linha na tabela
    const table = document.getElementById('resultsTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    // Criando células na nova linha e preenchendo com os valores
    newRow.insertCell(0).textContent = name;
    newRow.insertCell(1).textContent = email;
    newRow.insertCell(2).textContent = phone;
    newRow.insertCell(3).textContent = height;
    newRow.insertCell(4).textContent = weight;
    newRow.insertCell(5).textContent = imc;
    newRow.insertCell(6).textContent = classification;

    // Limpando o formulário após o envio
    document.getElementById('imcForm').reset();
});
