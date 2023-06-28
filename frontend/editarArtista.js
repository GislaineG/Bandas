const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
console.log('ID:', id);

var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://localhost:3000/artistas?id=' +id, true);

xhr.onload = function() {
  if (xhr.status === 200) {
    let responseData = xhr.responseText;
    console.log(JSON.parse(responseData));
    popularListas(JSON.parse(responseData))
  } else {
    console.log('Request failed. Status: ' + xhr.status);
  }
};

xhr.onerror = function() {
  console.log('Request failed');
};

xhr.send();

function popularListas(responseData) {

  const artistasTable = document.getElementById('artistasTable');

  responseData.forEach(row => {
    const tr = document.createElement('tr');

    // Cria celulas da tablea para cada coluna
    const idCell = document.createElement('td');
    idCell.textContent = row.id;
    tr.appendChild(idCell);

    const nomeCell = document.createElement('td');
    nomeCell.textContent = row.nome;
    tr.appendChild(nomeCell);

    const funcaoCell = document.createElement('td');
    funcaoCell.textContent = row.funcao;
    tr.appendChild(funcaoCell);

    const bandaIdCell = document.createElement('td');
    bandaIdCell.textContent = row.bandaId;
    tr.appendChild(bandaIdCell);

    // Adiciona a linha toda para tabela
    artistasTable.appendChild(tr);
  });
}