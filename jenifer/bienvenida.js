const formualario=document.querySelector("#formulario")
const nombre=document.querySelector("#name")
const  email =document.querySelector("#mail")
const  mensaje =document.querySelector("#msg")
const btn=document.querySelector("#enviar")
const datos =document.querySelector("#datos")


formualario.addEventListener("submit",validarFormulario)

function validarFormulario (e){
e.preventDefault();


if(nombre.value  === ""){
    document.getElementById("enviar").disabled = false;

}else{
    document.getElementById("enviar").disabled = true;
    console.log(nombre.value);
}

if (email.value === ""){
    document.getElementById("enviar").disabled = true;

    
}else{
    document.getElementById("enviar").disabled = false;
    console.log(email.value)
}

if(mensaje.value === ""){
    document.getElementById("enviar").disabled = true;

   
}else{
    document.getElementById("enviar").disabled = false;
     console.log(mensaje.value)
}



}






btn.addEventListener("click",()=>{

const name=document.createElement("p")
name.textContent=nombre.value
datos.appendChild(name)
})

