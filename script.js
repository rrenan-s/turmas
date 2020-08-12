//notas2.html
function calc_media(){
    let n1 = Number(document.getElementById("nota1").value)
    let n2 = Number(document.getElementById("nota2").value)
    let n3 = Number(document.getElementById("nota3").value)
    let res = document.getElementById("res")
    let total = (n1 + n2 + n3)
    let media = total/3

    if(n1.length == '' || n2.length == '' || n3.length == ''){
        res.innerHTML = 'Digite suas notas.'
    } else if(n1.value > 10 || n1.value < 0 && n2.value > 10 || n2.value < 0 && n3.value > 10 || n3.value < 0) {
        res.innerHTML = 'Digite suas notas corretamente.'
    } else {
        if(media >= 7){
            res.innerHTML = `Sua média foi ${media} e você está aprovado!`
        } else {
            res.innerHTML = `Sua média foi ${media} e você está reprovado!`
        }
    }
}

//notas.html
function n1(){
    document.getElementById('n1').innerHTML = '<table border="3"><tr><th>Nome</th><th>Nota</th><th>Nota</th><th>Final</th></tr><tr><td>Renan</td><td>9.5</td><td>10.0</td><td>9.75</td></tr><tr><td>Alice</td><td>8.0</td><td>10.0</td><td>9.0</td></tr><tr><td>Rafael</td><td>3.0</td><td>8.0</td><td>5.5</td></tr><tr><td>Débora</td><td>6.5</td><td>5.5</td><td>6.0</td></tr><tr><td>Fernanda</td><td>9.5</td><td>8.0</td><td>8.75</td></tr><tr><td>Gabriel</td><td>2.0</td><td>8.5</td><td>5.25</td></tr></table>'
}
function n2(){
    document.getElementById('n1').innerHTML = '<table border="3"><tr><th>Nome</th><th>Nota</th><th>Nota</th><th>Final</th></tr><tr><td>Enzo</td><td>6.0</td><td>7.0</td><td>6.5</td></tr><tr><td>Ana Júlia</td><td>9.5</td><td>8.0</td><td>8.75</td></tr><tr><td>Arieli</td><td>5.0</td><td>7.0</td><td>6.0</td></tr><tr><td>Alexsandra</td><td>9.5</td><td>10</td><td>9.75</td></tr><tr><td>Deivisson</td><td>7.5</td><td>8.5</td><td>8.0</td></tr><tr><td>Alice</td><td>3.5</td><td>10</td><td>6.75</td></tr></table>'
}