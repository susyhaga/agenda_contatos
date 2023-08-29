const form = document.getElementById('form-agenda');
const inputNomeAgenda =document.getElementById('nome-agenda');
const inputDeviceAgenda =document.getElementById('device');
const inputTelefone = document.getElementById('telefone');
const totalContatos = document.getElementById('total-contatos');
const nomes =[];
const telefone =[];
const estado =[];
const device =[];
let linhas = ''; //por ultimo//1+

form.addEventListener('submit',function(e){
    e.preventDefault();

    adicionaLinhas();
    atualizaTabela();
    atualizaTotalContatos();
})

function padraoTel(numeroTel) {
    if(numeroTel.length === 11) {
        return numeroTel.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    } else if (numeroTel.length === 10) {
        return numeroTel.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3');
    } else {
        return numeroTel;
    }
}

function adicionaLinhas(){
    if(nomes.includes(inputNomeAgenda.value)){
        alert(`O nome ${inputNomeAgenda.value} já foi inserido.`);
    } else if(telefone.includes(inputTelefone.value)){
        alert(`O telefone ${inputTelefone.value} já foi inserido.`);
    }else{ 
        const numeroTelFormatado = padraoTel(inputTelefone.value)
        nomes.push(inputNomeAgenda.value);
        device.push(inputDeviceAgenda.value)
        telefone.push(inputTelefone.value);

        let linha='<tr>';
        linha += `<td>${inputNomeAgenda.value}</td>`;
        linha += `<td>${inputDeviceAgenda.value}</td>`;
        linha += `<td>${numeroTelFormatado}</td>`;
        linha +='</tr>';
        linhas += linha;

    }

    inputNomeAgenda.value ='';
    inputDeviceAgenda.value ='';
    inputTelefone.value ='';
}


function atualizaTabela(){
    const corpoTabela =document.querySelector('tbody');
    corpoTabela.innerHTML=linhas;
}


// Somar total de contatos
function atualizaTotalContatos(){
    let somaTotalContatos = nomes.length;
    totalContatos.innerHTML = somaTotalContatos;
}