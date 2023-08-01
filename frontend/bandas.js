var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://localhost:3000/bandas', true);

xhr.onload = function() {
    if(xhr.status === 200) {
        let responseData = xhr.responseText;
        console.log(JSON.parse(responseData));
        popularListas(JSON.parse(responseData))
    } else {
        console.log('request failed. Status: ' + xhr.status);
    }
};

xhr.onerror = function() {
    console.log('Request failed');
};

xhr.send();


function popularListas(responseData) {
    const bandasTable = document.getElementById('bandastable');

    responseData.forEach(row => {
        const tr = document.createElement('tr');

        const idCell = document.createElement('td');
        idCell.textContent = row.id;
        tr.appendChild(idCell);

        const nomeCell = document.createElement('td');
        nomeCell.textContent = row.nome;
        tr.appendChild(nomeCell);

        bandasTable.appendChild(tr);
    })
}