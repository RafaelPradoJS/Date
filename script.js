

let resuldado = document.querySelector(".resultado")
setInterval(() => {
    let date = new Date()
    let horaAtual = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
    let minutoAtual = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
    
    let diaSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"]
    let diaAtualSemana = diaSemana[date.getDay()]   
    
    let diaAtualMes = date.getDate()
    let mesAno = ["janeiro", "fevereiro", "Março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro" , "dezembro"]
    let mesAtual = mesAno[date.getMonth()]

    if(horaAtual > 0 && horaAtual < 5) {

        resuldado.innerHTML = `<div class= "card bg-noite">
        <div class="date">
           <h1>${horaAtual}:${minutoAtual}</h1>
           <p>${diaAtualSemana},${diaAtualMes} de ${mesAtual}</p>
    
        </div>
        <i class="fa-solid fa-moon"></i>
        </div>`

    }else if(horaAtual > 5 && horaAtual < 12) {
      resuldado.innerHTML = `<div class= "card bg-manha">
      <div class="date">
         <h1>${horaAtual}:${minutoAtual}</h1>
         <p>${diaAtualSemana},${diaAtualMes} de ${mesAtual}</p>
  
      </div>
      <i class="fa-solid fa-moon"></i>
      </div>`

    }else if(horaAtual < 12 && horaAtual > 18) {
      resuldado.innerHTML = `<div class= "card bg-tarde">
      <div class="date">
         <h1>${horaAtual}:${minutoAtual}</h1>
         <p>${diaAtualSemana},${diaAtualMes} de ${mesAtual}</p>
  
      </div>
      <i class="fa-solid fa-moon"></i>
      </div>`

    }else {
        resuldado.innerHTML = `<div class= "card bg-noite">
        <div class="date">
           <h1>${horaAtual}:${minutoAtual}</h1>
           <p>${diaAtualSemana},${diaAtualMes} de ${mesAtual}</p>
    
        </div>
        <i class="fa-solid fa-moon"></i>
        </div>`

    }

      
  

  
    
  
}, 1000);

