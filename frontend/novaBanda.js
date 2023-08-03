var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:3000/bandas', true);
xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
const form = document.getElementById("form")
const bandname = document.getElementById("bandname")

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const bandnameValue = bandname.value
    
    if(bandnameValue == '') {
        setErrorFor(bandname, "O nome de usuário é obrigatório.");
    } else {
        setSuccessFor(bandname)
    }
} 

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector( 'small')

    // adiciona mensagem de erro
    small.innerText = message

    // adiciona classe de erro
    formControl.className = "form-control error"
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    // adicionar a classe de sucesso
    formControl.className ="form-control success";
    xhr.send(JSON.stringify({nome: input.value}))
}
