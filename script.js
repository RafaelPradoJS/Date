
let resultado = document.querySelector(".resultado")
setInterval(() => {
    let date = new Date()
    let horaAtual = date.getHours()
    let minutoAtual = date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`
    let diasSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"]
    let diasAtualSemana = diasSemana[date.getDay()]
    let diaAtualMes = date.getDate()
    let mesAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    let mesAtual = mesAno[date.getMonth()]
    if(horaAtual > 0 && horaAtual < 5){
        resultado.innerHTML = `<div class="card bg-noite">
        <div class="date">
        <h1> ${horaAtual}:${minutoAtual} </h1>
            <p>${diasAtualSemana},${diaAtualMes} de ${mesAtual} </p>
        </div>
        <i class="fa-solid fa-moon"></i>
    </div>`
    }else if (horaAtual > 5 && horaAtual < 12){
        resultado.innerHTML = `<div class="card bg-manha">
        <div class="date">
        <h1> ${horaAtual}:${minutoAtual} </h1>
            <p>${diasAtualSemana},${diaAtualMes} de ${mesAtual} </p>
        </div>
        <i class="fa-solid fa-cloud"></i>
    </div>`
    }else if(horaAtual > 12 && horaAtual < 18){
        resultado.innerHTML = `<div class="card bg-tarde">
        <div class="date">
        <h1> ${horaAtual}:${minutoAtual} </h1>
            <p>${diasAtualSemana},${diaAtualMes} de ${mesAtual} </p>
        </div>
        <i class="fa-solid fa-sun"></i>
    </div>`
    }else {
        resultado.innerHTML = `<div class="card bg-noite">
        <div class="date">
        <h1> ${horaAtual}:${minutoAtual} </h1>
            <p>${diasAtualSemana},${diaAtualMes} de ${mesAtual} </p>
        </div>
        <i class="fa-solid fa-moon"></i>
    </div>`
    }

}, 1000)

