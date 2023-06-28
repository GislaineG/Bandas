var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://localhost:3000/artistas', true);

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

    // inclui celulas adicionas para botões editar / remover
    const editarCell = document.createElement('td');
    const editarButton = document.createElement('button');
    editarButton.textContent = 'Editar';
    editarButton.id = row.id; 
    editarCell.appendChild(editarButton);
    tr.appendChild(editarCell);

    const removerCell = document.createElement('td');
    const removerButton = document.createElement('button');
    removerButton.textContent = 'Remover';
    removerButton.id = row.id;
    removerCell.appendChild(removerButton);
    tr.appendChild(removerCell);

    // Adiciona a linha toda para tabela
    artistasTable.appendChild(tr);

    // inclui eventos com ações executadas quando os botões são clicados
    editarButton.addEventListener('click', function() {
      const id = this.id;
      console.log('Botao editar clicado! Id:', id);
      const url = `editarArtista.html?id=${id}`;
      window.location.href = url;
    });

    removerButton.addEventListener('click', function() {
      console.log('Botao remover clicado! Id:', this.id);
    });
  });
}

