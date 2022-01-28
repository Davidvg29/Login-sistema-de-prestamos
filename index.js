let acceder = document.querySelector(".celda2"),
    login = document.querySelector(".contenedorLogin");


acceder.addEventListener("click", ()=>{
    login.innerHTML=`<div class="contLogin">
    <div class="login">
        <div class="contClose"><div class="close">X</div></div>
        <div class="text">¡Inicia session para acceder al sistema!</div>
        <div><input type="text" required="" placeholder="Usuario" class="usuario"></div>
        <div><input type="password" required="" placeholder="Contraseña" class="contraseña"></div>
        <div><button class="iniciarSession">Iniciar session</button></div>
    </div>
</div>`;
let close = document.querySelector(".close");
close.addEventListener("click", ()=>{
    login.innerHTML="";
})
});








