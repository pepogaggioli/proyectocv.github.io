document.getElementById('boton').addEventListener('click',function () { 
    console.log ("Obtener mayor detalle del CV")
    document.getElementById("parrafo1").innerHTML = "Escuela secundaria finalizada en el año 1990, con promedio de 8,9 sin haber recibido ningun tipo de sanción disciplinaria."
})

document.getElementById('boton2').addEventListener('click',function () { 
    console.log ("Volver a original")
    document.getElementById("parrafo1").innerHTML = "Secundario completo en escuela Comercial de la Ciudad de San Luis, provincia de San Luis."
})

document.getElementById('boton3').addEventListener('click',function () { 
    console.log ("Obtener mayor detalle del CV")
    document.getElementById("parrafo2").innerHTML = "Carrera Universitaria terminada en el año 1997, con promedio de 7,8 sin aplazos y 6,5 con aplazos sin haber recibido ningun tipo de sanción disciplinaria."
})

document.getElementById('boton4').addEventListener('click',function () { 
    console.log ("Volver a original")
    document.getElementById("parrafo2").innerHTML = "Carrera de Licenciaturia en Geolologia en La Universidad Nacional de San Luis."
})