const caracteres = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9','#','$','%','&','?','!'];

const caracteresInput = document.getElementById("cantCaracteres");
const main_password = document.getElementById("main_password");
const boton = document.getElementById("boton");
const copyimg = document.getElementById("copyimg")

function getPassword(cantCaracteres, caracteres) {
  let password = "";
  if (cantCaracteres >= 21) {
    copyimg.style.display = "none";
    return "ingrese un numero menor";
  } else {
    for (let i = 0; i < cantCaracteres; i++) {
      const randomNum = Math.floor(Math.random() * caracteres.length);
      password += caracteres[randomNum];

    }
    return password;
  }
}

caracteresInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    const cantCaracteres = parseInt(caracteresInput.value, 10);
    const password = getPassword(cantCaracteres, caracteres);
    main_password.textContent = password;
  }
});
boton.addEventListener("click", function (event) {
  event.preventDefault();
  const cantCaracteres = parseInt(caracteresInput.value, 10);
  const password = getPassword(cantCaracteres, caracteres);
  main_password.textContent = password;
});

function actualizar() {
    const cantCaracteres = parseInt(caracteresInput.value, 10);
    if (cantCaracteres >= 21 || cantCaracteres<4 ) {
      main_password.textContent = "Intenta con otro numero";
      copyimg.style.display = `none`
    } else {
      const password = getPassword(cantCaracteres, caracteres);
      main_password.textContent = password;
    }
  }
  

caracteresInput.addEventListener("input", actualizar);


caracteresInput.addEventListener("input", function() {
    if (caracteresInput.value.trim() === "" || parseInt(caracteresInput.value, 10) >= 21 || parseInt(caracteresInput.value, 10) < 4 ) {
      copyimg.style.display = "none";
    } else {
      copyimg.style.display = "block";
    }
});

document.getElementById('copyimg').addEventListener('click', function() {
  const contrasenaGenerada = document.getElementById('main_password');
  const rango = document.createRange();
  rango.selectNode(contrasenaGenerada);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(rango);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();

  const mensajeCopiado = document.getElementById('doneCopy');
    mensajeCopiado.textContent = "Copiado!";
    mensajeCopiado.style.display = 'block';

    setTimeout(function() {
        mensajeCopiado.style.display = 'none';
    }, 2000);

});

