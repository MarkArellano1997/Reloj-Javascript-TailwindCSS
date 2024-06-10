console.log('Hola mundo');

function reloj() {
    let data = new Date()
    let horas = formatoHora(data.getHours())
    let minutes = formatoHora(data.getMinutes())
    let segundos = formatoHora(data.getSeconds())
    let mes = data.getMonth()
    let dia = data.getDay()
    let numeroDia = data.getDate()
    let meses= ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre', 'Octubre', 'Noviembre', 'Diciembre']
    let días = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
    document.getElementById('hora').innerHTML = `${horas}:${minutes}:${segundos}`
    document.getElementById('fecha').innerHTML = `${días[dia]}, ${numeroDia} de ${meses[mes]}`
}

const formatoHora = (hora)=>{
    if (hora<10){
        hora = `0${hora}`
    }
    return hora      
}

setInterval(reloj, 1000)