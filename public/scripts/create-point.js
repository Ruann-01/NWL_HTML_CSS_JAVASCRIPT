
function populatesUFs(){
    const ufSelect = document
    .querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then(res => res.json())
    .then(states =>{
        for(state of states){
            ufSelect.innerHTML +=`<option value="${state.id}">${state.nome}</option>`
        }
    })
}

populatesUFs()


function getCities(event) {
    const citySelect = document.querySelector("select[name=city]")

    const stateInput = document.querySelector("input[name=state]")

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML="<option value>Selecione a Cidade</option>"
    citySelect.disabled = true
    
    fetch(url)
    .then(res => res.json())
    .then(cities =>{
        for(city of cities){
            citySelect.innerHTML +=`<option value="${city.nome}">${city.nome}</option>`
        }

        citySelect.disabled=false
    })
}


document
.querySelector("select[name=uf]")
.addEventListener("change", getCities)

//Ítens de Coleta
//pegas todos os li's

const itensToColect = document.querySelectorAll(".itens-grid li")

for(const item of itensToColect){
    item.addEventListener("click", handleSelectedItem)
}

const collectedItens = document.querySelector("input[name=itens]")

let selectedItens = [];

function handleSelectedItem(event){
    const itemLI = event.target
    
    /// adicionar ou remover uma classe em javascript
    itemLI.classList.toggle("selected")


    const itemId = itemLI.dataset.id

    //verificar se existem itens selecionados, se sim, pegar os itens selecionados
    const alreadySelected = selectedItens.findIndex( item => {
        const itemFound = item === itemId
        return itemFound
    })

    // se já estiver selecionado, tirar da seleção
    if(alreadySelected >= 0) {
        const filteredItens = selectedItens.filter(item =>{
            const itemIsDifferent = item != itemId
            return itemIsDifferent
        })
        selectedItens = filteredItens
    }else{
        //se não estiver selecionado, adiciona a seleção
        selectedItens.push(itemId)
    }

    //atualizar o campo escondido com os dados selecionado
    collectedItens.value = selectedItens
}
