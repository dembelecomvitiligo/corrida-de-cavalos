document.getElementById('bnt').onclick = function(){

 let nada = [parseFloat(document.getElementById('t1').value), parseFloat(document.getElementById('t2').value), parseFloat(document.getElementById('t3').value)]
nada.sort((a, b)=> a - b)

let resul = document.getElementById('resul');
resul.innerHTML = ' '

resul.innerHTML += `<p>Ouro: ${nada[0]} segundos<br></p>`
resul.innerHTML += `<p>Prata: ${nada[1]} segundos<br></p>`
resul.innerHTML += `<p>Bronze: ${nada[2]} segundos<br></p>`

} 


    
