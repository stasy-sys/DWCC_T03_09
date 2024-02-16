// Crea un documento que solicite al usuario cierta información que será almacenada en las cookies. Por ejemplo: idioma (español, ingles,…), tema (oscuro, claro,…), usuario (juan123, ana_78,..), preferencia (alta, baja,…), última visita (fecha/hora). Tres de las cookies tendrán una fecha de expiración de 10, 15 y 20 segundos desde el momento en que se establezcan, mientras que las otras dos cookies no tendrán fecha de expiración, pero estas últimas se borrarán la segunda vez que se visite la página. El documento deberá mostrar las cookies vigentes cada 2 segundos.



if(document.cookie.includes("preferencia") || document.cookie.includes("ultimaVisita")){
    document.cookie =`preferencia=;max-age=0`
    document.cookie =`ultimaVisita=;max-age=0`
    console.log ("Cookies despues de entrar la segunda vez", document.cookie)
    
}



if (!document.cookie.includes("idioma")) {
    let idioma = prompt("Introduce idioma (español, ingles,…)")
    document.cookie =`idioma=${idioma};max-age=10`
}

if (!document.cookie.includes("tema")) {
    let tema = prompt("Introduce idioma (oscuro, claro,…)")
    document.cookie =`tema=${tema};max-age=15`
}

if (!document.cookie.includes("usuario")) {
    let usuario = prompt("Introduce usuario")
    document.cookie =`usuario=${usuario};max-age=20`
}

if (!document.cookie.includes("preferencia")) {
    let preferencia = prompt("Introduce preferencia")
    document.cookie =`preferencia=${preferencia}`
}

if (!document.cookie.includes("ultimaVisita")) {
    let ultimaVisita = prompt("Ultima visita (fecha/hora)")
    document.cookie =`ultimaVisita=${ultimaVisita}`
}

let identificador = setInterval(() => {
    console.log ("Cookies: ", document.cookie)
},2000)


